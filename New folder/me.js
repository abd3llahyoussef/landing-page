const express=require('express');
const app=express();
const port=8080;
const server=app.listen(port,()=>{
    console.log("the server is running");
    console.log(`running on:${port}`);
})