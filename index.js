
let computerNumber
let userNumbers =[]
let attempts = 0
let maxGuesses = 10

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers(){
    const userNumber = Number (document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers


        if(attempts<maxGuesses){
    if(userNumber > computerNumber){
        document.getElementById('textOutput').innerHTML ='Your number is too high'
        document.getElementById('inputBox').value = ''
    }
    else if(userNumber < computerNumber){
        document.getElementById('textOutput').innerHTML = 'Your number is too low'
        document.getElementById('inputBox').value = ''
    }
    else{
        document.getElementById('textOutput').innerHTML = 'You guessed right !'
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
        }
        else{
        document.getElementById('textOutput').innerHTML = 'You Lose! The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
        attempts++
    document.getElementById('attempts').innerHTML = attempts
    inRange()
}


function newGame(){
    window.location.reload('newGameButton')
}

function inRange(){
    if(userNumber <=0 || userNumber >100)
    document.getElementById('textOutput').innerHTML = 'Number out of range'
}

