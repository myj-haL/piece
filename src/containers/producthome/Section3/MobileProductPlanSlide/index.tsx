import 'animate.css';

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';

import ChevronLeftIcon from 'img/producthome/ic_chevron_left.svg';
import ChevronRightIcon from 'img/producthome/ic_chevron_right.svg';
import Image from 'next/image';
import { Portfolio } from '@/generated/graphql';
import ProductPlanItem from '@/components/ProductPlanItem';

interface MobileProductPlanSlidePorps {
    portfolios: Portfolio[];
}
const MobileProductPlanSlide = ({ portfolios }: MobileProductPlanSlidePorps) => {
    const [slideIndex, setSlide] = useState(0);

    const sliderRef = useRef(null);

    useEffect(() => {
        sliderRef.current.swiper.slideTo(slideIndex);
    }, [slideIndex]);

    return (
        <Box>
            <Swiper ref={sliderRef} slidesPerView={1} spaceBetween={12} allowTouchMove={false}>
                {portfolios?.map((portfolio: Portfolio) => {
                    return (
                        <SwiperSlide key={portfolio?.portfolio_id}>
                            <ProductPlanItem portfolio={portfolio} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Flex
                alignItems={'center'}
                justifyContent={'space-between'}
                margin={'0 auto'}
                border={'1px solid #EAECF0'}
                borderRadius={'24px'}
                width={'134px'}
                height={'48px'}
                overflow={'hidden'}
            >
                <Button
                    width={'48px'}
                    aspectRatio={1}
                    background={'transparent'}
                    _hover={{
                        background: 'transparent',
                    }}
                    _active={{
                        background: 'transparent',
                    }}
                    onClick={() => (slideIndex - 1 >= 0 ? setSlide(slideIndex - 1) : '')}
                >
                    <Image src={ChevronLeftIcon} alt="Swiper Prev Icon" width={16} height={16} />
                </Button>
                <Text fontSize={'16px'} fontWeight={'400'} lineHeight={'22px'} letterSpacing={'-3%'}>
                    <Text as={'span'} fontWeight={'600'}>
                        {slideIndex + 1}
                    </Text>{' '}
                    / {portfolios?.length}
                </Text>
                <Button
                    width={'48px'}
                    aspectRatio={1}
                    background={'transparent'}
                    _hover={{
                        background: 'transparent',
                    }}
                    _active={{
                        background: 'transparent',
                    }}
                    onClick={() => (slideIndex + 1 < portfolios?.length ? setSlide(slideIndex + 1) : '')}
                >
                    <Image src={ChevronRightIcon} alt="Swiper Next Icon" width={16} height={16} />
                </Button>
            </Flex>
        </Box>
    );
};

export default MobileProductPlanSlide;
