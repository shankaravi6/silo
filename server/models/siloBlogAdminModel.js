import mongoose from "mongoose";


const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    password: {
        type: String,
        min: 5
    }
})


const BlogAdmin = mongoose.model('blog_admin', adminSchema);
export default BlogAdmin