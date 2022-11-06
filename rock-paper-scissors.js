function getComputerChoice() {
    // returns random number between 0 and 2
    let choice = Math.floor(Math.random() *3);
    let choices = ["rock", "paper", "scissors"];
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = "";
    // 0 = tie, 1 = win, 2 = lose
    let value = 0;
    if (playerSelection === "rock") {
        switch(computerSelection) {
            case "rock":
                result = "Tie!";
                value = 0;
                break;
            case "paper":
                result = "You Lose! Paper beats Rock";
                value = 2;
                break;
            case "scissors":
                result = "You win! Rock beats Scissors";
                value = 1;
                break;
        }
    } 
    if (playerSelection === "paper") {
        switch(computerSelection) {
            case "rock":
                result = "You win! Paper beats Rock";
                value = 1;
                break;
            case "paper":
                result = "Tie!";
                value = 0;
                break;
            case "scissors":
                result = "You lose! Scissors beats Paper";
                value = 2;
                break;
        }
    }
    if (playerSelection === "scissors") {
        switch(computerSelection) {
            case "rock":
                result = "You lose! Rock beats scissors";
                value = 2;
                break;
            case "paper":
                result = "You win! Scissors beats paper";
                value = 1;
                break;
            case "scissors":
                result = "Tie!";
                value = 0;
                break;
        }
    }
    return {result: result, value: value};
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock? Paper? Scissors? GOOO!");
        let computerChoice = getComputerChoice();
        let round = playRound(playerChoice, computerChoice);
        console.log(round.result);
    
        if (round.value === 1) {
            playerScore++;
        }
        if (round.value === 2) {
            computerScore++;
        }
    }
    if (computerScore > playerScore) {
        console.log(`You lose! Your score: ${playerScore} Computer score: ${computerScore}`);
    }
    if (computerScore === playerScore) {
        console.log(`Tie! Your score: ${playerScore} Computer score: ${computerScore}`);
    }
    if (computerScore < playerScore) {
        console.log(`You win! Your score: ${playerScore} Computer score: ${computerScore}`);
    }
}