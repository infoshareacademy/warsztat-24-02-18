// constructor function 
// it produces new game object with new keyword
// it only defines inner properties of game object
// thorugh this keyword
// and then calls init fucntion init()

// the constructor function gets one argument
// the HTML container for game
// so we can place game in whatever div we want

function Game(container) {
    this.points = 0
    this.time = 10
    this.mole = null
    this.gameIntervalId = null

    this.gameContainer = container

    this.pointsContainer = null
    this.timeContainer = null
    this.startModal = null
    this.endModal = null

    this.init()
}

// we creating ours "small" fucntions in prototpye property of Game
// object in prototype property is set as prototype of new object
// that will be created from Game function
// every object can use methods and properties from theri prototype
// so every game object will share methods above

// through this keyword we refferencing acctual game object

Game.prototype.init = function () {
    this.makeUI()

    this.displayPoints(this.points)
    this.displayTime(this.time)


    this.startModal.querySelector('button')
        .addEventListener(
            'click',
            // we need to use ES6 arrow function
            // https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Functions/Funkcje_strzalkowe
            // to preserve this from lexical scope
            // not from function execution context
            () => {
                this.startModal.style.display = 'none'
                this.startGame()
            }
        )
}

Game.prototype.makeUI = function () {
    this.gameContainer.classList.add('game')

    this.pointsContainer = document.createElement('div')
    this.pointsContainer.classList.add('points')

    this.timeContainer = document.createElement('div')
    this.timeContainer.classList.add('time')

    this.startModal = document.createElement('div')
    this.startModal.classList.add('modal')
    this.startModal.classList.add('start-modal')
    this.startModal.innerHTML = '<h4>Kliknij żeby zagrać!</h4><button>START!</button>'

    this.endModal = document.createElement('div')
    this.endModal.classList.add('modal')
    this.endModal.classList.add('end-modal')
    this.endModal.innerHTML = '<h4>Gra zaknczona! Twój wynik to:</h4><h4 class="score"></h4><button>RESTART!</button>'

    this.gameContainer.appendChild(this.pointsContainer)
    this.gameContainer.appendChild(this.timeContainer)
    this.gameContainer.appendChild(this.startModal)
    this.gameContainer.appendChild(this.endModal)

}

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
    this.pointsContainer.innerText = pointsParam
}


Game.prototype.displayTime = function (timeParam) {
    this.timeContainer.innerText = timeParam
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

    this.gameContainer.appendChild(mole)

    return mole
}

Game.prototype.endGame = function () {
    clearInterval(this.gameIntervalId)
    this.mole.remove()

    this.endModal.querySelector('.score').innerText = this.points + ' punktów!'
    this.endModal.style.display = 'block'
    this.endModal.querySelector('button')
        .addEventListener(
            'click',
            () => {
                window.location = ''
            }
        )

}

Game.prototype.flashBackground = function () {
    this.gameContainer.style.backgroundColor = 'red'
    setTimeout(
        () => {
            this.gameContainer.style.backgroundColor = 'green'
        },
        100
    )
}

Game.prototype.startGame = function () {
    this.mole = this.makeMole()
    this.gameIntervalId = setInterval(
        () => {
            this.mole.remove()
            this.mole = this.makeMole()
            this.reduceTime()
        },
        1000
    )
}