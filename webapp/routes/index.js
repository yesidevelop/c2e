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
    host: 'cms',
    port: 80,
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

      

      // calling media service from CMS
      var options1 = {
        host: 'media',
        port: 80,
        path: '/media'
      };
      var body = '';
      var req_media = http.get(options1, function(res) {
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        res.on('data', function(chunk) {
          bodyChunks.push(chunk);
        }).on('end', function() {
          body = Buffer.concat(bodyChunks);
        })
      });
      
      req_media.on('error', function(e) {
        console.log('ERROR: ' + e.message);
      });















      res1.render('cms', { title: body });
      // ...and/or process the entire body here.
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  
  
});

/* GET authoring page. */
router.get('/authoring', function(req, res1, next) {
  var options = {
    host: 'authoring',
    port: 80,
    path: '/authoring'
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
      res1.render('authoring', { title: body });
      // ...and/or process the entire body here.
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  
  
});

/* GET cms page. */
router.get('/authoring/users', function(req, res1, next) {
  var options = {
    host: 'authoring',
    port: 80,
    path: '/users'
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
      res1.render('users', { title: body });
      // ...and/or process the entire body here.
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  
  
});

/* GET media page. */
router.get('/media', function(req, res1, next) {
  var options = {
    host: 'media',
    port: 80,
    path: '/media'
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
      res1.render('media', { title: body });
      // ...and/or process the entire body here.
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  
  
});

module.exports = router;


