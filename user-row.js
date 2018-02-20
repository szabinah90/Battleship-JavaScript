const readlineSync = require('readline-sync');

function userRow() {
  let uiRow = readlineSync.question('Please enter a row (numbers: 1-10): ');
  let testInput = /[/\D+/]/.test(uiRow);
  while (uiRow < 1 || uiRow > 10 || testInput === true) {
    uiRow = readlineSync.question('Invalid row. Please enter a valid row (numbers: 1-10): ');
    testInput = /[/\D+/]/.test(uiRow);
  }
  return uiRow;
}

module.exports = {
  userRow: userRow
};
