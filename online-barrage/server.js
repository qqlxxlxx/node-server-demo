let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);

let user = [];
let connections = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
  connections.push('socket');
  // console.log('User: %s online', connections.length);
  io.emit('user online', connections.length);
  
  socket.on('disconnect', function(){
    connections.splice(connections.indexOf('socket'), 1);
    io.emit('user online', connections.length);
  });
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
})

server.listen(3000, () => {
  console.log('server running on port 3000');
});