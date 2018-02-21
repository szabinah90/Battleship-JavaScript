function artWork () {
  console.log('                           \x1b[4mWELCOME TO BATTLESHIP!\x1b[0m');
  console.log('\n');
  console.log('                                                Enter a ! (exclamation point)\n                                                for the column to exit.\n\n\x1b[4mLegend:\x1b[0m\n\x1b[41mX\x1b[0m - Ship hit\n\x1b[33mM\x1b[0m - Miss\n? - Uncharted');
  console.log('\n');
}

module.exports = {
  artWork: artWork
};
