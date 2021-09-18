const express=require('express');
const route=express.Router();
const mongoose=require('mongoose');
const Client=require('./modelClient');
//recuperer la page d'accueille
route.get('/clients',(req, res)=>{
Client.find({}).then(function(client){
    res.send(client);
})

})
/*route.post('/clients', function(req, res){
    
const myData = new Client();
 
myData.save(req.body).then(item => {
    
 res.send("item saved to database");
 

 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
    
    })*/

    route.post('/clients',function(req, res){
        const myData=new Client({
           email:req.body.email,
           sujet:req.body.sujet,
           message:req.body.message 
        });
        
        myData.save(function(err, client){
            if(err){
                return res.status(500).json({
                    message:'err when the client send his data',
                    error:err
                    
                })
            }
            return res.status(201).json(client);
        })
    })
   
module.exports=route;
