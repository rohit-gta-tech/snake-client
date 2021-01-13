const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect' , () => {
      //displays message on my client when connection is established
      console.log("Successfully connected to game server");
      //displays my name on the server playboard as soon as I am am connected
      conn.write("Name: RST");
      //instructs the server to move my snake up
      /*conn.write("Move: up");
      for (let i = 0; i < 100; i ++) {
        setTimeout(() => {
          conn.write("Move: up")
        }, i*1000)
        setTimeout(() => {
          conn.write("Move: right")
        }, i*1000+500)
      }*/
  })
  
  conn.on('data', (data) => {
      console.log(data);
  })

  return conn;
}

module.exports = {connect}