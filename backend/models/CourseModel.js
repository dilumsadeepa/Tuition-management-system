import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Teacher from "./TeacherModel.js";
 
const {DataTypes} = Sequelize;
 
const Course = db.define('courses',{
    courseid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    coursename:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    coursebanner:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    courseprofile:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    coursedes:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    courseprice:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    courseteacher:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    freezeTableName:true
});

Teacher.hasMany(Course);
Course.belongsTo(Teacher);

export default Course;
 
(async()=>{
    await db.sync();
})();