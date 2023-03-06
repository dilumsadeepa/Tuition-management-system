import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
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
    }
},{
    freezeTableName:true
});
 
export default Course;
 
(async()=>{
    await db.sync();
})();