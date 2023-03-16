import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Courseteacher = db.define('courseteachers',{
    tcid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    tuid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    
    
},{
    freezeTableName:true
});
 
export default Courseteacher;
 
(async()=>{
    await db.sync();
})();