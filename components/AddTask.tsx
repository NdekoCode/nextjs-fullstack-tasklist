import type { AddTaskProps } from '@/utils/types';
import { SmallAddIcon } from '@chakra-ui/icons';
import { Button, Flex, Input } from "@chakra-ui/react";

import { ChangeEvent, FunctionComponent } from "react";
const AddTask:FunctionComponent<AddTaskProps> = ({newTask,setNewTask,handleCreateTask})=>{
    const handleTask = (evt:ChangeEvent<HTMLInputElement>)=>{
        const value = evt.target.value;
        setNewTask(value);
    }
    return <form onSubmit={handleCreateTask}>
        <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem">
        <Input placeholder='Ajouter une tache...' size='lg' value={newTask} onChange={handleTask}/>
        <Button colorScheme='messenger' onClick={handleCreateTask} type='submit' px={`2em`}><SmallAddIcon/></Button>
        
        </Flex>
    </form>
}
export default AddTask;