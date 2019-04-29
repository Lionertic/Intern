const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./servers/routes/route');
const path = require('path');

const db = 'mongodb://127.0.0.1:27017/Transfer';
const app = express();
const port = 3000;

mongoose.connect(db,{useNewUrlParser:true});

mongoose.connection.on('connected',()=>{
    console.log("Success DB");
});

mongoose.connection.on('error',(err)=>{
    if(err)
        console.log("Error DB");
});

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'dist/Intern')));

app.use('/now',route);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/client/index.html'));
})
app.use(bodyParser.urlencoded({extended:true}));



app.listen(port,()=>{
    console.log("Listening to port "+port);
})