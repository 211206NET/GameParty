const Express = require("express")();
const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});
const Http = require("http").Server(Express);
//const Socketio = require("socket.io")(Http);


app.get('/', (req,res) => res.send('hello!'));
var position = {
  x: 200,
  y: 200
};

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit("position", position);
    socket.on("move", data => {
        switch(data) {
            case "left":
                position.x -= 5;
                socket.emit("position", position);
                
                break;
            case "right":
                position.x += 5;
                socket.emit("position", position);
                
                break;
            case "up":
                position.y -= 5;
                socket.emit("position", position);
               
                break;
            case "down":
                position.y += 5;
                socket.emit("position", position);
                
                break;
        }
    });

  socket.on('message', (msg) => {
    console.log(msg);
    socket.broadcast.emit('message-broadcast', msg);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});

httpServer.listen(port, () => 
console.log('listening on port ${port}'
));

