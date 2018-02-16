function checkCollision(board, ship) {
  let isCollision = false;
  let i;
  let j;
  let checkSumRow = 0;
  if (ship.vertOrHor === 1) { // vertical
    for (i = ship.startx - 1; i < ship.shipSize + 3; i++) {
      checkSumRow += i;
      for (j = ship.starty - 1; j < ship.starty + 2; j++) {
        while (board[i][j] === 0) {
          isCollision = true;
        }
      }
    }
  } else { // horizontal
    for (j = ship.starty - 1; j < ship.shipSize + 3; j++) {
      for (i = ship.startx - 1; i < ship.startx + 2; i++) {
        while (board[i][j] === 0) {
          isCollision = true;
        }
      }
    }
  }
  return isCollision;
}

module.exports = {
  checkCollision: checkCollision
};
