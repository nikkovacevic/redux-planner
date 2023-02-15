import React, { useState } from 'react';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea
} from '@chakra-ui/react';
import ColorPicker from '../../components/colorPicker.jsx';
import { BUTTON_COLOR, HOVER_COLOR } from '../../assets/constants.js';

function AddNewEventModal({ open, handleClose, handleSave }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('red.400');
    const [date, setDate] = useState('');

    const handleColorSelect = (color) => {
        setColor(color);
    };

    const resetForm = () => {
        setName('');
        setDescription('');
        setColor('red.400');
        setDate('');
    };

    return (
        <Modal isOpen={open} onClose={handleClose} width={'90%'}>
            <ModalOverlay/>
            <ModalContent bg={'#292929'} color={'white'}>
                <ModalHeader>
                    Add new event
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <FormControl mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input value={name} onChange={(e) => setName(e.target.value)}/>
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </FormControl>

                    <Flex justify={'space-between'}>
                        <FormControl width={'20%'}>
                            <FormLabel>Color</FormLabel>
                            <ColorPicker handleColorSelect={handleColorSelect}/>
                        </FormControl>
                        <FormControl width={'80%'}>
                            <FormLabel>Date</FormLabel>
                            <Input value={date} onChange={(e) => setDate(e.target.value)} type='datetime-local'
                                   css={`
                                     ::-webkit-calendar-picker-indicator {
                                       display: none;
                                     }
                                   `}/>
                        </FormControl>

                    </Flex>

                </ModalBody>
                <ModalFooter>
                    <Button
                        bg={BUTTON_COLOR}
                        _hover={{ bg: HOVER_COLOR }}
                        mr={2} onClick={() => {
                        handleSave({
                            name,
                            description,
                            color,
                            date
                        });
                        resetForm();
                        handleClose();
                    }}>Save</Button>
                    <Button colorScheme={'#292929'} variant={'outline'} onClick={() => {
                        resetForm();
                        handleClose();
                    }
                    }>Cancel</Button>
                </ModalFooter>
            </ModalContent>


        </Modal>
    );
}

export default AddNewEventModal;