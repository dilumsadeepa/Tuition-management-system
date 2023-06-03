const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require('./routes/UserRoute.js');
const noticeRoutes = require('./routes/NoticeRoute.js');


app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(noticeRoutes);

app.listen(4000, ()=> console.log('Server up and running...'));

// import express from "express";
// import cors from "cors";

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", function (req, res) {
//   res.set("Conten-Type", "text/html; charset = utf-8");
//   res.send("<h1>Hello... I am working...</h1>");
// });

// app.listen(6000, ()=> console.log('Server up and running...'));
