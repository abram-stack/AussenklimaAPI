const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 8080;


//router
app.get('/', (req, res) => res.send('Hello from backend'));


//db connection 
mongoose.connect('mongodb+srv://aussenklima:aussenklima@cluster000.h9sea.mongodb.net/aussenklima?retryWrites=true&w=majority', () =>
  console.log('Connected to DB aussenklima'));

// // testing create new collection
// async function
async function createSht() {
  const sht31Schema = new mongoose.Schema({
    sensor: String,
    value: Number,
    timeStamp: Number
  });
  
 
  const Sht31 = mongoose.model('Sht31', sht31Schema);
 
  // create example new object
  const sht31 = new Sht31({
    sensor: 'temperature',
    value: 23,
    timestamp: 1476375087912
  });


  const result = await sht31.save();
  console.log(result);
}
createSht();

app.listen(port, function () {
  console.log('Running on Port ' + port);
})