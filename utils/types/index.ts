import { Dispatch, FormEvent, PropsWithChildren, SetStateAction } from "react";

export type AddTaskProps = PropsWithChildren<{
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  handleCreateTask: (e: FormEvent) => Promise<void>;
}>;

export interface ITask {
  _id: string;
  title: string;
  completed: boolean;
}
