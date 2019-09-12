require("dotenv").config();
const next = require("next");
const express = require("express");
const compression = require("compression");

const dev = process.env.NODE_ENV.trim() != "production";
const nextApp = next({ dev });
const nextRoutesHandler = nextApp.getRequestHandler();
const serverPort = 3000;

nextApp
  .prepare()
  .then(() => {
    expressApp = express();
    expressApp.use(compression());
    expressApp.get("*", (req, res) => {
      return nextRoutesHandler(req, res);
    });

    expressApp.listen(serverPort, () => {
      console.log("http://localhost:" + serverPort);
    });
  })
  .catch(console.log);
