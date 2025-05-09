import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Address = new Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    town: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    }

  }
)