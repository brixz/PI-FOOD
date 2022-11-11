const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const DietsRouter = require("./Diets.js");
//const RecipeRouter = require("./Recipes");

const router = Router();

// Configurar los routerss
// Ejemplo: router.use('/auth', authRouter);
router.use('/diets', DietsRouter);
//router.use('/recipes', RecipeRouter)

module.exports = router;
