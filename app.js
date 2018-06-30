const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = { origin: '*', optionsSuccessStatus: 200 };
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const realestate = require('./routes/realestate');

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/realestate', realestate);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://ran:5001@ran-sh2it.mongodb.net/test')
.then(()=> { 
  console.log('mongodb is connected');
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
})
.catch(()=> { console.log('error connecting mongodb'); });
