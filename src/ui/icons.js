/* ============================================================================
   ITEM ICONS — procedurally drawn pixel art for every tool, food and egg.
   ========================================================================== */
import { renderBlockIcon } from '../render/textures.js'

const cache = new Map()
const SIZE = 32

function rgb(hex) {
  const h = hex.replace('#', '')
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}
function hex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('')
}
function dark(color, f = 0.7) { const [r, g, b] = rgb(color); return hex(r * f, g * f, b * f) }
function light(color, f = 1.2) { const [r, g, b] = rgb(color); return hex(r * f, g * f, b * f) }
function ctxFor() {
  const c = document.createElement('canvas')
  c.width = c.height = SIZE
  const ctx = c.getContext('2d')
  ctx.imageSmoothingEnabled = false
  return { c, ctx }
}
function px(ctx, x, y, color, s = 1) { ctx.fillStyle = color; ctx.fillRect(x, y, s, s) }
function rect(ctx, x, y, w, h, color) { ctx.fillStyle = color; ctx.fillRect(x, y, w, h) }
function line(ctx, x0, y0, x1, y1, color, thickness = 1) {
  let dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0)
  let sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1, err = dx + dy
  for (;;) {
    rect(ctx, x0 - Math.floor(thickness / 2), y0 - Math.floor(thickness / 2), thickness, thickness, color)
    if (x0 === x1 && y0 === y1) break
    const e2 = 2 * err
    if (e2 >= dy) { err += dy; x0 += sx }
    if (e2 <= dx) { err += dx; y0 += sy }
  }
}
function poly(ctx, points, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))
  ctx.closePath(); ctx.fill()
}
function circle(ctx, cx, cy, r, color) {
  ctx.fillStyle = color
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()
}
function outlineRect(ctx, x, y, w, h, color, darkColor) {
  rect(ctx, x, y, w, h, color)
  rect(ctx, x, y, w, 1, light(color, 1.25))
  rect(ctx, x, y + h - 1, w, 1, darkColor)
  rect(ctx, x, y, 1, h, light(color, 1.1))
  rect(ctx, x + w - 1, y, 1, h, darkColor)
}

function drawHandle(ctx, color = '#8a5a2a', x0 = 8, y0 = 26, x1 = 19, y1 = 8) {
  line(ctx, x0, y0, x1, y1, dark(color, 0.55), 4)
  line(ctx, x0, y0, x1, y1, color, 2)
  line(ctx, x0 - 1, y0 - 1, x1 - 1, y1 - 1, light(color, 1.15), 1)
}

const DRAW = {
  pickaxe(ctx, item) {
    drawHandle(ctx)
    const c = item.icon.color, d = item.icon.dark || dark(c)
    line(ctx, 7, 13, 13, 6, d, 5)
    line(ctx, 7, 13, 14, 7, c, 3)
    line(ctx, 14, 7, 23, 6, d, 5)
    line(ctx, 14, 7, 22, 7, c, 3)
    line(ctx, 22, 7, 26, 11, c, 2)
    px(ctx, 10, 8, light(c, 1.35), 2)
  },
  axe(ctx, item) {
    drawHandle(ctx)
    const c = item.icon.color, d = item.icon.dark || dark(c)
    poly(ctx, [[17, 5], [25, 7], [27, 15], [21, 19], [17, 14]], d)
    poly(ctx, [[18, 6], [24, 8], [25, 14], [21, 17], [18, 13]], c)
    line(ctx, 20, 8, 23, 9, light(c, 1.4), 1)
  },
  shovel(ctx, item) {
    drawHandle(ctx)
    const c = item.icon.color, d = item.icon.dark || dark(c)
    poly(ctx, [[17, 4], [25, 8], [20, 15], [15, 11]], d)
    poly(ctx, [[18, 5], [24, 8], [20, 13], [16, 10]], c)
    line(ctx, 18, 6, 21, 8, light(c, 1.4), 1)
  },
  hoe(ctx, item) {
    drawHandle(ctx)
    const c = item.icon.color, d = item.icon.dark || dark(c)
    rect(ctx, 17, 5, 7, 3, d)
    rect(ctx, 18, 6, 6, 1, c)
    rect(ctx, 22, 5, 3, 6, c)
    rect(ctx, 22, 10, 3, 1, d)
  },
  sword(ctx, item) {
    const c = item.icon.color, d = item.icon.dark || dark(c)
    line(ctx, 16, 22, 25, 5, d, 5)
    line(ctx, 16, 21, 24, 5, c, 3)
    line(ctx, 17, 20, 23, 7, light(c, 1.35), 1)
    line(ctx, 10, 24, 18, 16, '#b08a52', 4)
    line(ctx, 10, 24, 18, 16, '#d8b87a', 2)
    line(ctx, 10, 18, 18, 24, '#c8a83a', 3)
    px(ctx, 9, 25, '#c8a83a', 2)
    px(ctx, 24, 5, light(c, 1.5), 2)
  },
  bow(ctx, item) {
    const c = item.icon.color
    ctx.strokeStyle = c; ctx.lineWidth = 3
    ctx.beginPath(); ctx.arc(20, 16, 11, Math.PI * 0.55, Math.PI * 1.45); ctx.stroke()
    ctx.strokeStyle = light(c, 1.2); ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(20, 16, 11, Math.PI * 0.6, Math.PI * 1.4); ctx.stroke()
    ctx.strokeStyle = '#e8e8e0'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(15, 5); ctx.lineTo(15, 27); ctx.stroke()
    line(ctx, 16, 16, 28, 16, '#c8a86a', 1)
    poly(ctx, [[28, 16], [25, 13], [25, 19]], '#d8d8d0')
  },
  crossbow(ctx, item) {
    const c = item.icon.color, d = item.icon.dark || dark(c)
    rect(ctx, 6, 14, 20, 3, d)
    rect(ctx, 7, 15, 18, 1, c)
    line(ctx, 15, 15, 25, 15, '#e8e8e0', 1)
    ctx.strokeStyle = c; ctx.lineWidth = 3
    ctx.beginPath(); ctx.arc(14, 15, 10, -Math.PI * 0.4, Math.PI * 0.4); ctx.stroke()
    rect(ctx, 10, 18, 4, 7, d)
    rect(ctx, 11, 18, 2, 7, c)
    line(ctx, 20, 8, 26, 22, '#c8a86a', 1)
  },
  trident(ctx, item) {
    const c = item.icon.color, d = item.icon.dark || dark(c)
    line(ctx, 16, 8, 16, 26, c, 3)
    line(ctx, 16, 4, 16, 10, c, 2)
    line(ctx, 9, 5, 9, 11, c, 2)
    line(ctx, 23, 5, 23, 11, c, 2)
    line(ctx, 9, 10, 16, 12, c, 2)
    line(ctx, 23, 10, 16, 12, c, 2)
    line(ctx, 9, 22, 16, 24, d, 2)
    px(ctx, 15, 3, light(c, 1.4), 2)
  },
  mace(ctx, item) {
    const c = item.icon.color
    line(ctx, 14, 28, 19, 14, '#6a4a2a', 3)
    rect(ctx, 14, 4, 10, 10, dark(c, 0.6))
    rect(ctx, 15, 5, 8, 8, c)
    rect(ctx, 16, 6, 2, 2, light(c, 1.3))
    rect(ctx, 19, 9, 2, 2, light(c, 1.2))
  },
  shield(ctx, item) {
    const c = item.icon.color, d = item.icon.dark || dark(c)
    poly(ctx, [[8, 5], [24, 5], [24, 17], [16, 27], [8, 17]], d)
    poly(ctx, [[9, 6], [23, 6], [23, 16], [16, 25], [9, 16]], c)
    poly(ctx, [[14, 8], [18, 8], [18, 18], [16, 21], [14, 18]], '#9a9a9a')
    line(ctx, 10, 8, 22, 8, light(c, 1.3), 1)
  },
  shears(ctx) {
    line(ctx, 8, 24, 22, 8, '#c8c8c8', 3)
    line(ctx, 24, 24, 10, 8, '#a8a8a8', 3)
    circle(ctx, 7, 26, 3, '#d8d8d8'); circle(ctx, 25, 26, 3, '#d8d8d8')
    px(ctx, 13, 15, '#6a6a6a', 2)
  },
  rod(ctx, item) {
    const c = item.icon.color
    line(ctx, 8, 25, 23, 6, c, 2)
    ctx.strokeStyle = '#e8e8e0'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(23, 6); ctx.quadraticCurveTo(28, 18, 22, 26); ctx.stroke()
    px(ctx, 22, 26, '#d8d8d8', 2)
  },
  flint(ctx) {
    poly(ctx, [[6, 12], [14, 6], [20, 12], [16, 22], [7, 20]], '#5a5a5a')
    poly(ctx, [[8, 13], [14, 8], [18, 13], [15, 20], [9, 18]], '#7a7a7a')
    line(ctx, 18, 8, 25, 20, '#c8c8c8', 2)
    rect(ctx, 17, 20, 8, 3, '#9a9a9a')
  },
  brush(ctx) {
    line(ctx, 10, 26, 20, 10, '#b08a52', 3)
    rect(ctx, 18, 7, 6, 4, '#8a8a8a')
    for (let i = 0; i < 4; i++) rect(ctx, 19 + i, 11, 1, 6, '#e8d8b8')
  },
  horn(ctx, item) {
    const c = item.icon.color
    ctx.strokeStyle = c; ctx.lineWidth = 5
    ctx.beginPath(); ctx.arc(14, 18, 9, Math.PI * 0.2, Math.PI * 1.2); ctx.stroke()
    ctx.strokeStyle = light(c, 1.2); ctx.lineWidth = 2
    ctx.beginPath(); ctx.arc(14, 18, 9, Math.PI * 0.25, Math.PI * 1.15); ctx.stroke()
    rect(ctx, 21, 15, 5, 9, c)
  },
  elytra(ctx, item) {
    const c = item.icon.color
    poly(ctx, [[5, 8], [16, 13], [16, 26], [7, 21]], c)
    poly(ctx, [[27, 8], [16, 13], [16, 26], [25, 21]], c)
    poly(ctx, [[8, 10], [15, 14], [15, 23], [9, 19]], light(c, 1.15))
    poly(ctx, [[24, 10], [17, 14], [17, 23], [23, 19]], light(c, 1.15))
  },
  bucket(ctx, item) {
    const c = item.icon.color
    poly(ctx, [[9, 11], [23, 11], [21, 26], [11, 26]], dark(c, 0.8))
    poly(ctx, [[10, 12], [22, 12], [20, 24], [12, 24]], c)
    rect(ctx, 9, 11, 14, 2, light(c, 1.2))
    ctx.strokeStyle = '#8a8a8a'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.arc(16, 11, 8, Math.PI, 0); ctx.stroke()
    rect(ctx, 12, 16, 8, 3, 'rgba(255,255,255,0.4)')
  },
  potion(ctx, item) {
    const c = item.icon.color
    rect(ctx, 13, 4, 6, 4, '#d8d8e0')
    rect(ctx, 12, 7, 8, 3, '#b8b8c8')
    circle(ctx, 16, 20, 9, '#d8d8e8')
    ctx.globalCompositeOperation = 'source-atop'
    circle(ctx, 16, 21, 7, c)
    ctx.globalCompositeOperation = 'source-over'
    rect(ctx, 9, 19, 2, 4, 'rgba(255,255,255,0.6)')
    px(ctx, 22, 15, 'rgba(255,255,255,0.5)', 2)
  },
  food(ctx, item) {
    const c = item.icon.color
    if (item.name?.includes('bread')) {
      poly(ctx, [[5, 12], [10, 7], [23, 7], [27, 13], [24, 22], [8, 22]], dark(c, 0.85))
      poly(ctx, [[6, 13], [11, 8], [22, 8], [26, 14], [23, 21], [9, 21]], c)
      for (let i = 0; i < 4; i++) line(ctx, 12 + i * 3, 10, 16 + i * 3, 18, '#b07a3a', 1)
    } else if (item.name?.includes('carrot') || item.name?.includes('potato') || item.name?.includes('beetroot')) {
      poly(ctx, [[14, 7], [20, 7], [22, 14], [16, 26], [11, 14]], c)
      rect(ctx, 15, 4, 3, 4, '#4a8a3a')
      line(ctx, 14, 8, 13, 12, light(c, 1.3), 1)
    } else if (item.name?.includes('cookie')) {
      circle(ctx, 16, 16, 9, dark(c, 0.8)); circle(ctx, 16, 16, 8, c)
      for (const [x, y] of [[12, 13], [19, 12], [16, 19], [21, 18]]) px(ctx, x, y, '#5a3a1a', 2)
    } else {
      const isMeat = /chop|beef|steak|mutton|rabbit|chicken|fish|cod|salmon/.test(item.name || '')
      if (isMeat) {
        circle(ctx, 16, 16, 9, dark(c, 0.75)); circle(ctx, 16, 16, 8, c)
        rect(ctx, 17, 22, 6, 3, '#e8e0d0'); rect(ctx, 22, 23, 3, 2, '#e8e0d0')
        line(ctx, 12, 13, 19, 13, light(c, 1.25), 1)
      } else {
        circle(ctx, 16, 17, 9, dark(c, 0.75)); circle(ctx, 16, 17, 8, c)
        rect(ctx, 15, 5, 2, 6, '#5a3a1a')
        poly(ctx, [[17, 8], [22, 5], [20, 11]], '#4a8a3a')
        rect(ctx, 11, 11, 2, 3, light(c, 1.4))
      }
    }
  },
  fish(ctx, item) {
    const c = item.icon.color
    poly(ctx, [[6, 16], [14, 9], [24, 10], [28, 16], [24, 22], [14, 23]], c)
    poly(ctx, [[6, 16], [2, 10], [2, 22]], dark(c, 0.8))
    circle(ctx, 22, 14, 1.5, '#101010')
    line(ctx, 12, 12, 20, 12, light(c, 1.2), 1)
    poly(ctx, [[15, 9], [18, 4], [20, 10]], dark(c, 0.85))
  },
  ingot(ctx, item) {
    const c = item.icon.color
    poly(ctx, [[7, 12], [23, 10], [27, 20], [10, 24]], dark(c, 0.75))
    poly(ctx, [[8, 13], [22, 11], [25, 19], [11, 22]], c)
    line(ctx, 10, 15, 21, 13, light(c, 1.4), 1)
    line(ctx, 12, 19, 23, 17, dark(c, 0.8), 1)
  },
  nugget(ctx, item) {
    const c = item.icon.color
    poly(ctx, [[10, 14], [18, 10], [24, 16], [20, 23], [12, 21]], c)
    poly(ctx, [[12, 14], [18, 12], [21, 16], [18, 20], [13, 19]], light(c, 1.2))
    px(ctx, 15, 14, '#ffffff')
  },
  gem(ctx, item) {
    const c = item.icon.color
    poly(ctx, [[16, 4], [27, 14], [16, 28], [5, 14]], dark(c, 0.7))
    poly(ctx, [[16, 6], [24, 14], [16, 25], [8, 14]], c)
    poly(ctx, [[16, 6], [20, 14], [16, 25], [12, 14]], light(c, 1.18))
    px(ctx, 14, 9, '#ffffff', 2)
  },
  dust(ctx, item) {
    const c = item.icon.color
    for (const [x, y, r] of [[12, 20, 4], [20, 18, 3], [16, 12, 3], [22, 24, 2], [9, 12, 2]]) {
      circle(ctx, x, y, r, dark(c, 0.8)); circle(ctx, x - 1, y - 1, r - 1, c)
      px(ctx, x - 1, y - 1, light(c, 1.4))
    }
  },
  seeds(ctx, item) {
    const c = item.icon.color
    for (const [x, y] of [[10, 18], [16, 12], [22, 17], [14, 22], [20, 24], [9, 12]]) {
      rect(ctx, x, y, 3, 2, c)
      rect(ctx, x, y, 1, 1, light(c, 1.3))
    }
  },
  disc(ctx, item) {
    const c = item.icon.color
    circle(ctx, 16, 16, 12, '#0a0a0c')
    circle(ctx, 16, 16, 11, '#1a1a1e')
    circle(ctx, 16, 16, 4, c)
    circle(ctx, 16, 16, 1, '#0a0a0c')
    ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(16, 16, 8, 0, Math.PI * 2); ctx.stroke()
    ctx.beginPath(); ctx.arc(16, 16, 6, 0, Math.PI * 2); ctx.stroke()
  },
  compass(ctx, item) {
    circle(ctx, 16, 16, 11, '#6a6a6a'); circle(ctx, 16, 16, 10, item.icon.color)
    circle(ctx, 16, 16, 8, '#3a3a40')
    poly(ctx, [[16, 9], [19, 17], [16, 15], [13, 17]], '#d83a2a')
    poly(ctx, [[16, 23], [13, 15], [16, 17], [19, 15]], '#e8e8e8')
    px(ctx, 16, 16, '#0a0a0c')
  },
  clock(ctx, item) {
    circle(ctx, 16, 16, 11, '#c8a83a'); circle(ctx, 16, 16, 10, item.icon.color)
    circle(ctx, 16, 16, 8, '#f0e8c8')
    line(ctx, 16, 16, 16, 9, '#3a3a40', 2)
    line(ctx, 16, 16, 21, 18, '#3a3a40', 2)
    px(ctx, 16, 16, '#c83a2a', 2)
  },
  map(ctx, item) {
    rect(ctx, 5, 8, 22, 18, '#8a6a3a')
    rect(ctx, 6, 9, 20, 16, item.icon.color)
    line(ctx, 9, 20, 14, 16, '#8a6a4a', 1)
    line(ctx, 16, 20, 23, 12, '#8a6a4a', 1)
    line(ctx, 20, 20, 26, 15, '#b83a2a', 2)
    px(ctx, 12, 12, '#5a8a3a', 2)
  },
  saddle(ctx) {
    poly(ctx, [[6, 14], [12, 10], [22, 12], [26, 18], [20, 22], [10, 20]], '#7a4a22')
    poly(ctx, [[8, 15], [14, 12], [22, 14], [23, 18], [18, 20], [11, 18]], '#a06a3a')
    rect(ctx, 14, 10, 5, 4, '#5a3a1a')
    rect(ctx, 8, 18, 4, 4, '#3a2a1a')
  },
  tag(ctx) {
    poly(ctx, [[7, 10], [17, 6], [26, 14], [22, 25], [9, 22]], '#c8b88a')
    poly(ctx, [[9, 11], [17, 8], [24, 15], [21, 23], [10, 21]], '#e8d8b0')
    circle(ctx, 20, 12, 2, '#8a7a5a')
    line(ctx, 13, 15, 19, 19, '#8a7a5a', 1)
  },
  lead(ctx) {
    ctx.strokeStyle = '#c8a86a'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.arc(17, 16, 9, 0, Math.PI * 2); ctx.stroke()
    ctx.beginPath(); ctx.arc(12, 8, 4, 0, Math.PI * 2); ctx.stroke()
    rect(ctx, 24, 20, 5, 6, '#8a6a3a')
  },
  totem(ctx, item) {
    const c = item.icon.color
    rect(ctx, 12, 6, 8, 6, c)
    rect(ctx, 13, 7, 6, 4, light(c, 1.15))
    rect(ctx, 14, 8, 1, 2, '#3a3a20'); rect(ctx, 17, 8, 1, 2, '#3a3a20')
    rect(ctx, 10, 12, 12, 5, c)
    rect(ctx, 12, 17, 8, 8, c)
    rect(ctx, 13, 18, 6, 5, light(c, 1.1))
    rect(ctx, 5, 12, 5, 3, c); rect(ctx, 22, 12, 5, 3, c)
    px(ctx, 16, 14, '#3a3a20', 2)
  },
  armor(ctx, item) {
    const c = item.icon.color, d = item.icon.dark || dark(c)
    const piece = item.icon.piece
    if (piece === 'helmet') {
      poly(ctx, [[8, 18], [10, 8], [22, 8], [24, 18], [20, 22], [12, 22]], d)
      poly(ctx, [[9, 17], [11, 9], [21, 9], [23, 17], [19, 20], [13, 20]], c)
      rect(ctx, 12, 14, 8, 4, '#2a2a2e')
      rect(ctx, 14, 15, 2, 2, '#6ae8ff'); rect(ctx, 18, 15, 2, 2, '#6ae8ff')
      line(ctx, 11, 10, 13, 10, light(c, 1.3), 1)
    } else if (piece === 'chestplate') {
      poly(ctx, [[11, 5], [21, 5], [26, 10], [23, 24], [9, 24], [6, 10]], d)
      poly(ctx, [[12, 6], [20, 6], [24, 11], [21, 23], [11, 23], [8, 11]], c)
      rect(ctx, 14, 9, 4, 12, dark(c, 0.85))
      line(ctx, 10, 8, 12, 8, light(c, 1.3), 1)
      rect(ctx, 6, 10, 5, 4, c); rect(ctx, 21, 10, 5, 4, c)
    } else if (piece === 'leggings') {
      poly(ctx, [[9, 5], [23, 5], [23, 13], [19, 27], [14, 27], [16, 14], [12, 14], [9, 27], [5, 27]], d)
      poly(ctx, [[10, 6], [22, 6], [22, 12], [18, 26], [15, 26], [16, 13], [12, 13], [10, 26], [6, 26]], c)
      rect(ctx, 11, 7, 10, 3, light(c, 1.15))
    } else {
      poly(ctx, [[5, 12], [11, 12], [13, 22], [20, 22], [22, 12], [27, 12], [28, 24], [19, 26], [17, 18], [15, 18], [13, 26], [4, 24]], d)
      poly(ctx, [[6, 13], [10, 13], [12, 21], [20, 21], [22, 13], [26, 13], [27, 23], [19, 25], [17, 17], [15, 17], [13, 25], [5, 23]], c)
    }
  },
  arrow(ctx, item) {
    const c = item.icon.color
    line(ctx, 7, 25, 25, 7, c, 2)
    poly(ctx, [[25, 7], [27, 12], [21, 11]], '#d8d8d8')
    poly(ctx, [[7, 25], [3, 20], [8, 18]], '#e8e8e0')
    poly(ctx, [[9, 23], [4, 26], [6, 21]], '#c8a86a')
    line(ctx, 11, 21, 14, 24, '#d83a3a', 1)
  },
  egg(ctx, item) {
    const base = item.icon.color, spots = item.icon.spots || light(base, 1.2)
    ctx.save()
    ctx.translate(16, 16)
    ctx.scale(0.8, 1.1)
    circle(ctx, 0, 0, 11, dark(base, 0.75))
    circle(ctx, 0, -1, 10, base)
    ctx.restore()
    for (const [x, y, r] of [[12, 12, 2], [20, 18, 2], [15, 22, 1], [21, 10, 1], [9, 19, 1]]) {
      circle(ctx, x, y, r, spots)
    }
    circle(ctx, 13, 10, 2, 'rgba(255,255,255,0.5)')
  },
  misc(ctx, item) {
    const c = item.icon.color
    line(ctx, 8, 24, 21, 10, dark(c, 0.7), 4)
    line(ctx, 8, 24, 21, 10, c, 2)
    px(ctx, 20, 8, light(c, 1.3), 3)
  }
}

export function getItemIcon(item) {
  if (!item) return ''
  const key = `${item.name || item.display}|${JSON.stringify(item.icon || {})}|${item.blockId || ''}`
  if (cache.has(key)) return cache.get(key)
  let url = ''
  if (item.isBlock && item.block) {
    const canvas = renderBlockIcon(item.block, 64)
    url = canvas.toDataURL()
  } else {
    const { c, ctx } = ctxFor()
    const kind = item.icon?.kind || 'misc'
    const fn = DRAW[kind] || DRAW.misc
    fn(ctx, item)
    url = c.toDataURL()
  }
  cache.set(key, url)
  return url
}

export function getBlockIcon(block, tint = null) {
  if (!block) return ''
  const key = `block:${block.id}:${tint || ''}`
  if (cache.has(key)) return cache.get(key)
  const url = renderBlockIcon(block, 64, tint).toDataURL()
  cache.set(key, url)
  return url
}
