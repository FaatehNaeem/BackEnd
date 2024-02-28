const express = require("express");

const app = express();

//Middleware
// app.use(function(res,req,next){
//    console.log(req)
//    next()
//     })

app.set("view engine", "ejs")

app.use(express.static('./public'))
    
app.get("/" , function(req,res){
    res.render("index")
  });
  
  app.get("/contact", (req,res)=>{
    
    res.render("contact",{Name:'Faateh'})
  })
  
  //dynamic routing // 
  app.get("/about/account/:username", (req,res,next)=>{
    
    res.send(`this is about of ${req.params.username}`)  
  })
  
  app.get('/error',function(req,res,next){
  throw new Error("you just got hacked");
  })
  app.use('/error', function errorHandler (err, req, res, next) {
    if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000)