const express=require("express")
const app=express()

app.use(express.json());
const notes=[]
app.post('/notes',(req,res)=>{
    console.log(req.body);
    console.log("post request");

})


app.get('/notes', (req, res) => {
    console.log("get request");
    res.send("This is the get request");
});

module.exports=app