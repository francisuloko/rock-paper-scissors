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
        if((playerScore != 5) && (computerScore != 5)){
            computerSelection = computerMove();
            document.getElementById("computerImg").src = "img/" + photos[computerSelection];
            document.getElementById("playerImg").src = "img/rock.png";
            rock = playerSelection = rockBtn.value; // Getting Player Selectioin
            result = playRound(playerSelection, computerSelection);
            document.getElementById("outcome").textContent =  result;
            rounds++;
            document.getElementById("round").textContent ="#" + rounds;
        } else {
            document.getElementById("outcome").textContent =  "Game Over";
        }
    }
    paperBtn.onclick = function(){
        if((playerScore != 5) && (computerScore != 5)){
            computerSelection = computerMove();
            document.getElementById("computerImg").src = "img/" + photos[computerSelection];
            document.getElementById("playerImg").src = "img/paper.png";
            paper = playerSelection = paperBtn.value;
            result = playRound(playerSelection, computerSelection);
            document.getElementById("outcome").textContent =  result;
            rounds++;
            document.getElementById("round").textContent = "#" + rounds;
        } else {
            document.getElementById("outcome").textContent =  "Game Over";
        }
    }
    scissorsBtn.onclick = function(){
        if((playerScore != 5) && (computerScore != 5)){
            computerSelection = computerMove();
            document.getElementById("computerImg").src = "img/" + photos[computerSelection];
            document.getElementById("playerImg").src = "img/scissors.png";
            scissors = playerSelection = scissorsBtn.value;
            result = playRound(playerSelection, computerSelection);
            document.getElementById("outcome").textContent = result;
            rounds++;
            document.getElementById("round").textContent = "#" + rounds;   
        } else {
            document.getElementById("outcome").textContent =  "Game Over";
        }
    }
}

// Computer Move Function
function computerMove(){
    return (Math.floor((Math.random() * 3)) + 1);
}

function playRound(player, computer){ // Play Round Function
    // Playing a 5 round game
    if((playerScore == 5) || (computerScore == 5)){
        return "Game Over";
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