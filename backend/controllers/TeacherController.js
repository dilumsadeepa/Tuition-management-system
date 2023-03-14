import Teacher from '../models/TeacherModel.js';
 
export const getTes = async(req, res) =>{
    try {
        const response = await Teacher.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTeacher = async(req, res) =>{
    try {
        await Teacher.create(req.body);
        res.status(201).json({msg: "Teacher Added!"});
    } catch (error) {
        console.log(error.message);
    }
}