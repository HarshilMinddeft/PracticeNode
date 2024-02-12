const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/firsta", (req, res) => {
  res.send("Hello this is first page!");
});

app.get("/seconda", (req, res) => {
  const aa = fs.readFileSync("/first1.html");
  res.send("first1.html");
});

app.listen(2000);
