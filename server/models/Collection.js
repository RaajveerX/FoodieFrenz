//import mongoose from 'mongoose';
const mongoose = require('mongoose')


//General scheme for our collection objects

const CollectionSchema = new mongoose.Schema({
    user: {
        type: String
    },
    restaurantName: {
        type: String
    }
})

module.exports = mongoose.model('Collection', CollectionSchema)