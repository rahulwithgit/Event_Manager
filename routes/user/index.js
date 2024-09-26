const express = require('express');
const passport = require('passport');
const router = express.Router();
const UserModule = require('../../modules/user'); // Import user module

// Route for fetching client details (protected by JWT)
// Route for user registration
router.post("/register", async (req, res) => {
  try {
    const result = await UserModule.registerUser(req.body); // Call the registerUser function directly
    return res.status(201).json({
      message: "User registered successfully",
      user: result
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req,res) => {
    
        UserModule.loginUser(req.body).then((result) => {
            console.log("res", result);

            return res.status(200).json({
                message: "Successfully Authenticated",
                data: result
            });
        }).catch((e) => {
            console.log(e);
            return res.status(400).json({ e }); //Return Error
        }); // Call the registerUser function directly
        
      
})

module.exports = router;



