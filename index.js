const express = require('express');
const bodyParser = require('body-parser');

// Import route for cats
const catsRoute = require('./route/cat.route');

// initialize our express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/cats', catsRoute);

const port = process.env.PORT || 4000;

app.listen(port, ()=> {
  console.log('Server is up and running on port number ' + port);
});