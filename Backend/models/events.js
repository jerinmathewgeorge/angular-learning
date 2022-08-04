const mongoose = require('mongoose');

const Events = mongoose.model('Events',{
    Time:{type:String},
    Device: {type:String},
    Entity:{type:String},
    Event: {type:String},
    State:{type:String},
    TimePrevState: {type:String}
})

module.exports = Events;