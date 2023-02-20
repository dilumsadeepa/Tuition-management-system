import {Sequelize} from "sequelize";
 
const db = new Sequelize('tuitionmanagement','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;