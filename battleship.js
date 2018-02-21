function gameLoop() {
  const battleshipMatrix = require('./battleship-matrix.js');
  const collisionCheck = require('./collision-check.js');
  const generateShips = require('./generateShips.js');
  const getShips = require('./getShips.js');
  const guessing = require('./guessing.js');
  const putShipsOnBoard = require('./put-ships-on-board.js');
  const userInputInterpreter = require('./user-input-interpreter.js');
  const readlineSync = require('readline-sync');
  const artWork = require('./battleshipArt.js');
  const generatePlayground = require('./generate-playground.js');
  const userRow = require('./user-row.js');

  let generatedOutput = generatePlayground.generatePlayground();
  let playBoard = generatedOutput[1];
  let playShips = generatedOutput[0];
  let playBoardSeen = battleshipMatrix.displayMatrix(battleshipMatrix.arrayGenerator(12, 12, '?'));
  console.log('\33c');
  artWork.artWork();

  battleshipMatrix.print(battleshipMatrix.genUserBoard(playBoardSeen));

  var counter = 0;
  var torpedoCounter = 100;
  torpedos = [30, 50, 70, 90];
  torp = readlineSync.keyInSelect(torpedos, '\nHow many torpedos do you need?');
  switch (torp) {
    case 0:
    var torpedoCounter = 30;
    break;
    case 1:
    var torpedoCounter = 50;
    break;
    case 2:
    var torpedoCounter = 70;
    break;
    case 3:
    var torpedoCounter = 90;
    break;
  }
  console.log('\33c');
  artWork.artWork();
  battleshipMatrix.print(battleshipMatrix.genUserBoard(playBoardSeen));
  
  while (counter !== 5 || torpedoCounter !== 0) {
    let uiCol = readlineSync.keyIn('\nPlease enter a column (capital letters: A-J): ', { limit: '$<A-J><!>', caseSensitive: true });
    if (uiCol === '!') {
      console.log('\nThank you for playing our game! Try to finish it next time!');
      process.exit();
    }
    uiCol = userInputInterpreter.userInputInterpreter(uiCol);
    let uiRow = userRow.userRow();

    let guess = guessing.guessing(playBoard, playBoardSeen, playShips, uiRow, uiCol);
    console.log('\33c');
    artWork.artWork();
    battleshipMatrix.print(battleshipMatrix.genUserBoard(playBoardSeen));

    console.log('\n' + guess);

    if (guess === 'You sank a battleship!') {
      counter += 1;
    }
    torpedoCounter--
    console.log('\nTorpedoes left: ' + torpedoCounter);
    if (torpedoCounter === 0) {
      console.log('\nSorry, you ran out of torpedos. You lost.')
      let newGame = readlineSync.keyIn('Would you like to play again? (y/n)', { limit: '$<nNyY>' });
      switch (newGame) {
        case ('Y' || 'y'):
          console.log('\33c');
          gameLoop();
          break;
        case ('N' || 'n'):
          console.log('\nThank you for playing our game! We hope we will meet again!');
          process.exit();
          break;
      }
    }
    if (counter === 5) {
      console.log('\nCongratulations! You sank all the battleships!')
      newGame = readlineSync.keyIn('Would you like to play again? (y/n)', { limit: '$<nNyY>' });
      switch (newGame) {
        case ('Y' || 'y'):
          console.log('\33c');
          gameLoop();
          break;
        case ('N' || 'n'):
          console.log('\nThank you for playing our game! We hope we will meet again!');
          process.exit();
          break;
      }
    }
  }
}

gameLoop();