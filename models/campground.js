const mongoose=require('mongoose')
const {Schema}= mongoose


const campgroundSchema=new Schema({
    title:String,
    price:String,
    description:String,
    location:String
})


module.exports=mongoose.model('Campground',campgroundSchema)