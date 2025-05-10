import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    },
}, { _id: false })

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [CartItemSchema],
}, {timestamps: true});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart