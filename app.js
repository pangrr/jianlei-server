const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const mongoOp = require('./mongodb-operations.js');


const url = 'mongodb+srv://ran:5001@ran-sh2it.mongodb.net/test';

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  console.log('mongodb is connected')
  const collection = client.db("test").collection('realestates');
  // perform actions on the collection object
  
  mongoOp.findDocuments(collection, () => {
    client.close();
  });

});

