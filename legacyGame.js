turns = 5;
options = ["rock", "paper", "scissors"];
function _random(n) {
  return Math.floor(Math.random() * n);
}
function playRound(user, computer) {
  user = user.toLowerCase();
  computer = computer.toLowerCase();
  console.log(`${user} × ${computer}`);

  if (user === computer) return "Tie"; // Tie

  if (user === "rock") {
    if (computer === "scissors") return "Player win!";
    else return "Player lose!";
  } else if (user === "paper") {
    if (computer === "rock") return "Player win!";
    else return "Player lose!";
  } else if (user === "scissors") {
    if (computer === "paper") return "Player win!";
    else return "Player lose!";
  }
}
function computerPlay() {
  return options[_random(options.length)];
}

function game() {
  let playerSelection,
    computerSelection,
    result,
    userPoints = 0,
    PCPoints = 0;
  for (let i = 0; i < turns; i++) {
    console.group(`turn_${i + 1}`);
    playerSelection = -1;
    while (
      playerSelection < 0 ||
      playerSelection > 2 ||
      playerSelection == ""
    ) {
      playerSelection = prompt(`
              Give me an option:
              0 - ${options[0]}
              1 - ${options[1]}
              2 - ${options[2]}
          `);
    }
    playerSelection = options[playerSelection];
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    switch (result) {
      case "Tie":
        PCPoints++;
        userPoints++;
        break;
      case "Player win!":
        userPoints++;
        break;
      case "Player lose!":
        PCPoints++;
    }
    console.groupEnd(`turn_${i + 1}`);
  }
  console.log("Results:");
  console.log(`PC:${PCPoints}\nUser:${userPoints}`);
  if (PCPoints === userPoints) console.log("Tie");
  else if (userPoints > PCPoints) console.log("Player wins!");
  else console.log("PC wins!");
}

game();
