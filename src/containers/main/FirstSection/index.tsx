import 'swiper/css';
import 'swiper/css/pagination';

import { Box, Flex, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import SampleImg from 'img/sample/img_sample-thumbnail.png';
import SwiperCore from 'swiper';
import { slideList } from './slideList';
import useScreenSize from '@/hook/useScreenSize';

SwiperCore.use([Autoplay]);

const FirstSection = () => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    return (
        <Flex p={['0px 0 40px', '80px 0 120px']} direction={['column', 'column', 'row']} gap={['16px', '20px']}>
            <Swiper
                loop={true}
                init={true}
                spaceBetween={12}
                slidesPerView={1}
                pagination={true}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                style={{
                    width: '100%',
                    flex: deviceType === 'mobile' ? '1' : '0 0 49%',
                }}
                className="main-first-slide"
            >
                {slideList.map(item => (
                    <SwiperSlide
                        key={item.id}
                        style={{ borderRadius: '32px', overflow: 'hidden', position: 'relative' }}
                    >
                        <Image
                            alt="slide img"
                            src={item.img}
                            style={{
                                aspectRatio: deviceType === 'mobile' ? '1/1.25' : '2/1',
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        <Box position={'absolute'} top={['32px', '40px']} left={['32px', '40px']}>
                            <Text color={'#CCE7F3'} fontSize={[16, 18]} mb={'16px'} fontWeight={600}>
                                {item.category}
                            </Text>
                            <Text
                                color={'#fff'}
                                fontSize={[28, 32]}
                                fontWeight={600}
                                whiteSpace={'pre-wrap'}
                                lineHeight={['40px', '44px']}
                            >
                                {item.title}
                            </Text>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Box
                borderRadius={['32px', '40px']}
                position={'relative'}
                overflow={'hidden'}
                transition={'all .2s ease-in-out'}
                _hover={{
                    transform: 'scale(1.05)',
                    transition: 'all .2s ease-in-out',
                }}
            >
                <Image
                    alt="slide img"
                    src={SampleImg}
                    style={{
                        aspectRatio: deviceType === 'mobile' ? '1/1' : '1/1.25',
                        objectFit: 'cover',
                    }}
                />
                <Box position={'absolute'} top={['32px', '40px']} left={['32px', '40px']}>
                    <Text color={'#CCE7F3'} fontSize={[16, 18]} mb={'16px'} fontWeight={600}>
                        청약 가이드
                    </Text>
                    <Text
                        color={'#fff'}
                        fontSize={[28, 32]}
                        fontWeight={600}
                        whiteSpace={'pre-wrap'}
                        lineHeight={['40px', '44px']}
                    >
                        PIECE 앱<br />
                        쉽게 시작하기
                    </Text>
                </Box>
            </Box>
            <Box
                borderRadius={['32px', '40px']}
                position={'relative'}
                overflow={'hidden'}
                transition={'all .2s ease-in-out'}
                _hover={{
                    transform: 'scale(1.05)',
                    transition: 'all .2s ease-in-out',
                }}
            >
                <Image
                    alt="slide img"
                    src={SampleImg}
                    style={{
                        aspectRatio: deviceType === 'mobile' ? '1/1' : '1/1.25',
                        objectFit: 'cover',
                    }}
                />
                <Box position={'absolute'} top={['32px', '40px']} left={['32px', '40px']}>
                    <Text color={'#CCE7F3'} fontSize={[16, 18]} mb={'16px'} fontWeight={600}>
                        청약 가이드
                    </Text>
                    <Text
                        color={'#fff'}
                        fontSize={[28, 32]}
                        fontWeight={600}
                        whiteSpace={'pre-wrap'}
                        lineHeight={['40px', '44px']}
                    >
                        PIECE 앱<br />
                        쉽게 시작하기
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};

export default FirstSection;
