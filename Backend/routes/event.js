const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;

const Events = require('../models/events.js');

router.post('/events',(req,res)=>{
    let event = new Events({
        Time:req.body.Time,
        Device: req.body.Device,
        Entity:req.body.Entity,
        Event: req.body.Event,
        State:req.body.State,
        TimePrevState: req.body.TimePrevState

    })
    event.save((err, doc)=>{
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
    Events.find((err,doc)=>{
        if(err){
            console.log('err in get',err)
        }else{
            res.send(doc);
        }
    })
})


module.exports = router;