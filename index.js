var express = require('express');
var app = express();

app.set('port', (process.env.port || 5002))
app.use(express.static(__dirname + '/public'))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.get('/batata', function(req, res) {
  res.send('batata')
});

//router.use('/carclient', require('./router/carfind'));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

//module.exports = router;