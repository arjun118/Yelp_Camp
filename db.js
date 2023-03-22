const mongoose=require('mongoose')

async function connectoDB(){
    await mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser:true
    })
}

connectoDB()

const db=mongoose.connection;

module.exports={db}