const express = require('express')
const dbData=require('./dbModule/')
const path = require('path');
const port = 4444;

const app =express();

app.use( express.static( path.join(__dirname,'public')));


