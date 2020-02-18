const WebSocket = require('ws');
//const http = require('http');

const wss = new WebSocket.Server({port: 8000});

wss.on('connection' , function(ws){
	ws.on("message", function(msg){
		console.log("Recieved "+ msg);
	})
	ws.send("something")
})