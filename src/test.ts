import { parse } from './parser'
import BikramSambat from './BikramSambat'
import { format } from './format'

const date = new BikramSambat('2077-1-1')
const date1 = new Date(1738433700000)
console.log(date1.getFullYear())
console.log(date1)
console.log(date.getYear())

const test = ['2077-1-1', '2077/1-2', '2077/1/3']

test.forEach((t) => {
  console.log(parse(t))
})

console.log(format(date, 'YYYY-MM-DD'))
