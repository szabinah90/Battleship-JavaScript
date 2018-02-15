// Generates a matrix.
function arrayGenerator() {
  let matrix = [[]];
  for (let i = 0; i < 11; i++) {
    matrix[i] = [];
    for (let j = 0; j < 11; j++) {
      if (i >= 1 && j >= 1) {
        matrix[i][j] = 0;
      } else {
        matrix[i][j] = '';
      }
    }
  }
  return matrix;
}

// Displays the matrix with row numbers and lettering.
function displayMatrix(array) {
  let j = 0;
  let i;
  let clean = '';
  for (i = 0; i < array.length; i++) {
    let text = '';
    if (i === 0 && j === 0) {
      text = '';
    } else {
      text += String.fromCharCode(64 + i);
    }
    for (j = 0; j < array[i].length; j++) {
      if (i === 0 && j >= 0 && j < 11) {
        text += j;
      }
      text += array[i][j] + '     ';
    }

    clean += text + '\n';
  }
  return clean;
}

// let array = arrayGenerator();
// console.log(displayMatrix(array));

module.exports = {
  arrayGenerator: arrayGenerator,
  displayMatrix: displayMatrix
};
