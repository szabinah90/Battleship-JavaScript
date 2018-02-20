const battleshipMatrix = require('./battleship-matrix.js');
const generateShips = require('./generateShips.js');

function putShipsOnBoard(board, ship) {
  let i;
  let j;
  if (ship.vertOrHor == 1) { // vertical
    for (i = ship.startx; i < ship.startx + ship.shipSize; i++) {
      j = ship.starty;
      board[i][j] = ship.shipSize;
    }
  } else {
    for (j = ship.starty; j < ship.starty + ship.shipSize; j++) {
      i = ship.startx;
      board[i][j] = ship.shipSize;
    }
  }
  return board;
}

module.exports = {
  putShipsOnBoard: putShipsOnBoard
};
