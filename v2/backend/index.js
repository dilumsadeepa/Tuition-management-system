const express = require("express");
const app = express();
// import cors from "cors";
const cors = require("cors");


app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.set("Conten-Type", "text/html; charset = utf-8");
  res.send("<h1>Hello... I am working...</h1>");
});

app.listen(process.env.PORT || 6000);
