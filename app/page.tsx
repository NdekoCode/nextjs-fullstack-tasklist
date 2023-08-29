
'use client';

import AddTask from "@/components/AddTask";
import Header from "@/components/Header";
import NoTask from "@/components/NoTask";
import { Task } from "@/components/Task";
import { ITask } from "@/utils/types";
import { Container, List, Spinner } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  const [newTask,setNewTask] = useState<string>('');
  const [tasks,setTasks] = useState<ITask[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const fetchTask = async()=>{
    const response = await fetch('/api/tasks/all');
    const data = await response.json();
    console.log(data);
    setTasks(data);
    setIsLoading(false);
  }
  useEffect(()=>{
    (async()=>{
      await fetchTask()
    })()
  },[isLoading])
  const handleCreateTask:(e:FormEvent)=>Promise<void> =async(e)=>{
    setIsLoading(true);
    e.preventDefault();
    try{
      const res:Response = await fetch('/api/tasks/add',{
        method:'POST',
        body:JSON.stringify({
          title:newTask,
          completed:false
        })
      })
      if(res.ok){
        setNewTask('');
        await fetchTask()
      }else {
        console.log("Error ",res);
      }

      setIsLoading(false);
    }catch(error){
      setIsLoading(false);
      if(error instanceof Error){
        console.error(error.message);
      }else{
        console.error(error);
      }
    }
  }
  const handleDeleteTask = async(task:ITask)=>{

  }
  const handleCompleteTask = async(task:ITask)=>{
    setIsLoading(true);
    try {
      const res = await fetch('/api/tasks/completed',{
        method:'PUT',
        body:JSON.stringify(task)
      })
      if(res.ok){
        await fetchTask()
      }else {
        console.log("Error ",res);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        console.log(error.stack, error.message);
      } else {
        console.log(error);
      }
    }
  }
  return (

    <main>
      <Header/>
      <Container mt="2rem">
      {newTask}
      <AddTask newTask={newTask} setNewTask={setNewTask} handleCreateTask={handleCreateTask}/>
      {
        isLoading && <Spinner/>
      }
     {tasks && tasks.length>0 ?
        <List>
          {tasks.map((task:ITask)=>(<Task key={task._id} task={task} handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask}/>))}
        </List>:!isLoading&&<NoTask/>}
      </Container>
    </main>
  )
}
