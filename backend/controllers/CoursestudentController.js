import Course from '../models/CourseModel.js';
import Coursestudent from '../models/CoursestudentModel.js';
import Student from '../models/StudentModel.js';
import User from '../models/UserModel.js';
 
export const getCSs = async(req, res) =>{
    try {
        const response = await Coursestudent.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}






//admin

export const stucourse = async(req, res) =>{
    try {
        const response = await Coursestudent.findAll({
            include: [
                Student,Course
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCS = async(req, res) =>{
    try {
        await Coursestudent.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}


