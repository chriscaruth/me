import { useViewportScroll } from 'framer-motion';
import React from 'react';
import { Flex, Box } from 'rebass';
import Name from './components/Name/Name';

const App = () => {
    const { scrollY } = useViewportScroll();
    return (
        <div style={{ height: '2000px'}}>
            <Name first="a" last="a" />
        </div>
        
    );
}

export default App;
