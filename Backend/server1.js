// It is the starting of learning Backend for mern stack


const express= require('express');//used for using the express module
express()  //the express server wil start or initiates properly but main problem  is it is not created properly and it is not listening to any port.
const app=express();//creating a server instance
app.listen(1000)//starting the server and listening to the port 3000
// console.log("hello, this code is for server.js")  //it will not work beacause we have to use app.get into "/" api, and put what specific response client want from the server.
 
app.get("/",(req,res)=>{
    res.send("Hello,, this code is for server.js")//now the content or the response will show up on the browser using localhost:3000 port
})


//learn  how to create routes for pages like in which page refers to the others
//homepage 
app.get('/home',(req,res)=>{
    res.send("This page is for the homepage section")
})
//about
app.get('/about',(req,res)=>{
    res.send("Thsi page is for the about section of the page");
})
//gallery
app.get('/gallery',(req,res)=>{
    res.send("This page is for the gallery section");
})
//login
app.get('/login',(req,res)=>{
    res.send("This page is for the login section");
})
//contact
app.get('/contact',(req,res)=>{
    res.send("This page is for the contact section");
})

