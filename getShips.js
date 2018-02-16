const battleshipMatrix = require('./battleship-matrix.js');
const generateShips = require('./generateShips.js');
const checkCollision = require('./collision-check.js');
const putShipsOnBoard = require('./put-ships-on-board.js');

let board = battleshipMatrix.arrayGenerator(12, 12);
let newShips = [];

function getShips(boardsize, board) {
  let i;
  for (i = 5; i > 0; i--) {
    let ship = generateShips.generateShips(boardsize, i); // @todo: rename generateShip
    let collision = checkCollision.checkCollision(board, ship);
    if (collision === false) {
      newShips.push(ship);
      board = putShipsOnBoard.putShipsOnBoard(board, ship);
    } else {
      i = i + 1;
    }
  }
  return board;
}

console.log(getShips(12, board));
console.log(newShips);
