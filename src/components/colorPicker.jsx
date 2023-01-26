import React, { useState } from 'react';
import {
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger, SimpleGrid
} from '@chakra-ui/react';

function ColorPicker({ handleColorSelect }) {

    const [color,setColor] = useState('red.400')

    const colors = [
        "red.400",
        "green.400",
        "blue.400",
        "yellow.400",
        "orange.400",
    ]
    return (
        <Popover >
            <PopoverTrigger>
                <Button
                    background={color}
                    height={'40px'}
                    width={'40px'}
                    minWidth="unset"
                    padding={0}
                    borderRadius={8}
                />
            </PopoverTrigger>
            <PopoverContent width={'20vh'} bg={'#292929'}>
                <PopoverArrow/>
                <PopoverBody height={'fit-content'} p={4}>
                    <SimpleGrid columns={5} spacing={2}>
                        {colors.map((color) => (
                            <Button
                                background={color}
                                height={'24px'}
                                width={'24px'}
                                minWidth="unset"
                                padding={0}
                                borderRadius={4}
                                onClick={() => {
                                    setColor(color);
                                    handleColorSelect(color);
                                }}
                            />

                        ))}
                    </SimpleGrid>
                </PopoverBody>

            </PopoverContent>

        </Popover>
    );
}

export default ColorPicker;