const battleshipMatrix = require('./battleship-matrix.js');
const generateShips = require('./generateShips.js');
const checkCollision = require('./collision-check.js');
const putShipsOnBoard = require('./put-ships-on-board.js');

/*let arrayBoard = battleshipMatrix.arrayGenerator(13, 13);
arrayBoard[3][2] = 3;
arrayBoard[3][3] = 3;
arrayBoard[3][4] = 3;
*/

// console.log(battleshipMatrix.displayMatrix(arrayBoard));

let board = battleshipMatrix.arrayGenerator(12, 12);

function getShips(boardsize, board) {
  let i;
  for (i = 5; i > 0; i--) {
    let newShips = [];
    let ship = generateShips.generateShips(boardsize, i);
    let collision = checkCollision.checkCollision(board, ship);
    if (collision === false) {
      board = putShipsOnBoard.putShipsOnBoard(board, ship);
    } else {
      i = 6;
    }
  }
  return board;
}

console.log(getShips(12, board));
