const express = require("express");
const router = express.Router()
const {userdata} = require('./user')




router.get('/',(req,res)=>{
    if(!req.session.loggedIn){
        res.redirect('/login')
    }else{
        const user = userdata()
        res.render('home',{username:user.name})
    }
    
})

// login router


router.get('/login',(req,res)=>{
   if(req.session.loggedIn){
     res.redirect('/')
   }else{
    res.render('login')
   }
})

router.post('/login',async(req,res)=>{
    const user = await userdata()

    const {email,password} = req.body;
   if(email== user.email&& password== user.password){
    req.session.loggedIn=true
    res.redirect('/')
   }else{
    res.render('login',{err:" Invalid username or password "})
   }
})

//logout router

router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/login')
    })
    





module.exports=router