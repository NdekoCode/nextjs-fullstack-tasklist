import { ITask } from "@/utils/types";
import { Schema, model, models } from "mongoose";
// Schema: est utiliser pour definir le Schema des données
// model: est utiliser pour créer un model basé sur les Schema
// models: est utiliser pour acceder au model existant dans l'application
const TaskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// Si le model existe il le recupere si non il créer un nouveau model dont le nom est 'Task' et son schema sera `TaskSchema`
const Task = models.task || model<ITask>("Task", TaskSchema);

export default Task;
