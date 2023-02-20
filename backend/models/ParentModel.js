import {Sequelize, DataTypes} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Student = db.define('students',{
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
 
export default Student;
 
(async()=>{
    await db.sync();
})();