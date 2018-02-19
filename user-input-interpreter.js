function userInputInterpreter (uiCol) {
  let uiColConvert = uiCol.charCodeAt(0);
  return uiColConvert;
}

// let uiCol = userInputInterpreter('A');
// let uiCol2 = userInputInterpreter('G');

// console.log(uiCol, uiCol2);

module.exports = {
  userInputInterpreter: userInputInterpreter
};