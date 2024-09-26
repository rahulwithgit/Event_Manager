const express = require('express');
const passport = require('passport');
const router = express.Router();
const EventModule = require('../../modules/event'); // Import event module

// Route for creating a new event (protected)
router.post(
  "/create",
  passport.authenticate('jwt', { session: false }), // JWT authentication middleware
  (req, res) => {
    EventModule.createEvent(req.body)
      .then((result) => {
        return res.status(201).json({
          message: "Event created successfully",
          data: result
        });
      })
      .catch((error) => {
        return res.status(400).json({ error });
      });
  }
);

// Route for fetching all events (protected)
router.get(
  "/",
  passport.authenticate('jwt', { session: false }), // JWT authentication middleware
  (req, res) => {
    EventModule.getAllEvents()
      .then((result) => {
        return res.status(200).json({
          message: "Events fetched successfully",
          data: result
        });
      })
      .catch((error) => {
        return res.status(400).json({ error });
      });
  }
);

module.exports = router;
