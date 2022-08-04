 
const mongoose = require('mongoose');
//Set up default mongoose connection
mongoose.connect('mongodb://localhost:27017/meanDB', (err)=>{
    if(!err){
        console.log('DB connected')
    }else{
        console.log('DB connection failed'+ err) 
    }
})