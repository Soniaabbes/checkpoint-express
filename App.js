const express= require("express")
const Timeexecution= (req, res, next)=> {
    var date = new Date();
    if(date.getDay() > 0 && date.getDay() <6 && date.getHours() > 9 && date.getHours()< 17){
        next();
     } 
     else{
             res.redirect('/Home');
       }
    }

const server = express()
server.use (Timeexecution)
server.get('/css/style.css',(req,res)=>{
    res.sendFile(__dirname + '/Public/css/style.css')

})

server.get('/',(req,res)=>{
    res.sendFile(__dirname + '/Public/Home.html')

})
server.get('/Contact',(req,res)=>{
    res.sendFile(__dirname + '/Public/Contact.html')

})
server.get('/Service',(req,res)=>{
    res.sendFile(__dirname + '/Public/Service.html')

})

const port =5000;
server .listen(port, (err)=>
err? console.log(err):console.log(`server run on port${port} `))