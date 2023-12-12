const express = require('express')
const app = express()
const port = 4000
const path = require("path")
const Router = require("./router")

            // Middleware

//   app.use("/api/v1",Router)  


// app.use((req,res,next)=>{
//     res.send("Welcome to MYWEB")
//     next()
// })

// -----------------------------------------------------
// const session = {
//     user:"Meraj"
// }

// function isAuthenticate (req,res,next){
//     if(session.user){
//         next()

//     }else{
//         next(new Error("You are not login bro"))
//     }
// }

// app.get('/',isAuthenticate, (req, res) => {
      
//          res.send("You are login successfully")
// })
// ----------------------------------------------------------------
                //   Static file 

  app.use("/static", express.static(path.join(__dirname,"public")))

// -----------------------------------------------------------------
                    // GET 
app.get('/', (req, res) => {


   
//   res.send('Hello World!')
// -----------------------------------
//   res.json({
//     name: "Md Meraj Alam",
//     email:"mailmerajgrd@gmail.com"
//   })
// -----------------------------------------

// console.log(req.query);
// console.log(req.query.name);
//   ------------------------------------
                //   JOINING FILE PATH 
     res.sendFile(path.join(__dirname,"./index.html"))

})


// ----------------------------------------------
                //   POST

// app.post('/',(req,res)=>{
//     // res.send("welcome from post")

//     res.status(200).send("welcome from post")
// })
 
// -------------------------------------------------
                //   DELETE 

//   app.delete("/", (req,res)=>{
//     res.send({msg:"Delete successfully"})
//   }) 

// ------------------------------------------------------

                    //   PATCH 
           
//   app.patch("/", (req,res)=>{
//      res.send({msg:"patching data "})
//    })                  

//    ----------------------------------------------------
                
                    //  PUT 

//   app.put("/", (req,res)=>{
//      res.send({msg:"putting the  data "})
//    }) 




app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})