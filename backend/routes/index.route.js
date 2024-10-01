import express from "express";

import tasksRoute from "./task.route.js";

const router = express.Router();

router.use("/tasks", tasksRoute);

export default router;
