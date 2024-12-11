import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Layout from '@/components/Layouts';
import { productTimer } from '@/utils/productTimer';

const Product = () => {
    const [countdown, setCountdown] = useState<{
        countdownString: string;
        countdownType: 'PREOPEN' | 'OPEN' | 'END' | '';
    }>({
        countdownString: '',
        countdownType: '',
    });
    const recruitmentBeginDate = '2024-04-25 12:11:00';
    const recruitmentEndDate = '2024-06-25 10:12:00';

    useEffect(() => {
        productTimer({
            recruitmentBeginDate: recruitmentBeginDate,
            recruitmentEndDate: recruitmentEndDate,
            setCountdown,
        });
    }, []);
    useEffect(() => {
        // console.log({ countdown });
    }, [countdown]);

    return (
        <>
            <Box>
                {countdown?.countdownType === 'PREOPEN' && (
                    <>
                        <Text>모집시작까지 {countdown?.countdownString} 남았어요</Text>
                    </>
                )}
            </Box>
            <Box>
                {countdown?.countdownType === 'OPEN' && (
                    <>
                        <Text>마감까지 {countdown?.countdownString} 남았어요</Text>
                    </>
                )}
            </Box>
            <Box>
                {countdown?.countdownType === 'PREOPEN' && (
                    <>
                        <Text>{countdown?.countdownString}</Text>
                    </>
                )}
            </Box>
        </>
    );
};

export default Product;
