let countTie = 0;
let countWin = 0;
let countLose = 0;

let result;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice){
        result = "Tie"
    } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors')||
    (playerChoice === 'scissors' && computerChoice === 'paper')||
    (playerChoice === 'paper' && computerChoice === 'rock')
    ){
        result = "Win"
    } else {
        result = "Lost"
    }

    if (result === "Tie") {
        countTie += 1;
        document.getElementById("tieOutcome").innerText = countTie;
    } else if (result === "Win") {
        countWin += 1;
        document.getElementById("yourScore").innerText = countWin;
    } else {
        countLose += 1;
        document.getElementById("computerScore").innerText = countLose;
    }

    document.getElementById("outcomeMessage").innerText = result;

    document.getElementById("gamesPlayed").innerText = countTie + countWin + countLose;
}