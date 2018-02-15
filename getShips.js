const battleshipMatrix = require('./battleship-matrix.js');
const generateShips = require('./generateShips.js');
const checkCollision = require('./collision-check.js');

let arrayBoard = battleshipMatrix.arrayGenerator();
arrayBoard[3][2] = 2;
arrayBoard[3][3] = 2;
arrayBoard[3][4] = 2;

console.log(battleshipMatrix.displayMatrix(arrayBoard));

function getShips(boardsize, board) {
  let i;
  for (i = 5; i > 0; i--) {
    let newShips = [];
    let ship = generateShips.generateShips(boardsize, i);
    let collision = checkCollision(board, ship);
    if (collision === false) {
      board = putShipsOnBoard(board);
      
    }
  }
  return newShips
}
