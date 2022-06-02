const mongoose = require('mongoose')

const UserProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },
}, { timestamps: true }, )

module.exports = mongoose.model('UserProfile', UserProfileSchema)