import { connectToBD } from "@/utils/db";
import Tasks from "@/utils/models/tasks";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest) => {
  try {
    const task = await req.json();
    await connectToBD();
    await Tasks.deleteOne({ _id: task._id });
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
