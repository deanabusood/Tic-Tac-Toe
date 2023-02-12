/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = "X";
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll("#board div"));

const messages = document.querySelector("h2");
/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleTurn);
/*----- functions -----*/
function init() {
  board = ["", "", "", "", "", "", "", "", ""]; //3x3 board

  render();
}

function render() {
  board.forEach(function (mark, index) {
    //display marking on square after(EventListener) click
    squares[index].textContent = mark;
  });
  messages.textContent = `It's ${turn}'s turn!`;
}

function handleTurn(event) {
  let index = squares.findIndex(function (square) {
    return square === event.target;
  });
  //input onto board
  board[index] = turn;
  //determine/swap turn
  turn = turn === "X" ? "O" : "X";

  render();
}

// call init
init();
