import Attendance from "../models/AttendanceModel.js";
 
export const getAtts = async(req, res) =>{
    try {
        const response = await Attendance.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getAttById = async(req, res) =>{
    try {
        const response = await Attendance.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 