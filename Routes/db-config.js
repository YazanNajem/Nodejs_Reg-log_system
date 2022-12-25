import mysql from "mysql";

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME
});

export default db;