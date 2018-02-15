const battleshipMatrix = require('./battleship-matrix.js');
const generateShips = require('./generateShips.js');
let arrayBoard = battleshipMatrix.arrayGenerator();
arrayBoard[3][2] = 2;
arrayBoard[3][3] = 2;
arrayBoard[3][4] = 2;
arrayBoard[4][2] = -1;
arrayBoard[4][3] = -1;
arrayBoard[4][4] = -1;
arrayBoard[2][2] = -1;
arrayBoard[2][3] = -1;
arrayBoard[2][4] = -1;
arrayBoard[3][1] = -1;
arrayBoard[2][1] = -1;
arrayBoard[4][1] = -1;
arrayBoard[3][5] = -1;
arrayBoard[2][5] = -1;
arrayBoard[4][5] = -1;
console.log(battleshipMatrix.displayMatrix(arrayBoard));

function checkCollision(board, ship) {
  let isCollision = false;
  if (ship.vertOrHor === 1) { // vertical
    

  }

}

function getShips(boardsize, board) {
  let i;
  for (i = 5; i > 0; i--) {
    let newShip = [];
    //generateShips.generateShips(boardsize, i);
    let ship = generateShips.generateShips(boardsize, i);

  }
  return newShip
}