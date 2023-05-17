import Student from "../models/StudentModel.js";
// import {Sequelize} from "sequelize";
import {QueryTypes} from "sequelize";
import User from "../models/UserModel.js";
import Course from "../models/CourseModel.js";
import Coursestudent from "../models/CoursestudentModel.js";

import db from "../config/Database.js";

 
export const getsts = async(req, res) =>{
    try {
        const response = await Student.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}









// admin

export const getStuData = async(req, res) =>{
    const sesql = "SELECT users.*, students.* FROM users INNER JOIN students ON users.id=students.userid";
    try {
        const response = await db.query(sesql, { type: QueryTypes.SELECT });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getStudentById = async(req, res) =>{
    const id = req.params.id;
    const sql = "SELECT users.*, students.* FROM users INNER JOIN students ON users.id=students.userid WHERE users.id = '"+id+"';";
    
    try {
        const response = await db.query(sql, { type: QueryTypes.SELECT });
               
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
    
}

export const getCourseById = async(req, res) =>{
    const id = req.params.id;
       
    const sesql = "SELECT c.* FROM courses c INNER JOIN coursestudents cs ON cs.courseId = c.id INNER JOIN students s ON s.id = cs.studentId INNER JOIN users u ON u.id = s.userId WHERE u.id = '"+id+"';";

    try {
       const response = await db.query(sesql, { type: QueryTypes.SELECT });
               
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
    
}

export const getStudentcourseId = async(req, res) =>{
    const id = req.params.id;
       
    const sesql = "SELECT c.id FROM courses c INNER JOIN coursestudents cs ON cs.courseId = c.id INNER JOIN students s ON s.id = cs.studentId INNER JOIN users u ON u.id = s.userId WHERE u.id = '"+id+"';";

    try {
       const response = await db.query(sesql, { type: QueryTypes.SELECT });
               
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
    
}

export const getAllStudentqr = async(req, res) =>{
    const id = req.params.id;
       
    const sesql = "SELECT s.userId AS userid, GROUP_CONCAT(c.id) AS courses FROM students s INNER JOIN coursestudents cs ON s.id = cs.studentId INNER JOIN courses c ON c.id = cs.courseId GROUP BY s.userId; ";

    try {
       const response = await db.query(sesql, { type: QueryTypes.SELECT });
               
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
    
}

//student





