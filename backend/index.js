import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import NoticeRoute from "./routes/NoticeRoute.js";

 
const app = express();
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
 
app.listen(5000, ()=> console.log('Server up and running...'));