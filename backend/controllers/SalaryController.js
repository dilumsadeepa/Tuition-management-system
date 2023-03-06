import Salary from '../models/SalaryModel.js';
 
export const getsals = async(req, res) =>{
    try {
        const response = await Salary.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}