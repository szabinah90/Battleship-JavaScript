function checkCollision(board, ship) {
  let isCollision = false;
  if (ship.vertOrHor === 1) { // vertical
    if (ship.shipSize === 5) {
      while (board[ship.startx - 1][ship.starty] || board[ship.startx][ship.starty] || board[ship.startx + 1][ship.starty] || board[ship.startx + 2][ship.starty] || board[ship.startx + 3][ship.starty] || board[ship.startx + 4][ship.starty] || board[ship.startx + 5][ship.starty] ||
        board[ship.startx - 1][ship.starty - 1] || board[ship.startx][ship.starty - 1] || board[ship.startx + 1][ship.starty - 1] || board[ship.startx + 2][ship.starty - 1] || board[ship.startx + 3][ship.starty - 1] || board[ship.startx + 4][ship.starty - 1] || board[ship.startx + 5][ship.starty - 1] ||
        board[ship.startx - 1][ship.starty + 1] || board[ship.startx][ship.starty + 1] || board[ship.startx + 1][ship.starty + 1] || board[ship.startx + 2][ship.starty + 1] || board[ship.startx + 3][ship.starty + 1] || board[ship.startx + 4][ship.starty + 1] || board[ship.startx + 5][ship.starty + 1] !== 0) {
        isCollision = true;
      }
    }
    if (ship.shipSize === 4) {
      while (board[ship.startx - 1][ship.starty] || board[ship.startx][ship.starty] || board[ship.startx + 1][ship.starty] || board[ship.startx + 2][ship.starty] || board[ship.startx + 3][ship.starty] || board[ship.startx + 4][ship.starty] ||
      board[ship.startx - 1][ship.starty - 1] || board[ship.startx][ship.starty - 1] || board[ship.startx + 1][ship.starty - 1] || board[ship.startx + 2][ship.starty - 1] || board[ship.startx + 3][ship.starty - 1] || board[ship.startx + 4][ship.starty - 1] ||
      board[ship.startx - 1][ship.starty + 1] || board[ship.startx][ship.starty + 1] || board[ship.startx + 1][ship.starty + 1] || board[ship.startx + 2][ship.starty + 1] || board[ship.startx + 3][ship.starty + 1] || board[ship.startx + 4][ship.starty + 1] !== 0) {
        isCollision = true;
      }
    }
    if (ship.shipSize === 3) {
      while (board[ship.startx - 1][ship.starty] || board[ship.startx][ship.starty] || board[ship.startx + 1][ship.starty] || board[ship.startx + 2][ship.starty] || board[ship.startx + 3][ship.starty] ||
        board[ship.startx - 1][ship.starty - 1] || board[ship.startx][ship.starty - 1] || board[ship.startx + 1][ship.starty - 1] || board[ship.startx + 2][ship.starty - 1] || board[ship.startx + 3][ship.starty - 1] ||
        board[ship.startx - 1][ship.starty + 1] || board[ship.startx][ship.starty + 1] || board[ship.startx + 1][ship.starty + 1] || board[ship.startx + 2][ship.starty + 1] || board[ship.startx + 3][ship.starty + 1] !== 0) {
        isCollision = true;
      }
    }
    if (ship.shipSize === 2) {
      while (board[ship.startx - 1][ship.starty] || board[ship.startx][ship.starty] || board[ship.startx + 1][ship.starty] || board[ship.startx + 2][ship.starty] ||
        board[ship.startx - 1][ship.starty - 1] || board[ship.startx][ship.starty - 1] || board[ship.startx + 1][ship.starty - 1] || board[ship.startx + 2][ship.starty - 1] ||
        board[ship.startx - 1][ship.starty + 1] || board[ship.startx][ship.starty + 1] || board[ship.startx + 1][ship.starty + 1] || board[ship.startx + 2][ship.starty + 1] !== 0) {
        isCollision = true;
      }
    }
    if (ship.shipSize === 1) {
      while (board[ship.startx - 1][ship.starty] || board[ship.startx][ship.starty] || board[ship.startx + 1][ship.starty] ||
        board[ship.startx - 1][ship.starty - 1] || board[ship.startx][ship.starty - 1] || board[ship.startx + 1][ship.starty - 1] ||
        board[ship.startx - 1][ship.starty + 1] || board[ship.startx][ship.starty + 1] || board[ship.startx + 1][ship.starty + 1] !== 0) {
        isCollision = true;
      }
    }
  } else { // horizontal
    if (ship.shipSize === 5) {
      while (board[ship.startx][ship.starty - 1] || board[ship.startx][ship.starty] || board[ship.startx][ship.starty + 1] || board[ship.startx][ship.starty + 2] || board[ship.startx][ship.starty + 3] || board[ship.startx][ship.starty + 4] || board[ship.startx][ship.starty + 5] ||
        board[ship.startx - 1][ship.starty - 1] || board[ship.startx - 1][ship.starty] || board[ship.startx - 1][ship.starty + 1] || board[ship.startx - 1][ship.starty + 2] || board[ship.startx - 1][ship.starty + 3] || board[ship.startx - 1][ship.starty + 4] || board[ship.startx - 1][ship.starty + 5] ||
        board[ship.startx + 1][ship.starty - 1] || board[ship.startx + 1][ship.starty] || board[ship.startx + 1][ship.starty + 1] || board[ship.startx + 1][ship.starty + 2] || board[ship.startx + 1][ship.starty + 3] || board[ship.startx + 1][ship.starty + 4] || board[ship.startx + 1][ship.starty + 5] !== 0) {
        isCollision = true;
      }
    }
    if (ship.shipSize === 4) {
      while (board[ship.startx][ship.starty - 1] || board[ship.startx][ship.starty] || board[ship.startx][ship.starty + 1] || board[ship.startx][ship.starty + 2] || board[ship.startx][ship.starty + 3] || board[ship.startx][ship.starty + 4] ||
        board[ship.startx - 1][ship.starty - 1] || board[ship.startx - 1][ship.starty] || board[ship.startx - 1][ship.starty + 1] || board[ship.startx - 1][ship.starty + 2] || board[ship.startx - 1][ship.starty + 3] || board[ship.startx - 1][ship.starty + 4] ||
        board[ship.startx + 1][ship.starty - 1] || board[ship.startx + 1][ship.starty] || board[ship.startx + 1][ship.starty + 1] || board[ship.startx + 1][ship.starty + 2] || board[ship.startx + 1][ship.starty + 3] || board[ship.startx + 1][ship.starty + 4] !== 0) {
        isCollision = true;
      }
    }
    if (ship.shipSize === 3) {
      while (board[ship.startx][ship.starty - 1] || board[ship.startx][ship.starty] || board[ship.startx][ship.starty + 1] || board[ship.startx][ship.starty + 2] || board[ship.startx][ship.starty + 3] ||
        board[ship.startx - 1][ship.starty - 1] || board[ship.startx - 1][ship.starty] || board[ship.startx - 1][ship.starty + 1] || board[ship.startx - 1][ship.starty + 2] || board[ship.startx - 1][ship.starty + 3] ||
        board[ship.startx + 1][ship.starty - 1] || board[ship.startx + 1][ship.starty] || board[ship.startx + 1][ship.starty + 1] || board[ship.startx + 1][ship.starty + 2] || board[ship.startx + 1][ship.starty + 3] !== 0) {
        isCollision = true;
      }
    }
    if (ship.shipSize === 2) {
      while (board[ship.startx][ship.starty - 1] || board[ship.startx][ship.starty] || board[ship.startx][ship.starty + 1] || board[ship.startx][ship.starty + 2] ||
        board[ship.startx - 1][ship.starty - 1] || board[ship.startx - 1][ship.starty] || board[ship.startx - 1][ship.starty + 1] || board[ship.startx - 1][ship.starty + 2] ||
        board[ship.startx + 1][ship.starty - 1] || board[ship.startx + 1][ship.starty] || board[ship.startx + 1][ship.starty + 1] || board[ship.startx + 1][ship.starty + 2] !== 0) {
        isCollision = true;
      }
    }
    if (ship.shipSize === 1) {
      while (board[ship.startx][ship.starty - 1] || board[ship.startx][ship.starty] || board[ship.startx][ship.starty + 1] ||
        board[ship.startx - 1][ship.starty - 1] || board[ship.startx - 1][ship.starty] || board[ship.startx - 1][ship.starty + 1] ||
        board[ship.startx + 1][ship.starty - 1] || board[ship.startx + 1][ship.starty] || board[ship.startx + 1][ship.starty + 1] !== 0) {
        isCollision = true;
      }
    }
  }
  return isCollision;
}

module.exports = {
  checkCollision: checkCollision
};
