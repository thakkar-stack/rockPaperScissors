let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = prompt('Rock(r)?, Paper(p)? or Scissors(s)?:');
    computerSelection = getComputerChoice();

    if(playerSelection === 'r' || playerSelection === 'p' || playerSelection === 's'){
        if(playerSelection === computerSelection){
            console.log(`${playerSelection} against ${computerSelection} is a tie!`);
            console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
        }
        else if(playerSelection === 'r' && computerSelection === 's'){
            console.log(`${playerSelection} against ${computerSelection} you win!`);
            playerScore++;
            console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
        }
        else if(playerSelection === 's' && computerSelection === 'p'){
            console.log(`${playerSelection} against ${computerSelection} you win!`);
            playerScore++;
            console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
        }
        else if(playerSelection === 'p' && computerSelection === 'r'){
            console.log(`${playerSelection} against ${computerSelection} you win!`);
            playerScore++;
            console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
        }
        else{
            console.log(`${playerSelection} against ${computerSelection} you lose!`);
            computerScore++;
            console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
        }
    } else console.log(`${playerSelection} is not an option! Pick again.`)
}

function playGame(){
    while (!(playerScore === 5 || computerScore === 5)){
        playRound();

        if(playerScore === 5 || computerScore === 5){
            endGame();
        }
    }
}

function endGame(){
    if(computerScore > playerScore){
        console.log(`Wow you got beat by a computer! ${playerScore}:${computerScore}`)
    } 
    else if(computerScore < playerScore){
        console.log(`Congrats you beat the computer! ${playerScore}:${computerScore}`)
    }
    else console.log(`Close one it was a tie! ${playerScore}:${computerScore}`)
}

playGame();