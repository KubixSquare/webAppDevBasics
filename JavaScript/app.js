const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const bodyParser = require("body-parser");
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const session = require('express-session');

const { secret } = require('./config/common/config');

// Importing The Database
const postgresql = require('./config/database/postgresqlConfig');


// Importing the Routes 
const covidRoutes = require('./routes/covid/covidRoutes')


// Calling the Error Handlers
const globalErrHandler = require('./controllers/error/errorController');
const AppError = require('./utils/error/appError');
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());



// Limit request from the same API 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api/v1', limiter);


// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '100kb'
}));


// Configure the Session expiry
app.use(
    session({
      secret: secret,
      resave: true,
      saveUninitialized: false
    })
);

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// Setting Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(express.json());
app.use(upload.array()); 
app.use(express.static('public'));

// Setting up global error handler
app.use(globalErrHandler);


// Checking and Testing of Home
app.get('/', (req, res) => {
    // console.log(req.session)
    res.send(`You hit home page!\n`)
})

// Routes Final Calling
app.use('/api/v1',covidRoutes);

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});


module.exports = app;