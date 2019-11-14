var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// defines port to listen to
http.listen(4001, function(){
	console.log('listening on *:4001');
});

io.on('connection', function(socket){
	// io.emit('chat message', "User connected!");
  // console.log('a user connected');
	// when a user disconnects
	socket.on('disconnect', function(){
		io.emit('chat message', "User disconnected!");
		console.log('user disconnected');
	});
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
		console.log('message: ' + msg);
	});
});
