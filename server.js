const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./servers/routes/route');
const path = require('path');

const db = 'mongodb+srv://uday:illdie2morow@intern-lwbus.mongodb.net/Transfer';
const app = express();
const port = process.env.PORT || 5000

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
    res.sendFile(path.join(__dirname,'dist/Intern/index.html'));
})
app.use(bodyParser.urlencoded({extended:true}));



app.listen(port,()=>{
    console.log("Listening to port "+port);
})