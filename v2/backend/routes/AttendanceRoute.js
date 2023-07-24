import express from "express";
import { getAtts,
    getAttById,
    getAttCourseId
 } from "../controllers/AttendanceController";
 
const router = express.Router();
 
router.get('/att', getAtts);
router.get('/att/:id', getAttById);
// router.get('/attcourse/:id',getAttCourseId);
// router.post('/users', createUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);
 
export default router;