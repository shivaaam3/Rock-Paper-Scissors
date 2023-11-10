const computerSelectedOption = document.querySelector("#computer > .selectedOption");
const playerSelectedOption = document.querySelector("#player > .selectedOption");

const playerScoreText = document.querySelector("#player > .score");
const computerScoreText = document.querySelector("#computer > .score");

const resultText = document.querySelector(".result > h3");
const optionButtons = document.querySelectorAll("#player > .options > button");
optionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(button.id);
        // alert(button.id);
    });
});

const Options = {
    Rock: 0,
    Paper: 1,
    Scissors: 2,
    NotAnOption: 3,
};

Options.properties = {
    0: "Rock",
    1: "Paper",
    2: "Scissors",
    3: "NotAnOption",
};

let playerScore = 0;
let computerScore = 0;

function getUserInput(id) {
    switch (id) {
        case "0":
            playerSelectedOption.src = "./Images/Rock.png";
            return Options.Rock;
        case "1":
            playerSelectedOption.src = "./Images/Paper.png";
            return Options.Paper;
        case "2":
            playerSelectedOption.src = "./Images/Scissors.png";
            return Options.Scissors;
        default:
            return Options.NotAnOption;
    }
}


function updateResultText(str) {
    resultText.textContent = str;
}

function getRandomInt(min, max) {
    min = Math.trunc(min);
    max = Math.trunc(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerInput() {
    const rand = getRandomInt(0, 3);
    switch (rand) {
        case 0:
            computerSelectedOption.src = "./Images/Rock.png";
            return Options.Rock;
        case 1:
            computerSelectedOption.src = "./Images/Paper.png";
            return Options.Paper;
        case 2:
            computerSelectedOption.src = "./Images/Scissors.png";
            return Options.Scissors;
        default:
            return Options.NotAnOption;
    }
}

function onRoundWon(winner) {
    if (winner == "computer") {
        computerScore++;
        computerScoreText.textContent = `Computer: ${computerScore}`;
        updateResultText("Computer won this round!");
    } else {
        playerScore++;
        playerScoreText.textContent = `Player: ${playerScore}`;
        updateResultText("Player won this round!");
    }
}


function endGameCheck() {
    if (computerScore >= 5) {
        updateResultText("Computer won the game!");
        return true;
    } else if (playerScore >= 5) {
        updateResultText("Player won the game!");
        return true;
    } else
        return false;
}


function playRound(id) {

    const playerOption = getUserInput(id)
    const computerOption = getComputerInput();
    if (playerOption == computerOption) {
        updateResultText("It is a Draw!");
    }

    switch (playerOption) {
        case Options.Rock:
            if (computerOption == Options.Paper)
                onRoundWon("computer");
            else if (computerOption == Options.Scissors)
                onRoundWon("player");
            break;
        case Options.Paper:
            if (computerOption == Options.Rock)
                onRoundWon("player");
            else if (computerOption == Options.Scissors)
                onRoundWon("computer");
            break;
        case Options.Scissors:
            if (computerOption == Options.Paper)
                onRoundWon("player");
            else if (computerOption == Options.Rock)
                onRoundWon("computer");
            break;
    }

    endGameCheck();
}





