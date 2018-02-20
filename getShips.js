const battleshipMatrix = require('./battleship-matrix.js');
const generateShips = require('./generateShips.js');
const checkCollision = require('./collision-check.js');
const putShipsOnBoard = require('./put-ships-on-board.js');

function getShips(boardsize, board) {
  let i;
  let newShips = [];
  for (i = 5; i > 0; i--) {
    let ship = generateShips.generateShips(boardsize, i); // @todo: rename generateShip
    let collision = checkCollision.checkCollision(board, ship);
    if (collision === false) {
      board = putShipsOnBoard.putShipsOnBoard(board, ship);
      newShips.push(ship);
    } else {
      i = i + 1;
    }
  }
  return [newShips, board];
}

module.exports = {
  getShips: getShips
};
