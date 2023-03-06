import Teacher from '../models/TeacherModel.js';
 
export const getTes = async(req, res) =>{
    try {
        const response = await Teacher.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}