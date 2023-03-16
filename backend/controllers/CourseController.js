import Course from '../models/CourseModel.js';




//admin


export const getCos = async(req, res) =>{
    try {
        const response = await Course.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createCourse = async(req, res) =>{
    try {
        await Course.create(req.body);
        res.status(201).json({msg: "Course Created"});
    } catch (error) {
        console.log(error.message);
    }
} 

export const getCotData = async(req, res) =>{
    const sesql = "SELECT teachers.*, courses.* FROM courses INNER JOIN teachers ON courses.courseteacher=teachers.t_userid ";
    try {
        const response = await db.query(sesql, { type: QueryTypes.SELECT });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
