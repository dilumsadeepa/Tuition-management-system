import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Newtimetable = db.define('timetable',{
    cunit:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    cname:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    cdate:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    ctime:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    hall:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    
},{
    freezeTableName:true
});
 
export default Newtimetable;
 
(async()=>{
    await db.sync();
})();