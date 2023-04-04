import Salarypresent from '../models/SalarypresentModel.js';
 

//admin

export const getSPs = async(req, res) =>{
    try {
        const response = await Salarypresent.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPre = async(req, res) =>{
    try {
        await Salarypresent.create(req.body);
        res.status(201).json({msg: "Presentage Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateSP = async(req, res) =>{
    console.log("connected");
    try {
        await Salarypresent.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Presentage Updated"});
    } catch (error) {
        console.log(error.message);
    }
}


export const deletespre = async(req, res) =>{
    try {
        await Salarypresent.destroy({
            where:{
                id: req.params.id
            }
        });
        
    } catch (error) {
        console.log(error.message);
    }
}

  