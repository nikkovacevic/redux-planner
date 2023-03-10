import React, { useState } from 'react';
import { Box, Flex, Text, IconButton, Show, Button, SimpleGrid } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

import {useSelector, useDispatch} from 'react-redux';
import AddNewTaskModal from './AddNewTaskModal.jsx';
import { addTask, deleteTask } from '../../redux/tasksSlice.js';
import TaskItem from './TaskItem.jsx';
import { BUTTON_COLOR, HOVER_COLOR } from '../../assets/constants.js';

function TasksPage() {

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
                        aria-label={'add-button'}
                        bg={BUTTON_COLOR}
                        _hover={{ bg: HOVER_COLOR}}
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
                    <Button
                        onClick={()=> setOpenModal(true)}
                        bg={BUTTON_COLOR}
                        _hover={{ bg: HOVER_COLOR}}
                    >
                        Add new
                    </Button>
                </Show>
            </Flex>

            {/* Task List */}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing={8}>
                {tasks?.map((task) => (
                    <TaskItem key={task.id} task={task} handleDelete={(id) => handleDeleteTask(id)}/>
                ))}
            </SimpleGrid>


            <AddNewTaskModal open={openModal} handleClose={() => setOpenModal(false)}
                             handleSave={(data) => handleSubmit(data)}
            />
        </Box>

        </>
    );
}

export default TasksPage;