const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
const app = express();
const debugDB = require('debug')('app:db');
const sensors = require('./routes/sensors');

//dummy data
//  const sensors = [
//    { id: 1, name: "sensirion sht31" },
//    { id: 2, name: "sensirion sps30" },
//    { id: 3, name: "bosch"}
//  ];
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/sensors', sensors);
app.use('/sht31', (req, res) => {
  res.status(200).send('sht31 sensors')
});


//  WORKING WITH MongoDB without Routing
//db connection 
mongoose.connect('mongodb+srv://aussenklima:aussenklima@cluster000.h9sea.mongodb.net/aussenklima?retryWrites=true&w=majority', () =>
  debugDB('Connected to DB aussenklima'));
  
// CREATING DOCUMENTS AND SAVING TEST
// Model for sht31
const sht31Schema = new mongoose.Schema({
  sensor: String,
  value: Number,
  unit: String,
  timeStamp: Number
});
  
const Sht31 = mongoose.model('Sht31', sht31Schema);
// async function
async function createSht() {
 
// create example sht31 object
const sht31 = new Sht31({
  name: 'temperature',
  value: 41,
  unit: '°c',
  timestamp: 1476375087912
});
const result = await sht31.save();
  console.log(result);
}

//createSht();


async function createSensor() {
  const sensor = new Sensor({
  name: 'sensirion SHT31'
});

const result = await sensor.save();
  console.log(result);
}
// createSensor();


// // QUERYING DOCUMENTS
// async function getSensors() {
//   // find method reeturn promise
//   const sensors = await Sensor.find({ name: 'sensirion SHT31' });
//   console.log(sensors);
// }
// // getSensors();



// // UPDATE
// async function updateSensor(id) {
//   //approach: find and update
//   // const sensor = await Sensor.findById(id);
//   // if (!sensor)
//   //   return;
  
//   // sensor.set({
//   //   name: 'Bosch'
//   // });

//   // const result = await sensor.save();
//   // console.log(result);

//   // approach: update first
//   const sensor = await Sensor.findByIdAndUpdate(id, {
//     $set: {
//       name: 'LDR'
//     }
//   }, { new: true });
//   console.log(sensor);
// }

// //updateSensor('61a769f10e7029793ec102ae');


// // REMOVE DOCUMENTS
// async function removeSensor(id) {
//   const sensor = await Sensor.findByIdAndRemove(id);
//   console.log(sensor);
// }
// //removeSensor('61a769f10e7029793ec102ae');

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Running on Port ' + port);
});