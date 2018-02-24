var secondsCounter = 1

var intervalId = setInterval(
    function(){
        console.log(secondsCounter++)
    },
    1000
)

setTimeout(
    function(){
        clearInterval(intervalId)
    },
    5000
)