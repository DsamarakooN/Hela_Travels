const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guideSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    guideName: {
        type: String,
        required: true
    },
    guideEmail: {
        type: String,
        required: true
    },
    guidePhone: {
        type: String,
        required: true
    },
    guideDescription: {
        type: String,
        required: true
    },
    guideImage: {
        type: String,
        required: true
    },
    guideExperience: {
        type: String,
        required: true
    }

    }, {
        timestamps: true
})

module.exports = Guide = mongoose.model('guides', guideSchema)
    