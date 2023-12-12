const express = require("express")

const router = express.Router()


// router.get('/',(req,res)=>{
//     res.send("Getting from Router")
// })


// router.post('/',(req,res)=>{
//     res.send("Posting from Router")
// })


    //    Router chaining method 

 router.route("/")   
 .get((req,res)=>res.status(200).send("Getting from Router"))
 .post((req,res)=>res.status(201).send("Posting  from Router"))
 .delete((req,res)=>res.status(501).send("Deleting from Router"))
 .put((req,res)=>res.status(502).send("Putting from Router"))
 .patch((req,res)=>res.send("Pattching from Router"))

module.exports =router