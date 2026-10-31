/* ============================================================================
   AUDIO — tiny procedural sound engine (no asset downloads).
   ========================================================================== */
export class AudioEngine {
  constructor() {
    this.ctx = null
    this.master = null
    this.volume = 0.55
    this.muted = false
    this.started = false
  }

  ensure() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {})
      return this.ctx
    }
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext
      if (!Ctx) return null
      this.ctx = new Ctx()
      this.master = this.ctx.createGain()
      this.master.gain.value = this.muted ? 0 : this.volume
      this.master.connect(this.ctx.destination)
      this.started = true
    } catch { this.ctx = null }
    return this.ctx
  }

  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, v))
    if (this.master) this.master.gain.value = this.muted ? 0 : this.volume
  }

  toggleMute() {
    this.muted = !this.muted
    if (this.master) this.master.gain.value = this.muted ? 0 : this.volume
    return this.muted
  }

  tone(freq, duration, type = 'sine', gain = 0.08, slide = 0, delay = 0) {
    if (this.muted) return
    const ctx = this.ensure()
    if (!ctx) return
    const t0 = ctx.currentTime + delay
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t0)
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t0 + duration)
    g.gain.setValueAtTime(0.0001, t0)
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.01)
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration)
    osc.connect(g).connect(this.master)
    osc.start(t0)
    osc.stop(t0 + duration + 0.02)
  }

  noise(duration = 0.1, gain = 0.06, filterFreq = 900, delay = 0) {
    if (this.muted) return
    const ctx = this.ensure()
    if (!ctx) return
    const length = Math.max(1, Math.floor(ctx.sampleRate * duration))
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length)
    const src = ctx.createBufferSource()
    src.buffer = buffer
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = filterFreq
    const g = ctx.createGain()
    g.gain.value = gain
    src.connect(filter).connect(g).connect(this.master)
    src.start(ctx.currentTime + delay)
  }

  uiClick() { this.tone(650, 0.045, 'square', 0.022, -120) }
  select() { this.tone(880, 0.035, 'square', 0.018) }
  jump() { this.tone(260, 0.12, 'sine', 0.02, 80) }
  step(def) {
    const freq = def?.sound === 'wood' ? 260 : def?.sound === 'grass' ? 420 : 180
    this.noise(0.06, 0.018, freq)
  }
  breakBlock(def) {
    const freq = def?.sound === 'wood' ? 520 : def?.sound === 'grass' ? 900 : 1200
    this.noise(0.16, 0.05, freq)
    this.tone(def?.sound === 'wood' ? 140 : 90, 0.1, 'triangle', 0.03, -40)
  }
  placeBlock(def) { this.noise(0.09, 0.035, def?.sound === 'wood' ? 500 : 850) }
  hit() { this.tone(120, 0.08, 'square', 0.025, -40) }
  hurt() { this.tone(220, 0.18, 'sawtooth', 0.05, -100) }
  mobHurt(mob) {
    const base = mob?.boss ? 90 : mob?.archetype === 'bird' ? 900 : 250
    this.tone(base, 0.1, 'square', 0.018, mob?.boss ? -30 : 80)
  }
  mobDeath(mob) {
    const base = mob?.boss ? 70 : 300
    this.tone(base, 0.28, 'sawtooth', 0.025, -base * 0.6)
    this.noise(0.22, 0.03, 600)
  }
  mobAttack(mob) {
    this.tone(mob?.boss ? 60 : 160, 0.16, 'sawtooth', 0.025, -40)
  }
  levelUp() {
    [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.16, 'triangle', 0.03, 0, i * 0.08))
  }
  splash() { this.noise(0.22, 0.05, 700) }
  portal() { this.tone(180, 0.6, 'sine', 0.03, 300) }
}
