import React, { useState } from 'react';
import { Box, Flex, Image, Text, IconButton, Show, Tooltip, Button, SimpleGrid } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

import {useSelector, useDispatch} from 'react-redux';
import AddNewModal from '../components/AddNewModal.jsx';
import { addTask, deleteTask } from '../redux/tasksSlice.js';
import TaskItem from '../components/TaskItem.jsx';

function HomePage() {

    const [openModal, setOpenModal] = useState(false);

    const tasks = useSelector((state) => {return state.tasks})
    const dispatch = useDispatch();

    const handleSubmit = (taskData) => {
        if (taskData.name.length === 0) {
            return;
        }
        dispatch(
            addTask({
                taskName: taskData.name,
                description: taskData.description,
                color: taskData.color,
                priority: taskData.priority
            })
        )
    }

    const handleDeleteTask = (id) => {
        dispatch(deleteTask({id: id}))
    }

    return (
        <>
        <Box bg={'#171717'} p={8} h='90vh' color='white'>

            {/* Toolbar */}
            <Flex align={'center'} justify={'space-between'} mb={8}>
                <Flex flexDir={'column'} justify={'flex-start'}>
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
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing={8}>
                {tasks?.map((task) => (
                    <TaskItem key={task.id} task={task} handleDelete={(id) => handleDeleteTask(id)}/>
                ))}
            </SimpleGrid>



        </Box>
            <AddNewModal open={openModal} handleClose={() => setOpenModal(false)}
                handleSave={(data) => handleSubmit(data)}
            />
        </>
    );
}

export default HomePage;