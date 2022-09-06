// include Node's filesystem lib to read our text files
const fs = require('fs')

// read & display contents of food.txt
let food = fs.readFileSync('food.txt', 'utf-8')
console.log(food)
console.log('We ate this')

// repeat for drinks.txt
let drinks = fs.readFileSync('drinks.txt', 'utf8')
console.log(drinks)
console.log('We drank this')
