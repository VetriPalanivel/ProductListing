const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require ('mysql2');
// const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password : "Tiger#1234",
    database : "productlist"
});



app.get("/api/get",(req,res)=>{
    const sqlSelect="select * from product";
    db.query(sqlSelect,(err,result)=>{
        // if(err){
        //        console.log(err);
        //     }
        res.send(result);
        // console.log("welcome to ouput");
    });
});


app.post("/api/addproduct",(req,res)=>{
 
    const {name,description,weight,price,rating} = req.body;
    
    const sqlInsert="INSERT INTO product(name,description,weight,price,rating) VALUES (?,?,?,?,?)";
    db.query(sqlInsert,[name,description,weight,price,rating],(err,result)=>{
        if(err){
            console.log(err);
        }
    res.send(result);
    console.log(result);
});

});

// app.post("/api/editproduct",(req,res)=>{
 
//     const {name,description,weight,price,rating} = req.body;
    
//     const sqlInsert="INSERT INTO product(name,description,weight,price,rating) VALUES (?,?,?,?,?)";
//     db.query(sqlInsert,[name,description,weight,price,rating],(err,result)=>{
//         if(err){
//             console.log(err);
//         }
//     res.send(result);
//     console.log(result);
// });

// });

app.listen(3001, () => {
    console.log("running on 3001");
});

