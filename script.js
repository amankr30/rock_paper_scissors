
const container = document.querySelector(".container");
const innerdiv = document.createElement("div");  
container.append(innerdiv);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

const computerSelection = getComputerChoice();

function updateInnerDiv(text){
    innerdiv.innerText=text;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("tie!!!");
    updateInnerDiv('tie');
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    console.log(`you win! ${playerSelection} beats ${computerSelection}`);
    
    updateInnerDiv(`you win! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log(` You lose! ${computerSelection} beats ${playerSelection}`);
    
    updateInnerDiv( ` You lose! ${computerSelection} beats ${playerSelection}`);
  }
}



function game() {
  const div = document.createElement("div");
  div.setAttribute("class", "btn");

  const rock = document.createElement("button");
  rock.innerText = "rock";
  div.append(rock);

  const paper = document.createElement("button");
  paper.innerText = "paper";
  div.append(paper);

  const scissors = document.createElement("button");
  scissors.innerText = "scissors";
  div.append(scissors);

  container.append(div);


  rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
  scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });
}

game();
