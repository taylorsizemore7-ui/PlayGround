/* ============================================================================
   CREATIVE INVENTORY
   ========================================================================== */
import { BLOCKS, CATEGORIES } from '../data/blocks.js'
import { ITEMS } from '../data/items.js'
import { getBlockIcon, getItemIcon } from './icons.js'

export function blockStack(def, count = 64) {
  return {
    name: def.name,
    display: def.display,
    isBlock: true,
    block: def,
    count,
    id: `block-${def.id}`,
    get icon() { return getBlockIcon(def) }
  }
}

export function itemStack(item, count = 1) {
  return {
    name: item.name,
    display: item.display,
    isBlock: false,
    item,
    count,
    id: `item-${item.id}`,
    get icon() { return getItemIcon(item) }
  }
}

const ITEM_TABS = [
  { id: 'all', label: 'Everything', icon: '✦' },
  { id: 'building', label: 'Building', icon: '▦' },
  { id: 'nature', label: 'Nature', icon: '🌿' },
  { id: 'decoration', label: 'Decoration', icon: '🏮' },
  { id: 'colors', label: 'Colours', icon: '🎨' },
  { id: 'tools', label: 'Tools', icon: '⛏' },
  { id: 'combat', label: 'Combat', icon: '⚔' },
  { id: 'food', label: 'Food', icon: '🍖' },
  { id: 'ingredients', label: 'Ingredients', icon: '💎' },
  { id: 'eggs', label: 'Spawn Eggs', icon: '🥚' },
  { id: 'redstone', label: 'Redstone', icon: '🔴' },
  { id: 'nether', label: 'Nether', icon: '🔥' },
  { id: 'end', label: 'The End', icon: '🌌' },
  { id: 'ocean', label: 'Ocean', icon: '🌊' }
]

export class CreativeInventory {
  constructor(game) {
    this.game = game
    this.entries = []
    this.visible = []
    this.tab = 'all'
    this.search = ''
    this.selected = null
    this.el = document.getElementById('inventory')
    this.grid = document.getElementById('inv-grid')
    this.tabsEl = document.getElementById('inv-tabs')
    this.empty = document.getElementById('inv-empty')
    this.searchEl = document.getElementById('inv-search')
    this.allEl = document.getElementById('inv-all')
    this.countEl = document.getElementById('inv-count')
    this.preview = document.getElementById('inv-preview')
    this.nameEl = document.getElementById('inv-name')
    this.rarityEl = document.getElementById('inv-rarity')
    this.descEl = document.getElementById('inv-desc')
    this.metaEl = document.getElementById('inv-meta')
    this.giveBtn = document.getElementById('inv-give')
    this.buildEntries()
    this.bind()
  }

  buildEntries() {
    const map = new Map()
    for (const def of BLOCKS) {
      if (!def.placeable) continue
      map.set(`block-${def.id}`, {
        key: `block-${def.id}`, cat: def.cat, display: def.display, block: def,
        stack: blockStack(def), desc: def.desc || `A ${def.display.toLowerCase()} block.`,
        rarity: def.name.includes('diamond') || def.name.includes('emerald') ? 'rare' : 'common',
        meta: [['Hardness', def.hard < 0 ? '∞' : String(def.hard)], ['Tool', def.tool ? def.tool : 'Any'], ['Category', CATEGORIES[def.cat]?.label || def.cat]]
      })
    }
    for (const item of ITEMS) {
      const cat = item.cat || 'misc'
      if (!['tools', 'combat', 'food', 'ingredients', 'eggs'].includes(cat)) continue
      map.set(`item-${item.id}`, {
        key: `item-${item.id}`, cat, display: item.display, item,
        stack: itemStack(item, item.cat === 'eggs' ? 64 : item.stack), desc: item.desc || 'A curious item.',
        rarity: item.rarity,
        meta: [
          ['Stack', String(item.stack)],
          item.damage ? ['Attack', String(item.damage)] : null,
          item.tool ? ['Tool', item.tool] : null,
          item.food ? ['Food', String(item.food)] : null,
          item.rarity ? ['Rarity', item.rarity] : null
        ].filter(Boolean)
      })
    }
    this.entries = [...map.values()]
  }

  bind() {
    this.tabsEl.addEventListener('click', e => {
      const btn = e.target.closest('.tab-btn')
      if (!btn) return
      this.tab = btn.dataset.tab
      this.game.audio.uiClick()
      this.renderTabs()
      this.renderGrid()
    })
    this.searchEl.addEventListener('input', () => {
      this.search = this.searchEl.value.trim().toLowerCase()
      this.renderGrid()
    })
    this.allEl.addEventListener('change', () => this.renderGrid())
    this.grid.addEventListener('click', e => {
      const card = e.target.closest('.inv-item')
      if (!card) return
      const entry = this.entries.find(x => x.key === card.dataset.key)
      if (!entry) return
      this.select(entry)
      if (e.shiftKey) this.give()
    })
    this.grid.addEventListener('dblclick', e => {
      const card = e.target.closest('.inv-item')
      if (!card) return
      const entry = this.entries.find(x => x.key === card.dataset.key)
      if (entry) { this.select(entry); this.give(); this.close() }
    })
    this.giveBtn.addEventListener('click', () => this.give())
    document.getElementById('inv-close').addEventListener('click', () => this.close())
    this.el.addEventListener('click', e => { if (e.target === this.el) this.close() })
  }

  open() {
    this.el.classList.remove('hidden')
    this.game.openOverlay('inventory')
    this.renderTabs()
    this.renderGrid()
    if (!this.selected && this.entries.length) this.select(this.entries[0])
    this.searchEl.focus()
  }

  close() {
    this.el.classList.add('hidden')
    this.game.closeOverlay('inventory')
  }

  renderTabs() {
    const counts = {}
    for (const e of this.entries) counts[e.cat] = (counts[e.cat] || 0) + 1
    const tabs = ITEM_TABS.map(t => {
      const n = t.id === 'all' ? this.entries.length : counts[t.id] || 0
      if (!n) return ''
      return `<button class="tab-btn ${this.tab === t.id ? 'active' : ''}" data-tab="${t.id}">
        <span class="t-ico">${t.icon}</span><span>${t.label}</span><span class="t-count">${n}</span></button>`
    }).join('')
    this.tabsEl.innerHTML = tabs
  }

  currentEntries() {
    let list = this.entries
    if (this.tab !== 'all') list = list.filter(e => e.cat === this.tab)
    if (this.search) {
      const q = this.search
      list = list.filter(e => e.display.toLowerCase().includes(q) || e.block?.name.includes(q) || e.item?.name.includes(q) || e.desc.toLowerCase().includes(q))
    }
    if (!this.allEl.checked) list = list.slice(0, 180)
    return list
  }

  renderGrid() {
    const list = this.currentEntries()
    this.visible = list
    this.countEl.textContent = `${list.length} item${list.length === 1 ? '' : 's'}`
    this.empty.classList.toggle('hidden', list.length > 0)
    this.grid.innerHTML = list.map(e => {
      const count = e.stack.count > 1 ? `<span class="count">${e.stack.count}</span>` : ''
      return `<button class="inv-item ${this.selected?.key === e.key ? 'selected' : ''}" data-key="${e.key}" title="${e.display}">
        <img src="${e.stack.icon}" alt="" loading="lazy" draggable="false" />${count}</button>`
    }).join('')
    // Restore scroll roughly when switching tabs.
    this.grid.scrollTop = 0
    if (list.length && (!this.selected || !list.some(e => e.key === this.selected.key))) this.select(list[0])
    if (!list.length) this.empty.classList.remove('hidden')
  }

  select(entry) {
    this.selected = entry
    for (const el of this.grid.querySelectorAll('.inv-item')) el.classList.toggle('selected', el.dataset.key === entry.key)
    this.preview.innerHTML = `<img src="${entry.stack.icon}" alt="" draggable="false" />`
    this.nameEl.textContent = entry.display
    this.rarityEl.textContent = entry.rarity || 'common'
    this.rarityEl.className = `rarity ${entry.rarity || ''}`
    this.descEl.textContent = entry.desc
    this.metaEl.innerHTML = entry.meta.map(([k, v]) => `<div class="meta-row"><span>${k}</span><b>${v}</b></div>`).join('')
    this.giveBtn.textContent = entry.item?.spawn ? `Spawn ${entry.item.display.replace(' Spawn Egg', '')}` : 'Put in hotbar'
  }

  give() {
    if (!this.selected) return
    const entry = this.selected
    if (entry.item?.spawn) {
      const ok = this.game.spawnMob(entry.item.spawn)
      this.game.toast(ok ? `Spawned ${entry.display.replace(' Spawn Egg', '')}` : 'Find more open ground first', entry.stack)
      return
    }
    const stack = { ...entry.stack }
    if (stack.isBlock) stack.count = 64
    else stack.count = Math.min(entry.item?.stack || 64, 64)
    this.game.giveHotbar(stack)
    this.game.toast(`Added ${entry.display} to hotbar`, stack)
  }
}
