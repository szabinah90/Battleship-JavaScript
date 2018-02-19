// Generates a matrix.

function arrayGenerator(a, b) {
  let i;
  let array2D = [];
  for (i = 0; i < b; i++) {
    array2D.push(new Array(a).fill(0));
  }
  return array2D;
}

/*
let board = arrayGenerator(12, 12);
console.log(board);
*/

/*
function arrayGenerator() {
  let matrix = [[]];
  for (let i = 0; i < 13; i++) {
    matrix[i] = [];
    for (let j = 0; j < 13; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}
*/

// Displays the matrix with row numbers and lettering.
function displayMatrix(array) {
  let i = j = 0;
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



// let array = arrayGenerator();
// console.log(displayMatrix(array));

module.exports = {
  arrayGenerator: arrayGenerator,
  displayMatrix: displayMatrix
};


//console.log(displayMatrix(arrayGenerator(12, 12)));