let userPoints, PCPoints, rounds;
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

  if (result == "Player lose!") PCPoints++;
  else if (result == "Tie") {
    PCPoints++;
    userPoints++;
  } else userPoints++;
  updateDOM(result);
  if (++rounds === 5) printFinalResult();
}
function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const pcCard = document.querySelector(".pcOption>figure>img");
  const pcCardSub = document.querySelector(".pcOption>figure>figcaption");
  let pcOption = options[_random(options.length)];
  pcCard.src = `img/${pcOption}.svg`;
  pcCardSub.textContent = pcOption.toLocaleUpperCase();

  return pcOption;
}
function updateDOM(result) {
  const list = document.querySelector(".results");
  if (!result) {
    const winner = document.querySelector("h2>span");
    console.log("Resetting DOM…");
    list.innerHTML = "";
    winner.innerHTML = "";
    return;
  }
  const li = document.createElement("li");
  li.textContent = result;
  list.appendChild(li);
  updateScores();
}
function printFinalResult() {
  const user = document.querySelector("#user");
  const pc = document.querySelector("#pc");
  const winner = document.querySelector("#winner");
  if (userPoints === PCPoints) {
    winner.textContent = "It's a tie!";
    user.classList.add("green-text");
    pc.classList.add("green-text");
  } else if (userPoints > PCPoints) {
    user.classList.add("green-text");
    winner.textContent = "User WINS!";
  } else {
    pc.classList.add("green-text");
    winner.textContent = "PC WINS!";
  }
}
function resetGame() {
  userPoints = 0;
  PCPoints = 0;
  rounds = 0;
  document.querySelector("#user").classList.remove("green-text");
  document.querySelector("#pc").classList.remove("green-text");
  updateScores();
  updateDOM();
}
