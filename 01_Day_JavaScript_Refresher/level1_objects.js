// 1. Create an empty object called dog
const dog = {

}

// 2. Print the the dog object on the console
console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object.The bark property is a method which return woof woof
dog.name = ''
dog.legs = 4
dog.color = ''
dog.age = 0
dog.bark = function () {
    return 'woof woof'
}
console.log(dog.bark())

// 4. Get name, legs, color, age and bark value from the dog object
const dogName = dog.name
const dogLegs = dog.legs
const dogColor = dog.color
const dogAge = dog.age
const bark = dog.bark()

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = ''
dog.getDogInfo = function () {
    return { name, legs, color, age }
}