const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const multer = require("multer");
const bodyParser = require('body-parser');


app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   

app.use( "/uploads", express.static(path.join(__dirname,'uploads')));


require('./config/mongoose.config')();    
require('./routes/user.routes')(app);
require('./routes/review.routes')(app);
    
app.listen( 8000,
    () => console.log(`Listing on port 8000`) );

