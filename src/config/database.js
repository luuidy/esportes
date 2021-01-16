require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'esportes',
    define:{
        timestemps: true
    }
}