import { NextFunction, Request, Response } from "express";
import Task from "../models/task.model";
import { StatusCodes } from "http-status-codes";

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  setTimeout(async () => {
    const tasks = await Task.find();
    res.send(tasks);
  }, 800);
};

export const addTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { priority, title, description, dueDate } = req.body;

  const newTask = await Task.create({
    priority,
    title,
    description,
    due: dueDate,
  });

  res.send(newTask);
};
