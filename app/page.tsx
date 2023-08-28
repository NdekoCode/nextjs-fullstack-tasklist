
'use client';

import AddTask from "@/components/AddTask";
import Header from "@/components/Header";
import { Container } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

export default function Home() {
  const [task,setTask] = useState<string>(''); 
  const handleCreateTask:(e:FormEvent)=>Promise<void> =async(e)=>{
    console.log(task);
    e.preventDefault();
  }
  return (

    <main>
      <Header/>
      <Container mt="2rem">
      {task}
      <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask}/>
      </Container>
    </main>
  )
}
