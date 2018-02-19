const battleshipMatrix = require('./battleship-matrix.js');
const generateShips = require('./generateShips.js');
const checkCollision = require('./collision-check.js');
const putShipsOnBoard = require('./put-ships-on-board.js');

// let board = battleshipMatrix.arrayGenerator(12, 12, 0);

function getShips(boardsize, board) {
  let i;
  let newShips = [];
  for (i = 5; i > 0; i--) {
    // newShips = [];
    let ship = generateShips.generateShips(boardsize, i); // @todo: rename generateShip
    let collision = checkCollision.checkCollision(board, ship);
    if (collision === false) {
      board = putShipsOnBoard.putShipsOnBoard(board, ship);
      newShips.push(ship);
    } else {
      i = i + 1;
    }
  }
  // console.log(board);
  return [newShips, board];
}

// let generatedShips = getShips(10, board);
// console.log(generatedShips[0][0]);
// console.log(generatedShips[0][0]);

module.exports = {
  getShips: getShips
};
