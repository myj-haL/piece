import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import MobileProductPlanSlide from './MobileProductPlanSlide';
import PCProductPlan from './PCProductPlan';
import { Portfolio } from '@/generated/graphql';
import useScreenSize from '@/hook/useScreenSize';

interface Section3Porps {
    portfolios: Portfolio[];
}
const Section3 = ({ portfolios }: Section3Porps) => {
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
                    lineHeight={['28px', '44px']}
                    marginBottom={['20px', '40px']}
                    color="#131313"
                >
                    곧 출시될 상품이에요
                </Text>
                {deviceType === 'mobile' ? (
                    <MobileProductPlanSlide portfolios={portfolios} />
                ) : (
                    <PCProductPlan portfolios={portfolios} />
                )}
            </Box>
        </Box>
    );
};

export default Section3;
