var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var fs = require('fs');

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/modelControl", function (req, res) {
	res.send('[]');
})
app.get("/", function(req, res) {
	res.sendFile(__dirname + '/resources/static/index.html')
})

app.get("/styles.css", function (req, res) {
	fs.readFile(__dirname + '/resources/static/styles.css', function (err, data) {
		if (err) console.log(err);
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.write(data);
		res.end();
	});
})
app.listen(port, function(error) {
	if (error) {
		console.error(error)
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
	}
})
