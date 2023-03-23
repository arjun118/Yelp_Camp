const express=require('express')
const { getcamps, getacamp, getnewcampform, makecamp, getcampeditform, editcamp, deletecamp } = require('../controllers/campground')


const campgroundRouter=express.Router()

campgroundRouter.get('/',getcamps)
campgroundRouter.get('/new',getnewcampform)
campgroundRouter.get('/:id',getacamp)
campgroundRouter.post('/',makecamp)
campgroundRouter.get('/:id/edit',getcampeditform)
campgroundRouter.put('/:id',editcamp)
campgroundRouter.delete('/:id',deletecamp)
module.exports={campgroundRouter}