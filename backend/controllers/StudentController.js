import Student from "../models/StudentModel.js";

 
export const getsts = async(req, res) =>{
    try {
        const response = await Student.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}