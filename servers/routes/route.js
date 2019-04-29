const express = require('express');
const path = require('path');
const User = require('../models/Users');
const Transaction = require('../models/Transaction');

const route = express.Router();


route.post('/transfer/:id',(req,res,next)=>{
    console.log("now");
    let newTransaction=new Transaction({
        From:req.params.id,
        To:req.body.To,
        Credit:req.body.Credit,
        Date:new Date()
    });

    User.findOne({_id:req.params.id},(err,u)=>{
        var user=new User(u);        
        if(user.Balance >= req.body.Credit){
            var newBalanc=parseInt(user.Balance)-parseInt(req.body.Credit);
            var newNOTR = parseInt(user.NOTR) +1;
            User.updateOne({_id:req.params.id},{Balance:newBalanc,NOTR:newNOTR},(err,result)=>{
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
            User.findOne({_id:req.body.To},(er,u1)=>{
                var user1= new User(u1);
                var newBalanc=parseInt(user1.Balance)+parseInt(req.body.Credit);
                var newNOTR = parseInt(user1.NOTR) +1;
                User.updateOne({_id:req.body.To},{Balance:newBalanc,NOTR:newNOTR},(err,result)=>{
                    if(err)
                        console.log("Error updating");
                    else
                        console.log("Success updating"); 
                }); 
            })
        }
        else
            console.log("Insufficieant Balance");        
    })
});

route.get('/transactionsTo/:id',(req,res,next)=>{
    Transaction.find({From:req.params.id},(err,transact)=>{
        User.find((err,users)=>{
            users.forEach(user => {
                for(var i=0;i<transact.length;i++){
                    if(transact[i].To.localeCompare(user._id)==0){
                        transact[i].To=user.Name;
                    }
                }
            });
                res.json(transact);
        });
    })
});
route.get('/transactionsFrom/:id',(req,res,next)=>{
    Transaction.find({To:req.params.id},(err,transact)=>{
        User.find((err,users)=>{
            users.forEach(user => {
                for(var i=0;i<transact.length;i++){
                    if(transact[i].From.localeCompare(user._id)==0){
                        transact[i].From=user.Name;
                    }
                }
            });
                res.json(transact);
        });
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