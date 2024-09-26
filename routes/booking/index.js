const express = require('express');
const passport = require('passport');
const router = express.Router();
const BookingModule = require('../../modules/booking'); // Import booking module

// Route for creating a new booking (protected)
router.post("/book",passport.authenticate('jwt', { session: false }),(req, res) => {
    BookingModule.createBooking(req.body)
      .then((result) => {
        return res.status(201).json({
          message: "Booking created successfully",
          data: result
        });
      })
      .catch((error) => {
        return res.status(400).json({ error });
      });
  }
);

// Route for fetching booking by ID (protected)
router.get("/:id",passport.authenticate('jwt', { session: false }),(req, res) => {
    const { id } = req.params;
    BookingModule.getBookingById(id)
      .then((result) => {
        if (!result) {
          return res.status(404).json({ message: "Booking not found" });
        }
        return res.status(200).json({
          message: "Booking details fetched successfully",
          data: result
        });
      })
      .catch((error) => {
        return res.status(400).json({ error });
      });
  }
);

module.exports = router;
