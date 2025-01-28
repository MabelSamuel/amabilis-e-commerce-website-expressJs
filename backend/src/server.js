import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import UserRoutes from "../src/routes/user.js";
import CartRoute from "../src/routes/cart.js";
import ContactRoute from "../src/routes/contact.js";
import SubscriptionRoute from "../src/routes/subscription-email.js";

dotenv.config();

const app = express();
const allowedOrigins = [process.env.PORT_FRONTEND, process.env.DEV_URL];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

connectDB();

app.use("/api/users", UserRoutes);
app.use("/api/cart", CartRoute);
app.use("/api", ContactRoute);
app.use("/api", SubscriptionRoute);

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
