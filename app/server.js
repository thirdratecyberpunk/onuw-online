var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// defines port to listen to
http.listen(3000, function(){
	console.log('listening on *:3000');
});

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});
