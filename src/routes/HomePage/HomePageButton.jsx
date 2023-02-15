import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BUTTON_COLOR, HOVER_COLOR } from '../../assets/constants.js';

function HomePageButton({ text, to }) {
    return (
        <Link to={to}>
            <Button
                width={'fit-content'}
                height={'fit-content'}
                px={6} py={3}
                mt={8}
                bg={BUTTON_COLOR}
                _hover={{ bg: HOVER_COLOR}}
                _active={{ border: '0px'}}
            >
                {text}
            </Button>
        </Link>

    );
}

export default HomePageButton;