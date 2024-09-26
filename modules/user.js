const { rejects } = require('assert');
const User = require('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.registerUser =  (body) => {
    return new Promise((resolve, reject) => {

        const { name, email, password } = body;

        User.findOne({email}).then((user) => {
            if (user) {
                reject({ message: 'User already exists' });
            }

            const hashedPassword = bcrypt.hash(password, 10); 
            const newUser = new User({
                name,
                email,
                password: hashedPassword, 
            });

           
            newUser.save()
               .then((result) => {
                    console.log(result);
                    resolve(result);
                })
               .catch((error) => {
                    console.error(error);
                    reject({ message: error.message });
                });
        })
        
    })
}





// User login logic
exports.loginUser = async (body) => {
    return new Promise((resolve, reject) => {
        const { email, password } = body;

        User.findOne({ email }).then(async (user) => {
            if (!user) {
                reject({ message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                reject({ message: 'Incorrect password' });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' }, (err, token) => {

                return resolve({
                    // user:user,
                    token: token
                })
            });

        });
    })
}
    

    
   

