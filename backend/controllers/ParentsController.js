import Parent from '../models/ParentModel.js';
 
export const getPas = async(req, res) =>{
    try {
        const response = await Parent.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}