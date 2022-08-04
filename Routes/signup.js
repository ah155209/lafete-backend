const bcrypt = require('bcrypt');
const mongoose=require("mongoose");
const express=require("express");
const _ =require("lodash");
const router = express.Router();
const {User, validate}=require("../modules/signup");

router.post('/',async(req,res)=>{
//      const{error} =validate(req.body);
     console.log("req.body----------------->", req.body )
//      user= new User(_.pick(req.body,['email','username','psw','cpsw']));
   /*  if(error) return res.status(400).send(error.details[0].message);
     
     let user= await User.find({$or:[ {email:req.body.email}, {$username:req.body.username} 
     ]});
     if(user) return res.status(400).send('User email already exists or Username already exists');
     if(req.body.psw!= req.body.cpsw) return res.status(400).send('confirm password does not match');

     
      const salt =await bcrypt.gensalt(15);
      user.psw=await bcrypt.hash(user.psw,salt);
      user.cpsw=await bcrypt.hash(user.cpsw,salt);
      await user.save();*/
      
      // res.send(_.pick(['_id','email','username']));
});


module.exports= router;