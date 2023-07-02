const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require('./routes/UserRoute.js');
const noticeRoutes = require('./routes/NoticeRoute.js');
const galleryRoutes = require('./routes/GalleryRoute.js');
const timetableRoutes = require('./routes/TimetableRoute.js');


app.use(cors());
app.use(express.json());

// Serve static files from the "uploads" folder
app.use('/uploads', express.static('uploads'));

app.use(userRoutes);
app.use(noticeRoutes);
app.use(timetableRoutes);
app.use(galleryRoutes);
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
