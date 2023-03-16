import Courseteacher from '../models/CourseteacherModel.js';


export const getCts = async(req, res) =>{
    try {
        const response = await Courseteacher.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}