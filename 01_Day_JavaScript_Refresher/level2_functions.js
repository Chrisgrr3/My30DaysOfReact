// 1. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.


// 2. Declare a function name printArray.It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    for (let element of arr) {
        console.log(element)
    }
}
printArray([1, 2, 4, 5, 6])
printArray(['hi', 'low', 'bye', 5, 2])

// 3. Write a function name showDateTime which shows time in this format: 08 / 01 / 2020 04: 08 using the Date object.
function showDateTime() {
    const today = new Date()

}

// 4. Declare a function name swapValues.This function swaps value of x to y.
function swapValues(x, y) {
    console.log(`x is ${x}. y is ${y}.`)
    let temp = x;
    x = y;
    y = temp;
    console.log(`x is now: ${x}. y is now: ${y}.`)
}
swapValues(4, 6)

// 5. Declare a function name reverseArray.It takes array as a parameter and it returns the reverse of the array(don't use method).
function reverseArray(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverseArray([1, 2, 3, 5, 6, 7, 8]))
console.log(reverseArray(['hi.', ',', 'name', 'my', 'is', 'chris']))

// 6. Declare a function name capitalizeArray.It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    let result = []
    arr.forEach((el) => {
        let string = el.charAt(0).toUpperCase() + el.slice(1, el.length).toLowerCase()
        result.push(string)
    })
    return result
}
console.log(capitalizeArray(['HI', 'MY', 'NAME', 'IS', 'CHRIS']))

// 7. Declare a function name addItem.It takes an item parameter and it returns an array after adding the item
const items = []
function addItem(item) {
    items.push(item)
    return items
}
console.log(addItem('Cheese'))
console.log(addItem('Milk'))

// 8. Declare a function name removeItem.It takes an index parameter and it returns an array after removing an ite
function removeItem(index) {
    let newArr = [];
    for (let i = 0; i < items.length; i++) {
        if (i != index) {
            newArr.push(items[i])
        }
    }
    return newArr;
}
console.log(removeItem(1))

// 9. Declare a function name evensAndOdds.It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(integer) {

}

// 10. Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArgs(...args) {

}

// 11. Declare a function name userIdGenerator.When this function is called it generates seven character id.The function return the id.
function userIdGenerator() {

}