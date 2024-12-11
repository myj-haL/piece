import { Box, Flex } from '@chakra-ui/react';

import React from 'react';

const Terms = ({ children }: { children: JSX.Element }) => {
    return (
        <Flex w="100%" align="center" direction="column">
            <Flex
                w="100%"
                maxW="1200px"
                // justify="center"
                py="60px"
                px={['15px', '120px', '95px']}
            >
                {children}
            </Flex>
        </Flex>
    );
};

export default Terms;
