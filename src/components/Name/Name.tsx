import React, { useEffect, useState } from 'react';
import { useViewportScroll } from 'framer-motion';
import { Flex } from 'rebass';
import Letter from './Letter';

interface NameProps {
    first: string;
    last?: string;
}

const Name = (props: NameProps) => {
    return (
        <div>
            <Flex justifyContent="center">
                {[...props.first].map((x, i) => 
                    <Letter 
                        letter={x} 
                        index={i}
                    />
                )}
            </Flex>
            <Flex justifyContent="center">
                {[...props.last || []].map((x, i) => 
                    <Letter 
                        letter={x} 
                        index={i}
                    />
                )}
            </Flex>
        </div>
    );
}

export default Name;
