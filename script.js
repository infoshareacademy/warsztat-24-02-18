console.log('Hello Mateusz!')

// data types in JS

// primitives

// string
var textVariable = "Mateusz"
console.log(textVariable)

// number
var numberVariable = 43
console.log(numberVariable)

// boolean
var boolVariable = true
console.log(boolVariable)

// null
var nullVariable = null
console.log(nullVariable)

// undefined
var undefinedVariable = undefined
console.log(undefinedVariable)

// objects

// objects with data
var simplestObj = {
    name: "Mateusz",
    lastname: "Choma"
}
console.log(simplestObj)

// nested objects with data
var nastedObj = {
    name: "Mateusz",
    car: {
        brand: "Peugeot",
        model: 407
    }
}
console.log(nastedObj)
console.log(nastedObj.car.model)
console.log(nastedObj.car.year)

// arrays
var simpleArray = [
    1,
    {name: '"Ala"', array: [1,4,6]},
    3,
    4,
    5
]
console.log(simpleArray)
console.log(simpleArray[4])
console.log(simpleArray[1].name)
console.log(simpleArray[1]['name'])