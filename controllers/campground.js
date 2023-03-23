const Campground = require("../models/campground")

const getcamps= async (req,res)=>{
    const campgrounds=await Campground.find({})
    res.render('campgrounds/index',{cgs:campgrounds})
}

const getacamp= async (req,res)=>{
    const id=req.params.id;
    const campground=await Campground.findById(id)
    res.render('campgrounds/show',{campground})
}

const getnewcampform= (req,res)=>{
    res.render('campgrounds/new')
}

const makecamp = async (req,res)=>{
    const camp= new Campground(req.body.campground)
    await camp.save()
    res.redirect('/cg')
}

const getcampeditform = async (req,res)=>{
    const id=req.params.id;
    const campground=await  Campground.findById(id)
    res.render('campgrounds/edit',{campground})
}

const editcamp= async (req,res)=>{
    const id=req.params.id;
    await Campground.findByIdAndUpdate(id,{...req.body.campground})
    res.redirect(`/cg/${id}`)
}

const deletecamp = async (req,res)=>{
    const id=req.params.id
    await Campground.findByIdAndDelete(id)
    res.redirect('/cg')
}
module.exports={getcamps,getacamp,getnewcampform,makecamp,getcampeditform,editcamp,deletecamp}