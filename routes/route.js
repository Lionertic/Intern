const express = require('express');
const User = require('../models/Users');
const Transaction = require('../models/Transaction');

const route = express.Router();

route.post('/transfer/:id',(req,res,next)=>{
    let newTransaction=new Transaction({
        From:req.params.id,
        To:req.body.To,
        Credit:req.body.Credit,
        Date:new Date()
    });

    User.findOne({_id:req.params.id},(err,u)=>{
        var user=new User(u);        
        if(user.Balance >= req.body.Credit){
            User.updateOne({_id:req.params.id},{Balance:user.Balance-req.body.Credit,NOTR:user.NOTR+1},(err,result)=>{
                if(err)
                    console.log("Error updating");
                else
                    console.log("Success updating"); 
            });
            newTransaction.save((err)=>{
                if(err)
                    console.log("Error saving");
                else
                    console.log("Successfully saved");
            });
        }
        else
            console.log("Insufficieant Balance");        
    })
});

route.get('/transactions/:id',(req,res,next)=>{
    Transaction.find({From:req.params.id},(err,transact)=>{
        res.json(transact);
    })
});

route.post('/transaction',(req,res,next)=>{
    let newTransaction=new Transaction({
        From:req.body.From,
        To:req.body.To,
        Credit:req.body.Credit,
        Date:new Date()
    });
    newTransaction.save((err)=>{
        if(err)
            console.log("Error saving");
        else
            console.log("Successfully saved");
    });
});

route.delete('/transaction/:id',(req,res,next)=>{
    Transaction.deleteOne({_id:req.params.id},(err,result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});

route.get('/users',(req,res,next)=>{
    User.find((err,user)=>{
        res.json(user);
    })
});

route.post('/user',(req,res,next)=>{
    let newUser=new User({
        Name:req.body.Name,
        Balance:req.body.Balance,
        NOTR:req.body.NOTR
    });
    newUser.save((err)=>{
        if(err)
            console.log("Error saving");
        else
            console.log("Successfully saved");
    });
});

route.delete('/user/:id',(req,res,next)=>{
    User.deleteOne({_id:req.params.id},(err,result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});

module.exports=route;