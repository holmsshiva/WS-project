//const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8000/');

ws.onopen =  function(){
	ws.send("something");
}

ws.onmessage = function(data){
	console.log(data);
}