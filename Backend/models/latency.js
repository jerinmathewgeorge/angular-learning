const mongoose = require('mongoose');

const Latency = mongoose.model('Latency',{
    Device: {type:String},
    PingAvg:{type:String},
    PingMin:{type:String},
    PingMax:{type:String},
})

module.exports = Latency;