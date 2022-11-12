const express = require('express');
const {findAllRecipeName} = require('../Controllers/controlle-getRecipe.js')

const router = express.Router();

router.get("/", findAllRecipeName);

// router.get("/:id", findVideogame);

// router.post("/", createVideogame);

// router.delete("/:id", deleteVideogame);

module.exports= router;