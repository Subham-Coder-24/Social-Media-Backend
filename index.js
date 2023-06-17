import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import cloudinary from "cloudinary";

import route from "./routes/posts.js";
import userRouter from "./routes/user.js";

const app = express();

app.use((req, res, next) => {
  res.set("Cross-Origin-Opener-Policy", "same-origin");
  res.set("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  next();
});
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", route);
app.use("/user", userRouter);

const DB_URL =
  "mongodb+srv://subham:RpEipznVod5EPtX5@cluster0.a62ewcn.mongodb.net/TodoApp?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: "drkfcvoog",
  api_key: "815694767479514",
  api_secret: "9Tl23hnR0Mj1mIKm6bs5fyhvyXY",
});

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
