"use strict";

const express = require("express");
const app  = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("hello");
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
