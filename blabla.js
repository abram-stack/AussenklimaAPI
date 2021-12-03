//dummydata
// const sht31 = [
//   { id: 1, sensor: "temperature", value: 24, timespan: "1234556" },
//   { id: 2, sensor: "temperature", value: 21, timespan: "123457" },
//   { id: 3, sensor: "humidity", value: 123, timespan: "123458" },
// ];

// //router
// app.get('/api', (req, res) => {
//   res.send('Hello this is test from API server');
// });

// // GET METHOD
// app.get('/api/sensors/sht31', (req, res) => {

//   res.send(sht31);
// });

// app.get('/api/sensors/sht31/:id', (req, res) => {
//   const sensor = sht31.find(s => s.id === parseInt(req.params.id));
//   if (!sensor)
//     return res.status(404).send('no type of sensor found');
  
//   res.send(sensor);
// });


// // POST method
// app.post('/api/sensors/sht31', (req, res) => {
//   // 1. validate with schema, 2.any error? 3.push into array/db
//   // validate schema we can use JOI package
//   const schema = Joi.object({
//     sensor: Joi.string().min(3).required(),
//     value: Joi.number().min(4).required()
//   })

//   const result = schema.validate(req.body);
//   if (result.error) {
//     return res.status(400).send(result.error.details[0].message);
//   }

//   const sensor = {
//     id: sht31.length + 1,
//     sensor: req.body.sensor,
//     value: req.body.value,
//     timespan: req.body.timespan
//   }

//   sht31.push(sensor);
//   res.send(sensor);
// })