import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Coursestudent = db.define('coursestudents',{
    cid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    suid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    
},{
    freezeTableName:true
});
 
export default Coursestudent;
 
(async()=>{
    await db.sync();
})();