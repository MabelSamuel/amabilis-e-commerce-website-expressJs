import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    }
}, {timestamps: true});

const Cart = mongoose.model("Cart", CartSchema);
export default Cart