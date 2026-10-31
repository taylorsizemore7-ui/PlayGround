/* Fast seeded value noise with fBm helpers. No allocations in hot paths. */

function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10) }

function hash2(x, y, seed) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(seed | 0, 1442695041)
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}

function hash3(x, y, z, seed) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 1103515245) ^ Math.imul(z | 0, 668265263) ^ Math.imul(seed | 0, 1442695041)
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}

export class Noise {
  constructor(seed = 1) {
    this.seed = seed | 0
  }

  /* 2D value noise, range 0..1 */
  n2(x, y) {
    const xi = Math.floor(x), yi = Math.floor(y)
    const xf = x - xi, yf = y - yi
    const u = fade(xf), v = fade(yf)
    const a = hash2(xi, yi, this.seed)
    const b = hash2(xi + 1, yi, this.seed)
    const c = hash2(xi, yi + 1, this.seed)
    const d = hash2(xi + 1, yi + 1, this.seed)
    const ab = a + (b - a) * u
    const cd = c + (d - c) * u
    return ab + (cd - ab) * v
  }

  /* 3D value noise, range 0..1 */
  n3(x, y, z) {
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z)
    const xf = x - xi, yf = y - yi, zf = z - zi
    const u = fade(xf), v = fade(yf), w = fade(zf)
    const s = this.seed
    const c000 = hash3(xi, yi, zi, s)
    const c100 = hash3(xi + 1, yi, zi, s)
    const c010 = hash3(xi, yi + 1, zi, s)
    const c110 = hash3(xi + 1, yi + 1, zi, s)
    const c001 = hash3(xi, yi, zi + 1, s)
    const c101 = hash3(xi + 1, yi, zi + 1, s)
    const c011 = hash3(xi, yi + 1, zi + 1, s)
    const c111 = hash3(xi + 1, yi + 1, zi + 1, s)
    const x00 = c000 + (c100 - c000) * u
    const x10 = c010 + (c110 - c010) * u
    const x01 = c001 + (c101 - c001) * u
    const x11 = c011 + (c111 - c011) * u
    const y0 = x00 + (x10 - x00) * v
    const y1 = x01 + (x11 - x01) * v
    return y0 + (y1 - y0) * w
  }

  fbm2(x, y, octaves = 4, lacunarity = 2, gain = 0.5) {
    let amp = 1, freq = 1, sum = 0, norm = 0
    for (let i = 0; i < octaves; i++) {
      sum += amp * this.n2(x * freq, y * freq)
      norm += amp
      amp *= gain
      freq *= lacunarity
    }
    return sum / norm
  }

  fbm3(x, y, z, octaves = 3, lacunarity = 2, gain = 0.5) {
    let amp = 1, freq = 1, sum = 0, norm = 0
    for (let i = 0; i < octaves; i++) {
      sum += amp * this.n3(x * freq, y * freq, z * freq)
      norm += amp
      amp *= gain
      freq *= lacunarity
    }
    return sum / norm
  }

  /* Ridged multifractal, great for mountains. */
  ridged2(x, y, octaves = 4) {
    let amp = 1, freq = 1, sum = 0, norm = 0
    for (let i = 0; i < octaves; i++) {
      const n = 1 - Math.abs(this.n2(x * freq, y * freq) * 2 - 1)
      sum += amp * n * n
      norm += amp
      amp *= 0.5
      freq *= 2.05
    }
    return sum / norm
  }
}
