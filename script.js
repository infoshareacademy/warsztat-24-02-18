// constructor function 
// it produces new game object with new keyword
// it does what init() function done in prev vesrion
function Game() {
    this.points = 0
    this.time = 10
    this.mole = null
    this.gameIntervalId = null

    this.displayPoints(this.points)
    this.displayTime(this.time)

    document.querySelector('.start-modal button')
        .addEventListener(
            'click',
            // we need to use ES6 arrow function
            // to preserve this from lexical scope
            // not from function execution context
            () => {
                document.querySelector('.start-modal').style.display = 'none'
                this.startGame()
            }
        )
}

// we creating ours "small" fucntions in prototpye property of Game
// object in prototype property is set as prototype of new object
// that will be created from Game function
// every object can use methods and properties from theri prototype
// so every game object will share methods above

// through this keyword we refferencing acctual game object

Game.prototype.addPoint = function () {
    this.points++
    this.displayPoints(this.points)
}

Game.prototype.reduceTime = function () {
    this.time--
    this.displayTime(this.time)
    if (this.time === 0) {
        this.endGame()
    }
}

Game.prototype.displayPoints = function (pointsParam) {
    var pointsContainer = document.querySelector('.points')
    pointsContainer.innerText = pointsParam
}


Game.prototype.displayTime = function (timeParam) {
    var timeContainer = document.querySelector('.time')
    timeContainer.innerText = timeParam
}


Game.prototype.makeMole = function () {
    var molePosX = Math.round(Math.random() * (window.innerWidth - window.innerHeight / 10))
    var molePosY = Math.round(Math.random() * (window.innerHeight - window.innerHeight / 10))

    var mole = document.createElement('div')
    mole.classList.add('mole')
    mole.style.left = molePosX + 'px'
    mole.style.top = molePosY + 'px'

    mole.addEventListener(
        'click',
        () => {
            this.mole.remove()
            this.addPoint()
            this.flashBackground()
        }
    )

    document.querySelector('body').appendChild(mole)

    return mole
}

Game.prototype.endGame = function () {
    clearInterval(gameIntervalId)
    this.mole.remove()

    document.querySelector('.end-modal .score').innerText = this.points + ' punktów!'
    document.querySelector('.end-modal').style.display = 'block'
    document.querySelector('.end-modal button')
        .addEventListener(
            'click',
            () => {
                window.location = ''
            }
        )

}

Game.prototype.flashBackground = function () {
    var body = document.querySelector("body")
    body.style.backgroundColor = 'red'
    setTimeout(
        () => {
            body.style.backgroundColor = 'green'
        },
        100
    )
}

Game.prototype.startGame = function () {
    this.mole = this.makeMole()
    gameIntervalId = setInterval(
        () => {
            this.mole.remove()
            this.mole = this.makeMole()
            this.reduceTime()
        },
        1000
    )
}

new Game()