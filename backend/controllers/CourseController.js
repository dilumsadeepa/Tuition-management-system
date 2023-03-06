import Course from '../models/CourseModel.js';
 
export const getCos = async(req, res) =>{
    try {
        const response = await Course.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}