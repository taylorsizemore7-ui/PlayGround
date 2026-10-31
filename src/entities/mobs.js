/* ============================================================================
   MOB ENTITIES — movement, flocking, combat, spawning and animation.
   ========================================================================== */
import * as THREE from 'three'
import { MOB_BY_ID, MOBS, mobsForBiome } from '../data/mobs.js'
import { createMobModel } from './models.js'
import { SEA_LEVEL } from '../world/generation.js'

const BOSS_IDS = new Set(MOBS.filter(m => m.boss).map(m => m.id))
const _v = new THREE.Vector3()
const _v2 = new THREE.Vector3()

export class MobEntity {
  constructor(mob, world, scene, x, y, z, options = {}) {
    this.mob = mob
    this.world = world
    this.scene = scene
    this.group = createMobModel(mob)
    this.group.position.set(x, y, z)
    this.home = new THREE.Vector3(x, y, z)
    this.vel = new THREE.Vector3()
    this.hp = options.hp ?? mob.hp
    this.maxHp = this.hp
    this.yaw = Math.random() * Math.PI * 2
    this.targetYaw = this.yaw
    this.onGround = false
    this.state = 'idle'
    this.stateTimer = Math.random() * 2
    this.wanderDir = Math.random() * Math.PI * 2
    this.walkPhase = Math.random() * 10
    this.attackCooldown = 0
    this.hurtTimer = 0
    this.dead = false
    this.age = 0
    this.attackAnim = 0
    this.flying = !!mob.flying
    this.aquatic = !!mob.aquatic
    this.hostile = !!mob.hostile
    this.tamed = false
    this.anger = 0
    this.name = mob.name
    this.particles = options.particles
    this.audio = options.audio
    this.onDeath = options.onDeath || null
    this.group.userData.entity = this
    scene.add(this.group)
    this.baseY = y
    this.radius = Math.max(0.25, mob.width * 0.5)
    this.height = mob.height
  }

  get position() { return this.group.position }

  update(dt, player, entities, timeOfDay) {
    if (this.dead) return
    this.age += dt
    this.attackCooldown = Math.max(0, this.attackCooldown - dt)
    this.hurtTimer = Math.max(0, this.hurtTimer - dt)
    this.attackAnim = Math.max(0, this.attackAnim - dt * 3.2)
    const pos = this.group.position
    const px = player ? player.position.x : pos.x
    const py = player ? player.position.y : pos.y
    const pz = player ? player.position.z : pos.z
    const dx = px - pos.x, dz = pz - pos.z
    const distP = Math.sqrt(dx * dx + dz * dz)
    const night = timeOfDay < 0.24 || timeOfDay > 0.76

    // daylight burning for undead
    const burns = ['zombie', 'skeleton', 'stray', 'drowned', 'husk', 'zombie_villager', 'phantom'].includes(this.mob.id)
    if (burns && !night && !this.aquatic && player && player.world && this.world) {
      const skyBlock = this.world.getBlock(Math.floor(pos.x), Math.floor(pos.y + this.height + 0.6), Math.floor(pos.z))
      if (skyBlock === 0) {
        this.hp -= dt * 1.8
        if (this.hp <= 0) { this.die(); return }
        if (Math.random() < dt * 3) this.particles?.spawn(pos.x, pos.y + this.height * 0.7, pos.z, '#f8a83a', 1, { speed: 0.3, life: 0.4, size: 0.07 })
      }
    }

    // choose a target / behaviour
    let move = 0
    let dirX = 0, dirZ = 0
    const chase = this.hostile && distP < 24 && player && !player.spectator
    const provoked = this.anger > 0 && distP < 24
    this.stateTimer -= dt
    if (chase || provoked) {
      this.state = 'chase'
      if (distP > 1.6) {
        dirX = dx / (distP || 1)
        dirZ = dz / (distP || 1)
        move = 1
      }
      this.targetYaw = Math.atan2(dirX, dirZ)
      if (distP < this.radius + 1.5 && this.attackCooldown <= 0) {
        this.attackCooldown = 1.15 + Math.random() * 0.5
        this.attackAnim = 1
        this.audio?.mobAttack(this.mob)
        if (player?.takeDamage) player.takeDamage(this.mob.damage || 2, this)
        this.anger = Math.max(0, this.anger - 4)
      }
    } else if (this.stateTimer <= 0) {
      this.stateTimer = 1.5 + Math.random() * 4
      this.state = Math.random() < 0.58 ? 'walk' : 'idle'
      this.wanderDir = Math.random() * Math.PI * 2
    }

    if (this.state === 'walk' && !chase && !provoked) {
      dirX = Math.sin(this.wanderDir)
      dirZ = Math.cos(this.wanderDir)
      move = 1
      this.targetYaw = this.wanderDir
      // Don't wander too far from home.
      if (pos.distanceTo(this.home) > 18) {
        this.wanderDir = Math.atan2(this.home.x - pos.x, this.home.z - pos.z)
      }
    }

    // Turn smoothly.
    let diff = ((this.targetYaw - this.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI
    this.yaw += diff * Math.min(1, dt * 7)
    this.group.rotation.y = this.yaw

    const speed = this.mob.speed * (this.state === 'chase' ? 1.12 : 0.65)
    if (move) {
      const step = speed * dt
      const nx = pos.x + dirX * step
      const nz = pos.z + dirZ * step
      this.tryMove(nx, pos.y, nz)
      this.walkPhase += dt * speed * 4.2
    } else {
      this.walkPhase += dt * 1.1
    }

    // gravity / swimming / flying
    const feetGround = this.world.surfaceY(pos.x, pos.z)
    if (this.flying) {
      const targetY = this.mob.id === 'happy_ghast' || this.mob.id === 'ghast'
        ? Math.max(feetGround + 4, this.home.y)
        : feetGround + 1.2 + Math.sin(this.age * 1.7) * 0.6
      pos.y += (targetY - pos.y) * Math.min(1, dt * 1.7)
    } else if (this.aquatic) {
      const waterY = this.findWaterY(pos.x, pos.z)
      const target = waterY == null ? feetGround : waterY
      pos.y += (target - pos.y) * Math.min(1, dt * 2.2)
      this.group.rotation.z = Math.sin(this.age * 2) * 0.12
      pos.y += Math.sin(this.age * 2.6) * dt * 0.18
    } else {
      const ground = feetGround + 0.02
      if (pos.y > ground + 0.05) {
        this.vel.y -= 24 * dt
        pos.y += this.vel.y * dt
        if (pos.y < ground) { pos.y = ground; this.vel.y = 0 }
      } else {
        pos.y = ground
        this.vel.y = 0
      }
      // step up small ledges
      const ahead = 0.7
      const blockAhead = this.world.getDef(Math.floor(pos.x + dirX * ahead), Math.floor(pos.y + 0.2), Math.floor(pos.z + dirZ * ahead))
      if (move && blockAhead && blockAhead.solid) pos.y = Math.min(pos.y + speed * dt * 2.4, feetGround + 1.05)
    }

    // Animate legs, arms, wings, tails.
    const parts = this.group.userData.parts
    const swing = Math.sin(this.walkPhase) * (move ? 0.42 : 0.04)
    if (parts) {
      if (parts.legs) parts.legs.forEach((leg, i) => { leg.rotation.x = swing * (i % 2 ? -1 : 1) })
      if (parts.arms) parts.arms.forEach((arm, i) => {
        const attack = this.attackAnim
        if (this.mob.archetype === 'zombie') arm.rotation.x = -1.25 + swing * 0.1
        else arm.rotation.x = -swing * (i % 2 ? -1 : 1) - attack * 1.35
        arm.rotation.z = (i % 2 ? 1 : -1) * 0.04
      })
      if (parts.wings) {
        const flap = Math.sin(this.age * (this.flying ? 16 : 8)) * 0.65
        parts.wings.forEach((wing, i) => {
          wing.rotation.z = (i % 2 ? -1 : 1) * (0.15 + (this.flying ? flap : 0.08))
          wing.rotation.x = this.flying ? Math.sin(this.age * 12 + i) * 0.12 : 0
        })
      }
      if (parts.tail) parts.tail.rotation.y = Math.sin(this.age * 2.1) * 0.32
      if (parts.head) parts.head.rotation.x = Math.sin(this.age * 1.1) * 0.04 + (this.state === 'chase' ? 0.05 : 0)
      if (parts.head) parts.head.rotation.y = Math.sin(this.age * 0.7) * 0.08
      if (parts.body && !this.flying) parts.body.position.y += 0
    }
    if (this.hurtTimer > 0) {
      this.group.scale.setScalar(1 + Math.sin(this.hurtTimer * 55) * 0.035)
    } else if (this.group.scale.x !== 1) {
      this.group.scale.setScalar(1)
    }
  }

  tryMove(x, y, z) {
    const def = this.world.getDef(Math.floor(x), Math.floor(y + 0.4), Math.floor(z))
    if (def && def.solid) return false
    this.group.position.x = x
    this.group.position.z = z
    return true
  }

  findWaterY(x, z) {
    const ix = Math.floor(x), iz = Math.floor(z)
    for (let y = SEA_LEVEL; y > 4; y--) {
      const d = this.world.getDef(ix, y, iz)
      if (d && d.shape === 'liquid') return y + 0.1
    }
    return null
  }

  takeDamage(amount, from = null) {
    if (this.dead) return
    this.hp -= amount
    this.hurtTimer = 0.35
    this.anger = 10
    this.particles?.spawn(this.group.position.x, this.group.position.y + this.height * 0.55, this.group.position.z, this.mob.colors.accent, 5, { speed: 1, life: 0.45, size: 0.08 })
    this.audio?.mobHurt(this.mob)
    if (from?.position) {
      _v.copy(this.group.position).sub(from.position).setY(0).normalize()
      this.group.position.addScaledVector(_v, 0.18)
    }
    if (this.hp <= 0) this.die()
  }

  die() {
    if (this.dead) return
    this.dead = true
    const p = this.group.position
    this.particles?.spawn(p.x, p.y + this.height * 0.4, p.z, this.mob.egg[0], 16, { speed: 2, life: 0.8, size: 0.11 })
    this.particles?.spawn(p.x, p.y + this.height * 0.4, p.z, '#f4efe0', 6, { speed: 1.3, life: 0.5, size: 0.07 })
    this.audio?.mobDeath(this.mob)
    this.onDeath?.(this)
    this.scene.remove(this.group)
    this.group.traverse(o => {
      if (o.geometry) o.geometry.dispose()
    })
  }
}

export class MobManager {
  constructor(scene, world, particles, audio, options = {}) {
    this.scene = scene
    this.world = world
    this.particles = particles
    this.audio = audio
    this.entities = []
    this.spawnTimer = 0
    this.cap = options.cap || 42
    this.onEvent = options.onEvent || null
    this.populateSpawnArea()
  }

  populateSpawnArea() {
    const Y = 62.02
    const initial = [
      ['villager', 2.5, Y, 5.5], ['villager', -2.5, Y, 6.5], ['villager', 1.5, Y, -3.5],
      ['wandering_trader', -4.5, Y, 13.5], ['trader_llama', -2.5, Y, 16.2],
      ['cat', 3.6, Y, -2.2], ['iron_golem', 4.5, Y, 9.5],
      ['cow', -13.5, Y, 11.5], ['cow', -14.4, Y, 12.7], ['sheep', -15.5, Y, 10.6],
      ['chicken', 8.5, Y, 4.2], ['chicken', 9.3, Y, 4.8], ['pig', 12.5, Y, 9.2],
      ['horse', 22.5, Y, 4.5], ['horse', 24.0, Y, 5.8], ['donkey', 26.0, Y, 2.0],
      ['bee', 5.5, Y + 2.5, 12.0], ['bee', 6.2, Y + 3.1, 12.8], ['parrot', 18.5, Y + 2.2, 13.2],
      ['rabbit', -6.5, Y, 19.0], ['fox', 20.0, Y, -14.0], ['wolf', -22.0, Y, 9.0]
    ]
    for (const [id, x, y, z] of initial) {
      const mob = MOB_BY_ID.get(id)
      if (mob) this.spawnEntity(mob, x, y, z)
    }
  }

  spawn(id, x, y, z, opts = {}) {
    const mob = typeof id === 'string' ? MOB_BY_ID.get(id) : id
    if (!mob) return null
    const yy = y ?? this.world.surfaceY(x, z) + 0.04
    return this.spawnEntity(mob, x, yy, z, opts)
  }

  spawnEntity(mob, x, y, z, opts = {}) {
    const e = new MobEntity(mob, this.world, this.scene, x, y, z, {
      particles: this.particles, audio: this.audio, onDeath: ent => this.onEvent?.('death', ent), ...opts
    })
    this.entities.push(e)
    this.onEvent?.('spawn', e)
    return e
  }

  spawnNearPlayer(player, forceId = null) {
    const night = this.lastNight
    let candidates
    if (forceId) candidates = [MOB_BY_ID.get(forceId)].filter(Boolean)
    else {
      const biome = this.world.biomeAt(player.position.x, player.position.z)
      const name = biome.name.toLowerCase().replace(/ /g, '_').replace('snowy_plains', 'snowy').replace('snowy_taiga', 'snowy')
      candidates = mobsForBiome(name, night)
      if (!candidates.length) candidates = MOBS.filter(m => !m.boss && m.biomes.includes('plains'))
      if (night) {
        const hostiles = candidates.filter(m => m.hostile)
        if (hostiles.length && Math.random() < 0.72) candidates = hostiles
      } else {
        const passive = candidates.filter(m => !m.hostile)
        if (passive.length && Math.random() < 0.8) candidates = passive
      }
    }
    if (!candidates.length) return null
    const mob = candidates[Math.floor(Math.random() * candidates.length)]
    const a = Math.random() * Math.PI * 2
    const dist = 16 + Math.random() * 17
    const x = player.position.x + Math.cos(a) * dist
    const z = player.position.z + Math.sin(a) * dist
    if (!this.world.isLoaded(x, z)) return null
    let y
    if (mob.aquatic) {
      const water = this.findWater(x, z)
      if (water == null) return null
      y = water
    } else {
      y = this.world.surfaceY(x, z) + 0.03
      if (mob.flying) y += 3 + Math.random() * 3
    }
    const e = this.spawnEntity(mob, x, y, z)
    // small group
    if (!mob.boss && !mob.flying && Math.random() < 0.35) {
      for (let i = 1; i < 3; i++) {
        const ex = x + (Math.random() - 0.5) * 2.6
        const ez = z + (Math.random() - 0.5) * 2.6
        this.spawnEntity(mob, ex, this.world.surfaceY(ex, ez) + 0.03, ez)
      }
    }
    return e
  }

  findWater(x, z) {
    const ix = Math.floor(x), iz = Math.floor(z)
    for (let y = SEA_LEVEL; y > 8; y--) {
      const d = this.world.getDef(ix, y, iz)
      if (d && d.shape === 'liquid' && d.name === 'water') return y
    }
    return null
  }

  update(dt, player, timeOfDay) {
    this.lastNight = timeOfDay < 0.24 || timeOfDay > 0.76
    for (const e of this.entities) {
      if (!e.dead) e.update(dt, player, this.entities, timeOfDay)
    }
    if (this.entities.some(e => e.dead)) this.entities = this.entities.filter(e => !e.dead)
    // Auto population.
    this.spawnTimer -= dt
    if (this.spawnTimer <= 0 && player) {
      this.spawnTimer = 2.4 + Math.random() * 2.6
      const near = this.entities.filter(e => e.position.distanceTo(player.position) < 64)
      if (near.length < this.cap) this.spawnNearPlayer(player)
    }
    // Despawn far away (but never despawn the starter village).
    if (player) {
      for (const e of this.entities) {
        if (e.home.distanceTo(player.position) > 90 && e.position.distanceTo(player.position) > 80) {
          e.dead = true
          this.scene.remove(e.group)
        }
      }
      this.entities = this.entities.filter(e => !e.dead)
    }
  }

  raycast(origin, direction, maxDistance = 4.2) {
    let best = null
    let bestT = maxDistance
    for (const e of this.entities) {
      if (e.dead) continue
      const cx = e.position.x
      const cy = e.position.y + e.height * 0.5
      const cz = e.position.z
      _v.set(cx - origin.x, cy - origin.y, cz - origin.z)
      const t = _v.dot(direction)
      if (t < 0 || t > bestT + e.radius) continue
      _v2.copy(direction).multiplyScalar(t).add(origin)
      const r = Math.max(e.radius, e.height * 0.45)
      if (_v2.distanceToSquared(new THREE.Vector3(cx, cy, cz)) < r * r && t < bestT) {
        best = e
        bestT = t
      }
    }
    return best ? { entity: best, distance: bestT } : null
  }

  clear() {
    for (const e of this.entities) this.scene.remove(e.group)
    this.entities = []
  }
}
