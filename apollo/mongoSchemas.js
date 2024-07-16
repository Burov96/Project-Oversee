// models/Project.js
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  taskId: { type: String, required: true },
  title: { type: String, required: true },
  assignedTo: { type: String, required: true },
  status: { type: String, required: true },
  dueDate: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  tasks: [taskSchema],
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
