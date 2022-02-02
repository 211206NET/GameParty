const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { SocketAddress } = require('net');
const PORT = 3000 || process.env.PORT;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set static folder 
app.use(express.static(path.join(__dirname, '../frontend')));


// run when client connects
io.on('connection', socketio => {
    Console.log('New WS Connection...');
    socket.emit('message', 'welcome to GameParty');
    //when a user connects 
    socket.broadcast.emit('message','New Player has joined');
    //when user disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });
    Socket.on('chatmessage', (msg) => {
      io.emit('message', message)
    })
});

server.listen(PORT, () => console.log('Server running on port',PORT));



