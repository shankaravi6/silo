import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 5,
        max: 10
    },
    email: {
        type: String,
        required: true,
        max:50,
        unique: true
    },
    email_verified: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        min: 5
    }
})


const User = mongoose.model('User', userSchema);
export default User