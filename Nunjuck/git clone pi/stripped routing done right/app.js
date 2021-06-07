const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// Config
const config = require('./config.json');
const port = config.port;

const indexRouter = require('./routes/index');

const app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// module.exports = app;
app.listen(port);
console.log(`Website is now hosted on: http://localhost:${port}`);