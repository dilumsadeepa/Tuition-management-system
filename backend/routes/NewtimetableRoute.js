import express from "express";
const router = express.Router();
import { getNewTimetables, createNewTimetable, deleteNewTimetable, viewNewTimetable, timecourseId } from "../controllers/NewtimetableController.js";
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
router.get('/newtimetable/byId/:id', viewNewTimetable );
router.get('/newtimetableid/byId/:id', timecourseId ); 

export default router; 