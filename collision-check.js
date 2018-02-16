function checkCollision(board, ship) {
  let i;
  let j;
  let collision = false;
  let checkSumIJ = 0;
  let checkSumI = 0;
  let checkSumJ = 0;
  if (ship.vertOrHor === 1) { // vertical
    for (i = (ship.startx - 1); i < (ship.startx + ship.shipSize + 1); i++) {
      for (j = (ship.starty - 1); j < (ship.starty + 2); j++) {
        checkSumIJ += board[i][j];
      }
    }
  } else { // horizontal
    for (j = (ship.starty - 1); j < (ship.starty + ship.shipSize + 1); j++) {

      for (i = (ship.startx - 1); i < (ship.startx + 2); i++) {
        checkSumIJ += board[i][j];
      }
    }
  }
  if (checkSumIJ == 0) {
    collision = false;
  } else {
    collision = true;
  }
  return collision;
}

module.exports = {
  checkCollision: checkCollision
};
