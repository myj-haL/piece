import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Box, Flex, Text, Wrap, keyframes, useBoolean } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import BlackBtn from '@/components/BlackBtn';
import ExclamationIcon from 'img/producthome/ic_exclamation_circle.svg';
import Image from 'next/image';
import ProductPerformanceImage01 from 'img/producthome/img_producthome_performance_01.jpg';
import ProductPerformanceImage02 from 'img/producthome/img_producthome_performance_02.jpg';
import ProductPerformanceImage03 from 'img/producthome/img_producthome_performance_03.jpg';
import ProductPerformanceImage04 from 'img/producthome/img_producthome_performance_04.jpg';
import ProductPerformanceImage05 from 'img/producthome/img_producthome_performance_05.jpg';
import ProductPerformanceItem from '@/components/ProductPerformanceItem';
import useScreenSize from '@/hook/useScreenSize';

const productPerformances = [
    {
        image: ProductPerformanceImage01,
        label: '퍼포먼스 TOP 1',
        text: ['롤렉스 집합 1호', '6개월 만에', '32% 수익'],
        fontColor: '#FFFFFF',
    },
    {
        image: ProductPerformanceImage02,
        label: '퍼포먼스 TOP 2',
        text: ['롤렉스 집합 3호', '100만 원 투자했다면', '30만 원 수익'],
        fontColor: '#292A2E',
    },
    {
        image: ProductPerformanceImage03,
        label: '퍼포먼스 TOP 3',
        text: ['롤렉스 집합 2호', '6개월 만에', '32% 수익'],
        fontColor: '#FFFFFF',
    },
    {
        image: ProductPerformanceImage04,
        label: '퍼포먼스 TOP 4',
        text: ['아트 컬렉션#1', '100만 원 투자했다면', '30만 원 수익'],
        fontColor: '#FFFFFF',
    },
    {
        image: ProductPerformanceImage05,
        label: '퍼포먼스 TOP 5',
        text: ['SEOUL FLEX 컬렉션', '12개월 만에', '11% 수익'],
        fontColor: '#FFFFFF',
    },
];

const slideLeft = keyframes`
  from   {
    transform: translateX(0%);
  }
  to  {
    transform: translateX(-50%);
  }
`;

const slideUp = keyframes`
  from   {
    transform: translateY(0%);
  }
  to  {
    transform: translateY(80px);
  }
`;

const slideDown = keyframes`
  from   {
    transform: translateY(0%);
  }
  to  {
    transform: translateY(-80px);
  }
`;

const Section1 = () => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    const [hover, setHover] = useBoolean();

    const animationRight = `${slideLeft} 80s linear infinite forwards ${hover ? 'paused' : 'running'}`;
    const animationDown = `${slideDown} 10s linear infinite alternate ${hover ? 'paused' : 'running'}`;
    const animationUp = `${slideUp} 10s linear infinite alternate ${hover ? 'paused' : 'running'}`;

    return deviceType === 'mobile' ? (
        <Box padding={'0 20px 40px 20px'}>
            <Swiper
                className="product-top-slide"
                modules={[Pagination, Autoplay]}
                pagination={{
                    enabled: true,
                    type: 'bullets',
                    renderBullet: (_, className) => {
                        return `<span class="${className}">
                        <svg viewBox="0 0 8 8" ref={progressCircle}>
                          <circle cx="4" cy="4" r="4"></circle>
                        </svg>
                      </span>`;
                    },
                }}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                }}
                spaceBetween={12}
            >
                {productPerformances.map(({ image, label, text, fontColor }) => {
                    return (
                        <SwiperSlide key={label + text}>
                            <ProductPerformanceItem image={image} label={label} text={text} fontColor={fontColor} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Box width={'100%'}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                    <BlackBtn text={'전체 상품 더보기'} link="/productprogress?page=1" />

                    <Flex alignItems={'center'} justifyContent={'center'} gap={'2px'} marginTop={'20px'}>
                        <Image alt="exclamation icon" src={ExclamationIcon} width={13} height={13} />
                        <Text fontSize={'13px'} fontWeight={'400'} lineHeight={'18px'} letterSpacing={'-3%'}>
                            과거 수익률이 미래의 수익률을 보장하는 것은 아닙니다.
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    ) : (
        <Box paddingBottom={'80px'}>
            <Box position={'relative'} height={['540px']} overflow={'hidden'}>
                <Flex position={'absolute'} width={(320 + 120) * 20 + 'px'} height={'480px'} animation={animationRight}>
                    {Array.from({ length: 20 }).map((_, index) => {
                        const i = index % productPerformances.length;
                        const productPerformance = productPerformances[i];
                        const key = productPerformance.label + index + i;

                        return (
                            <Wrap
                                key={key}
                                alignSelf={index % 2 ? 'end' : 'start'}
                                marginRight={'120px'}
                                animation={index % 2 ? animationDown : animationUp}
                                onMouseEnter={setHover.on}
                                onMouseLeave={setHover.off}
                            >
                                <ProductPerformanceItem
                                    image={productPerformance.image}
                                    label={productPerformance.label}
                                    text={productPerformance.text}
                                    fontColor={productPerformance.fontColor}
                                />
                            </Wrap>
                        );
                    })}
                </Flex>
            </Box>
            <Box width={'100%'}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                    <BlackBtn text={'전체 상품 더보기'} link="/productprogress?page=1" />

                    <Flex alignItems={'center'} justifyContent={'center'} gap={'2px'} marginTop={'20px'}>
                        <Image alt="exclamation icon" src={ExclamationIcon} width={16} height={16} />
                        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'20px'} letterSpacing={'-3%'}>
                            과거 수익률이 미래의 수익률을 보장하는 것은 아닙니다.
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default Section1;
