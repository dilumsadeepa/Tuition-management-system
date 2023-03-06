import Salarypresent from '../models/SalarypresentModel.js';
 
export const getSPs = async(req, res) =>{
    try {
        const response = await Salarypresent.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}