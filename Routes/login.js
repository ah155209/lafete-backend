const jwt= require('jsonwebtoken');
const joi=require('joi');
const bcrypt = require('bcrypt');
const mongoose=require("mongoose");
const express=require("express");
const _ =require("lodash");
const router = express.Router();
const {User}= require("../modules/signup");


router.post('/',async(req,res)=>{
     const{error} =validate(req.body);
     if(error) returnres.status(400).send(error.details[0].message);
     
     let user= await User.find({$or:[ {email:req.body.email}, {$username:req.body.username} 
     ]});
     if(!user) return res.status(400).send('INvalid email or username');
     const validpsw=await bcrypt.compare(req.body.psw, user.psw);
     if(!validpsw) return res.status(400).send('Invalid password');
      //json web token is used  in send () method//

      const token= jwt.sign({_id: user._id},'mfinalyearproject');
    
     res.send(token);
 
    });

function validate(req){ 
    const Schema= {
        email: joi.string().min(7).max(255).required().email(),
        username:joi.string().min(5).max(50).required(),
        psw: joi.string().min(8).max(255).uppercase(1).required(),
    };
  return joi.validate(user, Schema);
}


module.exports= router;