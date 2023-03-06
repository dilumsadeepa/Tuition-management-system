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
        allowNull:false,
    },
    notice:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    
},{
    freezeTableName:true
});
 
export default Notice;
 
(async()=>{
    await db.sync();
})();