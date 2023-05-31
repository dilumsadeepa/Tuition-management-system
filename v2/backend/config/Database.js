import {Sequelize} from "sequelize";

// const db = new Sequelize('tuitionmanagement','root','',{
//     host: 'localhost',
//     dialect: 'mysql'
// });
 
const db = new Sequelize('encodeor_tuition','encodeor_tuition','%Tuition%1234Susipwin',{
    host: 'encode99.org.lk',
    dialect: 'mysql'
});
 
export default db;