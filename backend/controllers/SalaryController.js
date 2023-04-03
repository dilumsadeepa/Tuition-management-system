import Salary from '../models/SalaryModel.js';
import Teacher from '../models/TeacherModel.js';
 

//admin
export const getsals = async(req, res) =>{
    try {
        const response = await Salary.findAll({include: [Teacher],});
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}