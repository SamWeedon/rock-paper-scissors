/*
This function must return either rock, paper, or scissors randomly.
I can use the Math.random() function to return a random decimal between
0 (inclusive) and 1 (exclusive). I can approximate a random choice
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
This function must play a single round, taking two parameters, one
being the player's choice, and one being the computer's choice. It
then must return a string that declares the winner of that round.
The player's input must be made case-insensitive using .toLowerCase()
*/
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        return "Tie";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors";
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats rock";
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats paper";
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors";
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock";
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats paper";
    }

}

const playerChoice = "rOck";
const computerChoice = getComputerChoice();
console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));