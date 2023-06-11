import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/posts.js";
import cloudinary from "cloudinary";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  next();
});

app.use("/posts", route);

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
