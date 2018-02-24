
// function declaration
function hello(name, numberOfLogs){ // parameter is a name for atributte that is passed  into function
    for(var i = 0; i < numberOfLogs; i++) {
        console.log('Hello ' + name + '!')
    }
}

// function invocation (call)
hello('Mateusz', 100) // passing attribute 'Mateusz'
hello('Ala', 2)
hello('Ela', 3)
hello({name: 'Stanisława'}, 1)