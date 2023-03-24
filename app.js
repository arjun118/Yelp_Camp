const express=require('express')
const app=express()
const path=require('path');
const {db}=require('./db')
const methodOverride=require('method-override')
const {campgroundRouter}=require('./routes/campground')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use('/cg',campgroundRouter)

db.once('open',()=>{
    console.log("Db connected")
    app.listen(3000,()=>{
        console.log("Listening on port 3000!!")
    })
})