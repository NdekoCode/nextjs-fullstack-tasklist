import { ITaskProp } from '@/utils/types'
import { CheckIcon } from '@chakra-ui/icons'
import { Button, Card, Flex, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

export const Task:FunctionComponent<ITaskProp> = ({task,handleCompleteTask,handleDeleteTask}) => {

  return (
    <Card p="2rem" mb="0.5rem" variant="outline">
        <Flex alignItems="center">
            {task.completed ?<Text flexGrow={1} as="del">{task.title}</Text>: 
            <Text flexGrow={1}>{task.title}</Text>}
            <Flex>
                <Button onClick={()=>handleCompleteTask(task)} ml="1rem" colorScheme='whatsapp' isDisabled={task.completed}><CheckIcon/></Button>
            </Flex>
        </Flex>

    </Card>
  )
}
