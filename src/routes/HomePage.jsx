import React, { useState } from 'react';
import { Box, Flex, Image, Text, IconButton, Show, Tooltip, Button } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

import {useSelector, useDispatch} from 'react-redux';
import AddNewModal from '../components/AddNewModal.jsx';

function HomePage() {

    const [openModal, setOpenModal] = useState(false);

    const  tasks = useSelector((state) => {return state.tasks})
    const dispatch = useDispatch();

    return (
        <>
        <Box bg={'#171717'} p={8} h='90vh' color='white'>

            {/* Toolbar */}
            <Flex align={'center'} justifyContent={'space-between'}>
                <Flex flexDir={'column'} justifyContent={'flex-start'}>
                    <Text fontSize={24} pb={2}>My tasks</Text>
                    <Text fontSize={16} >{tasks?.length} tasks in total</Text>
                </Flex>
                <Show below={'sm'}>
                    <IconButton
                        colorScheme={'messenger'}
                        icon={<FaPlus/>}
                        size={'lg'}
                        pos={'absolute'}
                        bottom={'5vh'}
                        right={'5vh'}
                        zIndex={100}
                        onClick={()=> setOpenModal(true)}
                    />
                </Show>
                <Show above={'sm'}>
                    <Button onClick={()=> setOpenModal(true)} colorScheme='messenger'>Add new</Button>
                </Show>
            </Flex>

            {/*grid container*/}
            {/*card za vsakega tak ko je v bookmarku*/}
            {/*badge komponenta*/}


        </Box>
            <AddNewModal open={openModal} handleClose={() => setOpenModal(false)}/>
        </>
    );
}

export default HomePage;