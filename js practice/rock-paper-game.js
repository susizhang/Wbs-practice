const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};
// console.log(getUserChoice('rock'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It is a tie !";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won";
    }
    {
      return "The user won";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won";
    }
    {
      return "The user won";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won";
    }
    {
      return "The user won";
    }
  }
};

// console.log(determineWinner('paper', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw:" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
