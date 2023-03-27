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
then displays the result and increments scores accordingly. Once the
player or computer reaches a score of five it returns true or false
respectively.
*/
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        results.textContent = "Tie";
        return null;
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

//creates a nodelist for the buttons
const buttons = document.querySelectorAll('button');

/*
adds an event listener to each button for a click event. When
a button is clicked, a round is played with the corresponding
input. Once an overall winner is determined, the result is
displayed and event listener propagation is stopped.
*/
buttons.forEach((button) => {
    button.addEventListener('click', function() { 
        let roundResult = playRound(button.className, getComputerChoice());
        
        if (roundResult === true) {
            finalResults.textContent = "You win overall";
            window.addEventListener('click', function(event) {
                event.stopImmediatePropagation();
            }, true);
        }
        else if (roundResult === false) {
            finalResults.textContent = "You lose overall";
            window.addEventListener('click', function(event) {
                event.stopImmediatePropagation();
            }, true);
        }
        
    });
});