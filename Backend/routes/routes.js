const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;

// const All = require('../models/All');
const Devices = require('../models/devices.js');
const Events = require('../models/events.js');
const Latency = require('../models/latency.js');

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

//localhost:3000/latency
router.post('/latency',(req,res)=>{
    let latency = new Devices({
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

//localhost:3000/events
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
    Devices.find((err,doc)=>{
        if(err){
            console.log('err in get',err)
        }else{
            res.send(doc);
        }
    })
})

//get all Device data
router.get('/latencies', (req,res)=>{
    Latency.find((err,doc)=>{
        if(err){
            console.log('err in get',err)
        }else{
            res.send(doc);
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