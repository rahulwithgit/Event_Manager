const Event = require('../models/event');

// Create a new event
exports.createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const newEvent = new Event({ title, description, date });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
