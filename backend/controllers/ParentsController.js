import Parent from '../models/ParentModel.js';
import { QueryTypes } from 'sequelize';
import db from '../config/Database.js';
 
export const getPas = async(req, res) =>{
    try {
        const response = await Parent.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPadata = async(req, res) =>{
    const id = req.params.id;
    const sql = "SELECT p.*, u.* FROM parents p INNER JOIN users u ON p.puserid = u.email WHERE p.stuid = '"+id+"'";
    
    try {
        const response = await db.query(sql, { type: QueryTypes.SELECT });
               
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createParent = async(req, res) =>{
    try {
        await Parent.create(req.body);
        res.status(201).json({msg: "Parent Created"});
    } catch (error) {
        console.log(error.message);
    }
}