const mongoose = require('mongoose');

const Devices = mongoose.model('Devices',{
    Device: {type:String},
    PingState:{type:String},
    IP:{type:String},
    Time:{type:String},
    Location:{type:String},
    Contact:{type:String},
})

module.exports = Devices;