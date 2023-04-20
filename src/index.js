const express = require("express");
const app = express();
const route = require("../src/routes/route");

app.use("/", route);

app.listen(4000, () => {
  console.log("connected to server");
});
