import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Notice = db.define('notices',{
    notice_to:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    notice_from:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    notice_title:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    notice_desc:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    files:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    cloudFiles:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    backup:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    }
    
},{
    freezeTableName:true
});
 
export default Notice;
 
(async()=>{
    await db.sync();
})();