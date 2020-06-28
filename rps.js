let playerSelection, computerSelection, result, userPoints, PCPoints, rounds;
resetGame();
function updateScores() {
  document.querySelector("#user>span").textContent = userPoints;
  document.querySelector("#pc>span").textContent = PCPoints;
}
function _random(n) {
  return Math.floor(Math.random() * n);
}
function playRound(user) {
  if (rounds >= 5) {
    let ans = confirm(
      "We already have a winner, do you want to restart the game?"
    );
    if (ans) {
      resetGame();
      return;
    }
  }

  computer = computerPlay().toLowerCase();
  user = user.toLowerCase();
  let result;

  if (user === computer) {
    result = "Tie";
  } else if (user === "rock") {
    if (computer === "scissors") result = "Player win!";
    else result = "Player lose!";
  } else if (user === "paper") {
    if (computer === "rock") result = "Player win!";
    else result = "Player lose!";
  } else if (user === "scissors") {
    if (computer === "paper") result = "Player win!";
    else result = "Player lose!";
  }

  result === "Player lose!" ? PCPoints++ : userPoints++;
  updateDOM(result);
  if (++rounds === 5) printFinalResult();
}
function computerPlay() {
  return ["rock", "paper", "scissors"][_random(3)];
}
function updateDOM(result) {
  const list = document.querySelector(".results");
  if (!result) {
    console.log("Resetting DOM…");
    list.innerHTML = "";
    return;
  }
  const li = document.createElement("li");
  li.textContent = result;
  list.appendChild(li);
  updateScores();
}
function printFinalResult() {
  const winner = document.querySelector("#winner");
  if (PCPoints === userPoints) winner.textContent = "It's a tie!";
  winner.textContent = userPoints > PCPoints ? "User WINS!" : "PC WINS!";
}
function resetGame() {
  playerSelection = "";
  computerSelection = "";
  result = "";
  userPoints = 0;
  PCPoints = 0;
  rounds = 0;
  updateScores();
  updateDOM();
}
