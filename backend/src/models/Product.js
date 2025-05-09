import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        title: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true, 
        },
        description: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
          unique: true,  
        },
        image: {
          type: String,
          required: true,
        },
        stock: {
          type: Number,
          required: true,
          default: 1,
        },
        rating: {
          rate: {
            type: Number,
            default: 0,
          },
          count: {
            type: Number,
            default: 0,
          }
        },
        reviews: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Review",
        }
    }, {timestamps: true}
)

const Product = mongoose.model("Product", ProductSchema);
export default Product;