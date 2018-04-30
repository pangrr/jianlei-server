const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bluebird = require('bluebird');
const mongoose = require('mongoose');

const api = require('./routes/api.route');
const mongodbUrl = 'mongodb+srv://ran:5001@ran-sh2it.mongodb.net/test';

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
app.use('/api', api);

mongoose.Promise = bluebird;
mongoose.connect(mongodbUrl)
.then(()=> { 
  console.log('mongodb is connected');
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
})
.catch(()=> { console.log('error connecting mongodb'); });
