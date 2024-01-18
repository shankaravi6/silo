// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
//     email: String
// })

// const userModel = mongoose.model('Entry', userSchema)

// module.exports = userModel;

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: String
});

const userModel = mongoose.model('Entry', userSchema);

export default userModel;
