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
import ColorPicker from './colorPicker.jsx';

function AddNewModal({ open, handleClose }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [priority, setPriority] = useState('');

    const handleColorSelect = (color) => {
        setColor(color)
    }

    return (
        <Modal isOpen={open} onClose={handleClose}>
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

                    <Flex justifyContent={'space-between'}>
                        <FormControl width={'20%'}>
                            <FormLabel>Color</FormLabel>
                            <ColorPicker handleColorSelect={handleColorSelect}/>
                        </FormControl>
                        <FormControl width={'80%'}>
                            <FormLabel>Priority</FormLabel>
                            <Select>
                                <option value='Low' style={{ backgroundColor: '#292929', color:"white"}}>Low</option>
                                <option value='Medium' style={{ backgroundColor: '#292929', color:"white"}}>Medium</option>
                                <option value='High' style={{ backgroundColor: '#292929', color:"white"}}>High</option>
                            </Select>
                        </FormControl>

                    </Flex>

                </ModalBody>
                <ModalFooter>
                    <Button colorScheme={'messenger'} mr={2}>Save</Button>
                    <Button colorScheme={'#292929'} variant={'outline'} onClick={handleClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>


        </Modal>
    );
}

export default AddNewModal;