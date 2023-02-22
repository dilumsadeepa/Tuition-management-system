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
 
// export const createAtt = async(req, res) =>{
//     try {
//         await Attendance.create(req.body);
//         res.status(201).json({msg: "User Created"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
 
// export const updateAtt = async(req, res) =>{
//     try {
//         await Attendance.update(req.body,{
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "User Updated"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
 
// export const deleteAtt = async(req, res) =>{
//     try {
//         await Attendance.destroy({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "User Deleted"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }