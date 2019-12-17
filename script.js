let playerPoints = 0;
let cpuPoints = 0;
const computerSelection = computerPlay();

// Randomizer for the CPU
function computerPlay() {
    const randomChoice = Math.floor((Math.random() * 3) + 1);
    if (randomChoice === 1) {
        return "scissor";
    } else if (randomChoice === 2) {
        return "paper";
    } else {
        return "rock";
    }
}

// Play a single Round with all matchups
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissor") {
        playerPoints++;
        return "You have won. Rock beats Scissor";
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        playerPoints++;
        return "You have won. Scissor beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerPoints++;
        return "You have won. Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        cpuPoints++;
        return "You have lost. Scissor beats Paper";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        cpuPoints++;
        return "You have lost. Paper beats Rock";
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        cpuPoints++;
        return "You have lost. Rock beats Scissor";
    } else {
        return "It's a tie. Play a new Round";
    }
}

//play the game
function game(games) {
    for (let i = 0; i < games; i++) {
        let input = prompt("What do you choose? Choose between rock, paper scissor!!");
        input = input.toLowerCase();
        const playerSelection = input;
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your points: " + playerPoints + " vs the CPU: " + cpuPoints);
    }
    if (playerPoints > cpuPoints) {
        console.log("You are the overall winner!!!");
    } else if (cpuPoints > playerPoints) {
        console.log("You've lost vs the Computer!");
    } else {
        console.log("Its a overall tie!");
    }
}


game(5);