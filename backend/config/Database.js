import {Sequelize} from "sequelize";
 
const db = new Sequelize('encodeco_lms','encodeco_lms','%Lms%1234@Susipwin',{
    host: 'encode99.com.lk',
    dialect: 'mysql'
});
 
export default db;