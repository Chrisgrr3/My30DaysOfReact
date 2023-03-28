// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName('Christopher', 'Guerrero'))

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(x, y) {
    if (typeof x != typeof 1.0 | typeof y != typeof 1.0) {
        return null
    }
    let sum = 0
    sum = x + y
    return sum
}
console.log(addNumbers(7, 8))
console.log(addNumbers(-1, -6))

// 3. Area of a circle is calculated as follows: area = π x r x r.Write a function which calculates _areaOfCircle
function areaOfCircle(r) {
    if (typeof r != typeof 1.0) {
        return "You must input a number."
    }
    if (r < 0) {
        return null
    }
    const area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(2))
console.log(areaOfCircle(1))
console.log(areaOfCircle(-1))
console.log(areaOfCircle('helloooo'))

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9 / 5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(celsius) {
    if (typeof celsius != typeof 1.0) {
        return "You did not input a number."
    }
    let fahrenheit;
    fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit
}
console.log(convertCelciusToFahrenheit(0))
console.log(convertCelciusToFahrenheit(100))
console.log(convertCelciusToFahrenheit('hi'))

// 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.Write a function which calculates bmi.BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calculateBMI(weight, height) {
    const bmi = (weight / (Math.pow(height, 2))).toFixed(2)
    if (typeof weight != typeof 1.0 | typeof height != typeof 1.0) {
        return 'You did not input a valid type'
    }
    if (weight < 0) {
        return 'You did not enter a valid weight.'
    }
    if (height < 0) {
        return 'You did not enter a valid height.'
    }
    if (bmi < 18.5) {
        return `BMI: ${bmi}, Underweight`
    } else if (bmi < 24.9) {
        return `BMI: ${bmi}, Normal weight`
    } else if (bmi < 29.9) {
        return `BMI: ${bmi}, Overweight`
    } else {
        return `BMI: ${bmi}, Obese`
    }
}
console.log(calculateBMI(55, 1.3))
console.log(calculateBMI(-4, 1))
console.log(calculateBMI(55, -1))

// 6. Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    if (month.toLowerCase() == 'december' | month.toLowerCase() == 'january' | month.toLowerCase() == 'february') {
        return 'Winter'
    } else if (month.toLowerCase() == 'march' | month.toLowerCase() == 'april' | month.toLowerCase() == 'may') {
        return 'Spring'
    } else if (month.toLowerCase() == 'june' | month.toLowerCase() == 'july' | month.toLowerCase() == 'august') {
        return 'Summer'
    } else if (month.toLowerCase() == 'september' | month.toLowerCase() == 'december' | month.toLowerCase() == 'december') {

    }
}