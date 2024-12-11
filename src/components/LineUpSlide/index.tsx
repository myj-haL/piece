import 'swiper/css/free-mode';

import { Autoplay, Controller, FreeMode } from 'swiper/modules';
import { Box, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import SwiperCore from 'swiper';
import { lineUpSlide } from '../../containers/main/slideList';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

SwiperCore.use([Autoplay, FreeMode, Controller]);

const LineUpSlide = () => {
    const { device } = useScreenSize();
    const router = useRouter();
    const [deviceType, setDeviceType] = useState<string>('');
    const [spaceBetween, setSpaceBetween] = useState<number>(0);
    const [updatePage, setUpdatePage] = useState<boolean>(true);

    useEffect(() => {
        setDeviceType(device);
        setSpaceBetween(device === 'mobile' ? 32 : 64);
    }, [device]);

    useEffect(() => {
        setUpdatePage(!updatePage);
    }, [router.pathname]);

    return (
        <Box
            m={['0 -20px', '0']}
            w={['auto', '100vw']}
            left={['auto', '50%']}
            transform={['initial', 'translateX(-50vw)']}
            position={'relative'}
        >
            <Swiper
                key={String(updatePage)}
                spaceBetween={spaceBetween}
                slidesPerView="auto"
                loop={true}
                freeMode
                modules={[FreeMode, Autoplay, Controller]}
                speed={5000}
                allowTouchMove={false}
                autoplay={{
                    delay: 0,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}
                style={{
                    padding: '0 20px',
                    width: '100%',
                }}
                observer={true}
                observeParents={true}
            >
                {lineUpSlide.map(item => (
                    <SwiperSlide key={item.id}>
                        <Box
                            position={'relative'}
                            width={'100%'}
                            sx={{
                                '&:after': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    width: '100%',
                                    left: 0,
                                    bottom: 0,
                                    height: deviceType === 'mobile' ? '100px' : '170px',
                                    bg: item.bg,
                                    zIndex: -1,
                                    borderRadius: '100px',
                                },
                            }}
                        >
                            <Image
                                alt="media"
                                src={item.media}
                                style={{
                                    aspectRatio: 1 / 1,
                                    width: deviceType === 'mobile' ? '200px' : '340px',
                                }}
                            />
                        </Box>
                        <Text
                            mt={'16px'}
                            fontSize={[18, 28]}
                            textAlign={'center'}
                            color={'#292A2E'}
                            fontWeight={600}
                        >
                            {item.name}
                        </Text>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default LineUpSlide;
