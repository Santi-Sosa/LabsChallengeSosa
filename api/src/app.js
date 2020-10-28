const express = require("express");
const routes = require("./routes/index.js");
const cors = require('cors')

require("./db.js");
const server = express();

server.name = "API";
server.use(cors({ credentials: true, origin: "http://localhost:3000" }));
server.use("/", routes);

//Error handler
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;