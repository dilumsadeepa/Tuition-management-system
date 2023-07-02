const express = require("express");
const router = express.Router();
const { getTimetables, createTimetable, deleteTimetable, viewTimetable } = require("../controllers/TimetableController.js");
const TimetableModel = require('../models/TimetablepostModel.js');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer"); // use for file handeling
const path = require("path");
const fs = require('fs');
const cloudinary = require('../clouds/cloudinary.js');


// const cloudinary = require('../clouds/cloudinary');


const cloudinaryStorageOption = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      resource_type: "raw",
      unique_filename: false,
      folder: "Susipwan_BackupData/Timetables/Backup",
      public_id: (req, file) => file.originalname,
      upload_preset: "xveddqrz",
      },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
      // console.log('cloudfilelist :', file);
        console.log('cloudfilenamereq cloudOnly :', file.originalname);
    }
  });
  
  const cloudinaryUploads = multer({
    storage: cloudinaryStorageOption,
    limits: {fileSize: 10000000},
    fileFilter: (req, file, cb) => {
      const fileTypes = /zip|rar|7z|xml|xhtml|txt|svg|rtf|pdf|jpeg|png|jpg|ogg|mp3|json|html|gif|mp4|mpeg|mkv|flv|avi|csv|ppt|pptx|xls|xlsx|doc|docx/;
      const mimeTypes = fileTypes.test(file.mimetype);
      const extName = fileTypes.test(path.extname(file.originalname));
  
      if(mimeTypes && extName){
        return cb(null, true);
      }else{
        cb("Error: File upload only supports the following filetypes - " + fileTypes);
      }
    }
  });



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/timetables/');
    },
    filename: (req, file, cb) => {
        console.log('filenamereq :', file);
        console.log('backendfile :', file);
        cb(null, file.originalname);
    }
});





 
const upload = multer({
     storage: storage,
     limits: {fileSize: 10000000},
     fileFilter: (req, file, cb) => {
        const fileTypes = /zip|rar|7z|xml|xhtml|txt|svg|rtf|pdf|jpeg|png|jpg|ogg|mp3|json|html|gif|mp4|mpeg|mkv|flv|avi|csv|ppt|pptx|xls|xlsx|doc|docx/;
        const mimeTypes = fileTypes.test(file.mimetype);
        const extName = fileTypes.test(path.extname(file.originalname));

            if(mimeTypes && extName){
                return cb(null, true);
            }else{
                cb("Error: File upload only supports the following filetypes - " + fileTypes);
            }
        }
     });









//insert a timetable
// router.post('/timetable', async (req, res) => {
//     try {
//         const timetable = await TimetableModel.create(req.body);
//         console.log("Timetable req.body : ",req.body);
//         // console.log(req);
//         console.log(req.files);
//         const ufiles = req.body.files;
//         const ufilesArray = req.body.fileArray;        ;
//         var attFiles =req.body.orgFiles;
//         var file = attFiles.file;
//         console.log("ufiles :",ufiles);
//         console.log("ufilesArray :",ufilesArray);
//         console.log("rrrrrrrrrrrrr");
//         console.log("attfiles :",attFiles);
//         console.log("rrrrrrrrrrrrr");
//         console.log("varFile :",attFiles[0]);
//         console.log("rrrrrrrrrrrrr");

//         // ufiles.forEach((item, index) => {
//             for(let ufile of ufiles){
//             console.log(ufile);

//             ufilesArray.mv('./uploads/timetables/' + ufile, function (err) {
//                 if (err) {
//                     res.send(err);
//                 }else{
//                     console.log('File Saved.');
//                     res.send('File uploaded!');
//                 }
//                 console.log('File Saved.');
//             });


//         };

//         res.status(201).json(timetable);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// }); 



router.post("/timemultiple", upload.array("myFieldName"), async (req, res, next) => {
    const timetable = await TimetableModel.create(req.body);
    console.log("body :",req.body);
    console.log("file List: ",req.files);
    console.log("file Names csv: ",req.body.files);

  
    const { time_title, grade ,files, backup} = req.body;

         // Upload files to Cloudinary
         if(req.body.backup === 'true'){
    

                const cloudUrls = await Promise.all(
  
                req.files.map(async (file) => {
                  console.log("fileNames inside route: ",file.filename);
                const filenameWithoutExt = path.parse(file.filename).name; // Get filename without extension
                console.log("filenameWithoutExt :",filenameWithoutExt);
                const result = await cloudinary.uploader.upload(file.path, {
                    folder: "Susipwan_BackupData/Timetables",
                    public_id: filenameWithoutExt,
                    resource_type: "raw",
                    upload_preset: "xveddqrz"
                });
                    return result.secure_url;
                })
            );


            // Update the timetable object with the Cloudinary URLs
            timetable.cloudFiles = cloudUrls.join(','); // Join URLs with commas

            // Save the timetable to the database
            await timetable.save();

         }

         res.status(201).json(timetable);
});
















router.post("/timecloud", cloudinaryUploads.array("cloudStorage"), async (req, res, next) => {
  const timetable = await TimetableModel.create(req.body);
  console.log("file List: ",req.files);
  console.log("file Names csv: ",req.body.files);
 
  const { time_title, grade ,files, backup} = req.body;


  // Upload files to Cloudinary
  const cloudUrls = await Promise.all(
    req.files.map(async (file) => {
      console.log("filename: ", file.originalname);

      // const filenameWithoutExt = path.parse(file.filename).name; // Get filename without extension
      // console.log("filenameWithoutExt :",filenameWithoutExt);

      const result = await cloudinary.uploader.upload(file.path, {
        resource_type: "raw",
        folder: "Susipwan_BackupData/Timetables",
        public_id: file.originalname,
        upload_preset: "xveddqrz",
      });
      return result.secure_url;
    })
  );

  // Update the timetable object with the Cloudinary URLs
  timetable.cloudOnly = cloudUrls.join(","); // Join URLs with commas

  // Save the timetable to the database
  await timetable.save();

  // res.status(201).json({
  //   message: "timetable created successfully",
  //   timetable: timetable,
  // });

  res.status(201).json(timetable);
});



router.post("/single",upload.single("files"), async (req, res, next) => {
    const timetable = await TimetableModel.create(req.body);
    console.log(req.body);
    console.log(req.file);

      res.status(201).json(timetable);
});







router.put("/timemultiple", upload.array("myFieldName"), async (req, res, next) => {
  console.log("body :",req.body);
  console.log("file List: ",req.files);
  console.log("file Names csv: ",req.body.files);
  const { id, time_title, grade ,files, localFiles, backup} = req.body;


  let hasNewFiles = false;
  let hasNewFile = false;
  let hasLocalFiles = false;
  if (req.files.length > 0) { 
    hasNewFiles = true;
  }
  if (files.length > 0) {
    hasNewFile = true;
  }
  if (localFiles.length > 0) {
    hasLocalFiles = true;
  }

    // Get the timetable from the database
  const timetable = await TimetableModel.findByPk(id);


// Delete existing Cloudinary files for the timetable if there are no new files
if (hasNewFiles) {
  const publicIdsWithExtensions = timetable.files.split(',');
  const publicIds = publicIdsWithExtensions.map(publicId =>
    path.join('uploads', 'timetables', publicId)
  );
  const public_ids = publicIdsWithExtensions.map(publicId => `Susipwan_BackupData/Timetables/${publicId}`);
  const BackupPublic_Ids = publicIdsWithExtensions.map(backupPublicId => `Susipwan_BackupData/Timetables/Backup/${backupPublicId}`);

  try {
    const result = await cloudinary.api.delete_resources(public_ids, {
      resource_type: 'raw',
    });
    const backupResult = await cloudinary.api.delete_resources(BackupPublic_Ids, {
      resource_type: 'raw',
    });

    // Delete local files
    publicIds.forEach(publicId => {
      fs.unlink(publicId, err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Deleted ${publicId}`);
      });
    });
  } catch (error) {
    console.log(error);
  }
}





  timetable.time_title = time_title;
  timetable.grade = grade;
  // timetable.files = files;
  if (hasNewFile) {
    timetable.files = files;
  }
  if (hasLocalFiles) {
    timetable.localFiles = localFiles;
  }
  timetable.backup = backup;
  if(req.body.backup === 'false'){
    timetable.cloudFiles = null;
  }
  timetable.cloudOnly = null;


       // Upload files to Cloudinary
       if(req.body.backup === 'true'){
        if (hasNewFiles) {

              const cloudUrls = await Promise.all(

              req.files.map(async (file) => {
                console.log("fileNames inside route: ",file.filename);
              const filenameWithoutExt = path.parse(file.filename).name; // Get filename without extension
              console.log("filenameWithoutExt :",filenameWithoutExt);
              const result = await cloudinary.uploader.upload(file.path, {
                  folder: "Susipwan_BackupData/Timetables",
                  public_id: filenameWithoutExt,
                  resource_type: "raw",
                  upload_preset: "xveddqrz"
              });
                  return result.secure_url;
              })
          );



          // Update the timetable object with the Cloudinary URLs
          timetable.cloudFiles = cloudUrls.join(','); // Join URLs with commas

       
       }
      }
   // Save the timetable to the database
   await timetable.save();

   
          // res.status(201).json(timetable);

  res.status(201).json(timetable);
});







router.put("/timecloud", cloudinaryUploads.array("cloudStorage"), async (req, res, next) => {
  console.log("body :",req.body);
  console.log("file List: ",req.files);
  const { id, time_title, grade ,files, backup} = req.body;

  // Check if there are any new files in the request
  let hasNewFiles = false;
  if (req.files.length > 0) { 
    hasNewFiles = true;
  }
  // if (localFiles) {
  //   hasLocalFiles = true;
  // }

  // Get the timetable from the database
  const timetable = await TimetableModel.findByPk(id);

  // If there are no new files and the timetable has existing files, don't update the files field
  // if (!hasNewFiles && timetable.files) {
  //   files = timetable.files;
  // }

  // Delete existing Cloudinary files for the timetable if there are no new files
  if (hasNewFiles) {
    const publicIdsWithExtensions = timetable.files.split(',');
    const publicIds = publicIdsWithExtensions.map(publicId =>
      path.join('uploads', 'timetables', publicId)
    );
    const public_ids = publicIdsWithExtensions.map(publicId => `Susipwan_BackupData/Timetables/${publicId}`);
    const BackupPublic_Ids = publicIdsWithExtensions.map(backupPublicId => `Susipwan_BackupData/Timetables/Backup/${backupPublicId}`);

    try {
      const result = await cloudinary.api.delete_resources(public_ids, {
        resource_type: 'raw',
      });
      const backupResult = await cloudinary.api.delete_resources(BackupPublic_Ids, {
        resource_type: 'raw',
      });

      // Delete local files
      publicIds.forEach(publicId => {
        fs.unlink(publicId, err => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`Deleted ${publicId}`);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Update the timetable in the database
  timetable.time_title = time_title;
  timetable.grade = grade;
  if (hasNewFiles) {
    timetable.files = files;
  }
 
  timetable.localFiles = null;
 
  timetable.backup = 0;

  // Upload new files to Cloudinary
  if (hasNewFiles) {
    const cloudUrls = await Promise.all(
      req.files.map(async (file) => {
        console.log("filename: ", file.originalname);

        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "raw",
          folder: "Susipwan_BackupData/Timetables",
          public_id: file.originalname,
          upload_preset: "xveddqrz",
        });
        return result.secure_url;
      })
    );

    // Update the timetable object with the Cloudinary URLs
    timetable.cloudOnly = cloudUrls.join(","); // Join URLs with commas
  }

  // Save the timetable to the database
  await timetable.save();

  res.status(200).json(timetable);
});



router.post("/single",upload.single("files"), async (req, res, next) => {
    const Timetable = await TimetableModel.create(req.body);
    console.log(req.body);
    console.log(req.file);

      res.status(201).json(Timetable);
});






router.get('/timetable', getTimetables);
router.delete('/timetable/:id', deleteTimetable);
router.get('/timetable/byId/:id', viewTimetable );
 

module.exports = router; 