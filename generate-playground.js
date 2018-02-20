const battleshipMatrix = require('./battleship-matrix.js');
const collisionCheck = require('./collision-check.js');
const generateShips = require('./generateShips.js');
const getShips = require('./getShips.js');
const guessing = require('./guessing.js');
const putShipsOnBoard = require('./put-ships-on-board.js');
const userInputInterpreter = require('./user-input-interpreter.js');
const readlineSync = require('readline-sync');
const artWork = require('./battleshipArt.js');

function generatePlayground() {
  let playerBoard = battleshipMatrix.displayMatrix(battleshipMatrix.arrayGenerator(12, 12, 0));
  let playerBoardWithShips = getShips.getShips(11, playerBoard);

  return playerBoardWithShips;
}

module.exports = {
  generatePlayground: generatePlayground
};
