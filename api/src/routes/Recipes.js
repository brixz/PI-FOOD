const express = require('express');
const {finAllRecipeName, findAllRecipeName} = require('../Controllers/controlle-getRecipe.js')

const router = express.Router();

router.get("/", findAllRecipeName);

// router.get("/:id", findVideogame);

// router.post("/", createVideogame);

// router.delete("/:id", deleteVideogame);

module.exports= router;