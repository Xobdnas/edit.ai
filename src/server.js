require('ignore-styles');
const server = require('_core/server');

const ShareDB = require('sharedb');
const WebSocket = require('ws');
const WebSocketJSONStream = require('websocket-json-stream');

const backend = new ShareDB();
const connection = backend.connect();
const doc = connection.get('editor', 'form');

doc.fetch(function (err) {
  if (err) throw err;
  if (doc.type === null) {
    doc.create({formData: {}});
    return;
  }
});

const port = process.env.PORT || 3000;
let s = server.listen(port, () => {
  console.log(`App listening on port ${port}!`); // eslint-disable-line no-console
});

var wss = new WebSocket.Server({server: s});
wss.on('connection', function(ws, req) {  // eslint-disable-line no-unused-vars
  var stream = new WebSocketJSONStream(ws);
  backend.listen(stream);
});
