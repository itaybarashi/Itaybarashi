import { readFileSync, writeFileSync } from "node:fs"
import { PNG } from "pngjs"

const src = "/vercel/share/v0-project/public/gravitas-logo.png"
const dst = "/vercel/share/v0-project/public/gravitas-transparent.png"

const png = PNG.sync.read(readFileSync(src))
const { data, width, height } = png

// Flood-fill from the borders to only remove the OUTER white background,
// preserving any white that is inside the figure (e.g. negative space).
const visited = new Uint8Array(width * height)
const isWhite = (i) => data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240

const stack = []
const pushIfBorder = (x, y) => stack.push([x, y])
for (let x = 0; x < width; x++) {
  pushIfBorder(x, 0)
  pushIfBorder(x, height - 1)
}
for (let y = 0; y < height; y++) {
  pushIfBorder(0, y)
  pushIfBorder(width - 1, y)
}

while (stack.length) {
  const [x, y] = stack.pop()
  if (x < 0 || y < 0 || x >= width || y >= height) continue
  const p = y * width + x
  if (visited[p]) continue
  const idx = p << 2
  if (!isWhite(idx)) continue
  visited[p] = 1
  data[idx + 3] = 0 // fully transparent
  stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1])
}

writeFileSync(dst, PNG.sync.write(png))
console.log("[v0] wrote", dst)
