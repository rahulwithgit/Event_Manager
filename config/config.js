require('dotenv').config(); // Load variables from .env file

module.exports = {
  port: process.env.PORT || 5000,             // Application port
  mongoURI: process.env.MONGO_URI,            // MongoDB connection URI
  jwtSecret: process.env.JWT_SECRET,          // JWT secret key
  jwtExpiration: process.env.JWT_EXPIRES_IN   // JWT token expiration time
};
