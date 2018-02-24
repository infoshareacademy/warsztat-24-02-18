(function(){
    var points
    var time
    var mole
    var gameIntervalId

    function addPoint(){
        points++
        displayPoints(points)
    }

    function reduceTime(){
        time--
        displayTime(time)

        if(time === 0){
            endGame()
        }
    }

    function displayPoints(pointsParam){
        var pointsContainer = document.querySelector('.points')
        pointsContainer.innerText = pointsParam
    }

    function displayTime(timeParam){
        var timeContainer = document.querySelector('.time')
        timeContainer.innerText = timeParam
    }

    function makeMole(){
        var molePosX = Math.round(Math.random() * (window.innerWidth - window.innerHeight / 10))
        var molePosY = Math.round(Math.random() * (window.innerHeight - window.innerHeight / 10))
        var mole = document.createElement('div')
        mole.classList.add('mole')
        mole.style.left = molePosX + 'px'
        mole.style.top = molePosY + 'px'

        mole.addEventListener(
            'click',
            function(){
                mole.remove()
                addPoint()
            }
        )

        document.querySelector('body').appendChild(mole)

        return mole
    }

    function endGame(){
        clearInterval(gameIntervalId)
        mole.remove()
        alert('Game was ended!\nYour score was: ' + points + ' !')
    }

    function init(){
        points = 0
        time = 3
        mole = makeMole()

        displayPoints(points)
        displayTime(time)

        gameIntervalId = setInterval(
            function(){
                mole.remove()
                mole = makeMole()
                reduceTime()
            },
            1000
        )
    }

    init()

})()