const battleshipMatrix = require('./battleship-matrix.js');
const generateShips = require('./generateShips.js');
const checkCollision = require('./collision-check.js');
const putShipsOnBoard = require('./put-ships-on-board.js');
const getShips = require('./getShips.js');
/*
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
*/
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

  if (boardHidden[uiRow][uiCol - 64] === 'X' || boardHidden[uiRow][uiCol - 64] === '-') {
    shipSunk = 'already-hit';
  }

  if (boardHidden[uiRow][uiCol - 64] === 0) {
    shipSunk = 'missed';
  }

  if (boardHidden[uiRow][uiCol - 64] !== 0 && boardHidden[uiRow][uiCol - 64] !== '-') {
    boardHidden[uiRow][uiCol - 64] = 'X'; // X = ship
    boardSeen[uiRow][uiCol - 64] = 'X';
  } 
  if (boardHidden[uiRow][uiCol - 64] === 0) {
    boardHidden[uiRow][uiCol - 64] = '-'; // missed
    boardSeen[uiRow][uiCol - 64] = '-';
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
/*
// hit
let uiRow = 7;
let uiCol = 7;

// sink
let uiRow2 = 5;
let uiCol2 = 7;

// already guessed
let uiRow3 = 10;
let uiCol3 = 10;

// missed
let uiRow4 = 2;
let uiCol4 = 9;
*/
// let guessResult = guessing(board, ships, uiRow, uiCol);
// let guessResult = guessing(board, ships, uiRow2, uiCol2);
// let guessResult = guessing(board, ships, uiRow3, uiCol3);
// let guessResult = guessing(board, ships, uiRow4, uiCol4);
// console.log(board);
// console.log(ships[3]);
// console.log(shipHit);
// console.log(shipSunk);
// console.log(shipGuessed);
// console.log(shipMiss);
// console.log(guessResult);