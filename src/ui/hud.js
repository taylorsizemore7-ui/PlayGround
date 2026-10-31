/* ============================================================================
   HUD — hotbar, status, debug, time, entity focus, toasts.
   ========================================================================== */
const HEART = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18S2 12.4 2 6.8C2 4 4.2 2 6.8 2 8.3 2 9.5 2.8 10 4c.5-1.2 1.7-2 3.2-2C15.8 2 18 4 18 6.8 18 12.4 10 18 10 18Z" fill="currentColor"/></svg>`
const HEART_EMPTY = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18S2 12.4 2 6.8C2 4 4.2 2 6.8 2 8.3 2 9.5 2.8 10 4c.5-1.2 1.7-2 3.2-2C15.8 2 18 4 18 6.8 18 12.4 10 18 10 18Z" fill="rgba(0,0,0,.42)" stroke="rgba(255,255,255,.22)" stroke-width="1"/></svg>`
const FOOD = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 2c1.7 0 2.5 2.2 2.5 4.4S8.7 10 7 10 4.5 8.6 4.5 6.4 5.3 2 7 2Zm6.5 1.2c1.5-.1 3.1 1.1 3.4 2.8.3 1.6-.4 3.2-1.9 4.1v6.2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-6.2c-1.1-.7-1.8-1.9-1.8-3.2 0-2 1.4-3.6 3.3-3.7Z" fill="currentColor"/></svg>`
const FOOD_EMPTY = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 2c1.7 0 2.5 2.2 2.5 4.4S8.7 10 7 10 4.5 8.6 4.5 6.4 5.3 2 7 2Zm6.5 1.2c1.5-.1 3.1 1.1 3.4 2.8.3 1.6-.4 3.2-1.9 4.1v6.2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-6.2c-1.1-.7-1.8-1.9-1.8-3.2 0-2 1.4-3.6 3.3-3.7Z" fill="rgba(0,0,0,.42)" stroke="rgba(255,255,255,.2)" stroke-width="1"/></svg>`

export class HUD {
  constructor(game) {
    this.game = game
    this.el = document.getElementById('hud')
    this.hotbar = document.getElementById('hotbar')
    this.hearts = document.getElementById('hearts')
    this.hunger = document.getElementById('hunger')
    this.status = document.getElementById('status-bars')
    this.xp = document.getElementById('xp-bar')
    this.coords = document.getElementById('debug-coords')
    this.biome = document.getElementById('debug-biome')
    this.extra = document.getElementById('debug-extra')
    this.fps = document.getElementById('debug-fps')
    this.modeLabel = document.getElementById('mode-label')
    this.timeLabel = document.getElementById('time-label')
    this.itemName = document.getElementById('item-name')
    this.hint = document.getElementById('hint')
    this.toastEl = document.getElementById('toasts')
    this.entityInfo = document.getElementById('entity-info')
    this.entityName = document.getElementById('entity-name')
    this.entityHp = document.getElementById('entity-hp')
    this.breakRing = document.getElementById('break-ring')
    this.debugEl = document.getElementById('debug')
    this.itemNameTimer = 0
    this.lastMode = null
  }

  setMode(mode) {
    this.lastMode = mode
    this.modeLabel.textContent = mode.toUpperCase()
    this.status.classList.toggle('hidden', mode !== 'survival')
    this.xp.classList.toggle('hidden', mode !== 'survival')
    this.renderStatus()
  }

  renderStatus() {
    const p = this.game.player
    if (!p) return
    const hp = Math.max(0, Math.ceil(p.hp / 2))
    const food = Math.max(0, Math.ceil(p.hunger / 2))
    this.hearts.innerHTML = Array.from({ length: 10 }, (_, i) => `<span style="color:${hp > i ? '#ff5548' : 'transparent'}">${hp > i ? HEART : HEART_EMPTY}</span>`).join('')
    this.hunger.innerHTML = Array.from({ length: 10 }, (_, i) => `<span style="color:${food > i ? '#e8a83a' : 'transparent'}">${food > i ? FOOD : FOOD_EMPTY}</span>`).join('')
  }

  renderHotbar(stacks, selected) {
    this.hotbar.innerHTML = Array.from({ length: 9 }, (_, i) => {
      const s = stacks[i]
      const count = s && s.count > 1 ? `<span class="count">${s.count}</span>` : ''
      const img = s ? `<img src="${s.icon}" alt="" draggable="false" />` : '<span class="empty-plus">+</span>'
      return `<button class="slot ${i === selected ? 'selected' : ''}" data-slot="${i}" aria-label="Hotbar slot ${i + 1}">
        <span class="key">${i + 1}</span>${img}${count}</button>`
    }).join('')
  }

  bindHotbar() {
    this.hotbar.addEventListener('click', e => {
      const slot = e.target.closest('.slot')
      if (slot) this.game.selectSlot(Number(slot.dataset.slot))
    })
  }

  showItemName(stack) {
    if (!stack) { this.itemName.classList.add('hidden'); return }
    this.itemName.textContent = stack.display
    this.itemName.classList.remove('hidden')
    this.itemNameTimer = 2.2
  }

  toast(message, stack = null) {
    const el = document.createElement('div')
    el.className = 'toast'
    el.innerHTML = `${stack?.icon ? `<img src="${stack.icon}" alt="" />` : '<span>✦</span>'}<span>${message}</span>`
    this.toastEl.appendChild(el)
    while (this.toastEl.children.length > 4) this.toastEl.firstElementChild.remove()
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 320) }, 2800)
  }

  setBreak(progress) {
    if (progress > 0.01) {
      this.breakRing.classList.add('on')
      this.breakRing.style.setProperty('--p', progress.toFixed(3))
    } else {
      this.breakRing.classList.remove('on')
    }
  }

  showEntity(entity) {
    if (!entity) { this.entityInfo.classList.add('hidden'); return }
    this.entityInfo.classList.remove('hidden')
    this.entityName.textContent = entity.mob.name
    this.entityHp.style.width = `${Math.max(0, entity.hp / entity.maxHp * 100)}%`
  }

  update(dt, info) {
    if (this.itemNameTimer > 0) {
      this.itemNameTimer -= dt
      if (this.itemNameTimer <= 0) this.itemName.classList.add('hidden')
    }
    if (!info) return
    this.coords.textContent = `${info.x} ${info.y} ${info.z}`
    this.biome.textContent = info.biome
    this.fps.textContent = `${info.fps} FPS`
    this.extra.textContent = info.extra
    this.timeLabel.textContent = info.timeLabel
    if (info.hp !== undefined && this.lastMode === 'survival') {
      this.renderStatus()
    }
  }

  setTime(label) { this.timeLabel.textContent = label }
  setDebugVisible(v) { this.debugEl.style.display = v ? '' : 'none'; this.el.classList.toggle('show-debug', v) }
}
