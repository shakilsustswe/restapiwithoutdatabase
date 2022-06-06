
//server create
const express = require("express");

//onno origin er folder access
const cors = require("cors");

//to read from body
const bodyParser = require("body-parser");

///userRouter from models Folder
const userRouter=require("./routes/usersroute");

///create server
const app = express();


app.use(cors());

//to read json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//show all users
app.use("/users",userRouter);



//home route
app.get("/",(request,response)=>
{
 response.sendFile(__dirname+"/views/index.html");
});

////route not found
app.use((request,response,next)=>
{
 response.status(404).json(
   {
     message:"Route not found"
   });
});


///server error
app.use((request,response,error,next)=>
{
 response.status(500).json(
   {
     message:"Something broken"
   });
});

module.exports = app;
