const express = require("express");
const app = express();
const hbs = require("express-hbs");
const path = require("path");
const bp = require("body-parser");

app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

// handlebars
app.engine('hbs',hbs.express4());
app.set("view engine","hbs");

app.use(express.static("static"));

app.get("/",(req,res)=>{
    res.render("index",{name:"angad"});
});

app.post("/chatbot",(req,res)=>{
    res.status(200).send({
        queryResult:{
            queryText:"Hey there from backend"
        }
    });
});


server = app.listen(process.env.PORT || 3000,()=>console.log(`Listening on port ${server.address().port}`));

