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
    res.send({
        "speech": "...",  // ASCII characters only
        "displayText": "...",
        "data": {
          "google": {
            "expect_user_response": true,
            "is_ssml": true,
            "permissions_request": {
              "opt_context": "...",
              "permissions": [
                "NAME",
                "DEVICE_COARSE_LOCATION",
                "DEVICE_PRECISE_LOCATION"
              ]
            }
          }
        },
        "contextOut": [...],
      });
});


server = app.listen(process.env.PORT || 3000,()=>console.log(`Listening on port ${server.address().port}`));

