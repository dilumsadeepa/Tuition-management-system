import Coursestudent from '../models/CoursestudentModel.js';
 
export const getCSs = async(req, res) =>{
    try {
        const response = await Coursestudent.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}






//admin

export const stucourse = async(req, res) =>{
    const sesql = "SELECT users.*, students.*, coursestudents.*, courses.* FROM users INNER JOIN students ON users.id=students.userid JOIN coursestudents ON users.id = coursestudents.suid JOIN courses ON coursestudents.cid = courses.id";
    try {
        const response = await db.query(sesql, { type: QueryTypes.SELECT });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}