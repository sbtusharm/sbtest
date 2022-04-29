// module imports
const express = require('express');
const routes = require('./routes');
require('dotenv').config();


// .env variables
const API_PORT = (Number)(process.env.API_PORT);


//initialising app
const app = express();


// routes for API
app.use('/', routes);


// server listening on port mentioned in environment variables
app.listen(API_PORT, () => {
    console.log('Server Running on port :', API_PORT);
});
