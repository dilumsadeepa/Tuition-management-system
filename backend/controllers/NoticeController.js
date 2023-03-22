import Notice from '../models/NoticeModel.js';
 
export const getNotis = async(req, res) =>{
    try {
        const response = await Notice.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createNotice = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "Notice Created"});
    } catch (error) {
        console.log(error.message);
    }
}