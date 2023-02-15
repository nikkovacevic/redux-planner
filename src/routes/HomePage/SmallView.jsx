import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import HeroSvg from '../../assets/hero.svg';
import HomePageButton from './HomePageButton.jsx';

function SmallView() {
    return (
        <Flex direction='column' px={4} align='center'>

            <Text
                fontSize={64}
                fontWeight={'bold'}
                letterSpacing={4}
                mb={4}
                noOfLines={1}
            >
                Planner
            </Text>
            <Text
                fontSize={24}
                textAlign='center'
            >
                Experimenting with Redux
            </Text>
            <Image src={HeroSvg} h='40vh' my={8}/>
            <Flex justify='center' gap={4}>
                <HomePageButton text={'Go to tasks'} to={'/tasks'}/>
                <HomePageButton text={'Go to events'} to={'/events'}/>
            </Flex>
        </Flex>
    );
}

export default SmallView;