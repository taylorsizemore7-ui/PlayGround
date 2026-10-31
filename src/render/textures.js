/* ============================================================================
   PROCEDURAL PIXEL-ART TEXTURE ATLAS
   Every texture is drawn at 16x16 with a seeded RNG, then packed into a single
   atlas so the whole world renders with one material and very few draw calls.
   ========================================================================== */
import * as THREE from 'three'
import { hashString, mulberry32 } from '../core/rng.js'
import { BLOCKS } from '../data/blocks.js'

const TILE = 32
const SRC = 16
let atlasCanvas = null
let atlasTexture = null
let gridSize = 1
let atlasPixels = 0
const tileMap = new Map()
const tileCanvases = new Map()

/* ------------------------------------------------------------------ colour */
function rgb(hex) {
  const h = hex.replace('#', '')
  const v = h.length === 3 ? h.split('').map(c => c + c).join('') : h.padEnd(6, '0')
  return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)]
}
function hex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('')
}
function shade(color, factor, alpha = 1) {
  const [r, g, b] = rgb(color)
  if (alpha >= 1) return hex(r * factor, g * factor, b * factor)
  return `rgba(${Math.round(r * factor)},${Math.round(g * factor)},${Math.round(b * factor)},${alpha})`
}
function mix(a, b, t) {
  const A = rgb(a), B = rgb(b)
  return hex(A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t)
}

/* ------------------------------------------------------------------ painting */
function makeContext() {
  const canvas = document.createElement('canvas')
  canvas.width = SRC
  canvas.height = SRC
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  return { canvas, ctx }
}
function px(ctx, x, y, color) {
  if (x < 0 || y < 0 || x >= SRC || y >= SRC) return
  ctx.fillStyle = color
  ctx.fillRect(x, y, 1, 1)
}
function rect(ctx, x, y, w, h, color) {
  ctx.fillStyle = color
  ctx.fillRect(x, y, w, h)
}
function noiseFill(ctx, rng, base, amount = 0.1) {
  for (let y = 0; y < SRC; y++) {
    for (let x = 0; x < SRC; x++) {
      const f = 1 + (rng() * 2 - 1) * amount
      px(ctx, x, y, shade(base, f))
    }
  }
}
function speckle(ctx, rng, color, count = 10, size = 1) {
  for (let i = 0; i < count; i++) {
    const x = Math.floor(rng() * SRC), y = Math.floor(rng() * SRC)
    rect(ctx, x, y, size, size, color)
  }
}
function line(ctx, x0, y0, x1, y1, color) {
  let dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0)
  let sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1, err = dx + dy
  for (;;) {
    px(ctx, x0, y0, color)
    if (x0 === x1 && y0 === y1) break
    const e2 = 2 * err
    if (e2 >= dy) { err += dy; x0 += sx }
    if (e2 <= dx) { err += dx; y0 += sy }
  }
}
function blob(ctx, rng, cx, cy, r, color) {
  for (let y = -r; y <= r; y++) {
    for (let x = -r; x <= r; x++) {
      if (x * x + y * y <= r * r + rng() * 0.8) px(ctx, cx + x, cy + y, shade(color, 0.92 + rng() * 0.16))
    }
  }
}
function border(ctx, color) {
  ctx.fillStyle = color
  ctx.fillRect(0, 0, SRC, 1); ctx.fillRect(0, SRC - 1, SRC, 1)
  ctx.fillRect(0, 0, 1, SRC); ctx.fillRect(SRC - 1, 0, 1, SRC)
}
function bevel(ctx, light, dark) {
  ctx.fillStyle = light
  ctx.fillRect(0, 0, SRC, 1); ctx.fillRect(0, 0, 1, SRC)
  ctx.fillStyle = dark
  ctx.fillRect(0, SRC - 1, SRC, 1); ctx.fillRect(SRC - 1, 0, 1, SRC)
}

/* ------------------------------------------------------------------ styles */
const STYLES = {
  stone(ctx, rng, c) {
    const base = c[0] || '#8d8d8d'
    noiseFill(ctx, rng, base, 0.09)
    speckle(ctx, rng, shade(base, 0.84), 12)
    speckle(ctx, rng, shade(base, 1.08), 8)
  },
  mud(ctx, rng, c) {
    const base = c[0] || '#4a3a33'
    noiseFill(ctx, rng, base, 0.12)
    for (let i = 0; i < 10; i++) blob(ctx, rng, Math.floor(rng() * 16), Math.floor(rng() * 16), 1, shade(base, 0.82 + rng() * 0.3))
    speckle(ctx, rng, shade(base, 0.66), 8)
  },
  bricks(ctx, rng, c) {
    const base = c[0] || '#5a9a8a', mortar = c[1] || '#3a6a60'
    rect(ctx, 0, 0, SRC, SRC, mortar)
    for (let row = 0; row < 4; row++) {
      const offset = row % 2 ? 4 : 0
      for (let col = -1; col < 3; col++) {
        const x = col * 8 + offset, y = row * 4
        rect(ctx, x, y, 7, 3, shade(base, 0.86 + rng() * 0.22))
        rect(ctx, x, y, 7, 1, shade(base, 1.12))
        px(ctx, x + 6, y + 2, shade(base, 0.72))
      }
    }
    speckle(ctx, rng, shade(base, 1.16), 6)
  },
  cobble(ctx, rng, c) {
    const base = c[0] || '#8a8a8a', mortar = c[1] || shade(base, 0.7)
    rect(ctx, 0, 0, SRC, SRC, mortar)
    const cells = [[0, 0, 7, 6], [8, 0, 8, 4], [0, 7, 4, 9], [5, 5, 6, 5], [5, 11, 4, 5], [11, 5, 5, 6], [9, 12, 7, 4], [0, 0, 3, 3]]
    for (const [x, y, w, h] of cells) {
      rect(ctx, x, y, w, h, shade(base, 0.86 + rng() * 0.25))
      rect(ctx, x + 1, y + 1, Math.max(1, w - 2), 1, shade(base, 1.1))
      rect(ctx, x + 1, y + h - 2, Math.max(1, w - 2), 1, shade(base, 0.76))
    }
    speckle(ctx, rng, shade(base, 0.7), 10)
  },
  brick(ctx, rng, c) {
    const base = c[0] || '#8d8d8d', mortar = c[1] || '#6f6f6f'
    rect(ctx, 0, 0, SRC, SRC, mortar)
    for (let row = 0; row < 4; row++) {
      const offset = row % 2 ? 4 : 0
      for (let col = -1; col < 3; col++) {
        const x = col * 8 + offset, y = row * 4
        rect(ctx, x, y, 7, 3, shade(base, 0.88 + rng() * 0.2))
        rect(ctx, x, y, 7, 1, shade(base, 1.08))
      }
    }
    speckle(ctx, rng, shade(base, 0.8), 8)
  },
  chisel(ctx, rng, c) {
    const base = c[0] || '#8d8d8d', dark = c[1] || shade(base, 0.72)
    noiseFill(ctx, rng, base, 0.07)
    border(ctx, dark)
    rect(ctx, 2, 2, 12, 12, shade(base, 0.92))
    rect(ctx, 3, 3, 10, 10, base)
    rect(ctx, 4, 4, 8, 8, dark)
    rect(ctx, 5, 5, 6, 6, shade(base, 1.06))
    rect(ctx, 6, 6, 4, 4, dark)
    rect(ctx, 7, 7, 2, 2, shade(base, 1.15))
    speckle(ctx, rng, shade(base, 0.82), 5)
  },
  deepslate(ctx, rng, c) {
    const base = c[0] || '#4a4a50'
    noiseFill(ctx, rng, base, 0.1)
    for (let i = 0; i < 12; i++) {
      const x = Math.floor(rng() * SRC)
      rect(ctx, x, Math.floor(rng() * SRC), 1, 2 + Math.floor(rng() * 3), shade(base, 0.82))
    }
    speckle(ctx, rng, shade(base, 1.14), 5)
  },
  obsidian(ctx, rng, c) {
    const base = c[0] || '#1b1428'
    noiseFill(ctx, rng, base, 0.24)
    speckle(ctx, rng, '#5a3a8a', 9)
    speckle(ctx, rng, '#8a6ab8', 4)
    line(ctx, 2, 12, 12, 3, 'rgba(160,120,220,0.4)')
  },
  ore(ctx, rng, c) {
    const base = c[0] || '#8d8d8d', ore = c[1] || '#f8d83a'
    noiseFill(ctx, rng, base, 0.08)
    speckle(ctx, rng, shade(base, 0.84), 9)
    const clusters = 5
    for (let i = 0; i < clusters; i++) {
      const cx = 2 + Math.floor(rng() * 12), cy = 2 + Math.floor(rng() * 12)
      blob(ctx, rng, cx, cy, rng() < 0.4 ? 2 : 1, ore)
      px(ctx, cx - 1, cy - 1, shade(ore, 1.35))
      px(ctx, cx, cy + 1, shade(ore, 0.7))
    }
  },
  debris(ctx, rng, c) {
    const base = c[0] || '#5a3a30', metal = c[1] || '#8a5a3a'
    noiseFill(ctx, rng, base, 0.14)
    for (let i = 0; i < 7; i++) {
      const x = Math.floor(rng() * 14), y = Math.floor(rng() * 14)
      rect(ctx, x, y, 2 + Math.floor(rng() * 2), 1, shade(metal, 0.8 + rng() * 0.5))
    }
    speckle(ctx, rng, '#2a1a14', 10)
  },
  metal(ctx, rng, c) {
    const base = c[0] || '#c8c8c8'
    noiseFill(ctx, rng, base, 0.05)
    border(ctx, shade(base, 0.72))
    bevel(ctx, shade(base, 1.18), shade(base, 0.76))
    rect(ctx, 2, 2, 12, 12, shade(base, 0.94))
    for (const [x, y] of [[3, 3], [12, 3], [3, 12], [12, 12]]) rect(ctx, x, y, 1, 1, shade(base, 1.25))
    line(ctx, 3, 8, 12, 8, shade(base, 0.86))
  },
  copper(ctx, rng, c) {
    const base = c[0] || '#c06a3c'
    noiseFill(ctx, rng, base, 0.08)
    border(ctx, shade(base, 0.76))
    bevel(ctx, shade(base, 1.12), shade(base, 0.8))
    for (let i = 0; i < 16; i++) {
      const x = Math.floor(rng() * SRC), y = Math.floor(rng() * SRC)
      px(ctx, x, y, rng() < 0.5 ? mix(base, '#4f9a84', 0.7) : shade(base, 0.8))
    }
    rect(ctx, 3, 3, 2, 2, shade(base, 1.2))
    rect(ctx, 11, 11, 2, 2, shade(base, 0.78))
  },
  amethyst(ctx, rng, c) {
    const base = c[0] || '#8a5ac8', accent = c[1] || '#c9a6f0'
    noiseFill(ctx, rng, base, 0.12)
    for (let i = 0; i < 6; i++) {
      const x = Math.floor(rng() * 12), y = Math.floor(rng() * 12)
      const s = 2 + Math.floor(rng() * 4)
      ctx.fillStyle = shade(accent, 0.75 + rng() * 0.5)
      ctx.beginPath(); ctx.moveTo(x, y + s); ctx.lineTo(x + s, y); ctx.lineTo(x + s, y + s); ctx.closePath(); ctx.fill()
    }
    border(ctx, shade(base, 0.7))
  },
  dirt(ctx, rng, c) {
    const base = c[0] || '#8a5a3c'
    noiseFill(ctx, rng, base, 0.13)
    speckle(ctx, rng, shade(base, 0.78), 15)
    speckle(ctx, rng, shade(base, 1.12), 6)
    speckle(ctx, rng, '#5a3a24', 3)
  },
  gravel(ctx, rng, c) {
    const base = c[0] || '#8a8580', dark = c[1] || '#5f5b57'
    noiseFill(ctx, rng, base, 0.14)
    for (let i = 0; i < 16; i++) {
      const x = Math.floor(rng() * SRC), y = Math.floor(rng() * SRC)
      rect(ctx, x, y, 1 + Math.floor(rng() * 2), 1 + Math.floor(rng() * 2), shade(rng() < 0.5 ? base : dark, 0.85 + rng() * 0.3))
    }
  },
  sand(ctx, rng, c) {
    const base = c[0] || '#e0d3a0'
    noiseFill(ctx, rng, base, 0.055)
    speckle(ctx, rng, shade(base, 0.87), 22)
    speckle(ctx, rng, shade(base, 1.08), 10)
  },
  sandstone(ctx, rng, c) {
    const base = c[0] || '#e0d3a0'
    noiseFill(ctx, rng, base, 0.04)
    for (let y = 0; y < SRC; y += 4) rect(ctx, 0, y, SRC, 1, shade(base, 0.88))
    speckle(ctx, rng, shade(base, 0.92), 12)
    speckle(ctx, rng, shade(base, 1.05), 8)
  },
  sandstone_side(ctx, rng, c) {
    const base = c[0] || '#e0d3a0'
    noiseFill(ctx, rng, base, 0.04)
    rect(ctx, 0, 0, SRC, 3, shade(base, 1.06))
    rect(ctx, 0, 12, SRC, 1, shade(base, 0.86))
    speckle(ctx, rng, shade(base, 0.9), 14)
  },
  grass_top(ctx, rng, c) {
    const base = c[0] || '#6d9e46'
    noiseFill(ctx, rng, base, 0.12)
    for (let i = 0; i < 26; i++) {
      const x = Math.floor(rng() * SRC), y = Math.floor(rng() * SRC)
      rect(ctx, x, y, 1, 1, shade(base, 0.75 + rng() * 0.55))
    }
    for (let i = 0; i < 10; i++) {
      const x = Math.floor(rng() * SRC), y = Math.floor(rng() * SRC)
      rect(ctx, x, y, 1, 2, shade(base, 0.82))
    }
  },
  grass_side(ctx, rng, c) {
    const grass = c[0] || '#6d9e46', dirt = c[1] || '#8a5a3c'
    noiseFill(ctx, rng, dirt, 0.12)
    speckle(ctx, rng, shade(dirt, 0.8), 12)
    rect(ctx, 0, 0, SRC, 3, grass)
    for (let x = 0; x < SRC; x++) {
      const h = 2 + Math.floor(rng() * 4)
      rect(ctx, x, 0, 1, h, shade(grass, 0.88 + rng() * 0.24))
    }
    for (let i = 0; i < 10; i++) px(ctx, Math.floor(rng() * SRC), 3 + Math.floor(rng() * 3), shade(grass, 0.9))
  },
  farmland(ctx, rng, c) {
    const base = c[0] || '#6a442e'
    noiseFill(ctx, rng, base, 0.1)
    for (let y = 1; y < SRC; y += 4) rect(ctx, 0, y, SRC, 1, shade(base, 0.78))
    speckle(ctx, rng, shade(base, 1.12), 10)
  },
  snow(ctx, rng, c) {
    const base = c[0] || '#f2f7f8'
    noiseFill(ctx, rng, base, 0.03)
    speckle(ctx, rng, shade(base, 0.92), 14)
    speckle(ctx, rng, '#ffffff', 8)
  },
  ice(ctx, rng, c) {
    const base = c[0] || '#9ed6f0'
    noiseFill(ctx, rng, base, 0.06)
    for (let i = 0; i < 4; i++) line(ctx, Math.floor(rng() * 16), 0, Math.floor(rng() * 16), 15, 'rgba(230,250,255,0.55)')
    speckle(ctx, rng, '#e8faff', 5)
  },
  moss(ctx, rng, c) {
    const base = c[0] || '#5a8a3a'
    noiseFill(ctx, rng, base, 0.16)
    for (let i = 0; i < 12; i++) blob(ctx, rng, Math.floor(rng() * 16), Math.floor(rng() * 16), 1, shade(base, 0.85 + rng() * 0.35))
  },
  sculk(ctx, rng, c) {
    const base = c[0] || '#16363a'
    noiseFill(ctx, rng, base, 0.2)
    for (let i = 0; i < 9; i++) px(ctx, Math.floor(rng() * 16), Math.floor(rng() * 16), rng() < 0.4 ? '#3ac8b8' : shade(base, 0.7))
  },
  sensor(ctx, rng, c) {
    const base = c[0] || '#1b4044'
    noiseFill(ctx, rng, base, 0.18)
    border(ctx, '#0e2428')
    for (let r = 2; r <= 5; r++) {
      ctx.strokeStyle = 'rgba(70,210,200,0.55)'; ctx.beginPath(); ctx.arc(8, 8, r, 0, Math.PI * 2); ctx.stroke()
    }
    rect(ctx, 6, 6, 4, 4, '#5ae8d8')
    rect(ctx, 7, 7, 2, 2, '#c8fff8')
  },
  shrieker(ctx, rng, c) {
    const base = c[0] || '#14333a'
    noiseFill(ctx, rng, base, 0.2)
    for (let i = 0; i < 5; i++) rect(ctx, 4 + i, 10 - i, 8 - i * 2, 1, '#0a1a1e')
    rect(ctx, 5, 5, 6, 6, '#0a1a1e')
    rect(ctx, 6, 6, 4, 4, '#2a8a7a')
    px(ctx, 7, 7, '#8affe8'); px(ctx, 8, 7, '#8affe8')
  },
  bone(ctx, rng, c) {
    const base = c[0] || '#d8d2bd'
    noiseFill(ctx, rng, base, 0.05)
    for (let y = 3; y < 16; y += 5) rect(ctx, 0, y, SRC, 1, shade(base, 0.78))
    for (let x = 2; x < 16; x += 5) rect(ctx, x, 0, 1, SRC, shade(base, 0.86))
  },
  honey(ctx, rng, c) {
    const base = c[0] || '#e8a33a'
    noiseFill(ctx, rng, base, 0.05)
    for (let y = 0; y < 16; y += 4) {
      for (let x = (y / 4) % 2 ? 2 : 0; x < 16; x += 4) {
        rect(ctx, x, y, 3, 3, shade(base, 1.08))
        px(ctx, x + 1, y + 1, shade(base, 0.82))
      }
    }
  },
  slime(ctx, rng, c) {
    const base = c[0] || '#6aa84a'
    noiseFill(ctx, rng, base, 0.08)
    rect(ctx, 3, 3, 6, 3, 'rgba(200,255,170,0.35)')
    rect(ctx, 4, 12, 8, 1, 'rgba(40,100,30,0.4)')
  },
  sponge(ctx, rng, c) {
    const base = c[0] || '#c9c45a'
    noiseFill(ctx, rng, base, 0.07)
    for (let i = 0; i < 26; i++) px(ctx, Math.floor(rng() * 16), Math.floor(rng() * 16), shade(base, 0.62))
  },
  soulsand(ctx, rng, c) {
    const base = c[0] || '#5a4433'
    noiseFill(ctx, rng, base, 0.12)
    for (let i = 0; i < 3; i++) {
      const x = 2 + i * 5, y = 3 + (i % 2) * 5
      rect(ctx, x, y, 3, 2, '#3a2a1e'); px(ctx, x + 1, y + 2, '#2a1a12'); px(ctx, x, y + 2, '#2a1a12')
    }
    speckle(ctx, rng, '#2a1e14', 12)
  },
  netherrack(ctx, rng, c) {
    const base = c[0] || '#6a3030'
    noiseFill(ctx, rng, base, 0.18)
    for (let i = 0; i < 9; i++) line(ctx, Math.floor(rng() * 16), Math.floor(rng() * 16), Math.floor(rng() * 16), Math.floor(rng() * 16), shade(base, 0.68))
    speckle(ctx, rng, shade(base, 1.25), 8)
  },
  basalt(ctx, rng, c) {
    const base = c[0] || '#4a4a50', dark = c[1] || '#303036'
    noiseFill(ctx, rng, base, 0.08)
    for (let x = 0; x < 16; x += 3) rect(ctx, x, 0, 1, 16, dark)
    speckle(ctx, rng, shade(base, 1.15), 5)
  },
  blackstone(ctx, rng, c) {
    const base = c[0] || '#2e2a2e'
    noiseFill(ctx, rng, base, 0.16)
    speckle(ctx, rng, shade(base, 1.3), 8)
    speckle(ctx, rng, '#4a3a6a', 4)
  },
  gilded(ctx, rng, c) {
    const base = c[0] || '#2e2a2e', gold = c[1] || '#e8b83a'
    noiseFill(ctx, rng, base, 0.16)
    for (let i = 0; i < 5; i++) line(ctx, Math.floor(rng() * 16), Math.floor(rng() * 16), Math.floor(rng() * 16), Math.floor(rng() * 16), gold)
    speckle(ctx, rng, shade(gold, 1.2), 5)
  },
  wart(ctx, rng, c) {
    const base = c[0] || '#7a1f2a'
    noiseFill(ctx, rng, base, 0.14)
    for (let i = 0; i < 18; i++) px(ctx, Math.floor(rng() * 16), Math.floor(rng() * 16), shade(base, 0.65))
    speckle(ctx, rng, shade(base, 1.25), 8)
  },
  glow(ctx, rng, c) {
    const base = c[0] || '#e8c85a'
    noiseFill(ctx, rng, base, 0.05)
    for (let i = 0; i < 12; i++) {
      const x = Math.floor(rng() * 14), y = Math.floor(rng() * 14)
      rect(ctx, x, y, 2, 2, shade(base, 0.8 + rng() * 0.45))
      px(ctx, x, y, '#fff8c8')
    }
  },
  magma(ctx, rng, c) {
    const base = c[0] || '#8a3a1a', hot = c[1] || '#f8a83a'
    noiseFill(ctx, rng, base, 0.15)
    for (let i = 0; i < 7; i++) {
      const x = Math.floor(rng() * 16), y = Math.floor(rng() * 16)
      rect(ctx, x, y, 1 + Math.floor(rng() * 3), 1, hot)
      px(ctx, x, y - 1, shade(hot, 1.2))
    }
    speckle(ctx, rng, '#2a0a04', 12)
  },
  lantern(ctx, rng, c) {
    const glow = c[0] || '#e8c85a'
    rect(ctx, 0, 0, 16, 16, shade(glow, 0.45))
    rect(ctx, 3, 2, 10, 12, glow)
    rect(ctx, 4, 3, 8, 10, shade(glow, 1.15))
    rect(ctx, 0, 0, 16, 2, '#3a3a40'); rect(ctx, 0, 14, 16, 2, '#3a3a40')
    rect(ctx, 0, 0, 2, 16, '#3a3a40'); rect(ctx, 14, 0, 2, 16, '#3a3a40')
    rect(ctx, 6, 6, 4, 6, shade(glow, 1.35))
  },
  endstone(ctx, rng, c) {
    const base = c[0] || '#d6d6a8'
    noiseFill(ctx, rng, base, 0.08)
    speckle(ctx, rng, shade(base, 0.85), 18)
    speckle(ctx, rng, shade(base, 1.07), 8)
  },
  purpur(ctx, rng, c) {
    const base = c[0] || '#a86aa8'
    noiseFill(ctx, rng, base, 0.07)
    for (let x = 0; x < 16; x += 5) rect(ctx, x, 0, 1, 16, shade(base, 0.8))
    for (let y = 0; y < 16; y += 5) rect(ctx, 0, y, 16, 1, shade(base, 0.8))
    speckle(ctx, rng, shade(base, 1.16), 6)
  },
  purpur_side(ctx, rng, c) {
    const base = c[0] || '#a86aa8'
    noiseFill(ctx, rng, base, 0.07)
    rect(ctx, 2, 0, 3, 16, shade(base, 0.86))
    rect(ctx, 6, 0, 4, 16, shade(base, 1.08))
    rect(ctx, 11, 0, 3, 16, shade(base, 0.9))
  },
  egg(ctx, rng, c) {
    const base = c[0] || '#2a2a33', spot = c[1] || '#8a5ac8'
    noiseFill(ctx, rng, base, 0.12)
    for (let i = 0; i < 9; i++) blob(ctx, rng, 2 + Math.floor(rng() * 12), 2 + Math.floor(rng() * 12), 1, spot)
    border(ctx, shade(base, 0.6))
  },
  rod(ctx, rng, c) {
    const base = c[0] || '#e8e0d0'
    ctx.clearRect(0, 0, 16, 16)
    rect(ctx, 7, 1, 2, 14, base)
    rect(ctx, 7, 1, 1, 14, shade(base, 1.2))
    rect(ctx, 9, 1, 1, 14, shade(base, 0.75))
    px(ctx, 7, 0, '#ffffff'); px(ctx, 8, 0, '#ffffff')
    for (let y = 3; y < 14; y += 4) px(ctx, 6, y, 'rgba(255,255,255,0.3)')
  },
  sealantern(ctx, rng, c) {
    const base = c[0] || '#b8e8d8'
    noiseFill(ctx, rng, base, 0.05)
    for (let i = 0; i < 14; i++) {
      const x = Math.floor(rng() * 16), y = Math.floor(rng() * 16)
      rect(ctx, x, y, 2, 2, shade(base, 0.79 + rng() * 0.4))
    }
    border(ctx, '#6a9a8a')
    rect(ctx, 6, 6, 4, 4, '#f0fffa')
  },
  coral(ctx, rng, c) {
    const base = c[0] || '#2a6ab8'
    noiseFill(ctx, rng, base, 0.12)
    for (let i = 0; i < 24; i++) blob(ctx, rng, Math.floor(rng() * 16), Math.floor(rng() * 16), 1, shade(base, 0.7 + rng() * 0.65))
    speckle(ctx, rng, shade(base, 1.25), 9)
  },
  wool(ctx, rng, c) {
    const base = c[0] || '#e9ecec', dark = c[1] || shade(base, 0.9)
    noiseFill(ctx, rng, base, 0.04)
    for (let y = 1; y < 16; y += 3) {
      for (let x = (y % 2) ? 0 : 1; x < 16; x += 3) rect(ctx, x, y, 1, 1, dark)
    }
    speckle(ctx, rng, shade(base, 0.94), 8)
  },
  concrete(ctx, rng, c) {
    const base = c[0] || '#888888'
    noiseFill(ctx, rng, base, 0.025)
    speckle(ctx, rng, shade(base, 0.95), 8)
  },
  powder(ctx, rng, c) {
    const base = c[0] || '#888888'
    noiseFill(ctx, rng, base, 0.09)
    speckle(ctx, rng, shade(base, 0.8), 20)
    speckle(ctx, rng, shade(base, 1.15), 12)
  },
  terracotta(ctx, rng, c) {
    const base = c[0] || '#a05a3a', dark = c[1] || shade(base, 0.9)
    noiseFill(ctx, rng, base, 0.045)
    for (let y = 0; y < 16; y += 5) rect(ctx, 0, y, 16, 1, dark)
    speckle(ctx, rng, shade(base, 0.92), 8)
  },
  glazed(ctx, rng, c) {
    const base = c[0] || '#888888', dark = c[1] || shade(base, 0.65)
    rect(ctx, 0, 0, 16, 16, base)
    rect(ctx, 0, 0, 8, 8, shade(base, 1.12))
    rect(ctx, 8, 8, 8, 8, shade(base, 1.08))
    for (let i = 0; i < 8; i++) {
      rect(ctx, i, 8 - i, 1, 1, dark)
      rect(ctx, 15 - i, 8 + i, 1, 1, dark)
    }
    border(ctx, dark)
  },
  glass(ctx, rng, c) {
    const base = c[0] || '#bfe8f0'
    ctx.clearRect(0, 0, 16, 16)
    rect(ctx, 0, 0, 16, 1, shade(base, 0.9, 0.85))
    rect(ctx, 0, 15, 16, 1, shade(base, 0.9, 0.85))
    rect(ctx, 0, 0, 1, 16, shade(base, 0.9, 0.85))
    rect(ctx, 15, 0, 1, 16, shade(base, 0.9, 0.85))
    rect(ctx, 2, 2, 12, 12, shade(base, 1.05, 0.12))
    line(ctx, 3, 12, 11, 4, 'rgba(255,255,255,0.45)')
    line(ctx, 6, 13, 12, 7, 'rgba(255,255,255,0.3)')
    px(ctx, 2, 2, 'rgba(255,255,255,0.8)')
  },
  shulker(ctx, rng, c) {
    const base = c[0] || '#8a6a8a'
    noiseFill(ctx, rng, base, 0.06)
    border(ctx, shade(base, 0.64))
    rect(ctx, 3, 3, 10, 10, shade(base, 1.1))
    rect(ctx, 5, 5, 6, 6, shade(base, 0.9))
    px(ctx, 7, 7, '#f8e85a'); px(ctx, 8, 8, '#f8e85a')
  },
  shulker_side(ctx, rng, c) {
    const base = c[0] || '#8a6a8a', dark = c[1] || shade(base, 0.75)
    noiseFill(ctx, rng, base, 0.06)
    for (let x = 1; x < 16; x += 4) rect(ctx, x, 0, 2, 16, shade(base, 1.08))
    for (let x = 3; x < 16; x += 4) rect(ctx, x, 0, 1, 16, dark)
    rect(ctx, 0, 0, 16, 2, shade(base, 1.15))
    rect(ctx, 0, 14, 16, 2, shade(base, 0.7))
  },
  crafting(ctx, rng, c) {
    const base = c[0] || '#b08a52', dark = c[1] || '#7b5c32'
    noiseFill(ctx, rng, base, 0.04)
    for (let y = 2; y < 15; y += 4) rect(ctx, 0, y, 16, 1, dark)
    for (let x = 2; x < 15; x += 4) rect(ctx, x, 0, 1, 16, dark)
    rect(ctx, 2, 2, 4, 4, shade(base, 1.12))
    rect(ctx, 10, 10, 4, 4, shade(base, 1.12))
    border(ctx, shade(base, 0.65))
  },
  furnace(ctx, rng, c) {
    const base = c[0] || '#8d8d8d', dark = c[1] || '#3a3a3a'
    noiseFill(ctx, rng, base, 0.07)
    border(ctx, shade(base, 0.7))
    rect(ctx, 3, 7, 10, 7, dark)
    rect(ctx, 4, 8, 8, 5, '#1a1a1a')
    rect(ctx, 6, 10, 4, 2, '#e86a1a')
    rect(ctx, 2, 2, 12, 2, shade(base, 1.08))
  },
  chest(ctx, rng, c) {
    const base = c[0] || '#b08a52', dark = c[1] || '#5a3a1a'
    noiseFill(ctx, rng, base, 0.05)
    border(ctx, dark)
    rect(ctx, 0, 6, 16, 1, dark)
    rect(ctx, 7, 6, 2, 5, '#c8a83a')
    rect(ctx, 7, 8, 2, 2, '#8a6a1a')
    for (let x = 1; x < 16; x += 4) rect(ctx, x, 1, 1, 5, shade(base, 0.92))
  },
  barrel(ctx, rng, c) {
    const base = c[0] || '#8a6a3a', dark = c[1] || '#5a3a1a'
    noiseFill(ctx, rng, base, 0.05)
    for (let x = 0; x < 16; x += 4) rect(ctx, x, 0, 1, 16, dark)
    rect(ctx, 0, 2, 16, 1, '#4a4a50')
    rect(ctx, 0, 12, 16, 1, '#4a4a50')
    border(ctx, shade(base, 0.7))
  },
  bookshelf(ctx, rng, c) {
    const base = c[0] || '#b08a52', dark = c[1] || '#7b5c32'
    noiseFill(ctx, rng, base, 0.04)
    border(ctx, dark)
    const colors = ['#8a2a2a', '#2a5a8a', '#3a7a3a', '#8a6a2a', '#6a2a6a', '#c8a83a', '#2a7a7a']
    for (const y of [2, 9]) {
      for (let x = 2; x < 14; x += 2) {
        const hgt = 5 + Math.floor(rng() * 2)
        rect(ctx, x, y, 1, hgt, colors[Math.floor(rng() * colors.length)])
      }
    }
  },
  smithing(ctx, rng, c) {
    const base = c[0] || '#4a4a50', wood = c[1] || '#8a6a3a'
    noiseFill(ctx, rng, base, 0.07)
    rect(ctx, 0, 11, 16, 5, wood)
    rect(ctx, 3, 3, 10, 7, '#2a2a30')
    rect(ctx, 5, 5, 6, 3, '#8a8a90')
    rect(ctx, 6, 4, 4, 1, '#c8c8c8')
  },
  loom(ctx, rng, c) {
    const base = c[0] || '#b08a52', dark = c[1] || '#7b5c32'
    noiseFill(ctx, rng, base, 0.04)
    for (let x = 2; x < 16; x += 3) rect(ctx, x, 1, 1, 14, '#e8e0d0')
    rect(ctx, 0, 0, 16, 2, dark)
    rect(ctx, 0, 14, 16, 2, dark)
    for (let x = 0; x < 16; x += 4) rect(ctx, x, 2, 1, 12, shade(base, 0.8))
  },
  stonecutter(ctx, rng, c) {
    const base = c[0] || '#8d8d8d'
    noiseFill(ctx, rng, base, 0.06)
    border(ctx, '#5a5a5a')
    ctx.strokeStyle = '#c8c8c8'; ctx.beginPath(); ctx.arc(8, 8, 4, 0, Math.PI * 2); ctx.stroke()
    rect(ctx, 7, 2, 2, 12, '#9a9a9a')
    rect(ctx, 2, 7, 12, 2, '#9a9a9a')
  },
  anvil(ctx, rng, c) {
    const base = c[0] || '#3a3a40'
    noiseFill(ctx, rng, base, 0.08)
    rect(ctx, 2, 2, 12, 4, '#55555c')
    rect(ctx, 4, 6, 8, 3, shade(base, 0.8))
    rect(ctx, 6, 9, 4, 5, '#4a4a50')
    rect(ctx, 4, 13, 8, 2, '#55555c')
    border(ctx, '#1a1a1e')
  },
  enchant(ctx, rng, c) {
    const base = c[0] || '#2a1a3a', glow = c[1] || '#c88aff'
    noiseFill(ctx, rng, base, 0.1)
    for (let i = 0; i < 12; i++) px(ctx, Math.floor(rng() * 16), Math.floor(rng() * 16), glow)
    line(ctx, 3, 12, 7, 5, glow); line(ctx, 8, 4, 12, 11, glow)
    rect(ctx, 6, 8, 4, 3, 'rgba(200,140,255,0.3)')
    border(ctx, '#120818')
  },
  beacon(ctx, rng, c) {
    const base = c[0] || '#3a8a8a', glow = c[1] || '#c8f0e8'
    rect(ctx, 0, 0, 16, 16, base)
    for (let r = 7; r > 1; r -= 2) {
      ctx.strokeStyle = r % 4 ? glow : 'rgba(200,255,240,0.5)'
      ctx.beginPath(); ctx.arc(8, 8, r, 0, Math.PI * 2); ctx.stroke()
    }
    rect(ctx, 7, 7, 2, 2, '#ffffff')
  },
  anchor(ctx, rng, c) {
    const base = c[0] || '#2a1e40', glow = c[1] || '#c86aff'
    noiseFill(ctx, rng, base, 0.1)
    ctx.strokeStyle = glow; ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(8, 8, 5, 0.4, Math.PI * 1.7); ctx.stroke()
    rect(ctx, 4, 4, 2, 2, glow); rect(ctx, 10, 10, 2, 2, glow)
    rect(ctx, 7, 2, 2, 12, 'rgba(200,120,255,0.5)')
  },
  lodestone(ctx, rng, c) {
    const base = c[0] || '#8d8d8d', dark = c[1] || '#6a5a7a'
    noiseFill(ctx, rng, base, 0.07)
    rect(ctx, 3, 3, 10, 10, dark)
    rect(ctx, 5, 5, 6, 6, shade(base, 1.1))
    rect(ctx, 7, 7, 2, 2, '#c8b8d8')
    border(ctx, shade(base, 0.7))
  },
  jukebox(ctx, rng, c) {
    const base = c[0] || '#5a3a1a', accent = c[1] || '#8a6a3a'
    noiseFill(ctx, rng, base, 0.05)
    border(ctx, '#3a2410')
    rect(ctx, 3, 3, 10, 10, '#1a1a1a')
    for (let r = 3; r <= 5; r += 2) { ctx.strokeStyle = accent; ctx.beginPath(); ctx.arc(8, 8, r, 0, Math.PI * 2); ctx.stroke() }
    rect(ctx, 7, 7, 2, 2, '#c8a83a')
  },
  note(ctx, rng, c) {
    const base = c[0] || '#5a3a1a', accent = c[1] || '#8a6a3a'
    noiseFill(ctx, rng, base, 0.05)
    border(ctx, '#3a2410')
    rect(ctx, 9, 3, 2, 9, '#e8e0d0')
    rect(ctx, 6, 10, 5, 3, '#e8e0d0')
    rect(ctx, 5, 12, 2, 1, '#e8e0d0')
    rect(ctx, 9, 3, 4, 1, '#e8e0d0')
  },
  target(ctx, rng, c) {
    const base = c[0] || '#e8d8c8'
    rect(ctx, 0, 0, 16, 16, base)
    for (let r = 7; r >= 1; r -= 3) {
      ctx.fillStyle = r % 2 ? '#c84a3a' : base
      ctx.beginPath(); ctx.arc(8, 8, r, 0, Math.PI * 2); ctx.fill()
    }
    rect(ctx, 6, 6, 4, 4, '#c84a3a')
    border(ctx, '#8a6a5a')
  },
  target_side(ctx, rng, c) {
    const base = c[0] || '#e8d8c8', red = c[1] || '#c84a3a'
    rect(ctx, 0, 0, 16, 16, base)
    for (let x = 0; x < 16; x += 4) rect(ctx, x, 0, 2, 16, red)
    border(ctx, '#8a6a5a')
  },
  tnt_top(ctx, rng, c) {
    const base = c[0] || '#c83a2a'
    noiseFill(ctx, rng, base, 0.07)
    rect(ctx, 6, 6, 4, 4, '#2a2a2a')
    rect(ctx, 7, 7, 2, 2, '#e8e0d0')
    rect(ctx, 7, 0, 2, 6, '#8a6a3a')
  },
  tnt_side(ctx, rng, c) {
    const base = c[0] || '#c83a2a', band = c[1] || '#e8e0d0'
    noiseFill(ctx, rng, base, 0.05)
    rect(ctx, 0, 6, 16, 5, band)
    // TNT lettering in 3x5 pixel glyphs
    const glyphs = [
      [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [0, 0], [2, 0]],
      [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [3, 0], [3, 4], [5, 0], [5, 4]],
      [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [6, 0], [8, 0]]
    ]
    for (const g of glyphs) for (const [x, y] of g) px(ctx, x + 4, y + 6, '#2a2a2a')
    rect(ctx, 0, 14, 16, 2, shade(base, 0.75))
  },
  lamp(ctx, rng, c) {
    const base = c[0] || '#6a3a2a'
    noiseFill(ctx, rng, base, 0.07)
    for (let y = 2; y < 16; y += 4) {
      for (let x = 2; x < 16; x += 4) {
        rect(ctx, x, y, 3, 3, '#3a1a0a')
        rect(ctx, x + 1, y + 1, 1, 1, '#c86a2a')
      }
    }
  },
  observer(ctx, rng, c) {
    const base = c[0] || '#6a6a70', dark = c[1] || '#3a3a40'
    noiseFill(ctx, rng, base, 0.06)
    border(ctx, dark)
    rect(ctx, 4, 4, 8, 8, '#2a2a30')
    rect(ctx, 6, 6, 4, 4, '#c82a2a')
    rect(ctx, 7, 7, 2, 2, '#ff8a7a')
    px(ctx, 2, 2, '#8a8a90'); px(ctx, 13, 13, '#8a8a90')
  },
  piston(ctx, rng, c) {
    const base = c[0] || '#8a6a3a', plate = c[1] || '#9a9a9a'
    noiseFill(ctx, rng, base, 0.05)
    rect(ctx, 2, 2, 12, 12, plate)
    rect(ctx, 3, 3, 10, 10, shade(plate, 0.86))
    for (let x = 4; x < 13; x += 2) rect(ctx, x, 4, 1, 8, shade(plate, 1.12))
    border(ctx, shade(base, 0.7))
  },
  hopper(ctx, rng, c) {
    const base = c[0] || '#3a3a40'
    noiseFill(ctx, rng, base, 0.08)
    rect(ctx, 0, 0, 16, 4, '#55555c')
    for (let i = 0; i < 4; i++) rect(ctx, i * 2 + 1, 0, 1, 4, shade(base, 1.2))
    rect(ctx, 3, 4, 10, 2, '#2a2a30')
    rect(ctx, 6, 6, 4, 9, '#4a4a50')
    border(ctx, '#1a1a1e')
  },
  cauldron(ctx, rng, c) {
    const base = c[0] || '#3a3a40'
    noiseFill(ctx, rng, base, 0.07)
    border(ctx, '#1a1a1e')
    rect(ctx, 2, 2, 12, 10, '#2a2a30')
    rect(ctx, 4, 3, 8, 7, '#0a0a0c')
    rect(ctx, 4, 3, 8, 1, '#5a5a62')
    rect(ctx, 2, 12, 12, 2, '#4a4a50')
  },
  bell(ctx, rng, c) {
    const base = c[0] || '#c8a83a', dark = c[1] || '#8a6a1a'
    rect(ctx, 0, 0, 16, 16, 'rgba(0,0,0,0)')
    rect(ctx, 5, 2, 6, 2, dark)
    rect(ctx, 4, 4, 8, 7, base)
    rect(ctx, 3, 11, 10, 2, dark)
    rect(ctx, 7, 13, 2, 2, base)
    rect(ctx, 5, 4, 2, 4, shade(base, 1.2))
  },
  campfire(ctx, rng, c) {
    const base = c[0] || '#5a3a1a', fire = c[1] || '#e8a03a'
    noiseFill(ctx, rng, base, 0.08)
    rect(ctx, 1, 9, 14, 3, '#3a2410')
    rect(ctx, 2, 11, 12, 2, '#6a4a2a')
    for (let x = 2; x < 14; x += 3) rect(ctx, x, 9, 2, 2, shade(base, 0.8))
    rect(ctx, 5, 5, 6, 5, fire)
    rect(ctx, 6, 3, 4, 4, shade(fire, 1.2))
    rect(ctx, 7, 1, 2, 4, shade(fire, 1.35))
    rect(ctx, 6, 7, 4, 2, '#fff0a0')
  },
  chain(ctx, rng, c) {
    const base = c[0] || '#3a3a40'
    ctx.clearRect(0, 0, 16, 16)
    for (let y = 0; y < 16; y += 6) {
      rect(ctx, 6, y, 4, 1, base); rect(ctx, 6, y + 1, 1, 4, base)
      rect(ctx, 9, y + 1, 1, 4, base); rect(ctx, 6, y + 5, 4, 1, base)
    }
  },
  pumpkin_top(ctx, rng, c) {
    const base = c[0] || '#d88a2a'
    noiseFill(ctx, rng, base, 0.06)
    for (let r = 7; r > 1; r -= 3) {
      ctx.strokeStyle = shade(base, 0.82); ctx.beginPath(); ctx.arc(8, 8, r, 0, Math.PI * 2); ctx.stroke()
    }
    rect(ctx, 7, 6, 2, 4, '#5a7a2a')
    border(ctx, shade(base, 0.78))
  },
  pumpkin_side(ctx, rng, c) {
    const base = c[0] || '#d88a2a'
    noiseFill(ctx, rng, base, 0.05)
    for (let x = 1; x < 16; x += 4) {
      rect(ctx, x, 0, 2, 16, shade(base, 1.08))
      rect(ctx, x + 2, 0, 1, 16, shade(base, 0.82))
    }
    rect(ctx, 0, 0, 16, 1, shade(base, 0.8))
    rect(ctx, 0, 15, 16, 1, shade(base, 0.8))
  },
  pumpkin_face(ctx, rng, c) {
    const base = c[0] || '#d88a2a', face = c[1] || '#2a1a0a'
    noiseFill(ctx, rng, base, 0.05)
    for (let x = 1; x < 16; x += 4) rect(ctx, x, 0, 2, 16, shade(base, 1.08))
    // eyes
    rect(ctx, 3, 4, 3, 2, face); rect(ctx, 2, 6, 2, 2, face)
    rect(ctx, 10, 4, 3, 2, face); rect(ctx, 12, 6, 2, 2, face)
    // mouth
    rect(ctx, 4, 10, 8, 1, face)
    rect(ctx, 4, 11, 1, 2, face); rect(ctx, 11, 11, 1, 2, face)
    rect(ctx, 6, 11, 1, 1, face); rect(ctx, 9, 11, 1, 1, face)
    rect(ctx, 7, 12, 2, 1, face)
  },
  melon_top(ctx, rng, c) {
    const base = c[0] || '#5a9a3a'
    noiseFill(ctx, rng, base, 0.06)
    rect(ctx, 7, 6, 2, 5, '#6a5a2a')
    for (let x = 0; x < 16; x += 5) rect(ctx, x, 0, 2, 16, shade(base, 0.8))
  },
  melon_side(ctx, rng, c) {
    const base = c[0] || '#5a9a3a', dark = c[1] || '#3a6a2a'
    noiseFill(ctx, rng, base, 0.06)
    for (let x = 0; x < 16; x += 4) {
      rect(ctx, x, 0, 2, 16, shade(base, 0.78))
      rect(ctx, x + 2, 0, 1, 16, dark)
    }
    for (let i = 0; i < 8; i++) px(ctx, Math.floor(rng() * 16), Math.floor(rng() * 16), '#8ac85a')
  },
  hay_top(ctx, rng, c) {
    const base = c[0] || '#c8a83a'
    noiseFill(ctx, rng, base, 0.07)
    for (let r = 7; r > 1; r -= 2) {
      ctx.strokeStyle = shade(base, 0.82); ctx.beginPath(); ctx.arc(8, 8, r, 0, Math.PI * 2); ctx.stroke()
    }
    rect(ctx, 2, 7, 12, 2, '#8a6a1a')
  },
  hay_side(ctx, rng, c) {
    const base = c[0] || '#c8a83a', dark = c[1] || '#a5861a'
    for (let x = 0; x < 16; x++) {
      const h = 8 + Math.floor(rng() * 8)
      rect(ctx, x, 16 - h, 1, h, shade(base, 0.86 + rng() * 0.22))
    }
    rect(ctx, 0, 3, 16, 1, dark); rect(ctx, 0, 12, 16, 1, dark)
  },
  kelp_top(ctx, rng, c) {
    const base = c[0] || '#3a6a3a'
    noiseFill(ctx, rng, base, 0.1)
    rect(ctx, 7, 2, 2, 12, shade(base, 1.2))
  },
  kelp_side(ctx, rng, c) {
    const base = c[0] || '#3a6a3a', dark = c[1] || '#2a4a2a'
    noiseFill(ctx, rng, base, 0.1)
    for (let x = 2; x < 16; x += 4) rect(ctx, x, 0, 2, 16, dark)
    for (let y = 2; y < 16; y += 5) rect(ctx, 0, y, 16, 1, shade(base, 1.15))
  },
  cactus_top(ctx, rng, c) {
    const base = c[0] || '#3a7a2a'
    noiseFill(ctx, rng, base, 0.07)
    rect(ctx, 4, 4, 8, 8, shade(base, 1.12))
    for (const [x, y] of [[2, 2], [13, 2], [2, 13], [13, 13]]) { rect(ctx, x, y, 1, 1, '#e8e0c8'); }
    border(ctx, shade(base, 0.75))
  },
  cactus_side(ctx, rng, c) {
    const base = c[0] || '#3a7a2a', dark = c[1] || '#2a5a1a'
    noiseFill(ctx, rng, base, 0.06)
    for (let x = 0; x < 16; x += 5) rect(ctx, x, 0, 2, 16, dark)
    for (let y = 2; y < 16; y += 4) { rect(ctx, 3, y, 1, 1, '#e8e0c8'); rect(ctx, 11, y + 1, 1, 1, '#e8e0c8') }
  },
  sugarcane(ctx, rng, c) {
    const base = c[0] || '#8ac85a'
    ctx.clearRect(0, 0, 16, 16)
    for (let x = 2; x < 16; x += 5) {
      rect(ctx, x, 0, 2, 16, base)
      rect(ctx, x + 1, 0, 1, 16, shade(base, 0.78))
      for (let y = 0; y < 16; y += 5) rect(ctx, x, y, 2, 1, shade(base, 0.7))
    }
  },
  bamboo(ctx, rng, c) {
    const base = c[0] || '#8ac85a', dark = c[1] || '#5a8a3a'
    ctx.clearRect(0, 0, 16, 16)
    rect(ctx, 5, 0, 6, 16, base)
    rect(ctx, 5, 0, 2, 16, shade(base, 1.15))
    rect(ctx, 9, 0, 2, 16, dark)
    for (let y = 2; y < 16; y += 5) rect(ctx, 4, y, 8, 1, shade(base, 0.7))
  },
  bamboo_top(ctx, rng, c) {
    const base = c[0] || '#8ac85a'
    noiseFill(ctx, rng, base, 0.08)
    rect(ctx, 5, 5, 6, 6, shade(base, 1.15))
    rect(ctx, 7, 7, 2, 2, '#5a8a3a')
  },
  crop(ctx, rng, c) {
    const produce = c[0] || '#d8c85a', stem = c[1] || '#8a9a3a'
    ctx.clearRect(0, 0, 16, 16)
    for (let x = 3; x < 16; x += 5) {
      rect(ctx, x, 4, 1, 12, stem)
      rect(ctx, x - 2, 7, 3, 1, shade(stem, 1.1))
      rect(ctx, x + 1, 10, 3, 1, shade(stem, 0.9))
      rect(ctx, x - 1, 2, 3, 3, produce)
      px(ctx, x, 2, shade(produce, 1.25))
    }
  },
  grassplant(ctx, rng, c) {
    const base = c[0] || '#6a9a3a', dark = c[1] || '#4a7a2a'
    ctx.clearRect(0, 0, 16, 16)
    for (let i = 0; i < 12; i++) {
      const x = 1 + Math.floor(rng() * 14)
      const h = 4 + Math.floor(rng() * 10)
      rect(ctx, x, 15 - h, 1, h, shade(rng() < 0.5 ? base : dark, 0.9 + rng() * 0.25))
    }
    for (let i = 0; i < 6; i++) rect(ctx, 2 + Math.floor(rng() * 12), 3 + Math.floor(rng() * 6), 1, 2, shade(base, 1.15))
  },
  bush(ctx, rng, c) {
    const base = c[0] || '#8a6a3a', dark = c[1] || '#6a4a2a'
    ctx.clearRect(0, 0, 16, 16)
    for (let i = 0; i < 7; i++) {
      const x = 2 + Math.floor(rng() * 12), y = 3 + Math.floor(rng() * 10)
      line(ctx, x, 15, x, y, base)
      line(ctx, x, y, x + 2, y - 2, dark)
    }
    rect(ctx, 1, 13, 14, 2, dark)
  },
  flower(ctx, rng, c) {
    const petal = c[0] || '#d83a2a', stem = c[1] || '#4a8a2a'
    ctx.clearRect(0, 0, 16, 16)
    rect(ctx, 7, 6, 1, 10, stem)
    rect(ctx, 5, 10, 3, 1, shade(stem, 0.9))
    rect(ctx, 8, 11, 3, 1, shade(stem, 0.9))
    const cx = 7, cy = 4
    for (const [x, y] of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) px(ctx, cx + x, cy + y, shade(petal, 0.85 + rng() * 0.35))
    px(ctx, cx, cy, '#f8e8a0')
    if (rng() < 0.5) px(ctx, cx + 1, cy + 1, shade(petal, 1.2))
  },
  mushroom(ctx, rng, c) {
    const cap = c[0] || '#d83a2a', spot = c[1] || '#e8e0d0'
    ctx.clearRect(0, 0, 16, 16)
    rect(ctx, 6, 8, 4, 7, '#d8c8a8')
    rect(ctx, 7, 8, 1, 7, '#f0e0c0')
    rect(ctx, 3, 5, 10, 4, cap)
    rect(ctx, 4, 4, 8, 1, cap)
    rect(ctx, 5, 3, 6, 1, shade(cap, 1.15))
    rect(ctx, 5, 6, 2, 1, spot); rect(ctx, 9, 5, 1, 1, spot); rect(ctx, 7, 7, 1, 1, spot)
  },
  sapling(ctx, rng, c) {
    const leaf = c[0] || '#4f8a2e', bark = c[1] || '#6b5233'
    ctx.clearRect(0, 0, 16, 16)
    rect(ctx, 7, 8, 2, 8, bark)
    for (let y = 2; y < 10; y += 2) {
      rect(ctx, 6 - (y % 3), y, 4 + (y % 3), 1, shade(leaf, 0.9 + rng() * 0.3))
      rect(ctx, 9 - (y % 2), y + 1, 3, 1, shade(leaf, 0.8))
    }
  },
  kelp(ctx, rng, c) {
    const base = c[0] || '#3a7a4a', dark = c[1] || '#2a5a3a'
    ctx.clearRect(0, 0, 16, 16)
    for (let x = 3; x < 16; x += 5) {
      for (let y = 0; y < 16; y += 1) {
        if (y % 4 === 0) rect(ctx, x, y + 1, 2, 2, dark)
        else rect(ctx, x + (y % 2), y, 1, 1, base)
      }
    }
  },
  lily(ctx, rng, c) {
    const base = c[0] || '#3a8a3a', dark = c[1] || '#2a6a2a'
    ctx.clearRect(0, 0, 16, 16)
    ctx.fillStyle = base
    ctx.beginPath(); ctx.arc(8, 8, 6, 0.4, Math.PI * 2 - 0.4); ctx.lineTo(8, 8); ctx.closePath(); ctx.fill()
    ctx.strokeStyle = dark; ctx.beginPath(); ctx.arc(8, 8, 6, 0.4, Math.PI * 2 - 0.4); ctx.stroke()
    px(ctx, 7, 7, '#6ac85a'); px(ctx, 8, 6, '#6ac85a')
  },
  vine(ctx, rng, c) {
    const base = c[0] || '#3a7a2a', dark = c[1] || '#2a5a1a'
    ctx.clearRect(0, 0, 16, 16)
    for (let i = 0; i < 4; i++) {
      const x = 1 + Math.floor(rng() * 14)
      for (let y = 0; y < 16; y += 1) {
        if (rng() < 0.75) rect(ctx, x + (y % 3 === 0 ? 1 : 0), y, 1, 1, shade(rng() < 0.5 ? base : dark, 0.9 + rng() * 0.2))
      }
    }
  },
  lichen(ctx, rng, c) {
    const base = c[0] || '#8ac8b8'
    ctx.clearRect(0, 0, 16, 16)
    for (let i = 0; i < 22; i++) {
      const x = Math.floor(rng() * 16), y = Math.floor(rng() * 16)
      rect(ctx, x, y, 1 + Math.floor(rng() * 2), 1, shade(base, 0.7 + rng() * 0.5, 0.8))
    }
  },
  vein(ctx, rng, c) {
    const base = c[0] || '#1b4a4a', glow = c[1] || '#2a7a6a'
    ctx.clearRect(0, 0, 16, 16)
    for (let i = 0; i < 5; i++) {
      const x = Math.floor(rng() * 16)
      line(ctx, x, 15, x + Math.floor(rng() * 7) - 3, 4 + Math.floor(rng() * 8), base)
      px(ctx, x, 14, glow)
    }
  },
  web(ctx, rng, c) {
    const base = c[0] || '#e8e8e8'
    ctx.clearRect(0, 0, 16, 16)
    ctx.strokeStyle = base
    for (let i = 0; i < 4; i++) {
      ctx.beginPath(); ctx.moveTo(8, 8); ctx.lineTo(i * 5, 0); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(8, 8); ctx.lineTo(16, i * 5); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(8, 8); ctx.lineTo(i * 5, 16); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(8, 8); ctx.lineTo(0, i * 5); ctx.stroke()
    }
    for (let r = 3; r <= 6; r += 3) { ctx.beginPath(); ctx.arc(8, 8, r, 0, Math.PI * 2); ctx.stroke() }
  },
  roots(ctx, rng, c) {
    const base = c[0] || '#8a6a4a', dark = c[1] || '#5a3a2a'
    ctx.clearRect(0, 0, 16, 16)
    for (let i = 0; i < 8; i++) {
      const x = Math.floor(rng() * 16)
      for (let y = 0; y < 16; y += 2) rect(ctx, x + Math.round(Math.sin(y * 0.4 + i) * 2), y, 1, 2, rng() < 0.5 ? base : dark)
    }
  },
  torch(ctx, rng, c) {
    const fire = c[0] || '#e8b83a'
    ctx.clearRect(0, 0, 16, 16)
    rect(ctx, 7, 7, 2, 9, '#8a6a3a')
    rect(ctx, 7, 7, 1, 9, '#a88a5a')
    rect(ctx, 6, 3, 4, 4, fire)
    rect(ctx, 7, 2, 2, 3, shade(fire, 1.25))
    px(ctx, 7, 2, '#fff8d0'); px(ctx, 8, 3, '#fff8d0')
  },
  coral_fan(ctx, rng, c) {
    const base = c[0] || '#2a6ab8'
    ctx.clearRect(0, 0, 16, 16)
    for (let i = 0; i < 8; i++) {
      const x = 2 + Math.floor(rng() * 12)
      line(ctx, 8, 15, x, 2 + Math.floor(rng() * 8), shade(base, 0.8 + rng() * 0.4))
    }
    for (let i = 0; i < 8; i++) px(ctx, Math.floor(rng() * 16), Math.floor(rng() * 14), shade(base, 1.2))
  },
  seapickle(ctx, rng, c) {
    const base = c[0] || '#5a9a5a', glow = c[1] || '#8ac86a'
    rect(ctx, 0, 0, 16, 16, '#1a4a4a')
    for (let i = 0; i < 5; i++) {
      const x = 2 + i * 3
      rect(ctx, x, 4 + (i % 2) * 2, 2, 9 - (i % 2) * 2, base)
      rect(ctx, x, 4 + (i % 2) * 2, 1, 9 - (i % 2) * 2, glow)
      px(ctx, x, 3 + (i % 2) * 2, glow)
    }
  },
  water(ctx, rng, c) {
    const base = c[0] || '#2a6ac8'
    noiseFill(ctx, rng, base, 0.08)
    for (let y = 0; y < 16; y += 4) {
      for (let x = 0; x < 16; x++) {
        if ((x + y) % 7 < 2) px(ctx, x, y + Math.floor(Math.sin(x * 0.6) * 2), shade(base, 1.2))
      }
    }
  },
  lava(ctx, rng, c) {
    const base = c[0] || '#e86a1a', hot = c[1] || '#f8c83a'
    noiseFill(ctx, rng, base, 0.12)
    for (let i = 0; i < 10; i++) {
      const x = Math.floor(rng() * 16), y = Math.floor(rng() * 16)
      rect(ctx, x, y, 2, 1, hot)
      px(ctx, x, y, '#fff0a0')
    }
    speckle(ctx, rng, '#8a1a04', 10)
  },
  planks(ctx, rng, c) {
    const base = c[0] || '#b08a52', dark = c[1] || '#7b5c32'
    noiseFill(ctx, rng, base, 0.045)
    for (let y = 0; y < 16; y += 4) {
      rect(ctx, 0, y, 16, 1, dark)
      const seam = (y === 0 || y === 8) ? 4 : 11
      rect(ctx, seam, y, 1, 4, shade(base, 0.78))
      for (let i = 0; i < 3; i++) rect(ctx, Math.floor(rng() * 16), y + 1 + Math.floor(rng() * 2), 2 + Math.floor(rng() * 4), 1, shade(base, 0.9))
      rect(ctx, 0, y + 3, 16, 1, shade(base, 1.07))
    }
    speckle(ctx, rng, shade(base, 0.86), 5)
  },
  log(ctx, rng, c) {
    const base = c[0] || '#6b5233', dark = c[1] || '#4a3522'
    noiseFill(ctx, rng, base, 0.08)
    for (let x = 0; x < 16; x += 3) {
      const h = 4 + Math.floor(rng() * 12)
      rect(ctx, x, Math.floor(rng() * 4), 1, h, shade(base, 0.8))
    }
    for (let i = 0; i < 6; i++) {
      const x = Math.floor(rng() * 16), y = Math.floor(rng() * 16)
      rect(ctx, x, y, 2, 1, shade(base, 1.15))
    }
    border(ctx, dark)
  },
  log_top(ctx, rng, c) {
    const bark = c[0] || '#6b5233', inner = c[1] || '#b08a52'
    rect(ctx, 0, 0, 16, 16, bark)
    for (let r = 6; r >= 1; r -= 2) {
      ctx.fillStyle = r % 4 ? shade(inner, 0.88) : shade(inner, 1.02)
      ctx.beginPath(); ctx.arc(8, 8, r, 0, Math.PI * 2); ctx.fill()
    }
    px(ctx, 8, 8, shade(inner, 0.75))
    border(ctx, shade(bark, 0.8))
  },
  leaves(ctx, rng, c) {
    const base = c[0] || '#4f8a2e', dark = c[1] || '#3a6b22'
    ctx.clearRect(0, 0, 16, 16)
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const n = rng()
        if (n < 0.06) continue
        px(ctx, x, y, shade(n < 0.5 ? base : dark, 0.82 + rng() * 0.4))
      }
    }
    for (let i = 0; i < 10; i++) rect(ctx, Math.floor(rng() * 15), Math.floor(rng() * 15), 2, 1, shade(base, 1.2))
    for (let i = 0; i < 4; i++) ctx.clearRect(Math.floor(rng() * 16), Math.floor(rng() * 16), 1, 1)
  },
  carpet(ctx, rng, c) {
    const base = c[0] || '#5a8a3a'
    noiseFill(ctx, rng, base, 0.16)
    for (let i = 0; i < 18; i++) rect(ctx, Math.floor(rng() * 15), Math.floor(rng() * 15), 2, 1, shade(base, 0.8 + rng() * 0.4))
  }
}

/* ------------------------------------------------------------------ build atlas */
export function resolveTexSpec(def) {
  const t = def.tex
  if (typeof t === 'string') return { top: t, side: t, bottom: t, front: t, back: t }
  return {
    top: t.top || t.side || t.all,
    side: t.side || t.top || t.all,
    bottom: t.bottom || t.top || t.side || t.all,
    front: t.front || t.side || t.top || t.all,
    back: t.back || t.side || t.top || t.all
  }
}

export function specStyle(spec) { return spec.split(':')[0] }

export function getTileCanvas(spec) {
  return tileCanvases.get(spec) || null
}

export function uvFor(spec) {
  const t = tileMap.get(spec)
  if (!t) return { u0: 0, v0: 0, u1: 1, v1: 1 }
  const inset = 0.35 / atlasPixels
  const w = t.w || TILE
  return {
    u0: t.x / atlasPixels + inset,
    v0: 1 - (t.y + w) / atlasPixels + inset,
    u1: (t.x + w) / atlasPixels - inset,
    v1: 1 - t.y / atlasPixels - inset
  }
}

export function buildAtlas() {
  const specs = new Set()
  for (const b of BLOCKS) {
    const faces = resolveTexSpec(b)
    for (const key of ['top', 'side', 'bottom', 'front', 'back']) if (faces[key]) specs.add(faces[key])
  }
  // Any isolated textures referenced by the UI
  const list = [...specs]
  gridSize = Math.max(1, Math.ceil(Math.sqrt(list.length)))
  atlasPixels = 1024
  const cell = atlasPixels / gridSize
  atlasCanvas = document.createElement('canvas')
  atlasCanvas.width = atlasCanvas.height = atlasPixels
  const actx = atlasCanvas.getContext('2d')
  actx.imageSmoothingEnabled = false
  actx.clearRect(0, 0, atlasPixels, atlasPixels)

  list.forEach((spec, i) => {
    const col = i % gridSize, row = Math.floor(i / gridSize)
    const style = specStyle(spec)
    const colors = spec.split(':').slice(1)
    let tile
    try {
      tile = drawTile(style, colors, hashString(spec))
    } catch (error) {
      console.warn('Texture generation failed for', spec, error)
      tile = fallbackTile(colors[0] || '#ff00ff')
    }
    tileCanvases.set(spec, tile)
    const cellSize = Math.round(cell)
    tileMap.set(spec, { x: Math.round(col * cell), y: Math.round(row * cell), w: cellSize, i })
    actx.drawImage(tile, 0, 0, SRC, SRC, tileMap.get(spec).x, tileMap.get(spec).y, cellSize, cellSize)
  })

  atlasTexture = new THREE.CanvasTexture(atlasCanvas)
  atlasTexture.colorSpace = THREE.SRGBColorSpace
  atlasTexture.magFilter = THREE.NearestFilter
  atlasTexture.minFilter = THREE.NearestFilter
  atlasTexture.generateMipmaps = false
  atlasTexture.wrapS = atlasTexture.wrapT = THREE.ClampToEdgeWrapping
  atlasTexture.needsUpdate = true
  return atlasTexture
}

function drawTile(style, colors, seed) {
  const { canvas, ctx } = makeContext()
  const rng = mulberry32(seed)
  const fn = STYLES[style]
  if (fn) fn(ctx, rng, colors)
  else {
    // Fallback: subtle noise in the requested colour so a missing style is
    // still a usable block instead of a magenta error tile.
    console.warn('Missing texture style:', style)
    noiseFill(ctx, rng, colors[0] || '#888888', 0.08)
  }
  return canvas
}

function fallbackTile(color) {
  const { canvas, ctx } = makeContext()
  rect(ctx, 0, 0, 16, 16, color)
  rect(ctx, 0, 0, 8, 8, '#000000')
  rect(ctx, 8, 8, 8, 8, '#000000')
  return canvas
}

export function getAtlasTexture() { return atlasTexture }
export function getAtlasCanvas() { return atlasCanvas }
export function getAtlasLayout() { return { tile: TILE, pixels: atlasPixels, grid: gridSize } }
export const TILE_STYLES = Object.keys(STYLES)

/* Isometric block icon for inventory/hotbar. */
export function renderBlockIcon(def, size = 64, tint = null) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  const faces = resolveTexSpec(def)
  const topTile = getTileCanvas(faces.top)
  const leftTile = getTileCanvas(faces.front)
  const rightTile = getTileCanvas(faces.side)
  if (!topTile || !leftTile || !rightTile) return canvas
  if (def.shape === 'cross') {
    const tile = getTileCanvas(faces.side)
    if (tile) ctx.drawImage(tile, size * 0.1, size * 0.05, size * 0.8, size * 0.9)
    return canvas
  }
  const w = size * 0.5, h = size * 0.28
  const cx = size / 2, cy = size * 0.47
  // top diamond
  ctx.save()
  ctx.translate(cx, cy - h * 0.9)
  ctx.transform(1, 0.5, -1, 0.5, 0, 0)
  ctx.drawImage(tintTexture(topTile, tint), 0, 0, w, w)
  ctx.restore()
  // left face
  ctx.save()
  ctx.translate(cx, cy)
  ctx.transform(1, 0.5, 0, 1.05, 0, 0)
  ctx.drawImage(tintTexture(leftTile, tint, 0.82), 0, 0, w, w * 1.0)
  ctx.restore()
  // right face
  ctx.save()
  ctx.translate(cx, cy)
  ctx.transform(1, -0.5, 0, 1.05, 0, 0)
  ctx.drawImage(tintTexture(rightTile, tint, 0.68), 0, 0, w, w * 1.0)
  ctx.restore()
  return canvas
}

function tintTexture(tile, tint, shadeFactor = 1) {
  if (!tint && shadeFactor === 1) return tile
  const c = document.createElement('canvas')
  c.width = c.height = SRC
  const ctx = c.getContext('2d')
  ctx.imageSmoothingEnabled = false
  ctx.drawImage(tile, 0, 0)
  if (tint) {
    ctx.globalCompositeOperation = 'multiply'
    ctx.fillStyle = tint
    ctx.fillRect(0, 0, SRC, SRC)
    ctx.globalCompositeOperation = 'destination-in'
    ctx.drawImage(tile, 0, 0)
  }
  if (shadeFactor !== 1) {
    ctx.globalCompositeOperation = 'source-atop'
    ctx.fillStyle = shadeFactor < 1 ? `rgba(0,0,0,${1 - shadeFactor})` : `rgba(255,255,255,${shadeFactor - 1})`
    ctx.fillRect(0, 0, SRC, SRC)
  }
  return c
}
