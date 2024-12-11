import { Box, Text } from '@chakra-ui/react';

const Top = () => {
    return (
        <Box padding={['40px 20px', '60px auto']} maxW={'1420px'} margin={'0 auto'}>
            <Box textAlign={'center'}>
                <Text fontSize={[14, 18]} fontWeight="600" marginBottom={['16px', '24px']} color="#8C919F">
                    상품
                </Text>
                <Text
                    fontSize={[28, 48]}
                    color="#131313"
                    fontWeight="600"
                    letterSpacing="-0.84px"
                    lineHeight={['40px', '64px']}
                >
                    Let&apos;s PIECE!
                </Text>
            </Box>
        </Box>
    );
};

export default Top;
