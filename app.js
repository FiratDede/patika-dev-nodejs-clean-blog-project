const express=require("express");

const app=express();

app.listen(3000,()=>{
    console.log("Server is listening on 3000 port");
})

app.get("/",(req,res,next)=>{
    const blog = { id: 1, title: "Blog title", description: "Blog description" };
    res.send(blog);
})