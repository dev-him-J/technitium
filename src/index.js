const express = require("express");
const app = express();
const route = require("./routes/route");

app.use("/GET", route);
app.listen(4000, () => {
  console.log("connected to server");
});
