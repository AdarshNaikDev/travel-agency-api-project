const router = require("express").Router();
const Package = require("../models/TourPackage")

//library for hashing password in Node js
const bcrypt = require("bcrypt");


//Create a new tour Package
router.post("/addTourPackage", async(req,res)=>{
    const newTourPackage = new Package(req.body);
    try{
        const savedPackage = await newTourPackage.save();
        res.status(200).json(savedPackage)
    }
    catch(error)
    {
        res.status(500).json(error);
    }
})

//Update a tour package
router.put("/:id", async(req,res)=>{

    try{
       const TourPackage = await Package.findById(req.params.id);
       if(TourPackage.username === req.body.username)
       {

        try{
            const updatedTourPackage = await Package.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updatedTourPackage);
        }
        catch(err)
        {
         res.status(500).json(err)
        }
       }
       else
       {
        res.status(401).json("Username is invalid for this Package")
       }
       
       
    }
    catch(error)
    {
        res.status(500).json(error)
    }
})

//Delete a tour package

router.delete("/:id", async (req, res) => {
    try {
        const tourPackage = await Package.findById(req.params.id);
        
       
        if (!tourPackage) {
            return res.status(404).json("Tour Package not found");
        }
        
        if (tourPackage.username !== req.body.username) {
            return res.status(401).json("Unauthorized: Username does not match");
        }
        
        try {
            //console.log("here")
            await tourPackage.deleteOne();
            return res.status(200).json("Tour Package is deleted Successfully!!");
        } catch (err) {
            return res.status(500).json(err);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});



//Get a tour package
router.get("/:id", async(req, res)=>{
try{
const tourPackage = await Package.findById(req.params.id);
res.status(200).json(tourPackage);

}
catch(err)
{
    res.status(500).json(err)
}
});


//Get all Tour packages!!

router.get("/g/getPackages", async(req,res)=>{
    try{
        let tourPkgsArr ;
        tourPkgsArr = await Package.find({});
        console.log(tourPkgsArr);
        res.status(200).json(tourPkgsArr);
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

module.exports = router;