const User = require('../models/user');

// User registration logic
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Register user logic
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// User login logic
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Perform login logic here
};
