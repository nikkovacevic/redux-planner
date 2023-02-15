import React from 'react';
import { Box, Show } from '@chakra-ui/react';
import MediumView from './MediumView.jsx';
import SmallView from './SmallView.jsx';

function HomePage() {
    return (
        <Box bg={'#171717'} pt={24} h='90vh' color='white'>
            <Show above={'md'}>
                <MediumView />
            </Show>
            <Show below={'md'}>
                <SmallView />
            </Show>


        </Box>
    );
}

export default HomePage;