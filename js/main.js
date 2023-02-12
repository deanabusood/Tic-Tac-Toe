/*----- constants -----*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*----- app's state (variables) -----*/
let board;
let turn = "X";
let win;

let xWins = 0;
let oWins = 0;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll("#board div"));
const messages = document.querySelector("h2");

const xScore = document.querySelector("#xScore span");
const oScore = document.querySelector("#oScore span");

/*----- event listeners -----*/
document.getElementById("reset-button").addEventListener("click", init);

/*----- functions -----*/
function init() {
  document.getElementById("board").addEventListener("click", handleTurn);
  board = ["", "", "", "", "", "", "", "", ""]; //3x3 board
  win = null;
  turn = "X";

  render();
}

function render() {
  board.forEach(function (mark, index) {
    //display marking on square after(EventListener) click
    squares[index].textContent = mark;
  });

  if (win === "T") {
    messages.textContent = `It's a tie!`;
  } else if (win) {
    messages.textContent = `${win} wins the game!`;
    if (win === "X") {
      xWins++;
      xScore.textContent = xWins;
    } else {
      oWins++;
      oScore.textContent = oWins;
    }
  } else {
    messages.textContent = `It's ${turn}'s turn!`;
  }
}

function handleTurn(event) {
  let index = squares.findIndex(function (square) {
    return square === event.target;
  });
  //check if already occupied
  if (board[index] !== "") {
    return;
  }
  //input onto board
  board[index] = turn;
  //determine/swap turn
  turn = turn === "X" ? "O" : "X";

  win = getWinner();

  render();
}

function getWinner() {
  let winner = null;
  winningCombos.forEach(function (combo, index) {
    if (
      board[combo[0]] &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    ) {
      winner = board[combo[0]];
      document.getElementById("board").removeEventListener("click", handleTurn);
    }
  });

  return winner ? winner : board.includes("") ? null : "T";
}

// call init
init();
