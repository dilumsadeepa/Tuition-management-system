import Student from "../models/StudentModel.js";
// import {Sequelize} from "sequelize";
import {QueryTypes} from "sequelize";
import User from "../models/UserModel.js";

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
    const sesql = "SELECT users.*, students.* FROM users INNER JOIN students ON users.id=students.userid WHERE users.id = '"+id+"';";
    try {
        const response = await db.query(sesql, { type: QueryTypes.SELECT });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

