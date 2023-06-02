const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/nodeFlutter').on('open',()=>{
    console.log("MongoDb Connected");
}).on('error',()=>{
    console.log("MongoDb Connection error");
});

module.exports = connection;
