import {Sequelize, DataTypes} from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Student from "./StudentModel.js";
 
// const {DataTypes} = Sequelize;
 
const Parent = db.define('parents',{
    pfullname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    puserid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    stuid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    freezeTableName:true
});

Parent.hasOne(User);
Student.belongsTo(Parent);
 
export default Parent;
 
(async()=>{
    await db.sync();
})();