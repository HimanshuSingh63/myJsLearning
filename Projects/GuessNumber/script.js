let randomNumber = parseInt(Math.random() * 100+1)
console.log(randomNumber);
const submit= document.querySelector('#subt')
const userInput= document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const remaining= document.querySelector('.lastResult')
const lowOrHi= document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')


const p=document.createElement('p')

let prevGuesses= []
let numGuess = 1

let playGame= true;

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess =parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess); 
    })
}
function validateGuess(guess){
//validates the useriput
  if (isNaN(guess)) {
    alert('please enter valid number')
  } else if(guess<1){
    alert('Please enter a valid number')
  } else if (guess>100) {
    alert('Please enter a valid number')
  }else{
    prevGuesses.push(guess)
    if(numGuess === 10){
        displayGuess(guess)
        displayMessage(`Game Over Random number was ${randomNumber} You are so noob 😂🫵`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
  }
    
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage('You are Pro 🫡')
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`number is too Low`)
    }else if(guess > randomNumber){
        displayMessage(`number is too High`)
    }
}

function displayGuess(guess) {
 //clean value update guesses 
    userInput.value = ''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

 function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML =`<h2 id='newGame'>Click Me For New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
 }
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function (e) {
        randomNumber = parseInt(Math.random() * 100+1)
        prevGuesses=[]
        numGuess = 1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML=''
        playGame=true
    })
}



