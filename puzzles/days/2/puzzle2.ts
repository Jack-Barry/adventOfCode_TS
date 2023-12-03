import { resolve } from "path"

solution()
async function solution() {
  let sum = 0
  const input = (await Bun.file(resolve(import.meta.dir, 'input.txt')).text()).split('\n')

  for (const line of input) {
    const [title, data] = line.split(': ')
    const gameNumberMatch = title.match(/\d+/)
    if (!gameNumberMatch) {
      continue
    }

    const games = data.split('; ')
    const minCubesMap = {
      'red': 0,
      'green': 0,
      'blue': 0
    }

    for (const game of games) {
      for (const colorStats of game.split(', ')) {
        const countMatch = colorStats.match(/\d+/)
        if (!countMatch) {
          return
        }

        const countMatchValue = countMatch[0]

        const color = colorStats.replace(countMatchValue, '').trim()
        if (parseInt(countMatchValue) > minCubesMap[color as keyof typeof minCubesMap]) {
          minCubesMap[color as keyof typeof minCubesMap] = parseInt(countMatchValue)
        }
      }
    }

    sum += Object.values(minCubesMap).reduce((result, current) => result *= current || 1, 1)
  }

  console.log('answer', sum)
}