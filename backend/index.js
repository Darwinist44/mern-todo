import express from "express";

import itemsRoute from "./routes/items.route.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(itemsRoute);

app.listen(PORT, () => {
  console.log(`Running on: http://localhost:${PORT}`);
});

app.get("*", (req, res, next) => {
  res.sendStatus(StatusCodes.NOT_FOUND);
});
