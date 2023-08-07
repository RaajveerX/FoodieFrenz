//import mongoose from 'mongoose';
const mongoose = require('mongoose')


//General scheme for our reviews object

const ReviewSchema = new mongoose.Schema({
    user: {
        type: String
    },
    restaurantName: {
        type: String
    },
    rating:{
        type: Number
    },
    cost:{
        type:Number
    },
    description:{
        type: String
    },
})

module.exports = mongoose.model('Review', ReviewSchema)