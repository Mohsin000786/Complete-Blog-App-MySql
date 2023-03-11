const mysql = require('mysql');

const DB = {
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'mohsin',
    database: 'blog',
    timezone: '+0800',
    connectionLimit: 10,
    connectTimeout: 10000,
    waitForConnections: true,
    queueLimit: 0
}


const db = mysql.createPool(DB);

module.exports = db;