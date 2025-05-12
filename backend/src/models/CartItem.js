import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    },
}, { timestamps: true })

const Cart = mongoose.model("CartItem", CartItemSchema);
export default Cart