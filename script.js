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
    if (playerChoice === computerChoice) {
        console.log("Tie");
        return null;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        return true;
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock");
        return false;
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper");
        return true;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors");
        return false;
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock");
        return true;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper");
        return false;
    }

}

/*
This function must call the playRound() function five times. It
also must keep score and report the winner.
*/
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