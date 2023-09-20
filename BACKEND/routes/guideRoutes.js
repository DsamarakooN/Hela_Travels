const express = require('express');
const router = express.Router();
const {
    createGuide,
    getGuides,
    getGuideById,
    updateGuide,
    deleteGuide
} = require('../controllers/guideController');

const { protect } = require('../middleware/authMiddleware');

// Add a guide
router.route('/add').post(protect, createGuide);

// Get all guides
router.route('/all').get(getGuides);

// Get a guide
router.route('/:id').get(getGuideById);

// Update a guide
router.route('/update/:id').put(protect , updateGuide);

// Delete a guide
router.route('/delete/:id').delete(protect , deleteGuide);


module.exports = router;