const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Port
const PORT = process.env.PORT || 3000;

// Create an app
const app = express();

// enable cors
app.use(cors());

// Routes
app.use('/api/search/', require('./routes/search'));

// Listen to a port
app.listen(PORT, () => console.log(`listen to port number ${PORT}`));

