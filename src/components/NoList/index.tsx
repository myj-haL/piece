import { Box, Center, Text } from '@chakra-ui/react';
import { Router, useRouter } from 'next/router';

interface NoListPorps {
    label: string;
    btnLabel?: string;
    link?: string;
}
const NoList = ({ label, btnLabel, link }: NoListPorps) => {
    const router = useRouter();
    return (
        <Center flexDirection={'column'} p={'120px 0'}>
            <Text fontSize={[16, 18]} color={'#4A4D55'} fontWeight={'400'} letterSpacing={'-0.48px'} m={'0 0 24px'}>
                {label}
            </Text>

            {btnLabel && link && (
                <Box
                    as="a"
                    borderRadius={'100px'}
                    backgroundColor={'#131313'}
                    padding={['13px 20px', '12px 20px']}
                    color={'#fff'}
                    fontSize={'16px'}
                    fontWeight={600}
                    cursor={'pointer'}
                    onClick={() => {
                        router.push(link);
                    }}
                >
                    {btnLabel}
                </Box>
            )}
        </Center>
    );
};

export default NoList;
