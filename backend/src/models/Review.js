import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
      },
      rating: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 5 
      },
      comment: {
        type: String,
      }
    }
)

const Review = mongoose.model("Review", ReviewSchema);
export default Review;