import React from 'react';
import { Flex } from 'rebass';
import Letter from './Letter';

interface NameProps {
    first: string;
    last?: string;
}

const Name = (props: NameProps) => {
    return (
        <React.Fragment>
            <Flex>
                {[...props.first].map((x, i) => 
                    <Letter 
                        letter={x} 
                        index={i} 
                    />
                )}
            </Flex>
            <Flex>
                {[...props.last || []].map((x, i) => 
                    <Letter 
                        letter={x} 
                        index={i} 
                    />
                )}
            </Flex>
        </React.Fragment>
    );
}

export default Name;
