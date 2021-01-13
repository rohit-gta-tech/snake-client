let connection;
const { MSG, WORKKEYS } = require('./constants');

//function for handling user input
const handleUserInput = function(key) {
    if (key === '\u0003') {
        process.exit();
    }
    if (MSG[key]) {
        connection.write(MSG[key]);   
    }
    if (WORKKEYS[key]) {
        connection.write(WORKKEYS[key]);   
    }
}

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    //stdin will take in handleUserInput as its callback function for handling the keyboard inputs
    stdin.on('data', handleUserInput)

    return stdin;
}

module.exports = { setupInput };