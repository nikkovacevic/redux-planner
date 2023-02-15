import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import HeroSvg from '../../assets/hero.svg';
import HomePageButton from './HomePageButton.jsx';

function MediumView() {
    return (
        <Flex justify='space-evenly' align='center'>
            <Flex direction='column' w='40%' mr='10%'>
            {/*    text */}
                <Text fontSize={28}>Experimenting with Redux</Text>
                <Text
                    fontSize={64}
                    fontWeight={'bold'}
                    letterSpacing={4}
                    mb={8}
                >
                    Redux Planner
                </Text>
                <Text fontSize={18} >
                    This is a simple planner app built using React and Redux.
                    It allows users to view, save and delete tasks and events.
                    The state of tasks and events is being managed by Redux and Redux Toolkit libraries.
                    The purpose of this project is to learn and experiment with React Redux,
                    Redux Toolkit and ChakraUI library for styled components.
                </Text>
                <Flex>
                    <HomePageButton text={'Go to tasks'} to={'/tasks'}/>
                    <HomePageButton text={'Go to events'} to={'/events'}/>
                </Flex>


            </Flex>
            <Flex>
            {/*    slika */}
                <Image src={HeroSvg} h='60vh'/>
            </Flex>
        </Flex>
    );
}



export default MediumView;