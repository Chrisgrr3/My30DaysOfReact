const { countries } = require('./countries')
// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  
    // - Sort the array and find the min and max age 
    // - Find the median age(one middle item or two middle items divided by two) 
    // - Find the average age(all items divided by number of items) 
    // - Find the range of the ages(max minus min) 
    // - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort((a, b) => {
    if(a > b) return 1
    if(a < b) return -1
})
const min = ages[0]
const max = ages[ages.length - 1]
console.log([min, max])

let median;
if(ages.length % 2 == 0) {
    median = [ages[ages.length/2], ages[ages.length/2 + 1]]
    if(median[0] == median[1]) {
        median = [median[0]]
    }
} else {
    median = [ages[Math.floor(ages.length / 2)]]
}
console.log(median)

let average = ages.reduce((acc, cur) => cur + acc, 0)
average /= ages.length;
console.log(average)

const range = max - min;
console.log(range)

console.log([parseFloat(Math.abs(min - average).toFixed(1)), parseFloat(Math.abs(max - average).toFixed(1))])

// 2. Slice the first ten countries from the countries array
const firstTen = countries.slice(0, 10)
console.log(firstTen)

// 3. Find the middle country(ies) in the countries array
let middle;
if(countries.length % 2 == 0) {
    middle = [countries[countries.length/2], countries[countries.length/2 + 1]]
    if(middle[0] == middle[1]) {
        middle = [middle[0]]
    }
} else {
    middle = [countries[Math.floor(countries.length / 2)]]
}
console.log(middle)

// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.