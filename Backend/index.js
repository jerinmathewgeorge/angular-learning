const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
//routes import
const device = require('./routes/device.js')
const event = require('./routes/event.js')
const latency = require('./routes/latency.js')

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4200'}));

//separate routes
app.use('/latency', latency);
app.use('/devices', device);
app.use('/events', event);

app.get('/', (req, res) => res.send('Welcome to Statseeker'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))