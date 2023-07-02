const express = require("express");
const router = express.Router();
const { getGalleries, createGallery, deleteGallery, viewGallery, getGallery } = require("../controllers/GalleryController.js");
const GalleryModel = require('../models/GalleryModel.js');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer"); // use for file handeling
const path = require("path");
const fs = require('fs');
const cloudinary = require('../clouds/cloudinary.js');



const cloudinaryStorageOption = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      resource_type: "raw",
      unique_filename: false,
      folder: "Susipwan_BackupData/Galleries/Backup",
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
        cb(null, './uploads/Galleries/');
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









//insert a gallery
// router.post('/gallery', async (req, res) => {
//     try {
//         const gallery = await GalleryModel.create(req.body);
//         console.log("Gallery req.body : ",req.body);
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

//             ufilesArray.mv('./uploads/Galleries/' + ufile, function (err) {
//                 if (err) {
//                     res.send(err);
//                 }else{
//                     console.log('File Saved.');
//                     res.send('File uploaded!');
//                 }
//                 console.log('File Saved.');
//             });


//         };

//         res.status(201).json(gallery);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// }); 



router.post("/gallerymultiple", upload.array("myFieldName"), async (req, res, next) => {
    const gallery = await GalleryModel.create(req.body);
    console.log("body :",req.body);
    console.log("file List: ",req.files);
    console.log("file Names csv: ",req.body.files);

    const { location, category ,files, backup} = req.body;

         // Upload files to Cloudinary
         if(req.body.backup === 'true'){
    

                const cloudUrls = await Promise.all(
  
                req.files.map(async (file) => {
                  console.log("fileNames inside route: ",file.filename);
                const filenameWithoutExt = path.parse(file.filename).name; // Get filename without extension
                console.log("filenameWithoutExt :",filenameWithoutExt);
                const result = await cloudinary.uploader.upload(file.path, {
                    folder: "Susipwan_BackupData/Galleries",
                    public_id: filenameWithoutExt,
                    resource_type: "raw",
                    upload_preset: "xveddqrz"
                });
                    return result.secure_url;
                })
            );


            // Update the gallery object with the Cloudinary URLs
            gallery.cloudFiles = cloudUrls.join(','); // Join URLs with commas

            // Save the gallery to the database
            await gallery.save();
         }

    res.status(201).json(gallery);
});
















router.post("/gallerycloud", cloudinaryUploads.array("cloudStorage"), async (req, res, next) => {
  const gallery = await GalleryModel.create(req.body);
  console.log("file List: ",req.files);
  console.log("file Names csv: ",req.body.files);
 
  const { location, category ,files, backup} = req.body;


  // Upload files to Cloudinary
  const cloudUrls = await Promise.all(
    req.files.map(async (file) => {
      console.log("filename: ", file.originalname);

      // const filenameWithoutExt = path.parse(file.filename).name; // Get filename without extension
      // console.log("filenameWithoutExt :",filenameWithoutExt);

      const result = await cloudinary.uploader.upload(file.path, {
        resource_type: "raw",
        folder: "Susipwan_BackupData/Galleries",
        public_id: file.originalname,
        upload_preset: "xveddqrz",
      });
      return result.secure_url;
    })
  );

  // Update the gallery object with the Cloudinary URLs
  gallery.cloudOnly = cloudUrls.join(","); // Join URLs with commas

  // Save the gallery to the database
  await gallery.save();

  res.status(201).json(gallery);
});



router.post("/single",upload.single("files"), async (req, res, next) => {
    const gallery = await GalleryModel.create(req.body);
    console.log(req.body);
    console.log(req.file);

      res.status(201).json(gallery);
});







router.put("/gallerymultiple", upload.array("myFieldName"), async (req, res, next) => {
  console.log("body :",req.body);
  console.log("file List: ",req.files);
  console.log("file Names csv: ",req.body.files);
  const { id, location, category ,files, localFiles, backup} = req.body;


  // let hasNewFiles = false;
  // if (req.files.length > 0) { 
  //   hasNewFiles = true;
  // }

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

    // Get the gallery from the database
  const gallery = await GalleryModel.findByPk(id);


// Delete existing Cloudinary files for the gallery if there are no new files
if (hasNewFiles) {
  const publicIdsWithExtensions = gallery.files.split(',');
  const publicIds = publicIdsWithExtensions.map(publicId =>
    path.join('uploads', 'Galleries', publicId)
  );
  const public_ids = publicIdsWithExtensions.map(publicId => `Susipwan_BackupData/Galleries/${publicId}`);
  const BackupPublic_Ids = publicIdsWithExtensions.map(backupPublicId => `Susipwan_BackupData/Galleries/Backup/${backupPublicId}`);

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





  gallery.location = location;
  gallery.category = category;
 
  // if (hasNewFiles) {
  //   gallery.files = files;
  // }
  if (hasNewFile) {
    gallery.files = files;
  }
  if (hasLocalFiles) {
    gallery.localFiles = localFiles;
  }
  gallery.backup = backup;
  gallery.cloudOnly = null;


       // Upload files to Cloudinary
       if(req.body.backup === 'true'){
        if (hasNewFiles) {

              const cloudUrls = await Promise.all(

              req.files.map(async (file) => {
                console.log("fileNames inside route: ",file.filename);
              const filenameWithoutExt = path.parse(file.filename).name; // Get filename without extension
              console.log("filenameWithoutExt :",filenameWithoutExt);
              const result = await cloudinary.uploader.upload(file.path, {
                  folder: "Susipwan_BackupData/Galleries",
                  public_id: filenameWithoutExt,
                  resource_type: "raw",
                  upload_preset: "xveddqrz"
              });
                  return result.secure_url;
              })
          );



          // Update the gallery object with the Cloudinary URLs
          gallery.cloudFiles = cloudUrls.join(','); // Join URLs with commas

       
       }
      }
   // Save the gallery to the database
   await gallery.save();


  res.status(201).json(gallery);
});







router.put("/gallerycloud", cloudinaryUploads.array("cloudStorage"), async (req, res, next) => {
  console.log("body :",req.body);
  console.log("file List: ",req.files);
  const { id, location, category ,files, backup} = req.body;

  // Check if there are any new files in the request
  let hasNewFiles = false;
  if (req.files.length > 0) { 
    hasNewFiles = true;
  }

  // Get the gallery from the database
  const gallery = await GalleryModel.findByPk(id);


  // Delete existing Cloudinary files for the gallery if there are no new files
  if (hasNewFiles) {
    const publicIdsWithExtensions = gallery.files.split(',');
    const publicIds = publicIdsWithExtensions.map(publicId =>
      path.join('uploads', 'Galleries', publicId)
    );
    const public_ids = publicIdsWithExtensions.map(publicId => `Susipwan_BackupData/Galleries/${publicId}`);
    const BackupPublic_Ids = publicIdsWithExtensions.map(backupPublicId => `Susipwan_BackupData/Galleries/Backup/${backupPublicId}`);

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

  // Update the gallery in the database
  gallery.location = location;
  gallery.category = category;
  if (hasNewFiles) {
    gallery.files = files;
  }
  gallery.localFiles = null;
  gallery.backup = 0;

  // Upload new files to Cloudinary
  if (hasNewFiles) {
    const cloudUrls = await Promise.all(
      req.files.map(async (file) => {
        console.log("filename: ", file.originalname);

        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "raw",
          folder: "Susipwan_BackupData/Galleries",
          public_id: file.originalname,
          upload_preset: "xveddqrz",
        });
        return result.secure_url;
      })
    );

    // Update the gallery object with the Cloudinary URLs
    gallery.cloudOnly = cloudUrls.join(","); // Join URLs with commas
  }

  // Save the gallery to the database
  await gallery.save();

  res.status(200).json(gallery);
});



router.post("/single",upload.single("files"), async (req, res, next) => {
    const gallery = await GalleryModel.create(req.body);
    console.log(req.body);
    console.log(req.file);

      res.status(201).json(gallery);
});






router.get('/gallery', getGalleries);
router.get('/onegallery/:id', getGallery);
router.delete('/gallery/:id', deleteGallery);
router.get('/gallery/byId/:id', viewGallery );
 

module.exports = router; 