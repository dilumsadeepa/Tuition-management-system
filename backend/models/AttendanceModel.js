import {Sequelize, DataTypes} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Student = db.define('students',{
    auserid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    acourseid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    aday:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    atime:{
        type:DataTypes.TIME,
        allowNull:false,
    }
},{
    freezeTableName:true
});
 
export default Student;
 
(async()=>{
    await db.sync();
})();