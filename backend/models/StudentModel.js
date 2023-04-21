import {Sequelize, DataTypes} from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
 
// const {DataTypes} = Sequelize;
 
const Student = db.define('students',{
   
    sfullname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    snamewithini:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    saddress:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sdob:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sgender:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    snic:{
        type:DataTypes.STRING,
        allowNull:true,
    },
},{
    freezeTableName:true
});

User.hasOne(Student);
Student.belongsTo(User);
 
export default Student;
 
(async()=>{
    await db.sync();
})();