import { connectToBD } from "@/utils/db";
import Tasks from "@/utils/models/tasks";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const task = await req.json();
  try {
    await connectToBD();
    const newTask = new Tasks(task);
    await newTask.save();
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return NextResponse.json("Failed to create a new Task", { status: 500 });
  }
};
