let express = require('express');
let app = express();
var expressWs = require('express-ws')(app);

// mount static resource points, reference http://expressjs.com/en/api.html
app.use('/bin', express.static('web/bin'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/web/index.html');
});

app.ws('/echo', function(ws, req) {
  console.log('New connection from ' + req.connection.remoteAddress); // or `ws._socket.remoteAddress`
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});

app.listen(9090, function() {
  console.log('listening');
});
