/* ============================================================================
   PROCEDURAL MOB MODELS
   Every mob is assembled from boxes, so the game needs no downloaded models.
   Each builder returns a THREE.Group with animatable parts in userData.
   ========================================================================== */
import * as THREE from 'three'

const materialCache = new Map()
function mat(color, opts = {}) {
  const key = `${color}|${opts.emissive || ''}|${opts.transparent || ''}|${opts.opacity ?? 1}`
  if (materialCache.has(key)) return materialCache.get(key)
  const m = new THREE.MeshLambertMaterial({
    color: new THREE.Color(color),
    emissive: opts.emissive ? new THREE.Color(opts.emissive) : 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    flatShading: true
  })
  materialCache.set(key, m)
  return m
}

function pxHex(color, amount) {
  const c = new THREE.Color(color)
  c.offsetHSL(0, 0, amount)
  return `#${c.getHexString()}`
}

function box(color, w, h, d, opts = {}) {
  const geo = new THREE.BoxGeometry(w, h, d)
  const mesh = new THREE.Mesh(geo, mat(color, opts))
  mesh.castShadow = true
  mesh.receiveShadow = true
  return mesh
}

function add(parent, color, w, h, d, x, y, z, opts) {
  const m = box(color, w, h, d, opts)
  m.position.set(x, y, z)
  parent.add(m)
  return m
}

function pivot(parent, x, y, z) {
  const g = new THREE.Group()
  g.position.set(x, y, z)
  parent.add(g)
  return g
}

function eyes(parent, x, y, z, gap, size, color, white = '#f4f3e8') {
  const eyeW = Math.max(0.035, size)
  const eyeH = Math.max(0.04, size * 1.05)
  for (const side of [-1, 1]) {
    const e = add(parent, white, eyeW, eyeH, 0.018, x + side * gap, y, z + 0.002)
    e.material = mat(white, { emissive: white, emissiveIntensity: 0.12 })
    add(parent, color, eyeW * 0.55, eyeH * 0.8, 0.022, x + side * gap + side * 0.004, y - 0.002, z + 0.012, { emissive: color, emissiveIntensity: 0.65 })
  }
}

function mouth(parent, x, y, z, w, h, color = '#2a1a18') {
  const m = add(parent, color, w, h, 0.02, x, y, z + 0.004)
  return m
}

function legPair(root, color, w, h, d, x, y, z, front = true) {
  const out = []
  for (const side of [-1, 1]) {
    const hip = pivot(root, x * side, y, z)
    add(hip, color, w, h, d, 0, -h / 2, 0)
    out.push(hip)
  }
  return out
}

function wingPair(root, color, w, h, d, x, y, z, accent) {
  const wings = []
  for (const side of [-1, 1]) {
    const p = pivot(root, x * side, y, z)
    const wm = add(p, color, w, h, d, side * w / 2, 0, 0)
    if (accent) add(p, accent, w * 0.55, h * 0.16, d * 1.04, side * w * 0.3, -h * 0.18, 0)
    p.userData.side = side
    wings.push(p)
  }
  return wings
}

function makeBiped(root, M, o = {}) {
  const c = M.colors
  const H = M.height, W = Math.max(0.42, M.width)
  const legH = H * (o.legH || 0.42), bodyH = H * (o.bodyH || 0.34), headS = H * (o.headS || 0.19)
  const legs = legPair(root, c.limb, W * 0.23, legH, W * 0.26, W * 0.2, legH, 0)
  const body = add(root, o.bodyColor || c.body, W * 0.68, bodyH, W * 0.4, 0, legH + bodyH / 2, 0)
  const head = pivot(root, 0, legH + bodyH + headS * 0.46, 0)
  const headBox = add(head, o.headColor || c.head, W * 0.58, headS, W * 0.55, 0, 0, 0)
  const arms = []
  for (const side of [-1, 1]) {
    const sh = pivot(root, side * (W * 0.42), legH + bodyH - 0.02, 0)
    add(sh, o.armColor || c.head, W * 0.16, bodyH * 0.94, W * 0.18, 0, -bodyH * 0.44, 0)
    arms.push(sh)
  }
  eyes(head, 0, headS * 0.08, W * 0.285, W * 0.14, headS * 0.2, c.eye)
  root.userData.parts = { legs, arms, head, body, headBox }
  return root.userData.parts
}

function makeQuadruped(root, M, o = {}) {
  const c = M.colors
  const W = Math.max(0.5, M.width), H = M.height
  const legH = H * (o.legH || 0.4)
  const bodyH = H * (o.bodyH || 0.28)
  const bodyD = H * (o.bodyD || 0.72)
  const body = add(root, c.body, W * 0.92, bodyH, bodyD, 0, legH + bodyH / 2, 0)
  const head = pivot(root, 0, legH + bodyH * 0.9, bodyD * 0.42)
  const hw = W * (o.headW || 0.58), hh = H * (o.headH || 0.23), hd = H * (o.headD || 0.26)
  add(head, c.head, hw, hh, hd, 0, 0, hd * 0.34)
  if (o.snout !== false) add(head, c.accent, hw * 0.55, hh * 0.34, hd * 0.48, 0, -hh * 0.24, hd * 0.84)
  eyes(head, 0, hh * 0.12, hd * 0.86, hw * 0.24, hh * 0.17, c.eye)
  const legs = [
    ...legPair(root, c.limb, W * 0.18, legH, W * 0.18, W * 0.3, legH, bodyD * 0.33),
    ...legPair(root, c.limb, W * 0.18, legH, W * 0.18, W * 0.3, legH, -bodyD * 0.33)
  ]
  let tail = null
  if (M.flags.tail) {
    tail = pivot(root, 0, legH + bodyH * 0.85, -bodyD * 0.5)
    add(tail, c.limb, W * 0.08, H * 0.18, W * 0.08, 0, H * 0.06, -H * 0.04)
  }
  root.userData.parts = { legs, head, body, tail }
  return root.userData.parts
}

function quadrupedExtras(root, M, parts) {
  const c = M.colors
  if (M.flags.horns) {
    for (const side of [-1, 1]) {
      const h = add(parts.head, c.accent, M.width * 0.07, M.height * 0.12, M.width * 0.07, side * M.width * 0.18, M.height * 0.14, M.height * 0.12)
      h.rotation.z = side * 0.5
    }
  }
  if (M.flags.ears) {
    for (const side of [-1, 1]) add(parts.head, c.head, M.width * 0.11, M.height * 0.1, M.width * 0.05, side * M.width * 0.22, M.height * 0.12, M.height * 0.04)
  }
  if (M.flags.mane) {
    for (let i = 0; i < 4; i++) add(parts.head, c.accent, M.width * 0.07, M.height * 0.11, M.width * 0.07, 0, M.height * 0.17 - i * M.height * 0.04, -M.height * 0.03)
  }
  if (M.flags.saddle) add(parts.body, '#7a3a22', M.width * 0.4, M.height * 0.05, M.height * 0.18, 0, M.height * 0.16, 0)
}

/* ------------------------------------------------------------------ builders */
const BUILDERS = {
  quadruped(root, M) {
    const p = makeQuadruped(root, M)
    quadrupedExtras(root, M, p)
    // patches for cows / mooshrooms
    if (M.id === 'mooshroom') {
      for (const [x, y, z] of [[-0.14, 0.1, 0.2], [0.17, -0.03, -0.15], [0.02, 0.12, -0.25]]) {
        add(p.body, '#d8d0c8', M.width * 0.2, M.height * 0.1, M.width * 0.2, x * M.width, y * M.height, z * M.height)
      }
      add(p.body, '#d83a3a', M.width * 0.12, M.height * 0.08, M.width * 0.12, 0, M.height * 0.18, 0)
    }
    return p
  },
  horse(root, M) {
    const p = makeQuadruped(root, M, { legH: 0.47, bodyH: 0.3, bodyD: 0.82, headH: 0.2, headD: 0.34, snout: false })
    const c = M.colors
    add(p.head, c.accent, M.width * 0.22, M.height * 0.2, M.height * 0.14, 0, -M.height * 0.02, M.height * 0.16)
    for (const side of [-1, 1]) add(p.head, c.head, M.width * 0.1, M.height * 0.13, M.width * 0.07, side * M.width * 0.2, M.height * 0.1, 0)
    for (let i = 0; i < 4; i++) add(p.head, c.accent, M.width * 0.06, M.height * 0.06, M.width * 0.06, 0, M.height * 0.2 - i * M.height * 0.05, -M.height * 0.04)
    const tail = pivot(root, 0, M.height * 0.68, -M.width * 0.55)
    add(tail, c.accent, M.width * 0.08, M.height * 0.34, M.width * 0.08, 0, -M.height * 0.15, 0)
    p.tail = tail
    if (M.flags.saddle) add(p.body, '#6a3a20', M.width * 0.5, M.height * 0.06, M.height * 0.2, 0, M.height * 0.16, 0)
    return p
  },
  zombie(root, M) {
    const p = makeBiped(root, M, { bodyColor: M.colors.body, headColor: M.colors.head })
    for (const arm of p.arms) arm.rotation.x = -1.25
    add(p.body, M.colors.accent, M.width * 0.42, M.height * 0.08, M.width * 0.42, 0, 0.02, 0)
    return p
  },
  skeleton(root, M) {
    const p = makeBiped(root, M, { bodyH: 0.28, legH: 0.46, bodyColor: M.colors.body, headColor: M.colors.head })
    add(p.body, M.colors.accent, M.width * 0.58, M.height * 0.04, M.width * 0.3, 0, 0.02, 0)
    add(p.body, M.colors.accent, M.width * 0.48, M.height * 0.04, M.width * 0.3, 0, -M.height * 0.06, 0)
    if (M.id === 'wither_skeleton') {
      for (const side of [-1, 1]) add(p.head, '#3a3a40', M.width * 0.08, M.height * 0.1, M.width * 0.08, side * M.width * 0.16, M.height * 0.12, 0)
    }
    return p
  },
  villager(root, M) {
    const p = makeBiped(root, M, { bodyH: 0.38, legH: 0.36, headS: 0.2 })
    const c = M.colors
    add(p.head, c.accent, M.width * 0.2, M.height * 0.12, M.width * 0.16, 0, -M.height * 0.015, M.width * 0.32)
    add(p.body, c.accent, M.width * 0.5, M.height * 0.1, M.width * 0.42, 0, -M.height * 0.08, 0)
    if (M.id === 'wandering_trader') {
      add(p.head, '#b83a3a', M.width * 0.7, M.height * 0.07, M.width * 0.68, 0, M.height * 0.15, 0)
      add(p.head, '#b83a3a', M.width * 0.5, M.height * 0.05, M.width * 0.5, 0, M.height * 0.2, 0)
    }
    return p
  },
  illager(root, M) {
    const p = makeBiped(root, M, { bodyH: 0.4, legH: 0.34, headS: 0.19 })
    const c = M.colors
    add(p.head, c.accent, M.width * 0.2, M.height * 0.1, M.width * 0.16, 0, 0, M.width * 0.32)
    add(p.body, c.accent, M.width * 0.58, M.height * 0.12, M.width * 0.44, 0, -M.height * 0.04, 0)
    if (M.flags.robe) add(root, c.body, M.width * 0.76, M.height * 0.44, M.width * 0.48, 0, M.height * 0.22, 0)
    if (M.id === 'evoker' || M.id === 'illusioner') {
      add(p.head, '#2a2a32', M.width * 0.66, M.height * 0.07, M.width * 0.62, 0, M.height * 0.16, 0)
      add(p.head, '#2a2a32', M.width * 0.46, M.height * 0.1, M.width * 0.44, 0, M.height * 0.22, 0)
    }
    return p
  },
  witch(root, M) {
    const p = makeBiped(root, M, { bodyH: 0.38, legH: 0.36 })
    const c = M.colors
    add(p.head, c.accent, M.width * 0.2, M.height * 0.12, M.width * 0.16, 0, 0, M.width * 0.3)
    add(p.head, '#2a1a2a', M.width * 0.85, M.height * 0.08, M.width * 0.82, 0, M.height * 0.15, 0)
    add(p.head, '#2a1a2a', M.width * 0.55, M.height * 0.14, M.width * 0.55, 0, M.height * 0.23, 0)
    add(p.head, '#2a1a2a', M.width * 0.28, M.height * 0.08, M.width * 0.3, 0, M.height * 0.31, 0)
    return p
  },
  piglin(root, M) {
    const p = makeBiped(root, M, { bodyH: 0.37, legH: 0.37 })
    const c = M.colors
    add(p.head, c.accent, M.width * 0.5, M.height * 0.1, M.width * 0.23, 0, -M.height * 0.03, M.width * 0.3)
    for (const side of [-1, 1]) add(p.head, c.accent, M.width * 0.13, M.height * 0.13, M.width * 0.05, side * M.width * 0.26, M.height * 0.02, 0)
    if (M.id === 'piglin_brute') add(p.head, '#c8a83a', M.width * 0.16, M.height * 0.1, M.width * 0.16, 0, M.height * 0.16, 0)
    return p
  },
  creeper(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.72, H * 0.42, W * 0.6, 0, H * 0.55, 0)
    const head = pivot(root, 0, H * 0.83, 0)
    add(head, c.head, W * 0.76, H * 0.24, W * 0.72, 0, 0, 0)
    eyes(head, 0, H * 0.035, W * 0.36, W * 0.21, W * 0.16, '#101810')
    mouth(head, 0, -H * 0.055, W * 0.366, W * 0.25, H * 0.1, '#101810')
    const legs = []
    for (const x of [-1, 1]) for (const z of [-1, 1]) {
      const p = pivot(root, x * W * 0.23, H * 0.35, z * W * 0.21)
      add(p, c.limb, W * 0.2, H * 0.35, W * 0.2, 0, -H * 0.17, 0)
      legs.push(p)
    }
    root.userData.parts = { legs, head, body }
    return root.userData.parts
  },
  spider(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.66, H * 0.4, W * 0.95, 0, H * 0.55, -W * 0.08)
    const head = pivot(root, 0, H * 0.58, W * 0.46)
    add(head, c.head, W * 0.44, H * 0.3, W * 0.36, 0, 0, 0)
    for (const side of [-1, 1]) {
      for (const i of [0, 1]) add(head, c.eye, W * 0.08, H * 0.1, 0.02, side * W * (0.1 + i * 0.09), H * 0.06 - i * H * 0.04, W * 0.185, { emissive: c.eye, emissiveIntensity: 0.8 })
    }
    const legs = []
    for (const side of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        const p = pivot(root, side * W * 0.28, H * 0.5, W * (0.3 - i * 0.2))
        const seg = add(p, c.limb, W * 0.5, H * 0.07, W * 0.07, side * W * 0.24, -H * 0.04, 0)
        seg.rotation.z = side * -0.25
        p.rotation.y = side * (0.35 + i * 0.18)
        legs.push(p)
      }
    }
    root.userData.parts = { legs, head, body }
    return root.userData.parts
  },
  enderman(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const legs = legPair(root, c.limb, W * 0.17, H * 0.52, W * 0.2, W * 0.18, H * 0.52, 0)
    const body = add(root, c.body, W * 0.54, H * 0.37, W * 0.28, 0, H * 0.7, 0)
    const head = pivot(root, 0, H * 0.94, 0)
    add(head, c.head, W * 0.46, H * 0.18, W * 0.4, 0, 0, 0)
    for (const side of [-1, 1]) add(head, '#d8a8ff', W * 0.14, H * 0.035, 0.02, side * W * 0.11, H * 0.015, W * 0.2, { emissive: '#d8a8ff', emissiveIntensity: 1 })
    const arms = []
    for (const side of [-1, 1]) {
      const p = pivot(root, side * W * 0.33, H * 0.86, 0)
      add(p, c.limb, W * 0.12, H * 0.62, W * 0.12, 0, -H * 0.3, 0)
      arms.push(p)
    }
    root.userData.parts = { legs, head, body, arms }
    return root.userData.parts
  },
  warden(root, M) {
    const p = makeBiped(root, M, { bodyH: 0.36, legH: 0.42, headS: 0.17, armColor: M.colors.body })
    const c = M.colors
    add(p.body, c.accent, M.width * 0.5, M.height * 0.1, M.width * 0.5, 0, M.height * 0.03, 0, { emissive: c.accent, emissiveIntensity: 0.5 })
    for (const side of [-1, 1]) {
      const h = add(p.head, c.accent, M.width * 0.12, M.height * 0.14, M.width * 0.12, side * M.width * 0.2, M.height * 0.12, 0)
      h.rotation.z = side * 0.8
    }
    for (const side of [-1, 1]) for (const i of [0, 1, 2]) {
      add(p.body, c.accent, M.width * 0.07, M.height * 0.08, M.width * 0.07, side * M.width * (0.18 + i * 0.12), M.height * (0.05 - i * 0.01), M.width * 0.24)
    }
    return p
  },
  creaking(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const legs = legPair(root, c.limb, W * 0.15, H * 0.4, W * 0.15, W * 0.18, H * 0.4, 0)
    add(root, c.body, W * 0.52, H * 0.48, W * 0.34, 0, H * 0.64, 0)
    const head = pivot(root, 0, H * 0.93, 0)
    add(head, c.head, W * 0.4, H * 0.15, W * 0.36, 0, 0, 0)
    for (const side of [-1, 1]) add(head, c.eye, W * 0.09, H * 0.03, 0.02, side * W * 0.1, H * 0.01, W * 0.18, { emissive: c.eye, emissiveIntensity: 1 })
    const arms = []
    for (const side of [-1, 1]) {
      const p = pivot(root, side * W * 0.34, H * 0.82, 0)
      add(p, c.limb, W * 0.1, H * 0.55, W * 0.1, 0, -H * 0.27, 0)
      arms.push(p)
    }
    for (let i = 0; i < 3; i++) add(root, c.accent, W * 0.08, H * 0.08, W * 0.08, (i - 1) * W * 0.18, H * 0.98 + i * H * 0.03, -W * 0.03)
    root.userData.parts = { legs, head, arms }
    return root.userData.parts
  },
  golem(root, M) {
    const c = M.colors, W = M.width * 1.2, H = M.height
    const legs = legPair(root, c.limb, W * 0.24, H * 0.38, W * 0.26, W * 0.22, H * 0.38, 0)
    const body = add(root, c.body, W * 0.72, H * 0.36, W * 0.48, 0, H * 0.58, 0)
    const head = pivot(root, 0, H * 0.85, 0)
    add(head, c.head, W * 0.42, H * 0.18, W * 0.38, 0, 0, 0)
    eyes(head, 0, 0, W * 0.19, W * 0.1, H * 0.035, c.eye)
    add(head, c.accent, W * 0.34, H * 0.05, 0.02, 0, -H * 0.06, W * 0.195)
    const arms = []
    for (const side of [-1, 1]) {
      const p = pivot(root, side * W * 0.44, H * 0.7, 0)
      add(p, c.limb, W * 0.2, H * 0.48, W * 0.22, 0, -H * 0.22, 0)
      arms.push(p)
    }
    for (const side of [-1, 1]) add(body, c.accent, W * 0.08, W * 0.08, 0.02, side * W * 0.2, H * 0.04, W * 0.245)
    root.userData.parts = { legs, head, body, arms }
    return root.userData.parts
  },
  snow_golem(root, M) {
    const c = M.colors, W = M.width, H = M.height
    add(root, '#f4f8f8', W * 0.72, H * 0.3, W * 0.68, 0, H * 0.22, 0)
    add(root, '#ffffff', W * 0.56, H * 0.27, W * 0.52, 0, H * 0.52, 0)
    const head = pivot(root, 0, H * 0.79, 0)
    add(head, '#ffffff', W * 0.46, H * 0.25, W * 0.44, 0, 0, 0)
    for (const side of [-1, 1]) add(head, c.eye, W * 0.07, H * 0.04, 0.02, side * W * 0.11, H * 0.03, W * 0.225)
    add(head, '#e8862a', W * 0.1, H * 0.13, W * 0.1, 0, -H * 0.04, W * 0.25)
    for (const side of [-1, 1]) add(root, '#7a5a32', W * 0.08, H * 0.07, W * 0.5, side * W * 0.42, H * 0.55, 0)
    root.userData.parts = { head }
    return root.userData.parts
  },
  copper_golem(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const legs = legPair(root, c.limb, W * 0.19, H * 0.28, W * 0.2, W * 0.17, H * 0.28, 0)
    add(root, c.body, W * 0.58, H * 0.38, W * 0.42, 0, H * 0.48, 0)
    const head = pivot(root, 0, H * 0.75, 0)
    add(head, c.head, W * 0.44, H * 0.2, W * 0.4, 0, 0, 0)
    eyes(head, 0, 0, W * 0.2, W * 0.1, H * 0.05, c.eye, '#f8f8e0')
    add(head, c.accent, W * 0.08, W * 0.08, 0.02, 0, -H * 0.04, W * 0.21)
    for (const side of [-1, 1]) add(head, c.accent, W * 0.08, H * 0.12, W * 0.08, side * W * 0.23, H * 0.1, 0)
    const arms = []
    for (const side of [-1, 1]) {
      const p = pivot(root, side * W * 0.36, H * 0.62, 0)
      add(p, c.limb, W * 0.14, H * 0.36, W * 0.14, 0, -H * 0.17, 0)
      arms.push(p)
    }
    root.userData.parts = { legs, head, arms }
    return root.userData.parts
  },
  ravager(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const legH = H * 0.36
    for (const z of [-1, 1]) for (const x of [-1, 1]) {
      const p = pivot(root, x * W * 0.3, legH, z * W * 0.28)
      add(p, c.limb, W * 0.2, legH, W * 0.2, 0, -legH / 2, 0)
    }
    add(root, c.body, W * 0.82, H * 0.36, W * 1.3, 0, legH + H * 0.18, 0)
    const head = pivot(root, 0, H * 0.62, W * 0.65)
    add(head, c.head, W * 0.6, H * 0.24, W * 0.55, 0, 0, 0)
    for (const side of [-1, 1]) {
      const horn = add(head, c.accent, W * 0.09, H * 0.17, W * 0.09, side * W * 0.2, H * 0.13, 0)
      horn.rotation.z = side * 0.5
    }
    eyes(head, 0, H * 0.03, W * 0.28, W * 0.13, H * 0.045, c.eye)
    add(head, '#3a1a1a', W * 0.38, H * 0.08, 0.03, 0, -H * 0.07, W * 0.28)
    root.userData.parts = { head }
    return root.userData.parts
  },
  hoglin(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const legH = H * 0.35
    for (const z of [-1, 1]) for (const x of [-1, 1]) {
      const p = pivot(root, x * W * 0.28, legH, z * W * 0.3)
      add(p, c.limb, W * 0.18, legH, W * 0.18, 0, -legH / 2, 0)
    }
    add(root, c.body, W * 0.72, H * 0.34, W * 1.1, 0, legH + H * 0.18, 0)
    const head = pivot(root, 0, H * 0.6, W * 0.58)
    add(head, c.head, W * 0.5, H * 0.22, W * 0.42, 0, 0, 0)
    add(head, c.accent, W * 0.28, H * 0.1, W * 0.18, 0, -H * 0.05, W * 0.3)
    eyes(head, 0, H * 0.03, W * 0.215, W * 0.12, H * 0.045, c.eye)
    for (const side of [-1, 1]) {
      const h = add(head, c.accent, W * 0.08, H * 0.15, W * 0.08, side * W * 0.16, H * 0.13, 0)
      h.rotation.z = side * 0.5
    }
    root.userData.parts = { head }
    return root.userData.parts
  },
  llama(root, M) {
    const p = makeQuadruped(root, M, { legH: 0.47, bodyH: 0.24, bodyD: 0.66, headH: 0.15, headD: 0.2 })
    const c = M.colors
    const neck = pivot(root, 0, M.height * 0.7, M.width * 0.3)
    add(neck, c.body, M.width * 0.18, M.height * 0.3, M.width * 0.2, 0, M.height * 0.13, 0)
    p.head.position.y = M.height * 0.9
    p.head.position.z = M.width * 0.47
    for (const side of [-1, 1]) add(p.head, c.head, M.width * 0.1, M.height * 0.13, M.width * 0.06, side * M.width * 0.18, M.height * 0.14, 0)
    if (M.id === 'trader_llama') {
      add(p.body, '#3a6aa8', M.width * 0.6, M.height * 0.06, M.height * 0.4, 0, M.height * 0.13, 0)
      add(p.body, '#c8a83a', M.width * 0.3, M.height * 0.18, M.height * 0.2, 0, M.height * 0.1, 0)
    }
    return p
  },
  goat(root, M) {
    const p = makeQuadruped(root, M, { legH: 0.42, bodyH: 0.3, bodyD: 0.62, headH: 0.2 })
    const c = M.colors
    for (const side of [-1, 1]) {
      const horn = add(p.head, c.accent, M.width * 0.08, M.height * 0.24, M.width * 0.08, side * M.width * 0.16, M.height * 0.19, -M.height * 0.02)
      horn.rotation.x = -0.35
    }
    add(p.head, c.accent, M.width * 0.12, M.height * 0.08, M.width * 0.06, 0, -M.height * 0.06, M.height * 0.13)
    return p
  },
  camel(root, M) {
    const p = makeQuadruped(root, M, { legH: 0.52, bodyH: 0.24, bodyD: 0.7, headH: 0.18, headD: 0.26 })
    const c = M.colors
    add(p.body, c.body, M.width * 0.45, M.height * 0.13, M.width * 0.45, 0, M.height * 0.15, 0)
    add(p.body, c.body, M.width * 0.4, M.height * 0.1, M.width * 0.4, 0, M.height * 0.2, M.width * 0.1)
    for (const side of [-1, 1]) add(p.head, c.head, M.width * 0.09, M.height * 0.1, M.width * 0.05, side * M.width * 0.19, M.height * 0.12, 0)
    if (M.flags.saddle) add(p.body, '#a83a2a', M.width * 0.55, M.height * 0.05, M.height * 0.22, 0, M.height * 0.2, 0)
    return p
  },
  panda(root, M) {
    const p = makeQuadruped(root, M, { legH: 0.34, bodyH: 0.4, bodyD: 0.72, headH: 0.25 })
    const c = M.colors
    add(p.body, '#2a2a2a', M.height * 0.28, M.height * 0.22, M.width * 0.28, M.width * 0.2, M.height * 0.04, 0)
    add(p.body, '#2a2a2a', M.height * 0.22, M.height * 0.2, M.width * 0.22, -M.width * 0.24, M.height * 0.02, 0)
    for (const side of [-1, 1]) add(p.head, '#2a2a2a', M.width * 0.16, M.height * 0.12, 0.02, side * M.width * 0.15, M.height * 0.02, M.width * 0.34)
    return p
  },
  rabbit(root, M) {
    const c = M.colors, W = M.width, H = M.height
    add(root, c.body, W * 0.66, H * 0.36, H * 0.52, 0, H * 0.42, 0)
    const head = pivot(root, 0, H * 0.65, H * 0.25)
    add(head, c.head, W * 0.5, H * 0.34, H * 0.36, 0, 0, 0)
    for (const side of [-1, 1]) {
      const ear = add(head, c.head, W * 0.13, H * 0.38, W * 0.08, side * W * 0.13, H * 0.32, 0)
      ear.rotation.z = side * 0.12
      add(head, c.accent, W * 0.07, H * 0.18, 0.02, side * W * 0.13, H * 0.33, W * 0.05)
    }
    eyes(head, 0, H * 0.03, H * 0.185, W * 0.15, H * 0.06, c.eye)
    add(head, '#e89aa8', W * 0.08, H * 0.05, 0.02, 0, -H * 0.05, H * 0.19)
    const tail = add(root, c.accent, W * 0.18, W * 0.18, W * 0.18, 0, H * 0.4, -H * 0.28)
    root.userData.parts = { head, tail }
    return root.userData.parts
  },
  cat(root, M) {
    const p = makeQuadruped(root, M, { legH: 0.32, bodyH: 0.34, bodyD: 0.56, headH: 0.26, headD: 0.2 })
    const c = M.colors
    for (const side of [-1, 1]) {
      const ear = add(p.head, c.head, M.width * 0.13, M.height * 0.16, M.width * 0.07, side * M.width * 0.18, M.height * 0.17, 0)
      ear.rotation.z = side * 0.1
    }
    eyes(p.head, 0, M.height * 0.02, M.height * 0.105, M.width * 0.14, M.height * 0.045, c.eye, '#f0f0c8')
    add(p.head, c.accent, M.width * 0.18, M.height * 0.07, M.width * 0.1, 0, -M.height * 0.04, M.height * 0.12)
    if (p.tail) p.tail.rotation.x = -0.8
    return p
  },
  canine(root, M) {
    const p = makeQuadruped(root, M, { legH: 0.38, bodyH: 0.28, bodyD: 0.66, headH: 0.22 })
    const c = M.colors
    for (const side of [-1, 1]) add(p.head, c.head, M.width * 0.11, M.height * 0.1, M.width * 0.06, side * M.width * 0.18, M.height * 0.15, 0)
    const tail = pivot(root, 0, M.height * 0.58, -M.width * 0.45)
    const t = add(tail, c.limb, M.width * 0.08, M.height * 0.22, M.width * 0.08, 0, M.height * 0.05, -M.height * 0.08)
    t.rotation.x = -0.6
    p.tail = tail
    return p
  },
  bird(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.6, H * 0.44, W * 0.62, 0, H * 0.46, 0)
    const head = pivot(root, 0, H * 0.72, W * 0.24)
    add(head, c.head, W * 0.36, H * 0.24, W * 0.34, 0, 0, 0)
    add(head, c.accent, W * 0.16, H * 0.07, W * 0.2, 0, -H * 0.03, W * 0.22)
    for (const side of [-1, 1]) add(head, c.eye, W * 0.05, H * 0.04, 0.01, side * W * 0.11, H * 0.04, W * 0.17)
    if (M.id === 'parrot') {
      for (let i = 0; i < 3; i++) add(root, c.accent, W * 0.11, H * 0.22, W * 0.05, (i - 1) * W * 0.1, H * 0.13, -W * 0.3)
    }
    const legs = legPair(root, c.limb, W * 0.09, H * 0.3, W * 0.07, W * 0.12, H * 0.3, 0)
    const wings = wingPair(root, c.head, W * 0.34, H * 0.1, W * 0.5, W * 0.27, H * 0.56, 0, c.accent)
    root.userData.parts = { legs, head, wings, body }
    return root.userData.parts
  },
  bat(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.36, H * 0.36, W * 0.34, 0, H * 0.5, 0)
    const head = pivot(root, 0, H * 0.72, 0)
    add(head, c.head, W * 0.3, H * 0.2, W * 0.28, 0, 0, 0)
    for (const side of [-1, 1]) {
      const ear = add(head, c.limb, W * 0.1, H * 0.18, W * 0.05, side * W * 0.11, H * 0.14, 0)
      ear.rotation.z = side * 0.2
    }
    eyes(head, 0, 0, W * 0.145, W * 0.08, H * 0.03, c.eye)
    const wings = wingPair(root, c.limb, W * 0.9, H * 0.36, W * 0.05, W * 0.55, H * 0.53, 0, c.accent)
    root.userData.parts = { head, wings, body }
    return roots(root, body, head, wings)
  },
  bee(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.62, H * 0.4, W * 0.8, 0, H * 0.5, 0)
    add(body, c.accent, W * 0.62, H * 0.12, W * 0.16, 0, 0, 0)
    add(body, c.accent, W * 0.62, H * 0.12, W * 0.16, 0, 0, W * 0.3)
    const head = pivot(root, 0, H * 0.53, W * 0.42)
    add(head, c.head, W * 0.42, H * 0.34, W * 0.3, 0, 0, 0)
    eyes(head, 0, 0, W * 0.155, W * 0.1, H * 0.05, c.eye)
    const wings = wingPair(root, '#e8f8ff', W * 0.44, H * 0.2, W * 0.4, W * 0.3, H * 0.72, 0, null)
    root.userData.parts = { head, wings, body }
    return root.userData.parts
  },
  allay(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.5, H * 0.48, W * 0.4, 0, H * 0.43, 0)
    const head = pivot(root, 0, H * 0.76, 0)
    add(head, c.head, W * 0.42, H * 0.26, W * 0.4, 0, 0, 0)
    eyes(head, 0, 0, W * 0.2, W * 0.11, H * 0.04, c.eye)
    add(head, c.accent, W * 0.12, H * 0.06, W * 0.12, 0, -H * 0.06, 0)
    const wings = wingPair(root, '#d8f4ff', W * 0.6, H * 0.24, W * 0.12, W * 0.3, H * 0.62, 0, '#8ecde8', { emissive: '#a8e0ff', emissiveIntensity: 0.25 })
    root.userData.parts = { head, wings, body }
    return root.userData.parts
  },
  vex(root, M) {
    const p = BUILDERS.allay(root, M)
    p.body.material = mat(M.colors.body, { transparent: true, opacity: 0.9 })
    return p
  },
  phantom(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.36, H * 0.34, W * 0.8, 0, H * 0.5, 0)
    const head = pivot(root, 0, H * 0.55, W * 0.45)
    add(head, c.head, W * 0.32, H * 0.22, W * 0.3, 0, 0, 0)
    eyes(head, 0, 0, W * 0.15, W * 0.08, H * 0.03, c.eye, '#c8ffdf')
    const wings = wingPair(root, c.limb, W * 1.1, H * 0.5, W * 0.05, W * 0.65, H * 0.58, 0, c.accent)
    root.userData.parts = { head, wings, body }
    return root.userData.parts
  },
  ghast(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.95, H * 0.72, W * 0.9, 0, H * 0.55, 0)
    const head = pivot(root, 0, H * 0.48, 0)
    for (const side of [-1, 1]) add(head, c.eye, W * 0.1, H * 0.08, 0.03, side * W * 0.22, H * 0.06, W * 0.46, { emissive: '#e8e8e8', emissiveIntensity: 0.6 })
    add(head, '#3a1a1a', W * 0.36, H * 0.09, 0.03, 0, -H * 0.13, W * 0.46)
    const tentacles = []
    for (let i = 0; i < 6; i++) {
      const p = pivot(root, (i - 2.5) * W * 0.1, H * 0.24, 0)
      add(p, c.limb, W * 0.08, H * 0.3, W * 0.08, 0, -H * 0.14, 0)
      tentacles.push(p)
    }
    root.userData.parts = { head, tentacles, body }
    return root.userData.parts
  },
  happy_ghast(root, M) {
    const p = BUILDERS.ghast(root, M)
    const c = M.colors, W = M.width, H = M.height
    for (const side of [-1, 1]) {
      add(p.head, '#d8d8d8', W * 0.16, H * 0.1, 0.03, side * W * 0.22, H * 0.1, W * 0.47)
      add(p.head, '#8ac8d8', W * 0.1, H * 0.04, 0.04, side * W * 0.22, H * 0.1, W * 0.485)
    }
    add(p.head, '#5a3a2a', W * 0.42, H * 0.12, W * 0.06, 0, -H * 0.03, W * 0.47)
    return p
  },
  blaze(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const head = pivot(root, 0, H * 0.7, 0)
    add(head, c.head, W * 0.42, H * 0.22, W * 0.4, 0, 0, 0)
    eyes(head, 0, 0, W * 0.2, W * 0.1, H * 0.04, c.eye || '#f8e86a')
    const rods = []
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2
      const p = pivot(root, Math.cos(a) * W * 0.42, H * 0.5 + (i % 2) * H * 0.08, Math.sin(a) * W * 0.38)
      add(p, i % 2 ? c.accent : '#f8b83a', W * 0.09, H * 0.28, W * 0.09, 0, 0, 0, { emissive: '#f8a83a', emissiveIntensity: 0.7 })
      p.rotation.z = Math.cos(a) * 0.4
      rods.push(p)
    }
    root.userData.parts = { head, rods }
    return root.userData.parts
  },
  breeze(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const head = pivot(root, 0, H * 0.68, 0)
    add(head, c.head, W * 0.44, H * 0.24, W * 0.4, 0, 0, 0)
    eyes(head, 0, 0, W * 0.2, W * 0.1, H * 0.035, c.eye, '#f0e8ff')
    const rods = []
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2
      const p = pivot(root, Math.cos(a) * W * 0.28, H * 0.5, Math.sin(a) * W * 0.28)
      add(p, i % 2 ? c.accent : '#9ae8e0', W * 0.08, H * 0.3, W * 0.08, 0, 0, 0, { emissive: '#8ae8e0', emissiveIntensity: 0.5 })
      rods.push(p)
    }
    const body = add(root, c.body, W * 0.35, H * 0.3, W * 0.32, 0, H * 0.44, 0)
    root.userData.parts = { head, rods, body }
    return root.userData.parts
  },
  squid(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const head = add(root, c.head, W * 0.7, H * 0.55, W * 0.7, 0, H * 0.58, 0)
    eyes(head, 0, 0, W * 0.355, W * 0.16, H * 0.08, c.eye)
    const tentacles = []
    for (let i = 0; i < 6; i++) {
      const p = pivot(root, (i - 2.5) * W * 0.1, H * 0.33, 0)
      add(p, c.limb, W * 0.07, H * 0.35, W * 0.07, 0, -H * 0.17, 0)
      tentacles.push(p)
    }
    root.userData.parts = { head, tentacles }
    return root.userData.parts
  },
  fish(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.4, H * 0.42, W * 0.8, 0, H * 0.5, 0)
    const head = pivot(root, 0, H * 0.5, W * 0.35)
    add(head, c.head, W * 0.32, H * 0.34, W * 0.26, 0, 0, 0)
    eyes(head, 0, H * 0.04, W * 0.135, W * 0.09, H * 0.04, c.eye)
    add(root, c.accent, W * 0.08, H * 0.28, W * 0.3, 0, H * 0.55, -W * 0.42)
    add(root, c.accent, W * 0.06, H * 0.18, W * 0.24, W * 0.2, H * 0.8, 0)
    root.userData.parts = { head, body }
    return root.userData.parts
  },
  pufferfish(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.7, H * 0.7, W * 0.7, 0, H * 0.5, 0)
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2
      add(root, c.accent, W * 0.1, W * 0.1, W * 0.1, Math.cos(a) * W * 0.36, H * 0.5 + Math.sin(a) * H * 0.3, 0)
    }
    eyes(body, 0, H * 0.08, W * 0.355, W * 0.17, H * 0.09, c.eye)
    add(root, c.accent, W * 0.06, H * 0.3, W * 0.25, 0, H * 0.5, -W * 0.38)
    root.userData.parts = { body }
    return root.userData.parts
  },
  turtle(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const legH = H * 0.25
    for (const x of [-1, 1]) for (const z of [-1, 1]) add(root, c.limb, W * 0.2, legH, W * 0.18, x * W * 0.3, legH / 2, z * W * 0.25)
    add(root, c.body, W * 0.72, H * 0.25, W * 0.8, 0, H * 0.35, 0)
    const shell = add(root, c.accent, W * 0.78, H * 0.22, W * 0.86, 0, H * 0.5, 0)
    const head = pivot(root, 0, H * 0.38, W * 0.48)
    add(head, c.head, W * 0.26, H * 0.2, W * 0.28, 0, 0, 0)
    eyes(head, 0, H * 0.03, W * 0.145, W * 0.08, H * 0.035, c.eye)
    root.userData.parts = { head, shell }
    return root.userData.parts
  },
  axolotl(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.4, H * 0.35, W * 0.8, 0, H * 0.45, 0)
    const head = pivot(root, 0, H * 0.47, W * 0.4)
    add(head, c.head, W * 0.36, H * 0.3, W * 0.3, 0, 0, 0)
    eyes(head, 0, H * 0.03, W * 0.155, W * 0.1, H * 0.035, c.eye)
    add(head, '#d85a7a', W * 0.16, H * 0.05, 0.02, 0, -H * 0.06, W * 0.155)
    for (const side of [-1, 1]) {
      for (let i = 0; i < 3; i++) add(head, c.accent, W * 0.04, H * 0.1, W * 0.04, side * W * 0.22, H * 0.1 - i * H * 0.05, 0)
    }
    add(root, c.accent, W * 0.05, H * 0.22, W * 0.28, 0, H * 0.5, -W * 0.4)
    root.userData.parts = { head, body }
    return root.userData.parts
  },
  tadpole(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.32, H * 0.4, W * 0.34, 0, H * 0.45, W * 0.16)
    eyes(body, 0, H * 0.06, W * 0.16, W * 0.09, H * 0.04, c.eye)
    add(root, c.limb, W * 0.05, H * 0.24, W * 0.35, 0, H * 0.4, -W * 0.2)
    root.userData.parts = { body }
    return root.userData.parts
  },
  dolphin(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.34, H * 0.34, W * 1.1, 0, H * 0.5, 0)
    add(root, c.head, W * 0.28, H * 0.27, W * 0.3, 0, H * 0.52, W * 0.58)
    add(root, c.accent, W * 0.16, H * 0.08, W * 0.42, 0, H * 0.46, W * 0.62)
    add(root, c.accent, W * 0.06, H * 0.25, W * 0.25, 0, H * 0.7, 0)
    add(root, c.accent, W * 0.5, H * 0.05, W * 0.24, 0, H * 0.43, -W * 0.2)
    add(root, c.accent, W * 0.55, H * 0.06, W * 0.3, 0, H * 0.44, -W * 0.58)
    for (const side of [-1, 1]) add(body, c.eye, W * 0.05, H * 0.05, 0.02, side * W * 0.14, H * 0.05, W * 0.45)
    root.userData.parts = { body }
    return root.userData.parts
  },
  guardian(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.7, H * 0.6, W * 0.7, 0, H * 0.5, 0)
    const head = pivot(root, 0, H * 0.52, W * 0.35)
    add(head, c.head, W * 0.46, H * 0.4, W * 0.3, 0, 0, 0)
    eyes(head, 0, H * 0.02, W * 0.155, W * 0.11, H * 0.06, c.eye, '#f8d85a')
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2
      add(root, c.accent, W * 0.08, W * 0.08, H * 0.25, Math.cos(a) * W * 0.4, H * 0.5 + Math.sin(a) * H * 0.15, 0)
    }
    const tail = add(root, c.accent, W * 0.1, H * 0.18, W * 0.4, 0, H * 0.45, -W * 0.5)
    root.userData.parts = { head, body, tail }
    return root.userData.parts
  },
  shulker(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const shell = add(root, c.body, W * 0.85, H * 0.6, W * 0.85, 0, H * 0.36, 0)
    const head = pivot(root, 0, H * 0.7, 0)
    add(head, c.head, W * 0.45, H * 0.24, W * 0.45, 0, 0, 0)
    eyes(head, 0, H * 0.02, W * 0.228, W * 0.12, H * 0.04, c.eye)
    for (const x of [-1, 1]) for (const z of [-1, 1]) add(shell, c.accent, W * 0.18, W * 0.18, W * 0.18, x * W * 0.35, H * 0.16, z * W * 0.35)
    root.userData.parts = { head, shell }
    return root.userData.parts
  },
  slime(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = box(c.body, W * 0.9, H * 0.75, W * 0.9, { transparent: true, opacity: 0.82 })
    body.position.y = H * 0.4
    root.add(body)
    eyes(root, 0, H * 0.55, W * 0.455, W * 0.15, H * 0.1, c.eye)
    mouth(root, 0, H * 0.35, W * 0.456, W * 0.2, H * 0.04, '#2a3a2a')
    root.userData.parts = { body }
    return root.userData.parts
  },
  magma(root, M) {
    const p = BUILDERS.slime(root, M)
    for (let i = 0; i < 6; i++) add(p.body, '#f8a83a', M.width * 0.12, M.height * 0.08, M.width * 0.05, (i - 2.5) * M.width * 0.13, M.height * 0.08, M.width * 0.46, { emissive: '#f8a83a', emissiveIntensity: 0.7 })
    return p
  },
  silverfish(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.38, H * 0.28, W * 0.7, 0, H * 0.4, 0)
    const head = add(root, c.head, W * 0.3, H * 0.26, W * 0.26, 0, H * 0.42, W * 0.45)
    for (const side of [-1, 1]) add(head, c.eye, W * 0.045, H * 0.03, 0.01, side * W * 0.08, H * 0.02, W * 0.13)
    for (let i = 0; i < 3; i++) {
      add(root, c.limb, W * 0.42, H * 0.04, W * 0.04, 0, H * 0.3, W * (0.18 - i * 0.22))
    }
    root.userData.parts = { body, head }
    return root.userData.parts
  },
  endermite(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const body = add(root, c.body, W * 0.4, H * 0.3, W * 0.72, 0, H * 0.4, 0)
    add(root, c.head, W * 0.3, H * 0.26, W * 0.28, 0, H * 0.43, W * 0.44)
    for (const side of [-1, 1]) add(root, c.eye, W * 0.05, H * 0.04, 0.02, side * W * 0.08, H * 0.46, W * 0.44, { emissive: '#d85aff', emissiveIntensity: 0.8 })
    for (let i = 0; i < 3; i++) add(root, c.limb, W * 0.5, H * 0.035, W * 0.04, 0, H * 0.3, W * (0.2 - i * 0.22))
    root.userData.parts = { body }
    return root.userData.parts
  },
  strider(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const legH = H * 0.35
    for (const x of [-1, 1]) for (const z of [-1, 1]) {
      const p = pivot(root, x * W * 0.3, legH, z * W * 0.28)
      add(p, c.limb, W * 0.17, legH, W * 0.17, 0, -legH / 2, 0)
      p.rotation.z = x * 0.15
    }
    add(root, c.body, W * 0.72, H * 0.3, W * 0.85, 0, legH + H * 0.15, 0)
    add(root, c.head, W * 0.46, H * 0.25, W * 0.48, 0, H * 0.7, W * 0.45)
    for (const side of [-1, 1]) add(root, c.eye, W * 0.08, H * 0.06, 0.02, side * W * 0.15, H * 0.72, W * 0.69, { emissive: c.eye, emissiveIntensity: 0.9 })
    for (const side of [-1, 1]) add(root, c.accent, W * 0.12, H * 0.13, W * 0.08, side * W * 0.2, H * 0.78, W * 0.42)
    root.userData.parts = { head: root.children[4] }
    return root.userData.parts
  },
  frog(root, M) {
    const c = M.colors, W = M.width, H = M.height
    add(root, c.body, W * 0.72, H * 0.4, W * 0.7, 0, H * 0.34, 0)
    const head = pivot(root, 0, H * 0.55, W * 0.15)
    add(head, c.head, W * 0.66, H * 0.28, W * 0.5, 0, 0, 0)
    for (const side of [-1, 1]) {
      add(head, c.eye, W * 0.15, H * 0.15, W * 0.15, side * W * 0.23, H * 0.16, 0)
      add(head, '#101010', W * 0.07, H * 0.07, 0.02, side * W * 0.23, H * 0.16, W * 0.08)
    }
    for (const x of [-1, 1]) for (const z of [-1, 1]) add(root, c.limb, W * 0.18, H * 0.16, W * 0.2, x * W * 0.3, H * 0.08, z * W * 0.26)
    root.userData.parts = { head }
    return root.userData.parts
  },
  armadillo(root, M) {
    const c = M.colors, W = M.width, H = M.height
    for (const x of [-1, 1]) for (const z of [-1, 1]) add(root, c.limb, W * 0.16, H * 0.2, W * 0.16, x * W * 0.28, H * 0.1, z * W * 0.25)
    add(root, c.body, W * 0.7, H * 0.35, W * 0.9, 0, H * 0.3, 0)
    for (let i = 0; i < 4; i++) add(root, c.accent, W * 0.72, H * 0.06, W * 0.16, 0, H * 0.47, W * (0.28 - i * 0.19))
    const head = add(root, c.head, W * 0.34, H * 0.22, W * 0.28, 0, H * 0.32, W * 0.5)
    for (const side of [-1, 1]) add(head, c.eye, W * 0.05, H * 0.04, 0.02, side * W * 0.1, H * 0.03, W * 0.14)
    root.userData.parts = { head }
    return root.userData.parts
  },
  sniffer(root, M) {
    const c = M.colors, W = M.width, H = M.height
    const legH = H * 0.32
    for (const x of [-1, 1]) for (const z of [-1, 1]) {
      const p = pivot(root, x * W * 0.32, legH, z * W * 0.32)
      add(p, c.limb, W * 0.24, legH, W * 0.24, 0, -legH / 2, 0)
    }
    add(root, c.body, W * 0.8, H * 0.34, W * 1.15, 0, legH + H * 0.16, 0)
    const head = pivot(root, 0, H * 0.65, W * 0.6)
    add(head, c.head, W * 0.5, H * 0.25, W * 0.4, 0, 0, 0)
    add(head, c.accent, W * 0.3, H * 0.18, W * 0.25, 0, -H * 0.04, W * 0.3)
    eyes(head, 0, H * 0.04, W * 0.205, W * 0.13, H * 0.05, c.eye)
    for (const side of [-1, 1]) add(head, c.accent, W * 0.08, H * 0.18, W * 0.08, side * W * 0.18, H * 0.18, 0)
    root.userData.parts = { head }
    return root.userData.parts
  },
  dragon(root, M) {
    const c = M.colors, W = M.width, H = M.height
    add(root, c.body, W * 0.7, H * 0.42, W * 1.6, 0, H * 0.42, 0)
    const neck = pivot(root, 0, H * 0.52, W * 0.85)
    add(neck, c.head, W * 0.34, H * 0.34, W * 0.6, 0, H * 0.1, W * 0.25)
    add(neck, c.head, W * 0.42, H * 0.36, W * 0.5, 0, H * 0.18, W * 0.48)
    eyes(neck, 0, H * 0.26, W * 0.25, W * 0.1, H * 0.05, '#d84aff', '#f0d0ff')
    for (const side of [-1, 1]) {
      const h = add(neck, c.accent, W * 0.08, H * 0.28, W * 0.08, side * W * 0.18, H * 0.33, W * 0.26)
      h.rotation.z = side * 0.7
    }
    const wings = wingPair(root, c.accent, W * 1.15, H * 0.85, W * 0.08, W * 0.75, H * 0.6, 0, c.limb)
    for (const side of [-1, 1]) {
      const t = pivot(root, 0, H * 0.45, -W * 0.75)
      add(t, c.limb, W * 0.2, H * 0.2, W * 1.2, 0, 0, -W * 0.5)
      t.rotation.y = side * 0.1
    }
    root.userData.parts = { head: neck, wings, body: root.children[0] }
    return root.userData.parts
  },
  wither(root, M) {
    const c = M.colors, W = M.width, H = M.height
    add(root, c.body, W * 0.55, H * 0.42, W * 0.5, 0, H * 0.45, 0)
    for (const side of [-1, 0, 1]) {
      const head = pivot(root, side * W * 0.35, H * 0.8, 0)
      add(head, c.head, W * 0.34, H * 0.24, W * 0.34, 0, 0, 0)
      eyes(head, 0, 0, W * 0.17, W * 0.09, H * 0.04, '#3a6aff', '#c8d8ff')
      for (const s of [-1, 1]) add(head, c.accent, W * 0.08, H * 0.12, W * 0.08, s * W * 0.16, H * 0.15, 0)
    }
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2
      add(root, c.accent, W * 0.1, W * 0.1, W * 0.1, Math.cos(a) * W * 0.3, H * 0.5 + Math.sin(a) * H * 0.18, 0)
    }
    root.userData.parts = { body: root.children[0] }
    return root.userData.parts
  },
  giant(root, M) {
    const p = makeBiped(root, M, { bodyH: 0.4, legH: 0.4, headS: 0.16 })
    return p
  }
}

function roots(root, body, head, wings) {
  root.userData.parts = { body, head, wings }
  return root.userData.parts
}

export function createMobModel(mob) {
  // Generic zombies / skeletons use their own builders where possible.
  const root = new THREE.Group()
  root.name = `mob-${mob.id}`
  let builder = BUILDERS[mob.archetype]
  if (!builder) {
    if (mob.category === 'passive') builder = BUILDERS.quadruped
    else if (mob.flying) builder = BUILDERS.phantom
    else builder = BUILDERS.zombie
  }
  const parts = builder(root, mob) || {}
  root.userData.parts = { ...parts }
  root.userData.mob = mob
  // Face detail, name colouring, and a subtle ground shadow.
  if (!root.userData.parts.head && root.children[0]) root.userData.parts.head = root.children[0]
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(Math.max(0.25, mob.width * 0.6), 12),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.22, depthWrite: false })
  )
  shadow.rotation.x = -Math.PI / 2
  shadow.position.y = 0.012
  shadow.name = 'mob-shadow'
  root.add(shadow)
  root.userData.baseY = 0
  return root
}

/* Small flat head render for the bestiary cards. */
export function drawMobHead(mob, size = 44) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  const c = mob.colors
  const s = size / 44
  ctx.fillStyle = c.head
  ctx.fillRect(8 * s, 8 * s, 28 * s, 26 * s)
  ctx.fillStyle = pxHex(c.head, -0.12)
  ctx.fillRect(8 * s, 30 * s, 28 * s, 4 * s)
  // ears / horns / hats
  ctx.fillStyle = c.limb
  if (mob.flags.ears || mob.archetype === 'cat' || mob.archetype === 'canine') {
    ctx.fillRect(10 * s, 3 * s, 7 * s, 7 * s)
    ctx.fillRect(27 * s, 3 * s, 7 * s, 7 * s)
    ctx.fillStyle = c.accent
    ctx.fillRect(12 * s, 5 * s, 3 * s, 3 * s)
    ctx.fillRect(29 * s, 5 * s, 3 * s, 3 * s)
  }
  if (mob.flags.horns) {
    ctx.fillStyle = c.accent
    ctx.fillRect(6 * s, 4 * s, 5 * s, 8 * s)
    ctx.fillRect(33 * s, 4 * s, 5 * s, 8 * s)
  }
  if (mob.flags.hat) {
    ctx.fillStyle = '#2a1a2a'
    ctx.fillRect(5 * s, 2 * s, 34 * s, 4 * s)
    ctx.fillRect(14 * s, -5 * s, 16 * s, 9 * s)
  }
  if (mob.flags.crown) {
    ctx.fillStyle = '#e8c84a'
    ctx.fillRect(9 * s, 1 * s, 4 * s, 7 * s)
    ctx.fillRect(18 * s, -2 * s, 4 * s, 10 * s)
    ctx.fillRect(27 * s, 1 * s, 4 * s, 7 * s)
  }
  // eyes
  const eye = c.eye
  ctx.fillStyle = '#f4efe0'
  ctx.fillRect(13 * s, 16 * s, 7 * s, 5 * s)
  ctx.fillRect(24 * s, 16 * s, 7 * s, 5 * s)
  ctx.fillStyle = eye
  ctx.fillRect(15 * s, 17 * s, 3 * s, 3 * s)
  ctx.fillRect(26 * s, 17 * s, 3 * s, 3 * s)
  // nose / mouth
  ctx.fillStyle = c.accent
  if (mob.flags.snout || mob.archetype === 'piglin' || mob.archetype === 'hoglin') {
    ctx.fillRect(17 * s, 22 * s, 10 * s, 7 * s)
    ctx.fillStyle = '#3a2a1a'
    ctx.fillRect(19 * s, 25 * s, 2 * s, 2 * s)
    ctx.fillRect(23 * s, 25 * s, 2 * s, 2 * s)
  } else {
    ctx.fillRect(20 * s, 24 * s, 4 * s, 3 * s)
    ctx.fillStyle = '#2a1a18'
    ctx.fillRect(17 * s, 29 * s, 10 * s, 2 * s)
  }
  return canvas
}
