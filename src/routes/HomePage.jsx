import React from 'react';
import { Box, Flex, Image, Text, Icon, Show, Tooltip, Button } from '@chakra-ui/react';


function HomePage() {
    return (
        <Box bg={'#171717'} p={8} h='90vh' color='white' fontSize={24}>
            {/* Toolbar */}
            <Flex align={'center'} justifyContent={'space-between'}>
                <Flex>
                    <Text>My tasks</Text>
                    <Text>number of tasks</Text>
                </Flex>

                <Button colorScheme='messenger'>Add new</Button>
            </Flex>
        </Box>
    );
}

export default HomePage;