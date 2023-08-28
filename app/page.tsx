
'use client';

import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [tasks,setTasks] = useState()
  return (

    <main>
      <Header/>
      <h1>Home page</h1>
    </main>
  )
}
