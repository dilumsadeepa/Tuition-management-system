import express from "express";
const router = express.Router();
import { enrollclass } from "../controllers/CoursestudentController.js";

import Coursestudent from '../models/CoursestudentModel.js';







router.get('/enrollclass', enrollclass);


export default router; 