import express from "express";
import db from "./Routes/db-config.js"
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/js", express.static("./public/JS"));
app.use("/css", express.static("./public/CSS"));

app.set("view engine", "ejs");
app.set("views", "./Views");

db.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log("connection done");
    }
})

app.listen(PORT);