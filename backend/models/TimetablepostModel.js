import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Timetablepost = db.define('timetableposts',{
    time_title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    grade:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    files:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    localFiles:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    publicIdList:{
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
    },
    cloudOnly:{
        type:DataTypes.TEXT,
        allowNull:true,
    }
    
},{
    freezeTableName:true
});
 
export default Timetablepost;
 
(async()=>{
    await db.sync();
})();