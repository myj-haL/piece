import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import { Box, Grid, Text } from '@chakra-ui/react';
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { T_Magazine, useMegazineQuery } from '@/generated/graphql';
import { useEffect, useState } from 'react';

import Head from 'next/head';
import Layout from '@/components/Layouts';
import MagazineItem from '@/components/MagazineItem';
import Topbanner from './TopBanner';
import { magazineItemData } from '@/components/MagazineList/data';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

function MagazineDetailContainer() {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    const router = useRouter();
    const slug = router.query.slug as string;
    const { data, loading } = useMegazineQuery({
        variables: {
            magazine_id: slug,
        },
    });
    return (
        <>
            <Head>
                <title>PIECE</title>
            </Head>
            <Box>
                <Layout>
                    <Topbanner image={data?.megazine?.megazine?.represent_thumbnail_path} />
                    <Box maxW={'860px'} m={'0 auto'} pb={['40px', '80px']}>
                        <Grid
                            mt={'20px'}
                            w={'100%'}
                            textAlign={'left'}
                            p={'40px 20px'}
                            gap={'20px'}
                            borderBottom={'1px solid #EAECF0'}
                        >
                            <Text fontSize={[14, 18]} color={'#8C919F'} fontWeight={600} w={'100%'}>
                                {data?.megazine?.megazine?.small_title}
                            </Text>
                            <Text
                                fontSize={[24, 48]}
                                color={'#131313'}
                                fontWeight={600}
                                w={'100%'}
                                lineHeight={['40px', '64px']}
                            >
                                {data?.megazine?.megazine?.title}
                            </Text>

                            <Text fontSize={[18, 28]} color={'#292A2E'} fontWeight={600} w={'100%'}>
                                {data?.megazine?.megazine?.mid_title}
                            </Text>
                        </Grid>

                        {/* TODO : contents */}
                        <Box
                            p={['20px 0 0', '60px 0 0']}
                            w={'100%'}
                            dangerouslySetInnerHTML={{ __html: data?.megazine?.megazine?.contents || '' }}
                        ></Box>
                    </Box>

                    {/* TODO : 추천 아티클 */}
                    <Box p={'0 20px'} maxW={'1420px'} m={['60px auto 40px', '80px auto']}>
                        <Text fontSize={[22, 32]} color={'#131313'} fontWeight={700} w={'100%'} mb={['20px', '40px']}>
                            추천 아티클
                        </Text>

                        <Box m={['0 -20px', '0']}>
                            <Swiper
                                direction={'horizontal'}
                                modules={[FreeMode, Scrollbar, Mousewheel]}
                                freeMode={true}
                                scrollbar={true}
                                mousewheel={false}
                                slidesPerView={2.1}
                                spaceBetween={deviceType === 'mobile' ? 12 : 20}
                                allowTouchMove={true}
                                style={{
                                    padding: deviceType === 'mobile' ? '0 20px' : '0',
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 3.1,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                                {data?.megazine?.megazines?.map((item: T_Magazine, index: number) => (
                                    <SwiperSlide key={item?.magazine_id}>
                                        <MagazineItem data={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Box>
                </Layout>
            </Box>
        </>
    );
}

export default MagazineDetailContainer;
