const express = require('express');
const {findAllRecipeName, findIdRecipe, createRecipe} = require('../Controllers/controlle-getRecipe.js')

const router = express.Router();

router.get("/", findAllRecipeName);

router.get("/:id", findIdRecipe);

router.post("/", createRecipe);

// router.delete("/:id", deletRecipe);

module.exports= router;