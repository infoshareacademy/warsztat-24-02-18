var globalVariable = 'GLOBAL'

// function declaration
function add(a, b){
    var someVariable = 123
    globalVariable = 321
    console.log(globalVariable)
    return a + b
}

// function expression
var add2 = function (a, b){
    var someVariable = 123
    globalVariable = 321
    console.log(globalVariable)
    return a + b
}

// assiging function to another variable
var add3 = add2

var result = add3(3, 5)

console.log(result)

console.log(someVariable)