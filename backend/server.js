import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const app = express();
app.use(express.json());

const dbURI = process.env.DB_URI
mongoose
  .connect(dbURI)
  .then((result) => console.log(`${result} yes babyy`))
  .catch((error) => console.log(error));

const PORT = 7000;

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.post("/", (req, res) => {
  const { body } = req;
  console.log(body);

  res.send("form submitted");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
