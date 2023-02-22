import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Attendance = db.define('attendances',{
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
 
export default Attendance;
 
(async()=>{
    await db.sync();
})();