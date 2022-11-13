const express = require('express');
const {findAllRecipeName, findIdRecipe} = require('../Controllers/controlle-getRecipe.js')

const router = express.Router();

router.get("/", findAllRecipeName);

router.get("/:id", findIdRecipe);

// router.post("/", createVideogame);

// router.delete("/:id", deleteVideogame);

module.exports= router;