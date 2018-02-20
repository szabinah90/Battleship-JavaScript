const battleshipMatrix = require('./battleship-matrix.js');
const generateShips = require('./generateShips.js');
const checkCollision = require('./collision-check.js');
const putShipsOnBoard = require('./put-ships-on-board.js');
const getShips = require('./getShips.js');

function guessing(boardHidden, boardSeen, ships, uiRow, uiCol) { // ships --> getship output 0. indexű array eleme!!!; uiRow és uiCol a usert input interpreter outputjának 0 és 1 es indexű eleme
  let i;
  let shipSunk;
  let guessResult;

  for (i = 0; i < ships.length; i++) {
    if (boardHidden[uiRow][uiCol - 64] === ships[i].shipSize) {
      ships[i].hit += 1;
      if (ships[i].hit === ships[i].shipSize) {
        ships[i].isSunk = true;
        shipSunk = ships[i].isSunk;
      }
      shipSunk = ships[i].isSunk;
    }
  }

  if (boardHidden[uiRow][uiCol - 64] === 'X' || boardHidden[uiRow][uiCol - 64] === ' ') {
    shipSunk = 'already-hit';
  }

  if (boardHidden[uiRow][uiCol - 64] === 0) {
    shipSunk = 'missed';
  }

  if (boardHidden[uiRow][uiCol - 64] !== 0 && boardHidden[uiRow][uiCol - 64] !== ' ') {
    boardHidden[uiRow][uiCol - 64] = 'X'; // X = ship
    boardSeen[uiRow][uiCol - 64] = 'X';
  }
  if (boardHidden[uiRow][uiCol - 64] === 0) {
    boardHidden[uiRow][uiCol - 64] = ' '; // missed
    boardSeen[uiRow][uiCol - 64] = ' ';
  }
  if (boardHidden[uiRow][uiCol - 64] === 'X' && shipSunk === false) {
    guessResult = 'Hit!';
  }

  if (shipSunk === true) {
    guessResult = 'You sank a battleship!';
  }

  if (shipSunk === 'already-hit') {
    guessResult = 'You already hit this spot!';
  }

  if (shipSunk === 'missed') {
    guessResult = 'Miss!';
  }

  return guessResult;
}

module.exports = {
  guessing: guessing
};