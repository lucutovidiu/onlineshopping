process.env.PORT || require("dotenv").config();
const next = require("next");
const express = require("express");
const compression = require("compression");

const dev = process.env.NODE_ENV.trim() != "production";
const nextApp = next({ dev });
const nextRoutesHandler = nextApp.getRequestHandler();
const SERVER_PORT = process.env.PORT || 3000;

nextApp
  .prepare()
  .then(() => {
    expressApp = express();
    expressApp.use(compression());
    expressApp.get("*", (req, res) => {
      if (req.path === "/Test") console.log("path = " + req.path);
      return nextRoutesHandler(req, res);
    });

    expressApp.listen(SERVER_PORT, () => {
      console.log("" + SERVER_PORT);
    });
  })
  .catch(console.log);
