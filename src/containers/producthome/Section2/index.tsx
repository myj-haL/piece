import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import MobileProductProgressSlide from './MobileProductProgressSlide';
import PCProductProgress from './PCProductProgress';
import { Portfolio } from '@/generated/graphql';
import useScreenSize from '@/hook/useScreenSize';

interface Section2Porps {
    portfolios: Portfolio[];
}
const Section2 = ({ portfolios }: Section2Porps) => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    return (
        <Box padding={['40px 20px', '80px 0']}>
            <Box maxWidth={'1180px'} margin={'0 auto'}>
                <Text
                    textAlign={'center'}
                    fontSize={['22px', '32px']}
                    fontWeight={['600', '700']}
                    lineHeight={['28px', '64px']}
                    marginBottom={['20px', '40px']}
                    color="#131313"
                >
                    청약 모집이 시작되었어요
                </Text>

                {deviceType === 'mobile' ? (
                    <MobileProductProgressSlide portfolios={portfolios} />
                ) : (
                    <PCProductProgress portfolios={portfolios} />
                )}
            </Box>
        </Box>
    );
};

export default Section2;
