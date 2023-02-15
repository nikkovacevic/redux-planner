import React from 'react'
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
import dayjs from 'dayjs';

function EventItem({event, handleDelete}) {
    return (
        <Flex bg={'#292929'} p={3} borderRadius={6} justify={'space-between'}>
            <Flex maxWidth={'70%'}>
                <Box height={'100%'} width={1} bg={event.color} borderRadius={4} mr={2}/>
                <Flex direction={'column'} justifyContent={'space-between'}>
                    <Text fontSize={24} color={'white'}>
                        {event.name}
                    </Text>
                    <Text fontSize={16} color={'gray'}>
                        {event.description}
                    </Text>
                </Flex></Flex>
                <Flex direction={'column'} maxWidth={'30%'} justify={'space-between'} align={'flex-end'}>
                    <IconButton
                        variant={'ghost'}
                        colorScheme={'white'}
                        _hover={{ bg: '#444444'}}
                        icon={<AiFillDelete/>}
                        onClick={() => handleDelete(event.id)}
                    />
                        <Text textAlign='right'>
                            {dayjs(event.date).format('D. M. YYYY HH:mm')}
                        </Text>


            </Flex>
        </Flex>
    )
}

export default EventItem;