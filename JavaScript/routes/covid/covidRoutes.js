// Calling express for its Routes functionality
const express = require('express');
const router = express.Router();
// Calling the Controller
const covidController = require('../../controllers/covid/covidController');

// Calling the Routes for the function created inside covidController
// We call it using the name given to it during exports 'covidstatewise'
// We are using post methods to fetch the data, there are get and other methods too
router.post('/coviddata', covidController.covidstatewise);

// Finally export the routers
// This will be written once and will export all the routers in this file.
module.exports = router;