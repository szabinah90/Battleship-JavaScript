const battleshipMatrix = require('./battleship-matrix.js');
const generateShips = require('./generateShips.js');
const checkCollision = require('./collision-check.js');
const putShipsOnBoard = require('./put-ships-on-board.js');
const getShips = require('./getShips.js');

// Test: Create a board with one fixed ship
let board = battleshipMatrix.arrayGenerator(12, 12, 0);
board[1][3] = 5;
board[2][3] = 5;
board[3][3] = 5;
board[4][3] = 5;
board[5][3] = 5;

board[7][4] = 4;
board[7][5] = 4;
board[7][6] = 4;
board[7][7] = 4;

board[10][3] = 3;
board[10][4] = 3;
board[10][5] = 3;

board[4][7] = 2;
board[5][7] = 2;

board[4][5] = 1;

board[10][10] = 'G';

board[4][7] = 'G';

let ships = [{
  vertOrHor: 1,
  startx: 1,
  starty: 3,
  shipSize: 5,
  hit: 0,
  isSunk: false
},
{
  vertOrHor: 0,
  startx: 7,
  starty: 4,
  shipSize: 4,
  hit: 0,
  isSunk: false
},
{
  vertOrHor: 0,
  startx: 10,
  starty: 3,
  shipSize: 3,
  hit: 0,
  isSunk: false
},
{
  vertOrHor: 1,
  startx: 4,
  starty: 7,
  shipSize: 2,
  hit: 1,
  isSunk: false
},
{
  vertOrHor: 0,
  startx: 4,
  starty: 5,
  shipSize: 1,
  hit: 0,
  isSunk: false
}];

function guessing(boardHidden, ships, uiRow, uiCol) { // ships --> getship output 0. indexű array eleme!!!
  let i;
  let shipSunk;
  for (i = 0; i < ships.length; i++) {
    if (boardHidden[uiRow - 1][uiCol - 1] === ships[i].shipSize) {
      ships[i].hit += 1;
      if (ships[i].hit === ships[i].shipSize) {
        ships[i].isSunk = true;
        shipSunk = ships[i].isSunk;
      }
      shipSunk = ships[i].isSunk;
    }
  }

  if (boardHidden[uiRow - 1][uiCol - 1] === 'G') {
    shipSunk = 'already-guessed';
  }

  if (boardHidden[uiRow - 1][uiCol - 1] === 0) {
    shipSunk = 'missed';
  }

  boardHidden[uiRow - 1][uiCol - 1] = 'G'; // G = guessed
  return shipSunk;
}

// hit
let uiRow = 7;
let uiCol = 7;

// sink
let uiRow2 = 4;
let uiCol2 = 5;

// already guessed
let uiRow3 = 10;
let uiCol3 = 10;

// missed
let uiRow4 = 2;
let uiCol4 = 9;

// let shipHit = guessing(board, ships, uiRow, uiCol);
// let shipSunk = guessing(board, ships, uiRow2, uiCol2);
// let shipGuessed = guessing(board, ships, uiRow3, uiCol3);
// let shipMiss = guessing(board, ships, uiRow4, uiCol4);
// console.log(board);
// console.log(ships[0]);
// console.log(shipHit);
// console.log(shipSunk);
// console.log(shipGuessed);
// console.log(shipMiss);