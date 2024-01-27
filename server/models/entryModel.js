import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: String
});

const Entry = mongoose.model('Entry', userSchema);
export default Entry

