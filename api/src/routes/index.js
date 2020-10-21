const { Router } = require('express');
// Importación de rutas
const apiRouter = require("./api.js");


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use("/api", apiRouter)

module.exports = router;
