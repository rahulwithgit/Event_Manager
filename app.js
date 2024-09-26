const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/config'); // Configuration

const app = express();

// MongoDB Connection
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Initialize Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport); // JWT passport configuration

// Middleware for parsing JSON
app.use(express.json());

// Centralized route handling
app.use('/', require('./routes')); // Route to routes/index.js

// Server startup
const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
