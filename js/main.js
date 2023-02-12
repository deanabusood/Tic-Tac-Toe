/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = "X";
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll("#board div"));
/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleTurn);
/*----- functions -----*/
function init() {
  board = ["", "", "", "", "", "", "", "", ""]; //3x3 board

  render();
}

function render() {
  board.forEach(function (mark, index) {
    console.log(mark, index);

    squares[index].textContent = mark;
  });
}

function handleTurn(event) {
  let idx = squares.findIndex(function (square) {
    return square === event.target;
  });
  board[idx] = turn;
  //   console.log(board);
}

// call init
init();
