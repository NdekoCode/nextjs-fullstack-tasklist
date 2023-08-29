import { connectToBD } from "@/utils/db";
import Tasks from "@/utils/models/tasks";
import { ITask, ITaskRequestParam } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  req: NextRequest,
  { params }: ITaskRequestParam
) => {
  const task = await req.json();
  const update = { completed: !task.completed };
  try {
    await connectToBD();
    const updateTask: ITask = (await Tasks.findByIdAndUpdate(
      params.id,
      update,
      {
        new: true,
      }
    )) as ITask;
    if (updateTask) {
      return NextResponse.json(updateTask, { status: 201 });
    } else {
      return NextResponse.json(updateTask, { status: 405 });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack, error.message);
    } else {
      console.log(error);
    }
    return NextResponse.json("Failed to update task", { status: 500 });
  }
};
