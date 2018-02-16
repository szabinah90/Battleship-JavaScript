function checkCollision(board, ship) {
  let isCollision = false;
  let i;
  let j;
  if (ship.vertOrHor === 1) { // vertical
    for (i = ship.startx - 1; i < ship.shipSize + 1; i++) {
      for (j = ship.starty - 1; j < ship.starty + 1; j++) {
        while (board[i][j] === 0) {
          isCollision = true;
        }
      }
    }
  } else { // horizontal
    for (j = ship.starty - 1; j < ship.shipSize + 1; j++) {
      for (i = ship.startx - 1; i < ship.startx + 1; i++) {
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
