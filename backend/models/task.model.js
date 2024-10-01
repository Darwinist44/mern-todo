import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  priority: { type: String, enum: ["high", "medium", "low"], required: true },
  title: { type: String, maxlength: 32, required: true },
  completed: { type: Boolean, default: false },
  description: { type: String },
  due: { type: Date, required: true },
});

export default model("Task", taskSchema);
