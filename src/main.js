/* ============================================================================
   MINECRAFT INFINITE — application entry
   ========================================================================== */
import * as THREE from 'three'
import { BLOCK_COUNT, blockByName, BLOCK_BY_ID, AIR } from './data/blocks.js'
import { MOB_COUNT, MOB_BY_ID } from './data/mobs.js'
import { TOOL_COUNT, getItem } from './data/items.js'
import { buildAtlas, getAtlasTexture } from './render/textures.js'
import { setMaterialsAtlas as setMesherAtlas, updateLiquidUniforms } from './world/mesher.js'
import { World } from './world/world.js'
import { VILLAGE } from './world/village.js'
import { Sky } from './render/sky.js'
import { Player } from './entities/player.js'
import { MobManager } from './entities/mobs.js'
import { Particles } from './entities/particles.js'
import { AudioEngine } from './audio/audio.js'
import { HUD } from './ui/hud.js'
import { CreativeInventory, blockStack, itemStack } from './ui/inventory.js'
import { Bestiary } from './ui/bestiary.js'

const SETTINGS_KEY = 'mc-infinite-settings'
const SAVE_KEY = 'mc-infinite-save'

function loadSettings() {
  try { return JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') } catch { return {} }
}

function fmtTime(t) {
  const total = Math.floor(t * 24 * 60)
  const h = Math.floor(total / 60) % 24
  const m = total % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

class Game {
  constructor() {
    this.canvas = document.getElementById('game')
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.NoToneMapping
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.05, 480)
    this.scene.add(this.camera)
    this.settings = Object.assign({
      distance: 4, volume: 0.55, dayLength: 10, fancy: true, debug: true, invert: false, mode: 'creative'
    }, loadSettings())
    this.isTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0
    this.started = false
    this.initialLoaded = false
    this.overlay = null
    this.clock = 0
    this.lastFrame = performance.now()
    this.fpsSmooth = 60
    this.frameCount = 0
    this.fpsTimer = 0
    this.targetBlock = null
    this.targetEntity = null
    this.saveTimer = 0
    this.keys = new Set()
    this.mouseHeld = false
    this.lookPointer = null
    this.lastSpaceTap = 0
    this.autoSaveTimer = 30
    this.titleAngle = 0.62
    this.el = {
      title: document.getElementById('title'),
      loading: document.getElementById('loading'),
      loadingFill: document.getElementById('loading-fill'),
      loadingText: document.getElementById('loading-text'),
      play: document.getElementById('play'),
      continue: document.getElementById('continue'),
      hud: document.getElementById('hud'),
      pause: document.getElementById('pause'),
      settings: document.getElementById('settings'),
      controls: document.getElementById('controls'),
      underwater: document.getElementById('underwater'),
      touch: document.getElementById('touch-ui'),
      hint: document.getElementById('hint'),
      fatal: document.getElementById('fatal'),
      seed: document.getElementById('seed'),
      modeLabel: document.getElementById('mode-label')
    }
    this.el.play.disabled = true
    this.el.play.textContent = 'Loading…'
    this.el.play.style.opacity = '0.65'
    this.el.hint.classList.add('hidden')
    this.outline = this.makeOutline()
    this.scene.add(this.outline)
    const seedFromUrl = new URLSearchParams(location.search).get('seed')
    if (seedFromUrl) this.el.seed.value = seedFromUrl
    document.getElementById('title-bestiary').disabled = true
    this.bindDOM()
    this.updateStats()
    this.titleCamera()
    this.boot().catch(error => this.fatal(error))
    this.loop()
  }

  makeOutline() {
    const geo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.004, 1.004, 1.004))
    const mat = new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.62, depthTest: true })
    const line = new THREE.LineSegments(geo, mat)
    line.visible = false
    line.name = 'block-outline'
    return line
  }

  updateStats() {
    document.getElementById('stat-blocks').textContent = BLOCK_COUNT
    document.getElementById('stat-mobs').textContent = MOB_COUNT
    document.getElementById('stat-tools').textContent = TOOL_COUNT
    let saved = null
    try { saved = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null') } catch {}
    if (saved) {
      this.el.continue.classList.remove('hidden')
      const seed = saved.seed ?? ''
      if (!this.el.seed.value) this.el.seed.value = String(seed)
    }
    if (!this.el.seed.value) this.el.seed.value = String(1337)
  }

  async boot() {
    buildAtlas()
    setMesherAtlas(getAtlasTexture())
    this.seed = this.parseSeed(this.el.seed.value)
    this.world = new World(this.scene, this.seed, { renderDistance: this.settings.distance })
    this.world.renderDistance = this.settings.distance
    this.sky = new Sky(this.scene, { time: 0.31, dayLength: this.settings.dayLength * 60, seed: this.seed })
    this.sky.dayLength = this.settings.dayLength * 60
    this.particles = new Particles(this.scene)
    this.audio = new AudioEngine()
    this.audio.setVolume(this.settings.volume)
    this.player = new Player(this.scene, this.camera, this.world, {
      mode: this.settings.mode,
      particles: this.particles,
      audio: this.audio,
      onToast: (msg, stack) => this.toast(msg, stack),
      onDamage: () => { this.hud?.renderStatus() },
      onDeath: () => { this.toast('You died — returned to spawn'); this.saveWorld(true) }
    })
    this.player.setView(0, -0.04)
    this.createHotbar()
    this.mobs = new MobManager(this.scene, this.world, this.particles, this.audio, {
      cap: 42,
      onEvent: (type, entity) => {
        if (type === 'death') {
          this.kills = (this.kills || 0) + 1
        }
      }
    })
    this.hud = new HUD(this)
    this.hud.bindHotbar()
    this.inventory = new CreativeInventory(this)
    this.bestiary = new Bestiary(this)
    this.hud.setMode(this.player.mode)
    this.renderHotbar()
    this.player.viewGroup.visible = false
    this.applySettings()
    this.syncTimeLabel()
    this.loadingProgress(0.02, 'Warming up chunks…')
    await this.world.loadArea(3, (p, msg) => this.loadingProgress(0.02 + p * 0.96, msg), 3)
    this.initialLoaded = true
    this.loadingProgress(1, 'World ready')
    this.el.play.disabled = false
    this.el.play.textContent = 'Play'
    this.el.play.style.opacity = ''
    setTimeout(() => { this.el.loading.style.display = 'none' }, 500)
    document.getElementById('title-bestiary').disabled = false
    this.world.update(this.player.position.x, this.player.position.z, this.settings.distance, 10)
  }

  parseSeed(value) {
    const v = String(value || '1337').trim()
    if (/^-?\d+$/.test(v)) return Number(v) | 0
    let h = 2166136261 >>> 0
    for (let i = 0; i < v.length; i++) { h ^= v.charCodeAt(i); h = Math.imul(h, 16777619) }
    return h | 0
  }

  loadingProgress(p, msg) {
    this.el.loadingFill.style.width = `${Math.max(4, Math.min(100, p * 100))}%`
    if (msg) this.el.loadingText.textContent = msg
  }

  createHotbar() {
    const picks = [
      ['block', 'grass_block'], ['block', 'stone'], ['block', 'oak_planks'], ['block', 'oak_log'],
      ['block', 'glass'], ['block', 'torch'], ['item', 'diamond_pickaxe'], ['item', 'diamond_sword'], ['item', 'golden_apple']
    ]
    this.hotbar = picks.map(([kind, name]) => {
      if (kind === 'block') {
        const def = blockByName.get(name)
        return def ? blockStack(def, 64) : null
      }
      const item = getItem(name)
      return item ? itemStack(item, item.cat === 'food' ? 16 : 1) : null
    })
    this.player.hotbar = this.hotbar
    this.player.selected = 0
    this.player.setHeldItem(this.hotbar[0])
  }

  renderHotbar() {
    this.hud.renderHotbar(this.hotbar, this.player?.selected || 0)
  }

  selectSlot(i) {
    if (!this.player) return
    this.player.selected = i
    this.renderHotbar()
    const st = this.player.selectedStack()
    this.player.setHeldItem(st)
    this.hud.showItemName(st)
    this.audio.select()
  }

  giveHotbar(stack) {
    const i = this.player.selected
    const copy = { ...stack }
    if (copy.isBlock) copy.count = 64
    copy.icon = stack.icon
    this.hotbar[i] = copy
    this.player.setHeldItem(copy)
    this.renderHotbar()
    this.hud.showItemName(copy)
  }

  /* --------------------------------------------------------------- title flow */
  titleCamera() {
    const angle = 1.42 + Math.sin(this.clock * 0.035) * 0.03
    const radius = 42
    this.camera.position.set(Math.cos(angle) * radius, 76 + Math.sin(this.clock * 0.11) * 0.3, Math.sin(angle) * radius)
    const target = new THREE.Vector3(0, 63.5, 2)
    this.camera.lookAt(target)
    this.camera.fov = 62
    this.camera.updateProjectionMatrix()
  }

  startGame(loadSave = false) {
    if (!this.initialLoaded) return
    this.audio.ensure()
    if (loadSave) this.applySave()
    this.started = true
    this.overlay = null
    this.el.title.classList.add('hidden')
    this.el.hud.classList.remove('hidden')
    if (this.isTouch) this.el.touch.classList.remove('hidden')
    this.player.viewGroup.visible = true
    this.hud.setMode(this.player.mode)
    this.el.modeLabel.textContent = this.player.mode.toUpperCase()
    this.renderHotbar()
    this.player.setHeldItem(this.player.selectedStack())
    this.hud.showItemName(this.player.selectedStack())
    this.hud.hint.classList.remove('hidden')
    this.hud.hint.textContent = this.isTouch
      ? 'Joystick to move · drag the world to look · buttons to jump, mine and place'
      : 'Click to capture the mouse · WASD move · Space jump · E inventory · Esc menu'
    setTimeout(() => this.hud.hint.classList.add('hidden'), 7000)
    this.el.underwater.classList.remove('on')
    this.lastFrame = performance.now()
    this.toast(`Welcome to Minecraft Infinite · seed ${this.seed}`)
  }

  showTitle() {
    if (this.started) this.saveWorld(true)
    this.started = false
    this.overlay = null
    this.el.title.classList.remove('hidden')
    this.el.hud.classList.add('hidden')
    this.el.pause.classList.add('hidden')
    this.el.settings.classList.add('hidden')
    this.el.controls.classList.add('hidden')
    this.el.touch.classList.add('hidden')
    this.player.viewGroup.visible = false
    this.el.underwater.classList.remove('on')
    this.player.input = { forward: false, back: false, left: false, right: false, jump: false, sprint: false, flyUp: false, flyDown: false }
    if (document.pointerLockElement) document.exitPointerLock()
    this.titleCamera()
    this.updateStats()
  }

  openOverlay(name) {
    this.overlay = name
    if (document.pointerLockElement) document.exitPointerLock()
    this.player?.input && Object.keys(this.player.input).forEach(k => { this.player.input[k] = false })
    this.mouseHeld = false
    this.player?.endMine()
  }

  closeOverlay(name) {
    if (this.overlay !== name) return
    this.overlay = null
  }

  showPause() {
    if (!this.started) return
    this.overlay = 'pause'
    this.el.pause.classList.remove('hidden')
    if (document.pointerLockElement) document.exitPointerLock()
    for (const k of Object.keys(this.player.input)) this.player.input[k] = false
    this.player.endMine()
    this.renderPauseInfo()
  }

  resume() {
    this.el.pause.classList.add('hidden')
    this.overlay = null
    this.lastFrame = performance.now()
  }

  renderPauseInfo() {
    const p = this.player
    document.getElementById('pause-info').innerHTML =
      `Seed ${this.seed}<br>${Math.floor(p.position.x)} ${Math.floor(p.position.y)} ${Math.floor(p.position.z)} · ${this.world.biomeAt(p.position.x, p.position.z).name}<br>${this.world.stats.meshed} chunks meshed · ${this.kills || 0} mobs defeated`
  }

  /* --------------------------------------------------------------- save/load */
  saveWorld(quiet = false) {
    if (!this.player) return false
    const data = {
      version: 1,
      seed: this.seed,
      time: this.sky?.time ?? 0.31,
      edits: this.world.serializeEdits(),
      position: { x: this.player.position.x, y: this.player.position.y, z: this.player.position.z },
      yaw: this.player.yaw,
      pitch: this.player.pitch,
      mode: this.player.mode,
      flying: this.player.flying,
      selected: this.player.selected,
      hotbar: this.hotbar.map(s => s ? { name: s.name, isBlock: !!s.isBlock, count: s.count } : null),
      kills: this.kills || 0
    }
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(data))
      this.el.continue.classList.remove('hidden')
      if (!quiet) this.toast('World saved')
      return true
    } catch (e) {
      if (!quiet) this.toast('Could not save — storage is full')
      return false
    }
  }

  applySave() {
    let data = null
    try { data = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null') } catch {}
    if (!data) return
    if (data.seed !== undefined && Number(this.el.seed.value) !== data.seed) {
      // The world already generated with the current seed; seeds must match.
    }
    if (data.edits) this.world.loadEdits(data.edits)
    if (data.time != null && this.sky) this.sky.setTime(data.time)
    if (data.position) {
      this.player.position.set(data.position.x, data.position.y, data.position.z)
      this.player.velocity.set(0, 0, 0)
    }
    if (data.yaw != null) this.player.setView(data.yaw, data.pitch ?? -0.04)
    if (data.mode) { this.player.mode = data.mode; this.hud.setMode(data.mode) }
    this.player.flying = !!data.flying
    if (data.hotbar) {
      for (let i = 0; i < 9; i++) {
        const s = data.hotbar[i]
        if (!s) { this.hotbar[i] = null; continue }
        if (s.isBlock) {
          const def = blockByName.get(s.name)
          this.hotbar[i] = def ? blockStack(def, s.count || 64) : null
        } else {
          const item = getItem(s.name)
          this.hotbar[i] = item ? itemStack(item, s.count || 1) : null
        }
      }
      this.player.hotbar = this.hotbar
      this.player.selected = data.selected || 0
    }
    this.kills = data.kills || 0
    this.toast('World loaded')
  }

  /* --------------------------------------------------------------- settings */
  applySettings() {
    const s = this.settings
    if (this.world) this.world.renderDistance = s.distance
    if (this.sky) {
      this.sky.fancy = s.fancy
      this.sky.dayLength = s.dayLength * 60
      if (this.sky.clouds) this.sky.clouds.visible = s.fancy
    }
    this.audio.setVolume(s.volume)
    this.hud?.setDebugVisible(s.debug)
    document.getElementById('set-distance').value = s.distance
    document.getElementById('set-distance-out').textContent = `${s.distance} chunks`
    document.getElementById('set-volume').value = s.volume
    document.getElementById('set-volume-out').textContent = `${Math.round(s.volume * 100)}%`
    document.getElementById('set-day').value = s.dayLength
    document.getElementById('set-day-out').textContent = `${s.dayLength}m`
    document.getElementById('set-fancy').checked = s.fancy
    document.getElementById('set-debug').checked = s.debug
    document.getElementById('set-invert').checked = s.invert
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)) } catch {}
  }

  /* --------------------------------------------------------------- UI bindings */
  bindDOM() {
    const $ = id => document.getElementById(id)
    $('play').addEventListener('click', () => { this.audio.ensure(); this.startGame(false) })
    $('continue').addEventListener('click', () => {
      this.audio.ensure()
      const saved = this.readSaveSeed()
      if (saved != null && saved !== this.seed) {
        this.toast('Reloading saved world…')
        location.search = `?seed=${saved}`
        return
      }
      this.startGame(true)
    })
    $('new-world').addEventListener('click', () => {
      const seed = Math.floor(Math.random() * 2000000000) + 1
      this.el.seed.value = String(seed)
      localStorage.removeItem(SAVE_KEY)
      location.search = `?seed=${seed}`
    })
    $('seed-dice').addEventListener('click', () => {
      this.el.seed.value = String(Math.floor(Math.random() * 2000000000) + 1)
      this.audio.uiClick()
    })
    $('title-bestiary').addEventListener('click', () => { this.audio.ensure(); this.bestiary.open(true) })
    $('title-controls').addEventListener('click', () => {
      this.el.controls.classList.remove('hidden')
      this.audio.uiClick()
    })
    $('controls-close').addEventListener('click', () => this.el.controls.classList.add('hidden'))
    this.el.controls.addEventListener('click', e => { if (e.target === this.el.controls) this.el.controls.classList.add('hidden') })

    $('btn-pause').addEventListener('click', () => this.showPause())
    $('btn-bestiary-top').addEventListener('click', () => { if (this.started) { this.overlay = 'bestiary'; this.bestiary.open(false) } })
    $('btn-sound').addEventListener('click', () => {
      const muted = this.audio.toggleMute()
      $('btn-sound').textContent = muted ? '🔇' : '🔊'
      $('btn-sound').title = muted ? 'Unmute' : 'Mute'
    })
    $('resume').addEventListener('click', () => this.resume())
    $('pause-bestiary').addEventListener('click', () => {
      this.el.pause.classList.add('hidden')
      this.bestiary.open(false)
    })
    $('save-game').addEventListener('click', () => this.saveWorld(false))
    $('open-settings').addEventListener('click', () => {
      this.el.pause.classList.add('hidden')
      this.settingsFromPause = true
      this.el.settings.classList.remove('hidden')
    })
    $('quit-menu').addEventListener('click', () => this.showTitle())
    $('settings-close').addEventListener('click', () => {
      this.el.settings.classList.add('hidden')
      if (this.settingsFromPause && this.started) {
        this.settingsFromPause = false
        this.el.pause.classList.remove('hidden')
        this.overlay = 'pause'
      } else {
        this.overlay = null
      }
      this.applySettings()
    })
    $('set-distance').addEventListener('input', e => {
      this.settings.distance = Number(e.target.value)
      this.applySettings()
    })
    $('set-volume').addEventListener('input', e => {
      this.settings.volume = Number(e.target.value)
      this.applySettings()
    })
    $('set-day').addEventListener('input', e => {
      this.settings.dayLength = Number(e.target.value)
      this.applySettings()
    })
    $('set-fancy').addEventListener('change', e => { this.settings.fancy = e.target.checked; this.applySettings() })
    $('set-debug').addEventListener('change', e => { this.settings.debug = e.target.checked; this.applySettings() })
    $('set-invert').addEventListener('change', e => { this.settings.invert = e.target.checked; this.applySettings() })
    for (const btn of document.querySelectorAll('.mode-btn')) {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        this.settings.mode = btn.dataset.mode
        if (this.player) {
          this.player.mode = btn.dataset.mode
          if (btn.dataset.mode === 'survival') this.player.flying = false
          this.hud?.setMode(btn.dataset.mode)
        }
        this.audio.uiClick()
      })
    }

    window.addEventListener('resize', () => this.onResize())
    window.addEventListener('keydown', e => this.onKeyDown(e))
    window.addEventListener('keyup', e => this.onKeyUp(e))
    window.addEventListener('blur', () => this.clearInput())
    document.addEventListener('mousemove', e => this.onMouseMove(e))
    this.canvas.addEventListener('pointerdown', e => this.onPointerDown(e))
    window.addEventListener('pointerup', e => this.onPointerUp(e))
    this.canvas.addEventListener('contextmenu', e => e.preventDefault())
    window.addEventListener('wheel', e => this.onWheel(e), { passive: false })
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === this.canvas) {
        this.el.hint.classList.add('hidden')
      } else if (this.started && !this.overlay && !this.isTouch) {
        this.el.hint.classList.remove('hidden')
        this.el.hint.textContent = 'Click the world to look around'
        setTimeout(() => this.el.hint.classList.add('hidden'), 3500)
      }
    })
    this.bindTouch()
    window.addEventListener('error', e => this.fatal(e.error || e.message))
    window.addEventListener('unhandledrejection', e => this.fatal(e.reason))
  }

  bindTouch() {
    const joy = document.getElementById('joystick')
    const knob = document.getElementById('joystick-knob')
    let active = null
    const setKnob = (x, y) => {
      knob.style.transform = `translate(${x}px, ${y}px)`
    }
    const moveJoy = e => {
      const r = joy.getBoundingClientRect()
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2
      let dx = e.clientX - cx, dy = e.clientY - cy
      const max = r.width * 0.34
      const len = Math.hypot(dx, dy)
      if (len > max) { dx = dx / len * max; dy = dy / len * max }
      setKnob(dx, dy)
      const p = this.player
      if (!p) return
      p.input.forward = dy < -max * 0.18
      p.input.back = dy > max * 0.18
      p.input.left = dx < -max * 0.18
      p.input.right = dx > max * 0.18
      p.input.sprint = false
    }
    joy.addEventListener('pointerdown', e => {
      active = e.pointerId
      joy.setPointerCapture(e.pointerId)
      moveJoy(e)
      e.preventDefault()
    })
    joy.addEventListener('pointermove', e => { if (active === e.pointerId) moveJoy(e) })
    const endJoy = e => {
      if (active !== e.pointerId) return
      active = null
      setKnob(0, 0)
      if (this.player) {
        this.player.input.forward = this.player.input.back = this.player.input.left = this.player.input.right = false
      }
    }
    joy.addEventListener('pointerup', endJoy)
    joy.addEventListener('pointercancel', endJoy)

    const hold = (id, down, up) => {
      const el = document.getElementById(id)
      el.addEventListener('pointerdown', e => {
        e.preventDefault()
        e.stopPropagation()
        el.setPointerCapture?.(e.pointerId)
        down()
      })
      const release = e => { e.preventDefault(); up() }
      el.addEventListener('pointerup', release)
      el.addEventListener('pointercancel', release)
      el.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') up() })
    }
    hold('t-jump', () => { if (this.player) this.player.input.jump = true }, () => { if (this.player) this.player.input.jump = false })
    hold('t-break', () => { this.player?.beginMine() }, () => { this.player?.endMine() })
    hold('t-place', () => { this.player?.placeBlock() }, () => {})
    hold('t-up', () => { if (this.player) this.player.input.flyUp = true }, () => { if (this.player) this.player.input.flyUp = false })
    hold('t-down', () => { if (this.player) this.player.input.flyDown = true }, () => { if (this.player) this.player.input.flyDown = false })
  }

  clearInput() {
    if (!this.player) return
    for (const k of Object.keys(this.player.input)) this.player.input[k] = false
    this.player.endMine()
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  onKeyDown(e) {
    if (e.target instanceof HTMLInputElement) {
      if (e.code === 'Escape') e.target.blur()
      return
    }
    const code = e.code
    if (code === 'Escape') {
      e.preventDefault()
      if (!this.el.settings.classList.contains('hidden')) {
        this.el.settings.classList.add('hidden')
        if (this.started) { this.el.pause.classList.remove('hidden'); this.overlay = 'pause' }
      } else if (!this.el.controls.classList.contains('hidden')) {
        this.el.controls.classList.add('hidden')
      } else if (this.overlay === 'inventory') {
        this.inventory.close()
      } else if (this.overlay === 'bestiary') {
        this.bestiary.close()
      } else if (this.overlay === 'pause') {
        this.resume()
      } else if (this.started) {
        this.showPause()
      }
      return
    }
    if (!this.started) return
    if (this.overlay) return
    if (code === 'KeyW') this.player.input.forward = true
    else if (code === 'KeyS') this.player.input.back = true
    else if (code === 'KeyA') this.player.input.left = true
    else if (code === 'KeyD') this.player.input.right = true
    else if (code === 'ShiftLeft' || code === 'ShiftRight') this.player.input.sprint = true
    else if (code === 'Space') {
      if (!e.repeat) {
        const now = performance.now()
        if (now - this.lastSpaceTap < 290 && this.player.mode === 'creative') this.player.doubleTapSpace()
        this.lastSpaceTap = now
      }
      this.player.input.jump = true
      e.preventDefault()
    } else if (code === 'KeyE' && !e.repeat) {
      e.preventDefault()
      if (this.overlay === 'inventory') this.inventory.close()
      else { this.el.pause.classList.add('hidden'); this.inventory.open() }
    } else if (code === 'KeyB' && !e.repeat) {
      e.preventDefault()
      if (this.overlay === 'bestiary') this.bestiary.close()
      else { this.el.pause.classList.add('hidden'); this.bestiary.open(false) }
    } else if (code === 'KeyF' && !e.repeat) {
      this.player.toggleFly()
    } else if (code === 'F3' && !e.repeat) {
      e.preventDefault()
      this.settings.debug = !this.settings.debug
      this.applySettings()
    } else if (code === 'KeyQ' && !e.repeat) {
      const st = this.player.selectedStack()
      if (st) this.toast(`Dropped ${st.display}`, st)
    } else if (/^Digit[1-9]$/.test(code) && !e.repeat) {
      this.selectSlot(Number(code.slice(5)) - 1)
    }
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space'].includes(code)) e.preventDefault()
  }

  onKeyUp(e) {
    if (!this.player) return
    const code = e.code
    if (code === 'KeyW') this.player.input.forward = false
    else if (code === 'KeyS') this.player.input.back = false
    else if (code === 'KeyA') this.player.input.left = false
    else if (code === 'KeyD') this.player.input.right = false
    else if (code === 'ShiftLeft' || code === 'ShiftRight') this.player.input.sprint = false
    else if (code === 'Space') this.player.input.jump = false
  }

  onMouseMove(e) {
    if (!this.started || this.overlay) return
    if (!this.isTouch && document.pointerLockElement === this.canvas) {
      this.player.look(e.movementX, e.movementY, 0.0022, this.settings.invert)
    }
  }

  onPointerDown(e) {
    if (!this.started || this.overlay) return
    if (e.pointerType === 'touch') {
      // Look-drag on the world (right two-thirds useful on phones).
      if (e.clientX < 150 && e.clientY > window.innerHeight - 240) return
      this.lookPointer = { id: e.pointerId, x: e.clientX, y: e.clientY }
      this.canvas.setPointerCapture?.(e.pointerId)
      return
    }
    if (!document.pointerLockElement) {
      this.canvas.requestPointerLock?.()
      // The first click captures the mouse; it does not also mine.
      return
    }
    if (e.button === 0) {
      const ent = this.targetEntity
      if (ent) this.player.attack(ent)
      else this.player.beginMine()
      this.mouseHeld = true
    } else if (e.button === 2) {
      e.preventDefault()
      const ent = this.targetEntity
      if (ent) {
        this.toast(`${ent.mob.name} ${ent.hostile ? 'snarls at you' : 'nuzzles you gently'}`, { icon: this.bestiary?.icons.get(ent.mob.id) })
      } else {
        this.player.placeBlock()
      }
    }
  }

  onPointerUp(e) {
    if (e.pointerType === 'touch' && this.lookPointer?.id === e.pointerId) {
      this.lookPointer = null
      return
    }
    if (e.button === 0) {
      this.mouseHeld = false
      this.player?.endMine()
    }
  }

  onWheel(e) {
    if (!this.started || this.overlay) return
    e.preventDefault()
    const dir = Math.sign(e.deltaY)
    if (!dir) return
    let next = (this.player.selected + dir + 9) % 9
    this.selectSlot(next)
  }

  /* Pointer dragging for touch look. */
  bindCanvasDrag() {
    // Registered lazily from the loop's pointermove listener.
  }

  onCanvasPointerMove(e) {
    if (!this.lookPointer || this.lookPointer.id !== e.pointerId) return
    const dx = e.clientX - this.lookPointer.x
    const dy = e.clientY - this.lookPointer.y
    this.lookPointer.x = e.clientX
    this.lookPointer.y = e.clientY
    this.player.look(dx, dy, 0.0042, this.settings.invert)
  }

  /* --------------------------------------------------------------- gameplay */
  spawnMob(id) {
    if (!this.mobs || !this.player) return false
    const mob = MOB_BY_ID.get(id)
    if (!mob) return false
    const f = this.player.forwardFlat()
    let x = this.player.position.x + f.x * 4.5
    let z = this.player.position.z + f.z * 4.5
    if (mob.boss) { x += f.x * 3; z += f.z * 3 }
    if (!this.world.isLoaded(x, z)) return false
    let y = this.world.surfaceY(x, z) + 0.05
    if (mob.flying) y += 2.5
    if (mob.aquatic) {
      y = this.mobs.findWater(x, z)
      if (y == null) return false
    }
    const e = this.mobs.spawn(mob, x, y, z)
    if (e) {
      this.audio.mobAttack(mob)
      this.particles?.spawn(x, y + 0.5, z, mob.egg[0], 12, { speed: 1.7, life: 0.8, size: 0.1 })
    }
    return !!e
  }

  toast(message, stack = null) { this.hud?.toast(message, stack) }

  syncTimeLabel() {
    if (!this.sky || !this.hud) return
    const night = this.sky.isNight
    this.hud.setTime(`${night ? '☾' : '☀'} ${fmtTime(this.sky.time)}`)
  }

  updateTarget() {
    const eye = this.player.eyePosition
    const fwd = this.player.forward
    const block = this.player.raycast(this.player.mode === 'creative' ? 8 : 6)
    const ent = this.mobs.raycast(eye, fwd, 4.4)
    let entity = null
    if (ent && (!block || ent.distance < block.distance)) entity = ent.entity
    this.targetEntity = entity
    this.targetBlock = block
    if (block) {
      this.outline.visible = true
      this.outline.position.set(block.x + 0.5, block.y + 0.5, block.z + 0.5)
    } else this.outline.visible = false
    this.hud.showEntity(entity)
    this.hud.setBreak(this.player.mineHeld && this.player.mineProgress > 0.01 ? Math.min(1, this.player.mineProgress) : 0)
  }

  updateHUD(dt) {
    const p = this.player
    const biome = this.world.biomeAt(p.position.x, p.position.z)
    const time = this.sky.time
    const night = this.sky.isNight
    this.hud.update(dt, {
      x: Math.floor(p.position.x), y: Math.floor(p.position.y), z: Math.floor(p.position.z),
      biome: biome.name,
      fps: Math.round(this.fpsSmooth),
      extra: `${this.world.stats.meshed} chunks · ${this.world.stats.triangles.toLocaleString()} tris · ${this.mobs.entities.length} mobs`,
      timeLabel: `${night ? '☾' : '☀'} ${fmtTime(time)}`,
      hp: p.hp
    })
  }

  /* --------------------------------------------------------------- main loop */
  loop() {
    requestAnimationFrame(() => this.loop())
    const now = performance.now()
    let dt = (now - this.lastFrame) / 1000
    this.lastFrame = now
    dt = Math.min(dt, 0.1)
    this.clock += dt
    this.fpsSmooth += ((1 / Math.max(0.001, dt)) - this.fpsSmooth) * 0.05
    this.fpsTimer += dt
    this.frameCount++
    if (this.fpsTimer > 0.5) { this.fpsTimer = 0; this.frameCount = 0 }

    if (this.started && !this.overlay) {
      this.player.update(dt, this.keys, this.sky.time)
      this.mobs.update(dt, this.player, this.sky.time)
      this.world.update(this.player.position.x, this.player.position.z, this.settings.distance, 6)
      this.updateTarget()
      this.updateHUD(dt)
      this.autoSaveTimer -= dt
      if (this.autoSaveTimer <= 0) { this.autoSaveTimer = 60; if (this.world.edits.size) this.saveWorld(true) }
    } else if (this.started && this.overlay) {
      // Keep the view alive but freeze the simulation while menus are open.
      this.player.updateCamera(dt, this.sky.time)
      if (this.targetEntity || this.targetBlock) {
        this.targetEntity = null
        this.hud.showEntity(null)
        this.outline.visible = false
        this.hud.setBreak(0)
      }
    } else if (!this.started) {
      this.titleCamera()
    }

    const center = this.started ? this.player.eyePosition : this.camera.position
    this.sky.update(this.overlay ? 0 : dt, center, this.settings.distance * 13)
    this.particles.update(dt)
    const fog = this.sky.fog
    updateLiquidUniforms(this.clock, this.sky.colors.fog, fog.near, fog.far)
    if (this.started) {
      const uw = this.player.underwater
      this.el.underwater.classList.toggle('on', uw)
      if (uw) {
        this.scene.fog.near = 2
        this.scene.fog.far = 24
      } else {
        this.scene.fog.near = this.sky.fog.near
        this.scene.fog.far = this.sky.fog.far
      }
      this.syncTimeLabel()
    }
    this.renderer.render(this.scene, this.camera)
  }

  fatal(error) {
    console.error(error)
    if (!this.el) return
    this.el.fatal.classList.remove('hidden')
    this.el.fatal.textContent = `Minecraft Infinite hit a snag\n\n${error?.message || error}\n\nTry reloading the page.`
  }

  readSaveSeed() {
    try {
      const data = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null')
      return data?.seed ?? null
    } catch { return null }
  }
}

/* Touch look movement is bound to the canvas once the module starts. */
const game = new Game()
game.canvas.addEventListener('pointermove', e => game.onCanvasPointerMove(e))

window.__game = game
