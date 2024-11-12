function getComputerChoice() {
    let randVal = Math.random() * 3;
    let choice = (randVal > 2) ? "rock" : ((randVal > 1) ? "paper" : "scissors");
    return choice;  
}

function getHumanChoice() {
    let choice = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
    choice = choice.toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("I didn't recognize that option, try again.\nEnter 'Rock', 'Paper', or 'Scissors'");
        choice = choice.toLowerCase();
    }
    return choice
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}!`);
    console.log(`The computer chose ${computerChoice}!`);
    if (humanChoice == computerChoice) {
        console.log(`...Draw!`);
    }
    else if (humanChoice == "rock") {
        switch (computerChoice) {
            case "paper":
                console.log("...Computer wins!");
                computerScore++;
                break;
            case "scissors":
                console.log("...Human wins!");
                humanScore++;
                break;
            default:
                console.warn("Oops, this shouldn't have happened.")
        }
    }
    else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "scissors":
                console.log("...Computer wins!");
                computerScore++;
                break;
            case "rock":
                console.log("...Human wins!");
                humanScore++;
                break;
            default:
                console.warn("Oops, this shouldn't have happened.");
        }
    }
    else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("...Computer wins!");
                computerScore++;
                break;
            case "paper":
                console.log("...Human wins!");
                humanScore++;
                break;
            default:
                console.warn("Oops, this shouldn't have happened.");
        }
    }
} 

function playGame() {
    let gamesPlayed = 0;
    
    console.log("⚡️⚡️ U L T I M A T E     🪨R🪨  📄P📄  ✂️S✂️     2 0 2 4 ⚡️⚡️");
    console.log(` PREPARE YOURSELF for ${NUMBER_OF_GAMES} rounds of UNFORGETTABLE RPS \n`);

    for (let i = 1; i <= NUMBER_OF_GAMES; i++ ) {
        console.log(` R O U N D   ${i}   B E G I N  \n`);
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`  SCORE: HUMAN ${humanScore} -- COMPUTER ${computerScore}\n\n\n`);
    }

    if (humanScore == computerScore) { 
        console.log("\n\nOVERALL RESULT: DRAW!!!");
        return null;
    } else {
        let winner = (humanScore > computerScore) ? "human" : "computer";
        console.log("\n\nAND THE WINNER IS ......");
        console.log(`....... ${winner.toUpperCase()}!!!`);
        return winner;
    }
}

let humanScore = 0;
let computerScore = 0;
const NUMBER_OF_GAMES = 5;

playGame();