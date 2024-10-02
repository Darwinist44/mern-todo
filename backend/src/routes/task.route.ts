import express from "express";

import { getTasks, addTask } from "../controllers/task.controller";

const router = express.Router();

router.get("/", getTasks);

router.post("/", addTask);

export default router;
