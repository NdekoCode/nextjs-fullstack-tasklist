import { Flex, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from "react";
const Header:FunctionComponent = ()=>{
    return <header>
        <Flex p="2em" direction="column" alignItems="center">
            <Heading as="h1" size="4xl" noOfLines={1} className="tasklist__title">
                TaskList.io
            </Heading>
            <Text mt="1rem" className="tasklist__slogan">TaskList est un outils opensource qui vous simplifie votre cotidien en toute efficacité.</Text>
        </Flex>

    </header>
}
export default Header