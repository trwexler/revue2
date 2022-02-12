const mongoose = require('mongoose');
// const multer = require('multer')

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "Title is required"] },
    location: {
        type: String, 
        required: [true, "Location is required"] },
    review: {
        type: String, 
        required: [true, "Review is required"] },
    image: {
        type: String, 
        required: [true, "One photo is required"] },
    imagePath: {
        type: String,
        required: true,
    },
    imageType: {
        type: String,
        required: true,
    },
    imageSize: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } 
}, { timestamps: true }); 


module.exports = mongoose.model('Review', ReviewSchema);