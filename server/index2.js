const express = require("express");
const app = express();
const mysql = require ('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password : "Tiger#1234",
    database : "product"
});

app.get("/insert",(req, res)=> {
    const sqlInsert ="INSERT INTO products(pro_name,description,weight,price,rating) VALUES('Pencil','Bad','5','10','2');";
    db.query(sqlInsert,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
});
});

app.listen(3001,()=>{
    console.log("running");
});