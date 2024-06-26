const mongoose = require("mongoose");

const TourPackageSchema = new mongoose.Schema({
       title:{
            type:String,
            required:true,
            unique:true
            
       },
       description:{
        type:String,
        required:true
       },
       actualPrice:{
         type: String,
         required: true
       },
       discountedPrice:{
         type: String,
         required: true
       },
       noOfDays:{
         type: Number,
         required: true
       },
       noOfNights:{
         type: Number,
         required: true
       },
       photo:{
        type:String,
        required:false
       },
       username:{
        type:String,
        required:true
       },
       categories:{
        type:Array,
        required: false
       },
       pkgImages:{
          type:Array,
          required: true
       }
    },{timestamps:true})

    module.exports= mongoose.model("TourPackage", TourPackageSchema)