const mongoose = require("mongoose");

const UserQuerySchema = new mongoose.Schema({
        fullName:{
            type:String,
            required: true,
            
        },
        cityOfResidence:{
            type:String,
            required:true,
           
        },
        emailAddress:{
            type:String,
            required: true
        },
        phoneNumber:{
            type:String,
            required: true
        },
        travelDestination:{
            type:String,
            required:true
        },
        noOfPeople:{
            type: Number,
            required:true
        },
        vacationType:{
            type:String,
            required: true
        }
    },{timestamps:true})

    module.exports= mongoose.model("UserQuery", UserQuerySchema)