import { AspectRatio, Box, Flex, Text } from '@chakra-ui/react';

import BlackBtn from '@/components/BlackBtn';
import Image from 'next/image';
import Link from 'next/link';
import ProductHomeGuideImage from 'img/producthome/img_producthome_guide.png';

const Section5 = () => {
    return (
        <Box padding={['40px 20px', '80px 20px']} maxW={'1420px'} margin={'0 auto'}>
            <Flex flexDirection={'column'} alignItems={'center'} gap={'20px'}>
                <AspectRatio width={['160px', '320px']} ratio={1}>
                    <Image src={ProductHomeGuideImage} alt="Guide Image" fill />
                </AspectRatio>
                <Text
                    fontSize={['22px', '48px']}
                    fontWeight={['600', '700']}
                    lineHeight={['28px', '64px']}
                    color="#131313"
                >
                    청약 가이드 살펴보세요
                </Text>
                <BlackBtn text={'청약 가이드 보기'} btnCategory={'a'} link="/guide" />
            </Flex>
        </Box>
    );
};

export default Section5;
