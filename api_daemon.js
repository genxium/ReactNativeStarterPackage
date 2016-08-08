const constants = require('./platform_independent_components/constants'); 

let express = require('express');
let app = express();
var expressWs = require('express-ws')(app);

// mount static resource points, reference http://expressjs.com/en/api.html
app.use('/bin', express.static('web/bin'));

// fake single-page-application setup for History.pushState(...) compatibility
function spa(req, res) {
  res.sendFile(__dirname + '/web/index.html');
}

app.get(constants.ROUTE_PATHS.ROOT, spa);
app.get(constants.ROUTE_PATHS.HOME, spa);
app.get(constants.ROUTE_PATHS.MOVIE + constants.ROUTE_PARAMS.MOVIE_ID, spa);

app.ws('/echo', function(ws, req) {
  console.log('New connection from ' + req.connection.remoteAddress); // or `ws._socket.remoteAddress`
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});

app.listen(9090, function() {
  console.log('listening');
});
