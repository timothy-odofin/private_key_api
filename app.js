const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const bodyparser = require('body-parser');
const userRouter = require('./routes/userRoute');

//Env

const path = require('path')
const app = express();


// Ejs Tamplate
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());


//Static Files
app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, 'asset')));
app.use('/css', express.static(__dirname, + 'public/css'));


app.use('', userRouter);





module.exports = app;