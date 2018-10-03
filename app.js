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
        speech:'Here you go',
        displayText:'',
        source:'angad-backend',
        messages:{
            type: 1,
            speech:"Here you go",
            platform: 'facebook',
            title: "title",
            subtitle: "subtitle",
            imageUrl: "noimg",
            // buttons: [
            //     {
            //         text: 'Read more',
            //         postback: post.link
            //     }
            // ]
        }
    });
});


server = app.listen(process.env.PORT || 3000,()=>console.log(`Listening on port ${server.address().port}`));

