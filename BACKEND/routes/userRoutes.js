const express = require('express');
const router = express.Router();
const {registerUser, getUserProfile , loginUser, updateUserProfile} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware');


// Route to register a new user
router.post('/' , registerUser);

// Route to login a user
router.post('/login' , loginUser);

// Route to get user profile
router.get('/profile' , protect, getUserProfile);

// Route to update user profile
router.put('/profile', protect, updateUserProfile);

module.exports = router;