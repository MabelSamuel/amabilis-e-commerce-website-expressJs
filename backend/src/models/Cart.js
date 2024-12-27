import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
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
            price: {
                type: Number,
                required: true,
            },
            totalPrice: {
                type: Number,
                required: true,
            }
        }
    ],
    totalPrice: {
        type: Number,
        default: 0,
    }
}, {timestamps: true});

const Cart = mongoose.Model("Cart", cartSchema);
export default Cart