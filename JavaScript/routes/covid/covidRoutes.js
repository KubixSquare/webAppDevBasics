const express = require('express');
const router = express.Router();
const covidController = require('../../controllers/covid/covidController');

// Calling the Routes
router.get('/coviddata', covidController.covidstatewise);

module.exports = router;