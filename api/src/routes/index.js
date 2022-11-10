const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const DietsRouter =require("./Diets.js");

const router = Router();

// Configurar los routerss
// Ejemplo: router.use('/auth', authRouter);
router.use('/diets', DietsRouter);

module.exports = router;
