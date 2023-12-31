import { Dispatch, FormEvent, PropsWithChildren, SetStateAction } from "react";

export type AddTaskProps = PropsWithChildren<{
  newTask: string;
  setNewTask: Dispatch<SetStateAction<string>>;
  handleCreateTask: (e: FormEvent) => Promise<void>;
}>;

export interface ITask {
  _id: string;
  title: string;
  completed: boolean;
}

export interface ITaskProp {
  task: ITask;
  handleDeleteTask: (task: ITask) => Promise<void>;
  handleCompleteTask: (task: ITask) => Promise<void>;
}
export interface ITaskRequestParam {
  params: {
    id: string | number;
  };
}
