const express = require('express');
const passport = require('passport');
const router = express.Router();
const UserModule = require('../../modules/user'); // Import user module

// Route for fetching client details (protected by JWT)
router.post("/clients/data",passport.authenticate('jwt', { session: false }), (req, res) => {
    UserModule.fetchClientDetails(req.body)
      .then((result) => {
        console.log("result", result);
        return res.status(200).json({
          message: "Details fetched successfully",
          data: result
        });
      })
      .catch((error) => {
        return res.status(400).json({ error });
      });
  }
);

module.exports = router;
