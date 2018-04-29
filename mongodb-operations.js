const assert = require('assert');
const sampleRealestates = require('./sample-realestates.js');

exports.insertDocuments = (collection, callback) => {
  collection.insertMany(sampleRealestates, (err, result) => {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log(`Inserted 3 documents into the collection`);
    callback(result);
  });
};

exports.findDocuments = (collection, callback) => {
  collection.find({}).toArray((err, docs) => {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs)
    callback(docs);
  });
}