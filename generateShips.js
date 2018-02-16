function generateShips(boardsize, shipsize) {
  let vertOrHor = Math.floor(Math.random() * 2); // vertical = 1, horizontal = 0;
  let startx;
  let starty;
  let shipSize;
  let isSunk;

  if (vertOrHor === 1) { // vertical
    startx = (Math.floor(Math.random() * (boardsize - shipsize - 1))) + 1;
    starty = (Math.floor((Math.random() * (boardsize - 2)))) + 1;
  } else { // horizontal
    startx = (Math.floor((Math.random() * (boardsize - 2)))) + 1;
    starty = (Math.floor(Math.random() * (boardsize - shipsize - 1))) + 1;
  }
  shipSize = shipsize;
  isSunk = false;

  let ship = {
    vertOrHor: vertOrHor,
    startx: startx,
    starty: starty,
    shipSize: shipSize,
    isSunk: isSunk
  };
  return ship;
}
// console.log(generateShips(10, 9));

module.exports = {
  generateShips: generateShips
};
