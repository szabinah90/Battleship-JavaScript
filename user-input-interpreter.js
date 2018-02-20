function userInputInterpreter (uiCol) {
  let uiColConvert = uiCol.charCodeAt(0);
  return uiColConvert;
}

module.exports = {
  userInputInterpreter: userInputInterpreter
};