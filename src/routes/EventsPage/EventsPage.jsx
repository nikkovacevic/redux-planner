import React, { useState } from 'react';
import { Box, Button, Flex, IconButton, Show, SimpleGrid, Text } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

import {useSelector, useDispatch} from 'react-redux';
import { addEvent, deleteEvent } from '../../redux/eventsSlice';
import EventItem from './EventItem.jsx';
import AddNewEventModal from './AddNewEventModal.jsx';
import { BUTTON_COLOR, HOVER_COLOR } from '../../assets/constants.js';

function EventsPage() {

    const [openModal, setOpenModal] = useState(false);

    const events = useSelector((state) => { return state.events})
    const dispatch = useDispatch();

    const handleSubmit = (eventData) => {
        if (eventData.name.length === 0) {
            return;
        }
        dispatch(
            addEvent({
                eventName: eventData.name,
                description: eventData.description,
                color: eventData.color,
                date: eventData.date
            })
        )
    }

    const handleDeleteEvent = (id) => {
        dispatch(deleteEvent({id: id}))
    };

    return (
        <>
            <Box bg={'#171717'} p={8} h='90vh' color='white'>

                {/* Toolbar */}
                <Flex align={'center'} justify={'space-between'} mb={8}>
                    <Flex flexDir={'column'} justify={'flex-start'}>
                        <Text fontSize={24} pb={2}>My events</Text>
                        <Text fontSize={16} >{events?.length} events in total</Text>
                    </Flex>
                    <Show below={'sm'}>
                        <IconButton
                            aria-label={'add-button'}
                            bg={BUTTON_COLOR}
                            _hover={{ bg: HOVER_COLOR}}
                            _active={{ outline: '0px'}}
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

                {/* Event List */}
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing={8}>
                    {events?.map((event) => (
                        <EventItem key={event.id} event={event} handleDelete={(id) => handleDeleteEvent(id)} />
                    ))}
                </SimpleGrid>

                <AddNewEventModal
                    open={openModal}
                    handleClose={() => setOpenModal(false)}
                    handleSave={(data) => handleSubmit(data)}
                />

            </Box>
        </>
    );
}

export default EventsPage;