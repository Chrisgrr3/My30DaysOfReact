// 1. Get user input using prompt(“Enter your age:”).If user is 18 or older, give feedback: 'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age: 15
// You are left with 3 years to drive.
function canDrive() {
    const age = prompt('Enter your age: ')
    if (age < 18) {
        console.log(`You have ${18 - age} years left before you can drive.`)
    } else {
        console.log('You are old enough to drive.')
    }
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older(me or you).Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

function ageDifference() {
    const myAge = 24;
    const yourAge = prompt('Enter your age: ')
    if (yourAge > myAge) {
        console.log(`You are ${yourAge - myAge} years older than me.`)
    } else if (yourAge == myAge) {
        console.log(`We are the same age (${myAge})`)
    } else {
        console.log(`I am ${myAge - yourAge} years older than you.`)
    }
}


// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'.Try to implement it in two ways
// using if else
// ternary operator.

// let a = 4
// let b = 3
// 4 is greater than 3

const aOrB = (a, b) => {
    // if (a > b) {
    //     return 'a is greater than b'
    // } else if (a < b) {
    //     return 'a is less than b'
    // }

    a < b
        ? console.log('a is less than b')
        : console.log('a is greater than b')
}
aOrB(8, 6)
aOrB(10, 100)
aOrB(88, -19)
aOrB(-100, 100)

// 4. Even numbers are divisible by 2 and the remainder is zero.How do you check, if a number is even or not using JavaScript ?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log(`${num} is an even number.`)
    } else {
        console.log(`${num} is an odd number.`)
    }
}

evenOrOdd(9)
evenOrOdd(8)
evenOrOdd(0)
evenOrOdd(11)