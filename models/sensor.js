const mongoose = require('mongoose');
const Joi = require('joi');

//Model for sensor
const Sensor = mongoose.model('Sensor', new mongoose.Schema({
  sensorId: String,
  name: String
}));

// function for validate input. ie name of sensor
function validateSensor(sensor) {
  const schema = Joi.object({
    sensorId: Joi.string(),
    name: Joi.string().required()
  })
  return schema.validate(sensor);
}

module.exports.Sensor = Sensor;
module.exports.validate = validateSensor;