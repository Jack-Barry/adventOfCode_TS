import { resolve } from "path"

solution()
async function solution() {
  let sum = 0
  const input = (await Bun.file(resolve(import.meta.dir, 'input.txt')).text()).split('\n')
  for (const line of input) {
    if (!line) {
      continue
    }

    const nums = line.replaceAll(/\D/g, '')
    const firstNum = nums[0]
    const lastNum = nums.at(-1)
    sum += parseInt(`${firstNum}${lastNum}`)
  }

  console.log({ sum })
}