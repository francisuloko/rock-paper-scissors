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
let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let photos = ["player.png", "rock.png", "paper.png", "scissors.png", "computer.png"];

// Game controls
let rockBtn1 = document.querySelector("#rock");
let paperBtn1 = document.querySelector("#paper");
let scissorsBtn1 = document.querySelector("#scissors");
let btnAll = document.querySelectorAll(".game-btns");

// Add phones
document.getElementById("playerImg").src = "img/player.png";
document.getElementById("computerImg").src = "img/computer.png";

// Game functions
function game(){
    // Playing a round of rock paper scissors
    rockBtn1.onclick = function(){
        document.getElementById("playerImg").src = "img/rock.png";
        computerSelection = computerMove();
        document.getElementById("computerImg").src = "img/" + photos[computerSelection];
        rock = playerSelection = rockBtn1.value; // Getting Player Selectioin
        console.log(playerSelection, computerSelection);
        result = playRound(playerSelection, computerSelection);
        document.getElementById("outcome").textContent = `[${result}]`;
        rounds++;
        document.getElementById("round").textContent ="#" + rounds;
    }
    paperBtn1.onclick = function(){
        document.getElementById("playerImg").src = "img/paper.png";
        computerSelection = computerMove();
        document.getElementById("computerImg").src = "img/" + photos[computerSelection];
        paper = playerSelection = paperBtn1.value;
        console.log(playerSelection, computerSelection);
        result = playRound(playerSelection, computerSelection);
        document.getElementById("outcome").textContent = `[${result}]`;
        rounds++;
        document.getElementById("round").textContent = "#" + rounds;
    }
    scissorsBtn1.onclick = function(){
        document.getElementById("playerImg").src = "img/scissors.png";
        computerSelection = computerMove();
        document.getElementById("computerImg").src = "img/" + photos[computerSelection];
        scissors = playerSelection = scissorsBtn1.value;
        console.log(playerSelection, computerSelection);
        result = playRound(playerSelection, computerSelection);
        document.getElementById("outcome").textContent = `[${result}]`;
        rounds++;
        document.getElementById("round").textContent = "#" + rounds;
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
    if(playerScore != 5 && computerScore != 5){
        
        // Game rules/logic
        if(player == computer){
            return "Tie";
        } else if (
            (player == scissors & computer == paper) ||
            (player == paper    & computer == rock) ||
            (player == rock     & computer == scissors)) {
            
            // Update the Leader Board
            playerScore++;
            document.getElementById("playerScore").textContent = playerScore;
            console.log(playerScore)
            return "Win";
        } else {
            computerScore++;
            document.getElementById("computerScore").textContent = computerScore;
            return "Lose";
        }
    } else {
        return "Game Over"
    }
    console.log(player, computer);
}

// Initialize Game Play
game();
