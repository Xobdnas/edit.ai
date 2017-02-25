require('ignore-styles');
const server = require('./core/server');

var ShareDB = require('sharedb');
var WebSocket = require('ws');
var WebSocketJSONStream = require('websocket-json-stream');

var backend = new ShareDB();
var connection = backend.connect();
var doc = connection.get('editor', 'form');

doc.fetch(function (err) {
  if (err) throw err;
  if (doc.type === null) {
    doc.create({formData: {}});
    return;
  }
});

const port = process.env.PORT || 3000;
let s = server.listen(port, () => {
  console.log('App listening on port 3000!'); // eslint-disable-line no-console
});

var wss = new WebSocket.Server({server: s});
wss.on('connection', function(ws, req) {  // eslint-disable-line no-unused-vars
  var stream = new WebSocketJSONStream(ws);
  backend.listen(stream);
});

