const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const passport= require('passport');


const users=require('./routes/api/users');
const products=require('./routes/api/products');


const app= express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(passport.initialize());

require('./config/passport')(passport);

const db= require('./config/key').mongoURI;


mongoose.connect(db,{ useNewUrlParser: true })
    .then(()=>console.log('mongodb connected'))
    .catch(err=>console.log(err));

app.get('/',(req,res)=>res.send('hello  this is my first project'));


app.use('/api/users',users);// api/usersil nokum ,ennit users file lek pokum
app.use('/api/products',products);


const port =5000;
app.listen(port,()=>
console.log(`server running on port ${port}`));





