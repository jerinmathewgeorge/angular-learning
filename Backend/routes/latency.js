const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;

const Latency = require('../models/latency.js');

router.post('/latency',(req,res)=>{
    let latency = new Latency({
        Device: req.body.Device,
        PingAvg:req.body.PingAvg,
        PingMin:req.body.PingMin,
        PingMax:req.body.PingMax,

    })
    latency.save((err, doc)=>{
        if(err){
            console.log('err in post',err)
        }else{
            res.send(doc);
            console.log('successfully added post')
        }
    })
}) 



//get all Device data
router.get('/', (req,res)=>{
    Latency.find((err,doc)=>{
        if(err){
            console.log('err in get',err)
        }else{
            res.send(doc);
        }
    })
})


module.exports = router;