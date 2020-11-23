const express = require('express');
const path = require('path');
const fs = require('fs');
//setting our port info var
const PORT = process.env.PORT || 3000;
//accessing db json file
const dbJson = require('./db/db.json')
//assigning the express function to a var
const app = express();

//telling express to use the public folder to access files
app.use( express.static('public') )
// accepting requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//importing api routes
require("./apiroutes")(app);
require("./htmlroutes")(app);

app.listen(PORT, function () {
    console.log("Taking Notes on PORT " + PORT);
    
});