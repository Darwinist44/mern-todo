import "dotenv/config";
import express, { Request } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";

import routes from "./routes/index.route";
import { StatusCodes } from "http-status-codes";
import rateLimit from "express-rate-limit";

const PORT = process.env.PORT || 3000;
const app = express();

var corsOptions = {
	origin: "*",
};

const limiter = rateLimit({
	windowMs: 1000,
	limit: 1,
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(limiter);
//app.use(compression());

app.use("/api", routes);

mongoose
	.connect(process.env.MONGO_URL || "")
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Running on: http://localhost:${PORT}`);
		});
	})
	.catch((err) => console.log(err));

app.get("*", (req: Request, res, next) => {
	res.sendStatus(StatusCodes.NOT_FOUND);
});
