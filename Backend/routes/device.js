const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;

const Devices = require('../models/devices.js');

router.post('/devices',(req,res)=>{
    let dev = new Devices({
        Device: req.body.Device,
        PingState:req.body.PingState,
        IP:req.body.IP,
        Time:req.body.Time,
        Location:req.body.Location,
        Contact:req.body.Contact,
    })
    dev.save((err, doc)=>{
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
    Devices.find((err,doc)=>{
        if(err){
            console.log('err in get',err)
        }else{
            res.send(doc);
        }
    })
})


module.exports = router;