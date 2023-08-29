import { connectToBD } from "@/utils/db";
import Tasks from "@/utils/models/tasks";
import { ITaskRequestParam } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";
export const DELETE = async (
  req: NextRequest,
  { params }: ITaskRequestParam
) => {
  try {
    await connectToBD();
    await Tasks.findByIdAndRemove(params.id);
    return NextResponse.json("Task deleted successfully", { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack, error.message);
    } else {
      console.log(error);
    }
    return NextResponse.json("Failed to delete Task", { status: 500 });
  }
};
