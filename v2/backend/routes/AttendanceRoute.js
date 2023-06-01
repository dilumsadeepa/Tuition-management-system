import express from "express";
import { getAtts,
    getAttById
 } from "../controllers/AttendanceController";
 
const router = express.Router();
 
router.get('/att', getAtts);
router.get('/att/:id', getAttById);
// router.post('/users', createUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);
 
export default router;