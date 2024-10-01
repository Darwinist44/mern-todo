import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes/index.route.js";
import { StatusCodes } from "http-status-codes";

const PORT = process.env.PORT || 3000;
const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", routes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Running on: http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.get("*", (req, res, next) => {
  res.sendStatus(StatusCodes.NOT_FOUND);
});
