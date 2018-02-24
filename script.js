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
                flashBackground()
            }
        )

        document.querySelector('body').appendChild(mole)

        return mole
    }

    function endGame(){
        clearInterval(gameIntervalId)
        mole.remove()

        document.querySelector('.end-modal .score')
            .innerText = points + ' punktów!'

        document.querySelector('.end-modal')
            .style.display = 'block'

        document.querySelector('.end-modal button')
            .addEventListener(
                'click',
                function(){
                    window.location = ''
                }
            )   
    }

    function flashBackground(){
        var body = document.querySelector('body')
        body.style.backgroundColor = 'red'
        setTimeout(
            function(){
                body.style.backgroundColor = 'green'
            },
            100
        )
    }

    function startGame(){
        mole = makeMole()
        gameIntervalId = setInterval(
            function(){
                mole.remove()
                mole = makeMole()
                reduceTime()
            },
            1000
        )
    }

    function init(){
        points = 0
        time = 10
        mole = null

        displayPoints(points)
        displayTime(time)

        document.querySelector('.start-modal button')
            .addEventListener(
                'click',
                function(){
                    document.querySelector('.start-modal')
                        .style.display = 'none'
                    startGame()
                }
            )

    }

    init()

})()