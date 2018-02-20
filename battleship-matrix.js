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

var numChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

function genUserBoard(arr) {
  var iC = 1;
  var jC = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0 && i === 0) {
        arr[i][j] = '  ';
      } else if (j === 0) {
        if (i < 10) {
          arr[i][j] = iC + ' ';
        } else {
          arr[i][j] = iC;
        }
        iC++;
      } else if (i === 0) {
        arr[i][j] = numChar[jC - 1];
        jC++;
      }
    }
  } return arr;
}

function print (array) {
  for (var i = 0; i < array.length; i++) {
    var row = '';
    for (var j = 0; j < array[i].length; j++) {
      row += ' ' + array[i][j] + ' ';
    }
    console.log(row);
  }
}

module.exports = {
  arrayGenerator: arrayGenerator,
  displayMatrix: displayMatrix,
  genUserBoard: genUserBoard,
  print: print
};
