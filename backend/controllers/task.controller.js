import Task from "../models/task.model.js";
import { StatusCodes } from "http-status-codes";

export const getTasks = async (req, res, next) => {
  setTimeout(async () => {
    const tasks = await Task.find();
    res.send(tasks);
  }, 800);
};

export const addTask = async (req, res, next) => {
  const { priority, title, description, dueDate } = req.body;

  const newTask = await Task.create({
    priority,
    title,
    description,
    due: dueDate,
  });

  res.send(newTask);
};
