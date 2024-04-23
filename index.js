const express = require('express');
const app = express();

const authRoute = require("./routes/Auth")
const tourPackageRoute = require("./routes/TourPackages")
const userQueryRoute = require("./routes/UserQueries")
//const mnURL = "mongodb+srv://travelAgencyAdmin:travelAdminPassword@cluster0.ltdzomt.mongodb.net/travelAgency?retryWrites=true&w=majority"

const dotenv = require("dotenv")
require('dotenv').config();
const mongoose = require("mongoose")
dotenv.config()

 mongoose.connect(process.env.MONGO_URL,{
    
  
    
})
.then(console.log("Connected to Mongo DB"))
.catch(err=>console.log(err))

// app.use("/", (req,res)=>{
//     console.log("Hey this is main URL")
// })

const routes = require('./routes/ImageUploadRouter');


app.use(express.json());

app.use("/api/auth/", authRoute);
app.use("/api/TourPackage", tourPackageRoute);
app.use("/api/UserQuery", userQueryRoute )
app.use('/', routes);

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});

//start the server
app.listen("5000", ()=>{
   
    console.log("Backend is running!")
    
})
