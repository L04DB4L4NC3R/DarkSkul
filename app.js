const express = require("express");
const app = express();
const hbs = require("express-hbs");
const path = require("path");
const bp = require("body-parser");
const data = require("./data.json");

app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

// handlebars
app.engine('hbs',hbs.express4());
app.set("view engine","hbs");

app.use(express.static("static"));

app.get("/",(req,res)=>{
    res.render("index",{name:"angad"});
});


app.get("/2",(req,res)=>{
    res.render("index2",{name:"angad"});
});


app.get("/3",(req,res)=>{
    res.render("index3",{name:"angad"});
});

// webhook fulfillment
app.post("/chatbot",(req,res)=>{ 

       // to extract parameters oout of spoken words
    let params = req.body.queryResult.parameters;
    let subject = params.subject,clas = params.class,chapter=params.chapter;

    // to put the parameters as input to our data file
    let result = data[`${clas}_${subject}`];
    if(result)
        result = result[`chapter ${chapter[chapter.length-1]}`];

   // if empty result then handle
    if(!result)
        result = `trying to find material for class ${clas}th ${subject} ${chapter} from my data repository`;

       // send fullfillment 
    res.status(200).send({
        "fulfillmentText":`${result}`,
        "fulfillmentMessages":[{"text":{"text":[`${result}`]}}],
        "source":""
    });
});


server = app.listen(process.env.PORT || 3000,()=>console.log(`Listening on port ${server.address().port}`));

