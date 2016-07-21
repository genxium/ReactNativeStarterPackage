var express = require('express');
var app = express();
var http = require('http').Server(app);

// mount static resource points, reference http://expressjs.com/en/api.html 
app.use('/bin', express.static('web/bin'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/web/index.html');
});

http.listen(3000, function() {
		console.log('listening on *:3000');
});
