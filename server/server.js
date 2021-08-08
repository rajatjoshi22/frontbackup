const express=require('express');
const cors=require('cors');
const PORT=3000;
const app=express();

app.use(express.json());
app.use(cors());

app.get("/",function(req,res){
    res.send("hello from server");
})
app.post("/enroll",(req,res)=>{
    console.log("added",req.body);
    res.status(200).send({"message":"added"});
})
app.listen(PORT,()=>{
console.log("server running on localhost: "+PORT);
})

