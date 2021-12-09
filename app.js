const express = require('express');
const app = express();
const sensors = require('./routes/sensors');


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/sensors', sensors);


const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Running on Port ' + port);
});
