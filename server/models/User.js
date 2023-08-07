//import mongoose from 'mongoose';
const mongoose = require('mongoose')


//General scheme for our reviews object

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('User', UserSchema)