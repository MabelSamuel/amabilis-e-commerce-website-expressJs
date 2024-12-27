import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true, 
        unique: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rememberMe: {
        type: Boolean,
        required: false
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    }
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)
export default User