const express = require('express');
const findOrCreateGenres = require('../Controllers/controller-getDiets.js');

const router = express.Router();


router.get("/", findOrCreateGenres);

module.exports = router;