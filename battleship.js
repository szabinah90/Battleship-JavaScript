const battleshipMatrix = require('./battleship-matrix.js');
const collisionCheck = require('./collision-check.js');
const generateShips = require('./generateShips.js');
const getShips = require('./getShips.js');
const guessing = require('./guessing.js');
const putShipsOnBoard = require('./put-ships-on-board.js');
const userInputInterpreter = require('./user-input-interpreter.js');
const readlineSync = require('readline-sync');

function generatePlayground() {
  let playerBoard = battleshipMatrix.displayMatrix(battleshipMatrix.arrayGenerator(12, 12, 0));
  let playerBoardWithShips = getShips.getShips(11, playerBoard);

  return playerBoardWithShips;
}

function gameLoop() {

  let generatedOutput = generatePlayground();
  let playBoard = generatedOutput[1];
  let playShips = generatedOutput[0];
  console.log(playBoard);
  let counter = 0;

  while (counter !== 5) {
    let uiCol = readlineSync.keyIn('Please enter a column (capital letters: A-J): ', { limit: '$<ABCDEFGHIJ>' });
    uiCol = userInputInterpreter.userInputInterpreter(uiCol);
    let uiRow = readlineSync.keyIn('Please enter a row (numbers: 1-10): ', { limit: '$<0-9><q>' });

    let guess = guessing.guessing(playBoard, playShips, uiRow, uiCol);
    console.log('\33c');
    console.log(playBoard);
    console.log(guess);

    if (uiRow === 'q') {
      process.exit;
    }

    if (guess === 'You sank a battleship!') {
      counter += 1;
    }
  }
  console.log('Congratulation! You sank all the battleships!')
}

gameLoop();