const express = require("express");
const app = express();
const hbs = require("express-hbs");
const path = require("path");

// handlebars
app.engine('hbs',hbs.express4());
app.set("view engine","hbs");

app.use(express.static("static"));

app.get("/",(req,res)=>{
    res.render("index",{name:"angad"});
});


server = app.listen(process.env.PORT || 3000,()=>console.log(`Listening on port ${server.address().port}`));

