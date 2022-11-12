const express = require('express');
const findOrCreateDiets = require('../Controllers/controller-getDiets.js');

const router = express.Router();


router.get("/", findOrCreateDiets);

module.exports = router;