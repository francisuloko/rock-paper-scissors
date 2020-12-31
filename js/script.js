// Script for a game of rock paper scissors
// This game is written from the human person perpective
// The the includes the following functins"
// game() to initialize play
// computerMove() to get (random) computer selection
// And playRound() to determine rounds and scores

let rock;
let paper;
let scissors;
let result;
let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let photos = ["player.png", "rock.png", "paper.png", "scissors.png", "computer.png"];

// Game controls
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

// Add phones
document.getElementById("playerImg").src = "img/player.png";
document.getElementById("computerImg").src = "img/computer.png";

// Game functions
function game(){
    rockBtn.onclick = function(){ // Playing a round of rock paper scissors
        document.getElementById("playerImg").src = "img/rock.png";
        computerSelection = computerMove();
        document.getElementById("computerImg").src = "img/" + photos[computerSelection];
        rock = playerSelection = rockBtn.value; // Getting Player Selectioin
        result = playRound(playerSelection, computerSelection);
        document.getElementById("outcome").textContent =  result;
        rounds++;
        document.getElementById("round").textContent ="#" + rounds;
    }
    paperBtn.onclick = function(){
        document.getElementById("playerImg").src = "img/paper.png";
        computerSelection = computerMove();
        document.getElementById("computerImg").src = "img/" + photos[computerSelection];
        paper = playerSelection = paperBtn.value;
        result = playRound(playerSelection, computerSelection);
        document.getElementById("outcome").textContent =  result;
        rounds++;
        document.getElementById("round").textContent = "#" + rounds;
    }
    scissorsBtn.onclick = function(){
        document.getElementById("playerImg").src = "img/scissors.png";
        computerSelection = computerMove();
        document.getElementById("computerImg").src = "img/" + photos[computerSelection];
        scissors = playerSelection = scissorsBtn.value;
        result = playRound(playerSelection, computerSelection);
        document.getElementById("outcome").textContent = result;
        rounds++;
        document.getElementById("round").textContent = "#" + rounds;
    }

    if(!result == "Tie"){
        if( result == "You Win"){
            playerScore++;
        } else if ( result == "You Lose"){
            computerScore++
        }else {
            if(playerScore > computerScore){
                document.getElementById("outcome").textContent = "You beat computer";
            }else {
                document.getElementById("outcome").textContent = "The computer beat you";
            }
        }
    }
}

// Computer Move Function
function XcomputerMove(){ // Original Used in development
    return (Math.floor((Math.random() * 3)) + 1);
}

// Creating a equally random outcome - rock, paper, or scissors
// Copied
function computerMove() { // Credit - Rachel Moser (Github- rlmoser99)
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
            return 1;
    }
    if (number % 3 === 1) {
            return 2;
    }
    return 3;
}
function playRound(player, computer){ // Play Round Function
    // Playing a 5 round game
    if(playerScore == 5 || computerScore == 5){
        return "Game Over"
        document.getElementById("round").textContent = "Game Over";
    } else {
        if(player == computer){ // Game rules/logic
            return "Tie Game";
        } else if (
            (player == scissors & computer == paper) ||
            (player == paper    & computer == rock) ||
            (player == rock     & computer == scissors)) {
                playerScore++; // Update the Leader Board
                document.getElementById("playerScore").textContent = playerScore;
                return "You Win";
        } else {
            computerScore++;
            document.getElementById("computerScore").textContent = computerScore;
            return "You Lose";
        }
    }
}
// Initialize game
game();