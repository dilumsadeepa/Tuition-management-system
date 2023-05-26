import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import NoticeRoute from "./routes/NoticeRoute.js";
import TimetableRoute from "./routes/TimetableRoute.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the "uploads" folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use(upload());
// app.post('/upload', (req, res) => {
//     console.log(req.body);
//     console.log("filesssssss: ",req.files);
//     if(req.files){
//         var file = req.files[0];
//         console.log("single file :",file);
//         var filename = file.name;
//         console.log(filename);

//         file.mv('./uploads/notices' + filename, function(err) {
//             if(err){
//                 res.send(err);
//             }else{
//                 res.send('File uploaded!');
//             }
//     })

//     }
// });

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(NoticeRoute);
app.use(TimetableRoute);

app.listen(6000, () => console.log("Server up and running..."));
