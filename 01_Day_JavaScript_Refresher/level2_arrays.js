const webTechs = require('./web_techs')
const countries = require('./countries')

// 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file


// 2. First remove all the punctuation,s and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text = text.replace(/,/g, '')
text = text.replace(/\./g, '')
text = text.split(' ')
let count = text.length
console.log(count)


// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    // add 'Meat' in the beginning of your shopping cart if it has not been already added
    // add Sugar at the end of you shopping cart if it has not been already added
    // remove 'Honey' if you are allergic to honey
    // modify Tea to 'Green Tea'
if(!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}
if(!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}

const allergicToHoney = false;
if(allergicToHoney) {
    const honey = shoppingCart.indexOf('Honey')
    shoppingCart.splice(honey, 1)
}

console.log(shoppingCart)

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.


// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

