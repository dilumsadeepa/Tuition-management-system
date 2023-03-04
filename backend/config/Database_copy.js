// this is copy of database file
// create a Database.js file and copy this code to that file
//or

//copy Database_copy.js Database.js
//cp Database_copy.js Database.js

//run this command


import {Sequelize} from "sequelize";

// const db = new Sequelize('tuitionmanagement','root','',{
//     host: 'localhost',
//     dialect: 'mysql'
// });
 
const db = new Sequelize('encodeco_lms','encodeco_lms','%Lms%1234@Susipwin',{
    host: 'encode99.com.lk',
    dialect: 'mysql'
});
 
export default db;