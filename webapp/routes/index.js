var express = require('express');
var router = express.Router();
const http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'C2E' });
});

/* GET cms page. */
router.get('/cms', function(req, res1, next) {
  var options = {
    host: 'localhost',
    port: 2000,
    path: '/cms'
  };
  var body = '';
  var req = http.get(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
  
    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
      // You can process streamed parts here...
      bodyChunks.push(chunk);
    }).on('end', function() {
      body = Buffer.concat(bodyChunks);
      console.log('BODY: ' + body);
      res1.render('index', { title: body });
      // ...and/or process the entire body here.
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  
  
});
module.exports = router;


