import Coursestudent from '../models/CoursestudentModel.js';
 
export const getCSs = async(req, res) =>{
    try {
        const response = await Coursestudent.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}