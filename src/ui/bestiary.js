/* ============================================================================
   MOB BESTIARY
   ========================================================================== */
import { MOBS } from '../data/mobs.js'
import { drawMobHead } from '../entities/models.js'

const CATS = [
  { id: 'all', label: 'All' },
  { id: 'passive', label: 'Passive' },
  { id: 'neutral', label: 'Neutral' },
  { id: 'hostile', label: 'Hostile' },
  { id: 'boss', label: 'Bosses' }
]

export class Bestiary {
  constructor(game) {
    this.game = game
    this.el = document.getElementById('bestiary')
    this.grid = document.getElementById('bestiary-grid')
    this.tabsEl = document.getElementById('bestiary-tabs')
    this.searchEl = document.getElementById('bestiary-search')
    this.countEl = document.getElementById('mob-count')
    this.cat = 'all'
    this.search = ''
    this.fromTitle = false
    this.icons = new Map()
    for (const mob of MOBS) this.icons.set(mob.id, drawMobHead(mob, 64).toDataURL())
    this.bind()
  }

  bind() {
    this.tabsEl.addEventListener('click', e => {
      const b = e.target.closest('.chip')
      if (!b) return
      this.cat = b.dataset.cat
      this.game.audio.uiClick()
      this.renderTabs()
      this.renderGrid()
    })
    this.searchEl.addEventListener('input', () => {
      this.search = this.searchEl.value.trim().toLowerCase()
      this.renderGrid()
    })
    this.grid.addEventListener('click', e => {
      const card = e.target.closest('.mob-card')
      if (!card) return
      const id = card.dataset.id
      const mob = MOBS.find(m => m.id === id)
      const ok = this.game.spawnMob(id)
      this.game.toast(ok ? `${mob?.name || 'Mob'} spawned nearby` : 'No room to spawn that mob here', mob ? { name: mob.id, display: mob.name, icon: this.icons.get(mob.id) } : null)
    })
    document.getElementById('bestiary-close').addEventListener('click', () => this.close())
    this.el.addEventListener('click', e => { if (e.target === this.el) this.close() })
  }

  open(fromTitle = false) {
    this.fromTitle = fromTitle
    this.el.classList.remove('hidden')
    if (!fromTitle) this.game.openOverlay('bestiary')
    this.renderTabs()
    this.renderGrid()
  }

  close() {
    this.el.classList.add('hidden')
    if (!this.fromTitle) this.game.closeOverlay('bestiary')
    else this.game.showTitle()
  }

  list() {
    let list = MOBS
    if (this.cat !== 'all') list = list.filter(m => m.category === this.cat)
    if (this.search) {
      const q = this.search
      list = list.filter(m => m.name.toLowerCase().includes(q) || m.id.includes(q) || m.desc.toLowerCase().includes(q))
    }
    return list
  }

  renderTabs() {
    this.tabsEl.innerHTML = CATS.map(c => {
      const n = c.id === 'all' ? MOBS.length : MOBS.filter(m => m.category === c.id).length
      if (!n) return ''
      return `<button class="chip ${this.cat === c.id ? 'active' : ''}" data-cat="${c.id}">${c.label} <span style="opacity:.55">${n}</span></button>`
    }).join('')
  }

  renderGrid() {
    const list = this.list()
    this.countEl.textContent = `${list.length} mob${list.length === 1 ? '' : 's'}`
    this.grid.innerHTML = list.map(mob => {
      const hostile = mob.hostile
      const hpMax = Math.max(20, mob.hp)
      return `<button class="mob-card" data-id="${mob.id}" title="${mob.desc}">
        <div class="mob-head">
          <div class="mob-egg"><img src="${this.icons.get(mob.id)}" alt="" width="30" height="34" style="image-rendering:pixelated;width:30px;height:34px" /></div>
          <div>
            <div class="mob-name">${mob.name}</div>
            <div class="mob-tag ${hostile ? 'hostile' : 'passive'}">${mob.category}${mob.boss ? ' · boss' : ''}</div>
          </div>
        </div>
        <div class="mob-desc">${mob.desc}</div>
        <div class="mob-meta"><span>${mob.hp} HP</span><span class="hp-mini"><i style="width:${Math.max(8, mob.hp / hpMax * 100)}%"></i></span><span>${mob.damage ? `${mob.damage} DMG` : 'calm'}</span></div>
      </button>`
    }).join('')
  }
}
