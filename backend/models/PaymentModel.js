import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Payment = db.define('payments',{
    cid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    suid:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    month:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    
},{
    freezeTableName:true
});
 
export default Payment;
 
(async()=>{
    await db.sync();
})();