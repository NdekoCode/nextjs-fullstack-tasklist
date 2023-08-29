import { ITaskProp } from '@/utils/types'
import { ListItem } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

export const Task:FunctionComponent<ITaskProp> = ({task,handleCompleteTask,handleDeleteTask}) => {

  return (
    <ListItem >{task.title}</ListItem>
  )
}
