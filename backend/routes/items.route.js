import express from "express";

import { getTasks, addTask } from "../controllers/items.controller.js";

const router = express.Router();

router.get("/tasks", getTasks);

router.post("/tasks", addTask);

export default router;
