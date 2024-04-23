const router = require("express").Router();
const UserQuery = require("../models/UserQuery")

//Create a new user query
router.post("/addUserQuery", async(req,res)=>{
    const newUserQuery = new UserQuery(req.body);
    
    try{
        const savedUserQuery = await newUserQuery.save();
        res.status(200).json(savedUserQuery)
    }
    catch(error)
    {
        res.status(500).json(error);
    }
})

//get all user queries
router.get("/getAllUserQueries", async(req,res)=>{
    try{
        let tourPkgsArr ;
        UserQueryArr = await UserQuery.find({});
       
        res.status(200).json(UserQueryArr);
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

module.exports = router;