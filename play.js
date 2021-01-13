const { connect } = require('./client');
console.log('Connecting ...');
connect();

//function for handling user input
const handleUserInput = function(key) {
    if (key === '\u0003') {
        process.exit();
    }
}

const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    //stdin will take in handleUserInput as its callback function for handling the keyboard inputs
    stdin.on('data', handleUserInput)
    return stdin;
  }

  setupInput();

  