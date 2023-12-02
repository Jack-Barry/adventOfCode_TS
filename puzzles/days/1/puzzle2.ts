import { resolve } from "path"


const numbersTable = {
  'one': 'o1e',
  'two': 't2o',
  'three': 't3e',
  'four': 'f4r',
  'five': 'f5e',
  'six': 's6x',
  'seven': 's7n',
  'eight': 'e8t',
  'nine': 'n9e'
}

solution()
async function solution() {
  let sum = 0
  const input = (await Bun.file(resolve(import.meta.dir, 'input.txt')).text()).split('\n')

  for (let line of input) {
    if (!line) {
      continue
    }

    Object.entries(numbersTable).forEach(([str, numericStr]) => {
      line = line.replaceAll(str, numericStr)
    })

    const nums = line.replaceAll(/\D/g, '')
    const firstNum = nums[0]
    const lastNum = nums.at(-1)
    sum += parseInt(`${firstNum}${lastNum}`)
  }

  console.log('sum', sum)
}