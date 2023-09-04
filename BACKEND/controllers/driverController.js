const asyncHandler = require('express-async-handler');
const Driver = require('../models/driverModel');

// @desc Add a driver
// @route POST /api/drivers
// @access Public
const addDriver = asyncHandler(async (req, res) => {
  const { d_name, d_email, d_telephone, d_licNo, d_experience, v_type, v_image, d_description, d_image } = req.body;

  const newDriver = new Driver({
    d_name,
    d_email,
    d_telephone,
    d_licNo,
    d_experience,
    v_type,
    v_image,
    d_description,
    d_image,
  });

  await newDriver.save();
  res.json("Driver Added");
});

// @desc Get all drivers
// @route GET /api/drivers
// @access Public
const getDrivers = asyncHandler(async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
});

// @desc Update a driver
// @route PUT /api/drivers/:d_id
// @access Public
const updateDriver = asyncHandler(async (req, res) => {
  const { d_name, d_email, d_telephone, d_licNo, d_experience, v_type, v_image, d_description, d_images } = req.body;
  
  const updatedDriver = await Driver.findByIdAndUpdate(
    req.params.d_id,
    {
      d_name,
      d_email,
      d_telephone,
      d_licNo,
      d_experience,
      v_type,
      v_image,
      d_description,
      d_images
    },
    { new: true } // Return the updated document
  );

  if (!updatedDriver) {
    res.status(404);
    throw new Error('Driver not found');
  }

  res.status(200).json({ status: "Driver updated", driver: updatedDriver });
});

// @desc Delete a driver
// @route DELETE /api/drivers/:d_id
// @access Public
const deleteDriver = asyncHandler(async (req, res) => {
  const deletedDriver = await Driver.findByIdAndDelete(req.params.d_id);

  if (!deletedDriver) {
    res.status(404);
    throw new Error('Driver not found');
  }

  res.status(200).json({ status: "Driver deleted" });
});

// @desc Get a driver
// @route GET /api/drivers/:d_id
// @access Public
const getDriver = asyncHandler(async (req, res) => {
  const driver = await Driver.findById(req.params.d_id);

  if (!driver) {
    res.status(404);
    throw new Error('Driver not found');
  }

  res.status(200).json({ status: "Driver fetched", driver });
});

module.exports = {
  addDriver,
  getDrivers,
  updateDriver,
  deleteDriver,
  getDriver
};