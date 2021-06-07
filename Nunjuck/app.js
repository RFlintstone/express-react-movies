const express = require('express');
// https://expressjs.com/
const path = require('path')
// Build in NPM registery
const cookieParser = require('cookie-parser');
// https://www.npmjs.com/package/cookie-parser
const morgan = require('morgan')
// https://github.com/expressjs/morgan
const awaitFilter = require('nunjucks-await-filter')
// https://www.npmjs.com/package/nunjucks-await-filter

// Config
const config = require('./config.json');
const port = config.port;

// Set file router
const indexRouter = require('./routes/index');
const errorRouter = require('./routes/error');

const app = express();
const nunjucks = require('nunjucks');

const env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});
awaitFilter(env)

// Set view engine so it uses nunjucks
// https://mozilla.github.io/nunjucks/templating.html
app.set('view engine', 'njk');

// Get and output requests (in log)
app.use(morgan('dev'))

// Make sure requests are parsed correctly
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

// Set public file so pages/files can/will be served to the client
app.use(express.static(path.join(__dirname, 'public')));

// Link page/path to the according router
app.use('/', indexRouter);
app.use('/error', errorRouter);

// If no programmed path is found redirect to error page
app.use(function (req, res) {
        res.redirect("/error")
})

// Start express and log url + port
app.listen(port);
console.log(`Website is now hosted on: http://localhost:${port}`);
