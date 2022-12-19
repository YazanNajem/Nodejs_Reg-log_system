import sql from "mysql";

const db = sql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    pass : process.env.DATABASE_PASSWORD,
    name : process.enc.DATABASE_NAME
})

export default db;