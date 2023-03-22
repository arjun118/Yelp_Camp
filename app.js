const express=require('express')
const app=express()
const path=require('path');
const {db}=require('./db')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

db.once('open',()=>{
    console.log("Db connected")
    app.listen(3000,()=>{
        console.log("Listening on port 3000!!")
    })
})