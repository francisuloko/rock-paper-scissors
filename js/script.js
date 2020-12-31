// Script for a game of rock paper scissors
// This game is written from the human person perpective
// The the includes the following functins"
// game() to initialize play
// computerMove() to get (random) computer selection
// And playRound() to determine rounds and scores

// Game variable used
let rock;
let paper;
let scissors;
let result;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let photos = ["player.jpg", "rock.png", "paper.png", "scissors.png", "computer.jpg"];

// Game controls
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

// Set phots
document.getElementById("playerImg").src = "../scissors.png";

// document.getElementById("playerGraphics").src = photos[0];

// Game functions
function game(){
    // Playing a round of rock paper scissors
    rockBtn.onclick = function(){
        computerSelection = computerMove()
        document.getElementById("computerGraphics").src = photos[computerSelection]
        rock = playerSelection = rockBtn.value; // Getting Player Selectioin
        result = playRound(playerSelection, computerSelection)
    }
    paperBtn.onclick = function(){
        computerSelection = computerMove()
        paper = playerSelection = paperBtn.value;
        result = playRound(playerSelection, computerSelection)
    }
    scissorsBtn.onclick = function(){
        computerSelection = computerMove()
        scissors = playerSelection = scissorsBtn.value;
        result = playRound(playerSelection, computerSelection);
    }

    // Update Game Scores
    if(result == "Win"){
        playerScore++;
    } else if(result == "Lose"){
        computerScore++;
    } else if(result == "Game Over"){
        return result;
    }
}

// Computer Move Function
function computerMove(){ // Used this function throughout development
    return (Math.floor((Math.random() * 3)) + 1);
}

// Play Round Function
function playRound(player, computer){
    // Playing a 5 round game
    if(playerScore != 5 & computerScore != 5){
        
        // Game rules/logic
        if(player == computer){
            return "Tie";
        } else if (
            (player == scissors & computer == paper) ||
            (player == paper    & computer == rock) ||
            (player == rock     & computer == scissors)) {
            
            // Update the Leader Board
            playerScore++;
            document.getElementById("playerScore").textContent = "Player Score: " + playerScore;
            return "Win";
        } else {
            computerScore++;
            document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
            return "Lose";
        }
    } else {
        return "Game Over"
    }
}

// Initialize Game Play
game();