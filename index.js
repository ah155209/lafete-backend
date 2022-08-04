const mongoose = require('mongoose');
const joi= require('joi');
//joi.objectId = require('joi-objectId')(jOi);//
const express = require('express');
const app = express();
const user = require('./Routes/signup');
const login = require('./Routes/login');

mongoose.connect("mongodb://localhost/lafete")
.then(()=>console.debug('Connected to Database'))
.catch(err =>console.debug('Error connecting to Database',err) );

app.use(express.json());
app.use('/api/signup',user);
// app.use('/api/login',login);


const port =process.env.PORT || 8000;
app.listen(port,()=>console.debug(`Listening on ${port}`)); 