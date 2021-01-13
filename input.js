let connection;

//function for handling user input
const handleUserInput = function(key) {

    if (key === '\u0003') {
        process.exit();
    }
    if (key === 'w') {
        connection.write("Move: up");
    }
    if (key === 'a') {
        connection.write("Move: left");
    }
    if (key === 's') {
        connection.write("Move: down");
    }
    if (key === 'd') {
        connection.write("Move: right");
    }
    if (key === 'm') {
        connection.write("Say: OK!");
        
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