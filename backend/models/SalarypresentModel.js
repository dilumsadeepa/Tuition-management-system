import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Salarypresent = db.define('salarypresents',{
    userrole:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    presentage:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    
},{
    freezeTableName:true
});
 
export default Salarypresent;
 
(async()=>{
    await db.sync();
})();