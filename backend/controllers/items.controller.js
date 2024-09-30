import { StatusCodes } from "http-status-codes";
import { DELAY } from "../utils/const.js";
import storage from "../utils/storage.js";

export const getTasks = (req, res, next) => {
  setTimeout(() => {
    res.send(storage);
  }, DELAY);
};

export const addTask = (req, res, next) => {
  const { name } = req.body;

  setTimeout(() => {
    const newTask = {
      id: storage.length + 1,
      name,
      completed: false,
    };
    storage.push(newTask);
    res.send(newTask);
  }, DELAY);
};
