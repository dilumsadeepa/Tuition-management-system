import Notice from '../models/NoticeModel.js';
 
export const getNotis = async(req, res) =>{
    try {
        const response = await Notice.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}