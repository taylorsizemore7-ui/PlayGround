/* ============================================================================
   PLAYER — first-person controller, physics, mining, placing and view model.
   ========================================================================== */
import * as THREE from 'three'
import { AIR, BLOCK_BY_ID, blockByName } from '../data/blocks.js'
import { VILLAGE } from '../world/village.js'
import { resolveTexSpec, getTileCanvas } from '../render/textures.js'
import { getItemIcon } from '../ui/icons.js'

const GRAVITY = 27
const WALK = 4.5
const SPRINT = 7.3
const FLY = 11.5
const JUMP = 8.2

export class Player {
  constructor(scene, camera, world, options = {}) {
    this.scene = scene
    this.camera = camera
    this.world = world
    this.mode = options.mode || 'creative'
    this.position = new THREE.Vector3(VILLAGE.SPAWN.x, VILLAGE.SPAWN.y, VILLAGE.SPAWN.z)
    this.spawnPoint = this.position.clone()
    this.velocity = new THREE.Vector3()
    this.yaw = 0
    this.pitch = -0.05
    this.onGround = false
    this.flying = false
    this.sprinting = false
    this.inWater = false
    this.headInWater = false
    this.height = 1.8
    this.radius = 0.3
    this.eyeHeight = 1.62
    this.input = { forward: false, back: false, left: false, right: false, jump: false, sprint: false, flyUp: false, flyDown: false }
    this.hp = 20
    this.maxHp = 20
    this.hunger = 20
    this.air = 10
    this.selected = 0
    this.hotbar = []
    this.mineTarget = null
    this.mineProgress = 0
    this.mineHeld = false
    this.attackCooldown = 0
    this.swing = 0
    this.swingKind = ''
    this.bob = 0
    this.fov = 74
    this.lastSpace = 0
    this.particles = options.particles
    this.audio = options.audio
    this.onToast = options.onToast || (() => {})
    this.onDamage = options.onDamage || (() => {})
    this.onDeath = options.onDeath || (() => {})
    this.onSelect = options.onSelect || (() => {})
    this.onBreak = options.onBreak || (() => {})
    this.oldPosition = this.position.clone()
    this.stepTimer = 0
    this.underwater = false
    this.breakingDef = null
    this._buildViewModel()
  }

  /* ------------------------------------------------------------------ view model */
  _buildViewModel() {
    this.viewGroup = new THREE.Group()
    this.viewGroup.name = 'view-model'
    this.camera.add(this.viewGroup)
    this.hand = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.5, 0.18),
      new THREE.MeshLambertMaterial({ color: 0xb97852 })
    )
    this.hand.position.set(0.12, -0.48, -0.12)
    this.hand.rotation.set(-1.08, -0.22, 0.1)
    this.viewGroup.add(this.hand)
    this.itemHolder = new THREE.Group()
    this.itemHolder.position.set(0.43, -0.4, -0.72)
    this.itemHolder.rotation.set(0.18, -0.42, -0.12)
    this.viewGroup.add(this.itemHolder)
    this.currentItem = null
    this.itemMesh = null
    this.blockTextureCache = new Map()
    this.viewGroup.visible = false
  }

  blockMaterial(def, face) {
    const faces = resolveTexSpec(def)
    const spec = faces[face] || faces.side
    if (this.blockTextureCache.has(spec)) return this.blockTextureCache.get(spec)
    const tile = getTileCanvas(spec)
    if (!tile) return new THREE.MeshLambertMaterial({ color: 0x8a8a8a })
    const tex = new THREE.CanvasTexture(tile)
    tex.magFilter = THREE.NearestFilter
    tex.minFilter = THREE.NearestFilter
    tex.colorSpace = THREE.SRGBColorSpace
    const m = new THREE.MeshLambertMaterial({ map: tex })
    this.blockTextureCache.set(spec, m)
    return m
  }

  setHeldItem(stack) {
    const key = stack ? `${stack.name}|${stack.id ?? ''}` : 'empty'
    if (key === this.currentItem) return
    this.currentItem = key
    if (this.itemMesh) {
      this.itemHolder.remove(this.itemMesh)
      this.itemMesh.traverse?.(o => { if (o.geometry) o.geometry.dispose() })
      this.itemMesh = null
    }
    this.viewGroup.visible = false
    if (!stack) return
    this.viewGroup.visible = true
    if (stack.isBlock) {
      const def = stack.block
      const mats = [0, 1, 2, 3, 4, 5].map((i) => this.blockMaterial(def, ['east', 'west', 'top', 'bottom', 'south', 'north'][i]))
      const geo = new THREE.BoxGeometry(0.27, 0.27, 0.27)
      const mesh = new THREE.Mesh(geo, mats)
      mesh.position.set(0.03, 0.02, 0)
      mesh.rotation.set(0.1, 0.65, 0.08)
      this.itemMesh = mesh
      this.itemHolder.add(mesh)
    } else {
      const url = getItemIcon(stack.item || stack)
      const tex = new THREE.TextureLoader().load(url)
      tex.magFilter = THREE.NearestFilter
      tex.minFilter = THREE.NearestFilter
      tex.colorSpace = THREE.SRGBColorSpace
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.08, side: THREE.DoubleSide, depthTest: false })
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.48, 0.48), mat)
      mesh.position.set(0.02, 0.12, 0)
      mesh.rotation.set(-0.1, -0.38, -0.68)
      mesh.renderOrder = 999
      this.itemMesh = mesh
      this.itemHolder.add(mesh)
    }
  }

  /* ------------------------------------------------------------------ look/input */
  setView(yaw, pitch) {
    this.yaw = yaw
    this.pitch = Math.max(-Math.PI / 2 + 0.02, Math.min(Math.PI / 2 - 0.02, pitch))
  }

  look(dx, dy, sensitivity = 0.0023, invert = false) {
    this.yaw -= dx * sensitivity
    this.pitch -= (invert ? -dy : dy) * sensitivity
    this.pitch = Math.max(-Math.PI / 2 + 0.02, Math.min(Math.PI / 2 - 0.02, this.pitch))
  }

  get forward() {
    return new THREE.Vector3(
      -Math.sin(this.yaw) * Math.cos(this.pitch),
      Math.sin(this.pitch),
      -Math.cos(this.yaw) * Math.cos(this.pitch)
    )
  }

  get eyePosition() {
    const p = this.position.clone()
    p.y += this.eyeHeight
    if (!this.flying && !this.inWater) p.y += Math.sin(this.bob * 2) * 0.025
    return p
  }

  forwardFlat() {
    return new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw))
  }

  rightFlat() {
    return new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw))
  }

  /* ------------------------------------------------------------------ update */
  update(dt, controls, timeOfDay) {
    dt = Math.min(dt, 0.05)
    const pos = this.position
    this.oldPosition.copy(pos)
    this.attackCooldown = Math.max(0, this.attackCooldown - dt)
    this.swing = Math.max(0, this.swing - dt * 4.2)
    const inWaterBlock = this.world.getDef(Math.floor(pos.x), Math.floor(pos.y + 0.4), Math.floor(pos.z))
    this.inWater = !!inWaterBlock && inWaterBlock.shape === 'liquid'
    const headBlock = this.world.getDef(Math.floor(pos.x), Math.floor(pos.y + this.eyeHeight), Math.floor(pos.z))
    this.headInWater = !!headBlock && headBlock.shape === 'liquid' && headBlock.name === 'water'
    this.underwater = this.headInWater

    const forward = this.forwardFlat()
    const right = this.rightFlat()
    let wx = 0, wz = 0
    if (this.input.forward) { wx += forward.x; wz += forward.z }
    if (this.input.back) { wx -= forward.x; wz -= forward.z }
    if (this.input.right) { wx += right.x; wz += right.z }
    if (this.input.left) { wx -= right.x; wz -= right.z }
    const moving = wx !== 0 || wz !== 0
    if (moving) {
      const len = Math.hypot(wx, wz)
      wx /= len; wz /= len
    }
    this.sprinting = this.input.sprint && moving && (this.flying || this.hunger > 2)

    const speed = this.flying ? (this.sprinting ? FLY * 1.7 : FLY) : (this.inWater ? 2.7 : this.sprinting ? SPRINT : WALK)
    if (this.flying) {
      this.velocity.x += (wx * speed - this.velocity.x) * Math.min(1, dt * 12)
      this.velocity.z += (wz * speed - this.velocity.z) * Math.min(1, dt * 12)
      let targetY = 0
      if (this.input.jump || this.input.flyUp) targetY = speed * 0.75
      if (this.input.sprint || this.input.flyDown) targetY = -speed * 0.75
      this.velocity.y += (targetY - this.velocity.y) * Math.min(1, dt * 10)
      this.moveCollide(this.velocity.x * dt, this.velocity.y * dt, this.velocity.z * dt)
      if (this.onGround && targetY < 0) this.velocity.y = 0
    } else if (this.inWater) {
      this.velocity.x += (wx * speed - this.velocity.x) * Math.min(1, dt * 8)
      this.velocity.z += (wz * speed - this.velocity.z) * Math.min(1, dt * 8)
      this.velocity.y -= GRAVITY * 0.12 * dt
      if (this.input.jump) this.velocity.y = 3.1
      this.velocity.y = Math.max(-3, this.velocity.y)
      this.moveCollide(this.velocity.x * dt, this.velocity.y * dt, this.velocity.z * dt)
    } else {
      const accel = this.onGround ? 15 : 5.5
      this.velocity.x += (wx * speed - this.velocity.x) * Math.min(1, dt * accel)
      this.velocity.z += (wz * speed - this.velocity.z) * Math.min(1, dt * accel)
      if (!moving && this.onGround) {
        this.velocity.x *= Math.max(0, 1 - dt * 14)
        this.velocity.z *= Math.max(0, 1 - dt * 14)
      }
      this.velocity.y -= GRAVITY * dt
      if (this.input.jump && this.onGround) {
        this.velocity.y = JUMP
        this.onGround = false
        this.audio?.jump()
      }
      const prevVy = this.velocity.y
      this.moveCollide(this.velocity.x * dt, this.velocity.y * dt, this.velocity.z * dt)
      if (this.onGround && prevVy < -13) {
        const dmg = Math.floor((-prevVy - 12) * 0.8)
        if (dmg > 0) this.takeDamage(dmg)
      }
    }

    // world limits
    if (pos.y < -8) { pos.y = 80; this.velocity.set(0, 0, 0) }
    if (pos.y > 130) { pos.y = 130; this.velocity.y = 0 }

    // head bob & footsteps
    const horizontalSpeed = Math.hypot(this.velocity.x, this.velocity.z)
    if (this.onGround && horizontalSpeed > 0.4 && !this.flying) {
      this.bob += dt * horizontalSpeed * 1.8
      this.stepTimer -= dt * horizontalSpeed
      if (this.stepTimer <= 0) {
        this.stepTimer = 2.2
        this.audio?.step(this.world.getDef(Math.floor(pos.x), Math.floor(pos.y - 0.2), Math.floor(pos.z)))
      }
    } else {
      this.bob += dt * 0.7
    }

    // slow hunger drain in survival
    if (this.mode === 'survival') {
      this.hunger = Math.max(0, this.hunger - dt * 0.008 * (this.sprinting ? 4 : 1))
      if (this.hunger > 0 && this.hp < this.maxHp) this.hp = Math.min(this.maxHp, this.hp + dt * 0.04)
    }

    // view model animation
    if (this.itemMesh) {
      const s = this.swing
      const sway = Math.sin(this.bob * 2) * 0.018 * Math.min(1, horizontalSpeed / 4)
      this.itemHolder.position.set(0.43 + sway, -0.4 + Math.abs(sway) * 0.4 - s * 0.13, -0.72)
      this.itemHolder.rotation.set(0.18 - s * 0.75, -0.42 + s * 0.25, -0.12 - s * 0.35)
    }
    this.updateCamera(dt, timeOfDay)
    this.updateMining(dt)
  }

  moveCollide(dx, dy, dz) {
    const pos = this.position
    const r = this.radius
    const h = this.height
    this.onGround = false
    // X
    if (dx) {
      const nx = pos.x + dx
      if (!this.world.collides(nx - r, pos.y + 0.02, pos.z - r, nx + r, pos.y + h, pos.z + r)) pos.x = nx
      else this.velocity.x = 0
    }
    // Z
    if (dz) {
      const nz = pos.z + dz
      if (!this.world.collides(pos.x - r, pos.y + 0.02, nz - r, pos.x + r, pos.y + h, nz + r)) pos.z = nz
      else this.velocity.z = 0
    }
    // Y
    if (dy) {
      const ny = pos.y + dy
      if (!this.world.collides(pos.x - r, ny + 0.02, pos.z - r, pos.x + r, ny + h, pos.z + r)) {
        pos.y = ny
        // step-up assist
      } else {
        if (dy < 0) {
          // snap onto the surface
          const gy = this.world.surfaceY(pos.x, pos.z)
          if (Math.abs(gy - pos.y) < 1.05) pos.y = gy
          this.onGround = true
        }
        this.velocity.y = 0
      }
    }
    // step up one block when walking into a low ledge
    if ((dx || dz) && !this.flying) {
      const testY = Math.floor(pos.y + 0.06)
      const ahead = this.world.collides(pos.x - r, pos.y + 0.3, pos.z - r, pos.x + r, pos.y + h, pos.z + r)
      if (!ahead) {
        const ground = this.world.surfaceY(pos.x, pos.z)
        if (ground - pos.y > 0.1 && ground - pos.y < 1.1) pos.y = ground
      }
    }
    // grounded test
    if (!this.onGround) {
      const below = this.world.collides(pos.x - r, pos.y - 0.08, pos.z - r, pos.x + r, pos.y + 0.02, pos.z + r)
      if (below) this.onGround = true
    }
  }

  updateCamera(dt, timeOfDay) {
    const eye = this.eyePosition
    this.camera.position.copy(eye)
    this.camera.rotation.order = 'YXZ'
    this.camera.rotation.y = this.yaw
    this.camera.rotation.x = this.pitch
    this.camera.rotation.z = 0
    const targetFov = this.flying && this.sprinting ? 86 : this.sprinting ? 80 : 74
    this.fov += (targetFov - this.fov) * Math.min(1, dt * 5)
    if (Math.abs(this.camera.fov - this.fov) > 0.01) {
      this.camera.fov = this.fov
      this.camera.updateProjectionMatrix()
    }
  }

  /* ------------------------------------------------------------------ interactions */
  raycast(maxDistance = 7) {
    return this.world.raycast(this.eyePosition, this.forward, maxDistance)
  }

  selectedStack() {
    return this.hotbar[this.selected] || null
  }

  beginMine() {
    this.mineHeld = true
    this.breakKey = null
    this.mineProgress = 0
  }

  endMine() {
    this.mineHeld = false
    this.mineProgress = 0
    this.breakingDef = null
  }

  updateMining(dt) {
    if (!this.mineHeld) return
    const hit = this.raycast()
    if (!hit) { this.mineProgress = 0; this.breakingDef = null; return }
    const key = `${hit.x},${hit.y},${hit.z}`
    if (key !== this.breakKey) {
      this.breakKey = key
      this.mineProgress = 0
      this.breakingDef = hit.def
    }
    const stack = this.selectedStack()
    const tool = stack?.item?.tool
    let speed = 1
    const def = hit.def
    if (def.hard < 0) { this.mineProgress = 0; return }
    if (def.tool && tool === def.tool) speed = (stack.item.tier || 1) * 1.8
    if (tool === 'sword' && def.tool === 'axe') speed = 1
    const hardness = Math.max(0.05, def.hard)
    this.mineProgress += (dt * speed) / (hardness * (this.mode === 'creative' ? 0.35 : 1.1))
    if (this.mineProgress >= 1) {
      this.breakBlock(hit)
      this.mineProgress = 0
      this.breakKey = null
    }
  }

  breakBlock(hit) {
    const { x, y, z, def } = hit
    this.world.setBlock(x, y, z, AIR)
    this.particles?.spawn(x + 0.5, y + 0.5, z + 0.5, this.blockColor(def), 10, { speed: 1.4, life: 0.55, size: 0.075 })
    this.audio?.breakBlock(def)
    this.swing = 1
    this.swingKind = 'break'
    this.onBreak?.(def, x, y, z)
    if (this.mode === 'survival' && def.drops) this.onToast?.(`Mined ${def.display}`, def)
  }

  blockColor(def) {
    const spec = resolveTexSpec(def).side || ''
    const color = spec.split(':')[1] || '#8a8a8a'
    return color
  }

  placeBlock() {
    const stack = this.selectedStack()
    if (!stack || !stack.isBlock) return false
    const def = stack.block
    if (!def || !def.placeable) return false
    const hit = this.raycast()
    if (!hit) return false
    let x = hit.x + hit.normal.x, y = hit.y + hit.normal.y, z = hit.z + hit.normal.z
    const target = this.world.getDef(x, y, z)
    if (target && target.shape !== 'liquid' && target.shape !== 'cross') return false
    // Don't place inside ourselves.
    const r = this.radius
    if (x + 1 > this.position.x - r && x < this.position.x + r &&
        z + 1 > this.position.z - r && z < this.position.z + r &&
        y + 1 > this.position.y + 0.05 && y < this.position.y + this.height) return false
    this.world.setBlock(x, y, z, def.id)
    this.particles?.spawn(x + 0.5, y + 0.5, z + 0.5, this.blockColor(def), 5, { speed: 0.7, life: 0.35, size: 0.06 })
    this.audio?.placeBlock(def)
    this.swing = 1
    this.swingKind = 'place'
    return true
  }

  attack(entity) {
    if (!entity || this.attackCooldown > 0) return false
    this.attackCooldown = 0.42
    const stack = this.selectedStack()
    const dmg = stack?.item?.damage || 1
    entity.takeDamage(dmg, this)
    this.swing = 1
    this.swingKind = 'attack'
    this.audio?.hit()
    return true
  }

  takeDamage(amount, source = null) {
    if (this.mode === 'creative' || amount <= 0) return
    this.hp = Math.max(0, this.hp - amount)
    this.onDamage?.(amount, source)
    this.audio?.hurt()
    this.particles?.spawn(this.position.x, this.position.y + 1.1, this.position.z, '#d84a3a', 5, { speed: 1, life: 0.4 })
    if (this.hp <= 0) this.die()
  }

  heal(amount) {
    this.hp = Math.min(this.maxHp, this.hp + amount)
  }

  die() {
    this.onDeath?.()
    this.position.copy(this.spawnPoint)
    this.velocity.set(0, 0, 0)
    this.hp = this.maxHp
    this.hunger = 20
  }

  toggleFly(force = null) {
    if (this.mode !== 'creative' && force !== false) {
      this.onToast?.('Flight is only available in Creative mode')
      return
    }
    this.flying = force == null ? !this.flying : force
    this.velocity.y = 0
    this.onToast?.(this.flying ? 'Flight enabled' : 'Flight disabled')
  }

  doubleTapSpace() {
    if (this.mode !== 'creative') return
    this.toggleFly()
  }

  reset() {
    this.position.copy(this.spawnPoint)
    this.velocity.set(0, 0, 0)
    this.hp = this.maxHp
    this.hunger = 20
    this.flying = false
  }
}
