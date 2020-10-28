const { Router } = require('express');
//Importación de ruta
const apiRouter = require("./api.js");

const router = Router();
router.use("/api", apiRouter)

module.exports = router;