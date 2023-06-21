import express from "express";
const router = express.Router();
import { getNewTimetables, createNewTimetable, deleteNewTimetable, viewNewTimetable, timecourseId,timecourse, updateTimeTable } from "../controllers/NewtimetableController.js";
import NewTimetableModel from '../models/NewtimetableModel.js';
import cloudinary from '../clouds/cloudinary.js';







router.post("/newtimetable", async (req, res, next) => {
    const newtimetable = await NewTimetableModel.create(req.body);
    console.log("body :",req.body);
       

            // Save the notice to the database
            await newtimetable.save();

            // res.status(201).json(notice);

    res.status(201).json(newtimetable);
});







router.get('/newtimetable', getNewTimetables);
router.delete('/newtimetable/:id', deleteNewTimetable);
router.put('/newtimetable/:id', updateTimeTable);
router.get('/newtimetable/byId/:id', viewNewTimetable );
router.get('/newtimetableid/byId/:id', timecourseId ); 
// router.get('/coursename/:id', timecourse );

export default router; 