function endCounter(guessResult) {
  let counter = 0;
  if (guessResult === 'You sank a battleship!') {
    counter += 1;
  }
  return counter;
}