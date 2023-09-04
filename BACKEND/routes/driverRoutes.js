const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');
const asyncHandler = require('express-async-handler');

// Add a driver
router.post('/add', asyncHandler(driverController.addDriver));

// Get all drivers
router.get('/', asyncHandler(driverController.getDrivers));

// Update a driver
router.put('/update/:d_id', asyncHandler(driverController.updateDriver));

// Delete a driver
router.delete('/delete/:d_id', asyncHandler(driverController.deleteDriver));

// Get a driver
router.get('/get/:d_id', asyncHandler(driverController.getDriver));

module.exports = router;
