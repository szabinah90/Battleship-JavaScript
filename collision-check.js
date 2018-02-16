function checkCollision(board, ship) {
  let i;
  let j;
  let collision = false;
  let checkSumCells;
  let checkSumI;
  let checkSumJ;
  if (ship.vertOrHor === 1) { // vertical
    for (i = ship.startx - 1; i < ship.startx + ship.shipSize + 1; i++) {
      checkSumI = +i;
      for (j = ship.starty - 1; j < ship.starty + 2; j++) {
        checkSumJ = +j;
      }
      checkSumCells = checkSumJ + checkSumI;
    }
  } else { // horizontal
    for (j = ship.starty - 1; j < ship.starty + ship.shipSize + 1; j++) {
      checkSumJ = +j;
      for (i = ship.startx - 1; i < ship.startx + 2; i++) {
        checkSumI = +i;
      }
      checkSumCells = checkSumJ + checkSumI;
    }
  }
  if (checkSumCells == 0) {
    collision = false;
  } else {
    collision = true;
  }
  return collision;
}

module.exports = {
  checkCollision: checkCollision
};
