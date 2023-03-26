/*
This function returns either rock, paper, or scissors randomly.
I use the Math.random() function to return a random decimal between
0 (inclusive) and 1 (exclusive). I then approximate a random choice
of rock, paper, or scissors by assigning each choice a third of this
range in probability.
*/
function getComputerChoice() {
    let choice = Math.random();
    if (choice >= 0.6666666666666) {
        choice = "rock"
    }
    else if (choice >= 0.333333333333) {
        choice = "paper"
    }
    else {
        choice = "scissors"
    }
    return choice;
}

/*
This function plays a single round, taking two parameters, one
being the player's choice, and one being the computer's choice. It
then logs the outcome to the console and returns a boolean value
that represents a win or loss for the player, true being a win
and false being a loss.
The player's input is made case-insensitive using .toLowerCase()
*/
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        results.textContent = "Tie";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        results.textContent = "You win! Rock beats scissors";
        pScore++;
        playerScore.textContent = `Your score is ${pScore}`;
        if (pScore === 5) return true;
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        results.textContent = "You lose! Paper beats rock";
        cScore++;
        computerScore.textContent = `The computer's score is ${cScore}`;
        if (cScore === 5) return false;
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        results.textContent = "You win! Scissors beats paper";
        pScore++;
        playerScore.textContent = `Your score is ${pScore}`;
        if (pScore === 5) return true;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        results.textContent = "You lose! Rock beats scissors";
        cScore++;
        computerScore.textContent = `The computer's score is ${cScore}`;
        if (cScore === 5) return false;
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        results.textContent = "You win! Paper beats rock";
        pScore++;
        playerScore.textContent = `Your score is ${pScore}`;
        if (pScore === 5) return true;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        results.textContent = "You lose! Scissors beats paper";
        cScore++;
        computerScore.textContent = `The computer's score is ${cScore}`;
        if (cScore === 5) return false;
    }

}

const body = document.querySelector('body');

const rock = document.createElement('button');
rock.textContent = 'Rock';
rock.classList.add('rock');

body.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = 'Paper';
paper.classList.add('paper');

body.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = "Scissors";
scissors.classList.add('scissors');

body.appendChild(scissors);

const results = document.createElement('div');
results.classList.add('results');

body.appendChild(results);

const playerScore = document.createElement('div');
playerScore.classList.add('playerScore');

body.appendChild(playerScore);

const computerScore = document.createElement('div');
computerScore.classList.add('computerScore');

body.appendChild(computerScore);

let pScore = 0;
let cScore = 0;
playerScore.textContent = `Your score is ${pScore}`;
computerScore.textContent = `The computer's score is ${cScore}`;

const finalResults = document.createElement('div');
finalResults.classList.add('finalResults');

body.appendChild(finalResults);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => { 
        if (playRound(button.className, getComputerChoice()) === true) {
            finalResults.textContent = "You win overall";
        }
        else if (playRound(button.className, getComputerChoice()) === false) {
            finalResults.textContent = "You lose overall";
        }

            
    });
});


if (pScore === 5) {
    finalResults.textContent = "You win overall!";
}
if (cScore === 5) {
    finalResults.textContent = "The computer wins overall!";
}



/*
This function plays five rounds of the game by calling the playRound()
function five times using a for-loop. It keeps track of the individual 
scores by incrementing respective variables when appropriate and 
then reports the overall winner at the end of the five rounds. If the
player inputs an invalid choice, a warning is logged and the loop 
"repeats" the round.

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
        let outcome = playRound(playerChoice, computerChoice);
        if (playerChoice === "rock" || playerChoice === "scissors" || playerChoice === "paper") {
            if (outcome === true) {
                playerScore++;
            }
            else if (outcome === false) {
                computerScore++;
            }
        }
        else {
            console.log("This is not a valid response");
            i--;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win overall!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose overall!");
    }
    else if (playerScore === computerScore) {
        console.log("There is an overall tie!");
    }
}

game();
*/