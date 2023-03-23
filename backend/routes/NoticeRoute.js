import express from "express";
const router = express.Router();
// import { getNotis,createNotice } from "../controllers/NoticeController.js";
import NoticeModel from '../models/NoticeModel.js';
// import upload from 'express-fileupload';

import multer from "multer"; // use for file handeling
import path from "path";

import cloudinary from '../clouds/cloudinary.js';


// const cloudinary = require('../clouds/cloudinary');




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/notices/');
    },
    filename: (req, file, cb) => {
        console.log('filenamereq :', file);
        console.log('backendfile :', file);
        // cb(null, Date.now() +"--"+ file.originalname);
        cb(null, file.originalname);
    }
});
 
const upload = multer({
     storage: storage,
     limits: {fileSize: 10000000},
     fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt|ppt|pptx|xls|xlsx|csv|zip|rar|7z|tar|gz|bz2/;
        const mimeTypes = fileTypes.test(file.mimetype);
        const extName = fileTypes.test(path.extname(file.originalname));

            if(mimeTypes && extName){
                return cb(null, true);
            }else{
                cb("Error: File upload only supports the following filetypes - " + fileTypes);
            }
        }
     });

// const upload = multer({ storage: storage });










//insert a notice
router.post('/notice', async (req, res) => {
    try {
        const notice = await NoticeModel.create(req.body);
        console.log("notice req.body : ",req.body);
        // console.log(req);
        console.log(req.files);
        const ufiles = req.body.files;
        const ufilesArray = req.body.fileArray;        ;
        var attFiles =req.body.orgFiles;
        var file = attFiles.file;
        console.log("ufiles :",ufiles);
        console.log("ufilesArray :",ufilesArray);
        console.log("rrrrrrrrrrrrr");
        console.log("attfiles :",attFiles);
        console.log("rrrrrrrrrrrrr");
        console.log("varFile :",attFiles[0]);
        // res.status(201).json(ufiles);
        console.log("rrrrrrrrrrrrr");
        // res.status(201).json("polooooooooo");

        // ufiles.forEach((item, index) => {
            for(let ufile of ufiles){
            console.log(ufile);

            ufilesArray.mv('./uploads/notices/' + ufile, function (err) {
                if (err) {
                    res.send(err);
                }else{
                    console.log('File Saved.');
                    res.send('File uploaded!');
                }
                console.log('File Saved.');
            });
            // console.log(index, item);

        };
        // function uFileArray(item, index) {
        //     console.log(item, index);
        //     fs.writeFile('/uploads/' + item, function (err) {
        //         if (err) throw err;
        //         console.log('File Saved.');
        //     });
            // fs.rename('/uploads/notices/' + item, function (err) {
            //     if (err) throw err;
            //     console.log('File Renamed.');
            // });
        // }


        // const file = await FileModel.create({
        //     name: req.files[0].filename,
        //     noticeId: notice.id
        // });
        res.status(201).json(notice);
    } catch (error) {
        res.status(500).json(error);
    }
}); 


//create all the files
// router.post("/multiple", upload.array("files"), async (req, res, next) => {
//     // const notice = await NoticeModel.create(req.body);

//     console.log(req.body);
//     console.log(req.files);

//     // res.status(201).json(notice);
//     res.json({ message: "File(s) uploaded successfully" });
//     // res.status(201).json(req.files);
// });


router.post("/multiple", upload.array("myFieldName"), async (req, res, next) => {
    const notice = await NoticeModel.create(req.body);
    console.log("body :",req.body);
    console.log("file List: ",req.files);
    console.log("file Names csv: ",req.body.files);

    const { notice_to, notice_title, notice_desc ,files, backup} = req.body;

     // Upload files to Cloudinary
        // const cloudUrls = await Promise.all(
        //     attachFiles.map(async (file) => {
        //     const result = await cloudinary.uploader.upload(file.path);
        //     return result.secure_url;
        //     })
        // );


         // Upload files to Cloudinary
         if(req.body.backup === 'true'){
            const cloudUrls = await Promise.all(
  
                req.files.map(async (file) => {
                    // const folderName = 'Susipwan_BackupData/Notice_Data';
                    // const folderExists = await cloudinary.api.resource(folderName);
                    // if (!folderExists) {
                    //     await cloudinary.api.create_folder(folderName);
                    //   }
                    //   const result = await cloudinary.uploader.upload(file.path, {
                    //     folder: folderName
                    //   });

                const result = await cloudinary.v2.uploader.upload(file.path, {
                    folder: "Susipwan_BackupData/Notices"
                });
                    return result.secure_url;
                })
            );

            // Update the notice object with the Cloudinary URLs
            notice.cloudFiles = cloudUrls.join(','); // Join URLs with commas

            // Save the notice to the database
            await notice.save();
         }


            // res.status(201).json(notice);

    res.status(201).json(notice);
});





router.post("/cloud", upload.array("cloudStorage"), async (req, res, next) => {
    const notice = await NoticeModel.create(req.body);
    console.log("body :",req.body);
    console.log("file List: ",req.files);
    console.log("file Names csv: ",req.body.files);

    const { notice_to, notice_title, notice_desc ,files, backup} = req.body;

         // Upload files to Cloudinary
            const cloudUrls = await Promise.all(
  
                req.files.map(async (file) => {
                const filenameWithoutExt = path.parse(file.filename).name; // Get filename without extension
                console.log("filenameWithoutExt :",filenameWithoutExt);
                const result = await cloudinary.v2.uploader.upload(file.path, {
                    folder: "Susipwan_BackupData/Notices",
                    public_id: filenameWithoutExt,
                    // resource_type: "auto"
                });
                    return result.secure_url;
                })
            );

            // Update the notice object with the Cloudinary URLs
            notice.cloudOnly = cloudUrls.join(','); // Join URLs with commas

            // Save the notice to the database
            await notice.save();


            // res.status(201).json(notice);

    res.status(201).json(notice);
});

// router.post("/single",upload.single("files"), async (req, res, next) => {
//     const notice = await NoticeModel.create(req.body);
//     console.log(req.body);
//     console.log(req.file);

//       res.status(201).json(notice);
// });

// router.get('/notice', getNotis);
// router.post('/notice', createNotice);


export default router; 