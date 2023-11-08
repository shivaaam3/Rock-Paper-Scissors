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

function getUserInput() {
    let input = prompt("Please type an option from Rock/ Papers/ Scissors");
    input = input.toLowerCase();

    switch (input) {
        case "rock":
            return Options.Rock;
        case "paper":
            return Options.Paper;
        case "scissors":
            return Options.Scissors;
        default:
            alert("Incorrect input please try again!")
            return Options.NotAnOption;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerInput() {
    const rand = getRandomInt(0, 3);
    switch (rand) {
        case 0:
            return Options.Rock;
        case 1:
            return Options.Paper;
        case 2:
            return Options.Scissors;
        default:
            return Options.NotAnOption;
    }
}

function onRoundWon(winner) {
    if (winner == "computer") {
        computerScore++;
    } else {
        playerScore++;
    }
    alert(`${winner} Won this round! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
}


function endGameCheck() {
    if (computerScore >= 5) {
        alert("Game Over! Computer Won the game!");
        return true;
    } else if (playerScore >= 5) {
        alert("Game Over! Player Won the game!");
        return true;
    } else
        return false;
}


function game() {
    while (true) {
        const computerOption = getComputerInput();
        const playerOption = getUserInput();

        if (playerOption == Options.NotAnOption) {
            alert("Incorrect input please try again!");
            continue;
        }

        alert(`Player chose: ${Options.properties[playerOption]} \nComputer chose: ${Options.properties[computerOption]}`);
        if (playerOption == computerOption) {
            alert("It is a Draw!")
            continue;
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

        if (endGameCheck())
            break;

    }

}


game();

