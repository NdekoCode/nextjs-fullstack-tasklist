import { connectToBD } from "@/utils/db";
import Tasks from "@/utils/models/tasks";
import { ITask } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectToBD();
    const tasks: Array<ITask> = await Tasks.find();
    return NextResponse.json(tasks, {
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
    }
    return NextResponse.json("Failed to get Tasks Data", {
      status: 500,
    });
  }
};
