import { Alert, AlertIcon, Flex } from "@chakra-ui/react"
import { FunctionComponent } from "react"

const NoTask:FunctionComponent = () => {
  return (
    <Flex>
        <Alert status="warning"><AlertIcon/> Pas de tache pour le moment</Alert>
    </Flex>
  )
}

export default NoTask