const express = require('express');
const cors = require('cors');
const corsOptions = { origin: '*', optionsSuccessStatus: 200 };
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const realestate = require('./routes/realestate');

const app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/realestate', realestate);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/local')
.then(()=> { 
  console.log('mongodb is connected');
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
})
.catch(()=> { console.log('error connecting mongodb'); });
