import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import OneButtonPopup from './OnebuttonPopup';
import TwoButtonPopup from './TwoButtonPopup';

const Popup = () => {
    return (
        <>
            <Box
                position={'fixed'}
                w={'100%'}
                h={'100%'}
                backgroundColor={'rgba(19, 19, 19, 0.6)'}
                backdropFilter={'blur(20px)'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                p={'20px'}
            >
                <Box
                    w={'100%'}
                    maxW={'480px'}
                    borderRadius={'32px'}
                    backgroundColor={'#fff'}
                    padding={'40px 20px 20px'}
                    textAlign={'center'}
                >
                    {/* <OneButtonPopup title={'투자계약증권 1호\n오토리스렌트 자동차 금융'} /> */}
                    <TwoButtonPopup title={'PIECE의 다른 소식들도\n만나보세요'} />
                </Box>
            </Box>
        </>
    );
};

export default Popup;
