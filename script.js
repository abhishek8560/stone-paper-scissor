// Adding random computer choice
function randomComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    let computerChoiceAccess = document.querySelector(".computerEmoji");
    let computerChoiceText = document.querySelector(".computerChoiceText");

    if (randomNumber == 1) {
        computerChoiceAccess.textContent = "👊";
        computerChoiceText.textContent = "Computer choice : Stone"
    }
    else if (randomNumber == 2) {
        computerChoiceAccess.textContent = "✋";
        computerChoiceText.textContent = "Computer choice : Paper"
    }
    else if (randomNumber == 3) {
        computerChoiceAccess.textContent = "✌️";
        computerChoiceText.textContent = "Computer choice : Scissor"
    }
    return randomNumber
}

// Adding response against user choice
let scoreStr = localStorage.getItem("score");
let score;
// console.log(scoreStr)
if (scoreStr != undefined) {
    score = JSON.parse(scoreStr);
    display();
}
else {
    score = {
        palyerScore: 0,
        tie: 0,
        computerScore: 0,
        playerChoice: 0,
        computerChoice: 0,
        result: 0,
    }
    display();
}

document.querySelector(".stone").addEventListener("click", function () {
    score.playerChoice = 1;
    randomComputerChoice();
    whoWon();
});
document.querySelector(".paper").addEventListener("click", function () {
    score.playerChoice = 2;
    randomComputerChoice();
    whoWon();
});
document.querySelector(".scissor").addEventListener("click", function () {
    score.playerChoice = 3;
    randomComputerChoice();
    whoWon();
});
document.querySelector(".resetBtn").addEventListener("click", function () {
    resetScore();
})

//Function to check who will win
function whoWon() {
    let randomChoice = randomComputerChoice();
    score.computerChoice = randomChoice;

    if (score.playerChoice == 1) {
        document.querySelector(".playerText").textContent = "Player Choice : Stone "
        if (randomChoice == 1) {
            score.tie++;
            document.querySelector(".tie").textContent = "Tie = " + score.tie;
            document.querySelector(".result").textContent = "Tie"
            document.querySelector(".result").style.color = "black";
            score.result = 2;
        }
        else if (randomChoice == 2) {
            score.computerScore++;
            document.querySelector(".computerScore").textContent = "Computer Score = " + score.computerScore;
            document.querySelector(".result").textContent = "You Lose"
            document.querySelector(".result").style.color = "red";
            score.result = 3;
        }
        else if (randomChoice == 3) {
            score.palyerScore++;
            document.querySelector(".playerScore").textContent = "Player Score = " + score.palyerScore;
            document.querySelector(".result").textContent = "You Win"
            document.querySelector(".result").style.color = "green";
            score.result = 1;
        }
    }

    if (score.playerChoice == 2) {
        document.querySelector(".playerText").textContent = "Player Choice : Paper "
        if (randomChoice == 1) {
            score.palyerScore++;
            document.querySelector(".playerScore").textContent = "Player Score = " + score.palyerScore;
            document.querySelector(".result").textContent = "You Win"
            document.querySelector(".result").style.color = "green";
            score.result = 1;
        }
        else if (randomChoice == 2) {
            score.tie++;
            document.querySelector(".tie").textContent = "Tie = " + score.tie;
            document.querySelector(".result").textContent = "Tie"
            document.querySelector(".result").style.color = "black";
            score.result = 2;
        }
        else if (randomChoice == 3) {
            score.computerScore++;
            document.querySelector(".computerScore").textContent = "Computer Score = " + score.computerScore;
            document.querySelector(".result").textContent = "You Lose"
            document.querySelector(".result").style.color = "red";
            score.result = 3;
        }
    }

    if (score.playerChoice == 3) {
        document.querySelector(".playerText").textContent = "Player Choice : Scissors "
        if (randomChoice == 1) {
            score.computerScore++;
            document.querySelector(".computerScore").textContent = "Computer Score = " + score.computerScore;
            document.querySelector(".result").textContent = "You Lose"
            document.querySelector(".result").style.color = "red";
            score.result = 3;
        }
        else if (randomChoice == 2) {
            score.palyerScore++;
            document.querySelector(".playerScore").textContent = "Player Score = " + score.palyerScore;
            document.querySelector(".result").textContent = "You Win"
            document.querySelector(".result").style.color = "green";
            score.result = 1;
        }
        else if (randomChoice == 3) {
            score.tie++;
            document.querySelector(".tie").textContent = "Tie = " + score.tie;
            document.querySelector(".result").textContent = "Tie"
            document.querySelector(".result").style.color = "black";
            score.result = 2;
        }
    }
    localStorage.setItem("score", JSON.stringify(score));
}

// setting score zero for reset button
function resetScore() {
    score.palyerScore = 0;
    score.tie = 0;
    score.computerScore = 0;
    score.playerChoice = 0;
    score.computerChoice = 0;
    score.result = 0;

    localStorage.setItem("score", JSON.stringify(score));

    document.querySelector(".tie").textContent = "Tie = " + score.tie;
    document.querySelector(".playerScore").textContent = "Player Score = " + score.palyerScore;
    document.querySelector(".computerScore").textContent = "Computer Score = " + score.computerScore;

    document.querySelector(".playerText").textContent = "Player Choice"
    document.querySelector(".computerChoiceText").textContent = "Computer Choice"
    document.querySelector(".computerEmoji").textContent = "👊✋✌️";

    document.querySelector(".result").textContent = "Result";
    document.querySelector(".result").style.color = "black";
}

//display score after refresh
function display() {
    displayScore();
    displayPlayerText();
    displayCPUText();
    displayResultText();
}

function displayScore(){
    document.querySelector(".tie").textContent = "Tie = " + score.tie;
    document.querySelector(".playerScore").textContent = "Player Score = " + score.palyerScore;
    document.querySelector(".computerScore").textContent = "Computer Score = " + score.computerScore;
}
function displayCPUText(){
    if(score.computerChoice == 0){
        document.querySelector(".computerChoiceText").textContent = "Computer Choice"
        document.querySelector(".computerEmoji").textContent = "👊✋✌️";
    }
    else if(score.computerChoice == 1){
        document.querySelector(".computerChoiceText").textContent = "Computer Choice : Stone"
        document.querySelector(".computerEmoji").textContent = "👊";        
    }
    else if(score.computerChoice == 2){
        document.querySelector(".computerChoiceText").textContent = "Computer Choice : Paper"
        document.querySelector(".computerEmoji").textContent = "✋";        
    }
    else if(score.computerChoice == 3){
        document.querySelector(".computerChoiceText").textContent = "Computer Choice : Scissor"
        document.querySelector(".computerEmoji").textContent = "✌️";        
    }
}
function displayPlayerText(){
    if(score.playerChoice == 0){
        document.querySelector(".userChoiceText").textContent = "Player Choice"
    }
    else if(score.playerChoice == 1){
        document.querySelector(".userChoiceText").textContent = "Player Choice : Stone"
    }
    else if(score.playerChoice == 2){
        document.querySelector(".userChoiceText").textContent = "Player Choice : Paper"
    }
    else if(score.playerChoice == 3){
        document.querySelector(".userChoiceText").textContent = "Player Choice : Scissor"
    }
}
function displayResultText(){
    if(score.result == 0){
        document.querySelector(".result").textContent = "Result"
    }
    else if(score.result == 1){
        document.querySelector(".result").textContent = "You Win"
        document.querySelector(".result").style.color = "green";
    }
    else if(score.result == 2){
        document.querySelector(".result").textContent = "Tie"
        document.querySelector(".result").style.color = "black";
    }
    else if(score.result == 3){
        document.querySelector(".result").textContent = "You Lose"
        document.querySelector(".result").style.color = "red";
    }
}

// Adding click animation to all buttons
let myButtons = document.querySelectorAll(".btn");
myButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        let buttonAnimation = function () {
            button.classList.remove("pressed");
        }; setTimeout(buttonAnimation, 17);

        button.classList.add("pressed")
    })
});