const mongoose= require('mongoose');
const joi= require('joi');


const User= mongoose.model('User',new mongoose.Schema({
      email:{
       type: 'string',
       required: true,
       minlength: 7,
       maxlength: 255,
       unique: true,
      },
      username:{
        type: 'string',
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true,
      },
      psw:{
        type: 'string',
       required: true,
       minlength: 8,
       maxlength: 1024,
       uppercase:1,
      },
      cpsw:{
        type: 'string',
        required: true,
        minlength: 7,
        maxlength: 1024,
        uppercase:1,
      }
}));

function validateUser(user){
    const Schema= {
        email: joi.string().min(7).max(255).required().email(),
        username:joi.string().min(5).max(50).required(),
        psw: joi.string().min(8).max(255).uppercase(1).required(),
        cpsw:joi.string().min(8).max(255).uppercase(1).required(),
    };
  return validate(user, Schema);
}

exports.User=User;
exports.validate=validateUser;