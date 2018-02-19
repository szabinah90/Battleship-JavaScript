// Generates a matrix.

function arrayGenerator(a, b, c) {
  let i;
  let array2D = [];
  for (i = 0; i < b; i++) {
    array2D.push(new Array(a).fill(c));
  }
  return array2D;
}

// Displays the matrix with row numbers and lettering.
function displayMatrix(array) {
  let i = 0;
  let j = 0;
  let clean = [];
  for (i = 0; i < 11; i++) {
    let row = [];
    for (j = 0; j < 11; j++) {
      row.push(array[i][j]);
    }
    clean.push(row);
  }
  return clean;
}

module.exports = {
  arrayGenerator: arrayGenerator,
  displayMatrix: displayMatrix
};
