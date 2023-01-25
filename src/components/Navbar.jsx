import React from 'react';
import { Box, Flex, Image, Text, Icon, Show, Tooltip } from '@chakra-ui/react';
import { SiChakraui, SiRedux, SiReact, SiR } from 'react-icons/si';

import redux from '../assets/redux.svg'

function Navbar() {
    return (
        <Box bg={'#171717'} px={8} h='10vh' color='white'  fontSize={32}>
            <Flex h='100%' align='center' justify={{ base: 'center', md: 'space-between' }}>
                <Flex align={'center'}>
                    <Image src={redux} boxSize='4vh' mr={4}/>
                    <Text letterSpacing={1}>
                        <Show above={'sm'}>Redux Task Manager</Show>
                        <Show below={'sm'}>Task Manager</Show>
                    </Text>
                </Flex>
                <Show above={'sm'}>
                    <Flex align={'center'} gap={8}>
                        <CustomIcon label={'React'} icon={SiReact}/>
                        <CustomIcon label={'Redux'} icon={SiRedux}/>
                        <CustomIcon label={'Chakra UI'} icon={SiChakraui}/>
                    </Flex>
                </Show>
            </Flex>
        </Box>
    );
}

const CustomIcon = ({label, icon}) => (
    <Tooltip label={label}>
        <span><Icon as={icon}/></span>
    </Tooltip>
)

export default Navbar;