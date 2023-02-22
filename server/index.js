import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";

import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";

const app = express();
dotenv.config();

//Constants
const PORT = process.env.PORT;
const IP = process.env.IP;
const DB_NAME = process.env.DB_NAME;

//Midleware
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static("uploads"));
mongoose.set("strictQuery", false);

//Routes
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

async function start() {
  try {
    await mongoose
      .connect(`mongodb://${IP}/${DB_NAME}`)
      .then(() => console.log("DB OK!!!"));
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (err) {
    console.log();
  }
}
start();
