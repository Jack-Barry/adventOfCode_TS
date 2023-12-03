import { resolve } from "path"

solution()
const limits = {
  'red': 12,
  'green': 13,
  'blue': 14
}
async function solution() {
  const validGameNumbers: number[] = []

  const input = (await Bun.file(resolve(import.meta.dir, 'input.txt')).text()).split('\n')
  for (const line of input) {
    const [title, data] = line.split(': ')
    const gameNumberMatch = title.match(/\d+/)
    if (!gameNumberMatch) {
      continue
    }
    const gameNumber = parseInt(gameNumberMatch[0])
    const games = data.split('; ')
    let isValidGame = true
    for (const game of games) {
      if (!isValidGame) {
        continue
      }

      for (const colorStats of game.split(', ')) {
        if (!isValidGame) {
          continue
        }

        const countMatch = colorStats.match(/\d+/)
        if (!countMatch) {
          return
        }

        const countMatchValue = countMatch[0]

        const color = colorStats.replace(countMatchValue, '').trim()
        if (parseInt(countMatchValue) > limits[color as keyof typeof limits]) {
          isValidGame = false
          continue
        }

      }
    }

    if (isValidGame) {
      validGameNumbers.push(gameNumber)
    }
  }

  console.log('answer', validGameNumbers.reduce((result, current) => result += current, 0))
}