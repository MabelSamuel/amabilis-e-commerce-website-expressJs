import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import UserRoutes from "../src/routes/user.js";
import CartRoute from "../src/routes/cart.js"

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/users', UserRoutes);
app.use('/api/cart', CartRoute);

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
