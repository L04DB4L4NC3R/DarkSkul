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

    let params = req.body.queryResult.parameters;
    let subject = params.subject[0],clas = params.class;

    let result = `${clas}_${subject}`;

    res.status(200).send({
        "fulfillmentText":"Hello there from backend",
        "fulfillmentMessages":[{"text":{"text":[`${result}`]}}],
        "source":""
    });
});


server = app.listen(process.env.PORT || 3000,()=>console.log(`Listening on port ${server.address().port}`));

