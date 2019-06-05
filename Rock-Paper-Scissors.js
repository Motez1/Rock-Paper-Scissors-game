// setting the user choice and handling invalid entries :
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock') {return userInput}
  else if (userInput === 'paper') {return userInput}
  else if (userInput === 'scissors') {return userInput}
  else {console.log('Invalid input please choose rock, paper or scissors')}
}

// generate a random choice for the computer
const getComputerChoice = compInput => {
  const choice = Math.floor(Math.random()*3)
  if (choice === 0) {return 'rock'}
  else if(choice === 1) {return 'paper'}
  else {return 'scissors'} 
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {return 'the user won'}
  else if (userChoice === computerChoice) {return 'The game was a tie!'}
  else if (userChoice === 'rock') {
    
    if (computerChoice === 'paper') {return 'The computer won'}
    else {return 'The user won'}
  } 
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {return 'The computer won'}
    else {return 'The user won'}
    
  } 
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {return 'The computer won'}
    else {return 'The user won'}
  } 
}


const playGame = (userChoice, compChoice = getComputerChoice()) => {
  console.log(`the user chose ${userChoice} `)
  console.log(`the computer chose ${compChoice} `)
  console.log(determineWinner(userChoice, compChoice))
}

// game example :
playGame('rock')


  
