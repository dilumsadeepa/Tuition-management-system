import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Salary = db.define('salaries',{
    s_userid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    s_salary:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    month:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    
},{
    freezeTableName:true
});
 
export default Salary;
 
(async()=>{
    await db.sync();
})();