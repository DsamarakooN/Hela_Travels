const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc register new user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        password,
        role,
        businessType
    } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill all the fields')
    }

    // check if user already exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
        businessType
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            businessType: user.businessType,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const {
        email,
        password
    } = req.body

    // check user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            businessType: user.businessType,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc get user profile
// @route POST /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

// @desc Update user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.role = req.body.role || user.role
        user.businessType = req.body.businessType || user.businessType
        
        const updatedUser = await user.save()

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            businessType: updatedUser.businessType,
            token: generateToken(updatedUser._id)
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// generate jwt
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile
}