const express = require('express');
const router = express.Router();
const {Sensor, validate}= require('../models/sensor');

// GET METHOD
router.get('/', async(req, res) => {
  const sensor = await Sensor.find();
  res.send(sensor);
});

router.get('/:id', async(req, res) => {
  const sensor = await Sensor.findById(req.params.id);
  if (!sensor)
    res.status(404).send('not found');
  res.send(sensor);
});


// POST method
router.post('/', async(req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.status(404).send(error.details[0].message);
  
  let sensor = new Sensor({
    sensorId: req.body.sensorId,
    name: req.body.name
  });
  sensor = await sensor.save();
  res.send(sensor);
});

router.put('/:id', async (req, res) => {
  // if we want to put something we should have the validation here

  const sensor = await Sensor.findByIdAndUpdate(req.params.id, {
    name: req.body.name
  }, { new: true })

  if (!sensor)
    return res.status(404).send('Sensor not found');
  res.send(sensor);
});

router.delete('/:id', async (req, res) => {
  const sensor = await Sensor.findByIdAndRemove(req.params.id);

  if (!sensor)
    return res.status(404).send('Sensor not found');
  
  res.send(sensor);
})

module.exports = router;