import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useMemo, useRef, useState } from 'react';

import { Autoplay } from 'swiper/modules';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import SwiperCore from 'swiper';
import { slider } from './slider';
import style from './index.module.css';
import { useRouter } from 'next/router';

SwiperCore.use([Autoplay]);

const FootSlide = () => {
    const router = useRouter();
    const [updatePage, setUpdatePage] = useState<boolean>(true);
    useEffect(() => {
        setUpdatePage(!updatePage);
    }, [router.pathname]);

    const sliderRepeated = slider.concat(slider, slider);

    return (
        <Box className={style.container}>
            <Box position="relative" className={style.wrap}>
                <Swiper
                    key={String(updatePage)}
                    className={style.flow_item}
                    spaceBetween={40}
                    loop={true}
                    slidesPerView="auto"
                    speed={14000}
                    init={true}
                    loopAdditionalSlides={5}
                    allowTouchMove={false}
                    observer={true}
                    freeMode={true}
                    observeParents={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            spaceBetween: 120,
                            slidesPerView: 'auto',
                        },
                    }}
                >
                    {sliderRepeated.map((item: any, index: number) => (
                        <SwiperSlide key={index} className={style.slide_item}>
                            <Image alt="" src={item.img} className={style.flow_img} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default FootSlide;
