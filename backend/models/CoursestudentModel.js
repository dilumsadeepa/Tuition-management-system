import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Course from "./CourseModel.js";
import Student from "./StudentModel.js";
 
const {DataTypes} = Sequelize;
 
const Coursestudent = db.define('coursestudents',{
    aprovel:{
        type:DataTypes.STRING,
        allowNull: false,
    }
    
},{
    freezeTableName:true
});

Coursestudent.belongsTo(Student);
Coursestudent.belongsTo(Course);
Student.hasMany(Coursestudent);
Course.hasMany(Coursestudent);
 
export default Coursestudent;
 
(async()=>{
    await db.sync();
})();