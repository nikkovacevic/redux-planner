import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Input, FormControl, FormLabel, Textarea, Button, Select, Flex
} from '@chakra-ui/react';
import ColorPicker from '../../components/colorPicker.jsx';

function AddNewTaskModal({ open, handleClose, handleSave }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('red.400');
    const [priority, setPriority] = useState('low');

    const handleColorSelect = (color) => {
        setColor(color)
    }

    const resetForm = () => {
        setName('');
        setDescription('');
        setColor('red.400');
        setPriority('low');
    }

    return (
        <Modal isOpen={open} onClose={handleClose} width={'90%'}>
            <ModalOverlay />
            <ModalContent bg={'#292929'} color={'white'}>
                <ModalHeader>
                    Add new task
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
                            <FormLabel>Priority</FormLabel>
                            <Select onChange={(e) => setPriority(e.target.value)}>
                                <option value='low' style={{ backgroundColor: '#292929', color:"white"}}>Low</option>
                                <option value='medium' style={{ backgroundColor: '#292929', color:"white"}}>Medium</option>
                                <option value='high' style={{ backgroundColor: '#292929', color:"white"}}>High</option>
                            </Select>
                        </FormControl>

                    </Flex>

                </ModalBody>
                <ModalFooter>
                    <Button colorScheme={'messenger'} mr={2} onClick={() => {
                        handleSave({
                            name,
                            description,
                            color,
                            priority
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

export default AddNewTaskModal;