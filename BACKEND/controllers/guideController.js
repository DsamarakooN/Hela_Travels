const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Guide = require('../models/guideModel');

// @desc create new guide
// @route POST /api/guides
// @access public
const createGuide = asyncHandler(async (req, res) => {
    const {
        guideName,
        guideEmail,
        guidePhone,
        guideDescription,
        guideImage,
        guideExperience
    } = req.body;

    if (!guideName || !guideEmail || !guidePhone || !guideDescription || !guideImage || !guideExperience) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    
    try {
        const user = req.user;
        if(!user) {
            res.status(401);
            throw new Error('User not authenticated');
        }

        const guide = await Guide.create({
            user: req.user._id,
            guideName,
            guideEmail,
            guidePhone,
            guideDescription,
            guideImage,
            guideExperience
        });
    
        res.status(200).json(guide);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

// @desc get all guides
// @route GET /api/guides
// @access public
const getGuides = asyncHandler(async (req, res) => {
    const guides = await Guide.find({})
    res.status(200).json(guides);
})

// @desc get guide by id
// @route GET /api/guides/:id
// @access private
const getGuideById = asyncHandler(async(req, res) => {
    const guide = await Guide.findById(req.params.id)
    if (guide) {
        res.status(200).json(guide)
    } else {
        res.status(404)
        throw new Error('Guide not found')
    }
})

// @desc update guide
// @route PUT /api/guides/:id
// @access private
const updateGuide = asyncHandler(async(req,res) => {
    const guide = await Guide.findById(req.params.id)

    if(!guide) {
        res.status(404)
        throw new Error('Guide not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('user not found')
    }

    // make sure the logged in user is the owner of the guide
    if(guide.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGuide = await Guide.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGuide)
})

// @desc delete guide
// @route DELETE /api/guides/:id
// @access private
const deleteGuide = asyncHandler(async(req,res) => {
    const guide = await Guide.findById(req.params.id)

    if(!guide) {
        res.status(404)
        throw new Error('Guide not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('user not found')
    }

    // make sure the logged in user is the owner of the guide
    if(guide.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await guide.remove()

    res.status(200).json({ message: 'Guide removed'})
})

module.exports = {
    createGuide,
    getGuides,
    getGuideById,
    updateGuide,
    deleteGuide
}
