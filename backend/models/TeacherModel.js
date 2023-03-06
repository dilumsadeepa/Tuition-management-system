import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Teacher = db.define('teachers',{
    t_userid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    t_fullname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    t_address:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    t_gender:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    t_nic:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    t_education:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    t_dis:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    freezeTableName:true
});
 
export default Teacher;
 
(async()=>{
    await db.sync();
})();