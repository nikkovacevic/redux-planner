import React from 'react';
import { Badge, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
import badgeColors from '../../assets/badgeColors.js';
function TaskItem({task, handleDelete}) {
    return (
        <Flex bg={'#292929'} p={3} borderRadius={6} justify={'space-between'}>
            <Flex maxWidth={'70%'}>
                <Box height={'100%'} width={1} bg={task.color} borderRadius={4} mr={2}/>
                <Flex direction={'column'}>
                    <Text fontSize={24} color={'white'}>
                        {task.name}
                    </Text>
                    <Text fontSize={16} color={'gray'}>
                        {task.description}
                    </Text>
                </Flex>

            </Flex>
            <Flex direction={'column'} maxWidth={'30%'} justify={'space-between'} align={'flex-end'}>
               <IconButton
                   variant={'ghost'}
                   colorScheme={'white'}
                   _hover={{ bg: '#444444'}}
                   icon={<AiFillDelete/>}
                   onClick={() => handleDelete(task.id)}
               />
                <Badge variant='subtle' colorScheme={badgeColors[task.priority]} px={2} mt={1}>
                    {task.priority}
                </Badge>
            </Flex>
        </Flex>
    );
}

export default TaskItem;