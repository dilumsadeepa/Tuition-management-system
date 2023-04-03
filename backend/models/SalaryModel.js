import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Teacher from "./TeacherModel.js";
 
const {DataTypes} = Sequelize;
 
const Salary = db.define('salaries',{
    s_role:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    s_salary:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    month:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    
},{
    freezeTableName:true
});

Teacher.hasMany(Salary);
Salary.belongsTo(Teacher);
 
export default Salary;
 
(async()=>{
    await db.sync();
})();