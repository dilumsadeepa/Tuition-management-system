const express = require("express");
const router = express.Router();
const { getNotices, getPublicNotices, createNotice, deleteNotice, viewNotice, getNoticesCount, getRolesNoticesCount, getTodaysNotices } = require("../controllers/NoticeController.js");
const NoticeModel = require ('../models/NoticeModel.js');




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
        }
        res.status(201).json(notice);
    } catch (error) {
        res.status(500).json(error);
    }
}); 



router.post("/multiple", async (req, res) => {
  console.log("notice req.body : ",req.body);
    const notice = await NoticeModel.create(req.body);
    console.log("body :",req.body);
       

    // Save the notice to the database
    await notice.save();
         
    res.status(201).json(notice);
});


router.put("/multiple", async (req, res, next) => {
  console.log("body :",req.body);
  const { id, notice_to, notice_title, notice_desc, file_urls} = req.body;


  // Get the notice from the database
  const notice = await NoticeModel.findByPk(id);


  notice.notice_to = notice_to;
  notice.notice_title = notice_title;
  notice.notice_desc = notice_desc;
  notice.file_urls = file_urls;

   // Save the notice to the database
   await notice.save();


  res.status(201).json(notice);
});



router.get('/notice', getNotices);
router.get('/pubnotice', getPublicNotices);
router.get('/notice/count/', getNoticesCount);
router.get('/notices/count/:id', getRolesNoticesCount);
router.delete('/notice/:id', deleteNotice);
router.get('/notice/byId/:id', viewNotice );
// router.post('/notice', createNotice);
 

module.exports = router;