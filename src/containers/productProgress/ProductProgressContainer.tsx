import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '@/components/Layouts';
import ProductClose from './ProductClose';
import ProductPlan from './ProductPlan';
import ProductProgress from './ProductProgress';
import TabItem from './TapItem';
import Top from './Top';
import { useProductPageQuery } from '@/generated/graphql';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

const tabList = [
    {
        title: '모집 중',
        link: '/productprogress?tab=OPEN&page=1',
        component: <ProductProgress />,
    },
    {
        title: '예정',
        link: '/productprogress?tab=PREOPEN&page=1',
        component: <ProductPlan />,
    },
    {
        title: '종료',
        link: '/productprogress?tab=END&page=1',
        component: <ProductClose />,
    },
];

const getTabDisplay = (tab: string, list: any[]) => {
    switch (tab) {
        case '모집 중':
            return list?.length === 0 ? 'none' : '';
        case '예정':
            return list?.length === 0 ? 'none' : '';
        default:
            return '';
    }
};

const ProductlistContainer = () => {
    const router = useRouter();
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    const [selectedTab, setTab] = useState(tabList[0]);

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    const { tab } = router.query as {
        tab: string;
    };
    const { data } = useProductPageQuery();

    useEffect(() => {
        if (tab === 'OPEN') {
            if (data?.portfoliosSelling?.portfolios?.length === 0) {
                alert('모집중인 상품이 없습니다.');
                if (data?.upcomingPortfolios?.portfolios?.length > 0) {
                    setTab(tabList[1]);
                } else {
                    setTab(tabList[2]);
                }
            } else {
                setTab(tabList[0]);
            }
        } else if (tab === 'PREOPEN') {
            setTab(tabList[1]);
            if (data?.upcomingPortfolios?.portfolios?.length === 0) {
                alert('예정중인 상품이 없습니다.');
                if (data?.portfoliosSelling?.portfolios?.length > 0) {
                    setTab(tabList[0]);
                } else {
                    setTab(tabList[2]);
                }
            } else {
                setTab(tabList[1]);
            }
        } else if (tab === 'END') {
            setTab(tabList[2]);
        } else {
            if (data?.portfoliosSelling?.portfolios?.length > 0) {
                setTab(tabList[0]);
            } else if (data?.upcomingPortfolios?.portfolios?.length > 0) {
                setTab(tabList[1]);
            } else {
                setTab(tabList[2]);
            }
        }
    }, [tab, data]);

    return (
        <>
            <Head>
                <title>PIECE</title>
            </Head>
            <Box>
                <Layout>
                    <Top />
                    <Box>
                        <Box
                            margin={['0 20px 0 0', '0']}
                            sx={{
                                '&:after': {
                                    content: '""',
                                    display: 'block',
                                    height: '1px',
                                    backgroundColor: '#EAECF0',
                                    position: 'absolute',
                                    margin: '0 -20px',
                                    left: '0',
                                    right: '0',
                                    bottom: '0',
                                },
                            }}
                            height="56px"
                            width="-webkit-fill-available"
                            position={'sticky'}
                            top={'63px'}
                            zIndex={7}
                            backgroundColor={'rgba(255, 255, 255, 0.9)'}
                            backdropFilter={'blur(20px)'}
                        >
                            <Swiper
                                direction={'horizontal'}
                                modules={[FreeMode, Scrollbar, Mousewheel]}
                                freeMode={true}
                                scrollbar={true}
                                mousewheel={true}
                                slidesPerView="auto"
                                spaceBetween={24}
                                allowTouchMove={true}
                                style={{
                                    padding: '0 20px',
                                    width: deviceType === 'mobile' ? 'auto' : 'fit-content',
                                }}
                            >
                                {tabList.map(tab => (
                                    <SwiperSlide
                                        key={tab.title}
                                        style={{
                                            width: 'auto',
                                            display: getTabDisplay(
                                                tab.title,
                                                tab.title === '모집 중'
                                                    ? data?.portfoliosSelling?.portfolios
                                                    : data?.upcomingPortfolios?.portfolios
                                            ),
                                        }}
                                    >
                                        <TabItem
                                            tab={tab}
                                            // onClickTab={handleClickTab}
                                            onClickTab={() => {
                                                router.push(tab?.link);
                                            }}
                                            active={tab?.title === selectedTab?.title}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                        {selectedTab?.component}
                    </Box>
                </Layout>
            </Box>
        </>
    );
};

export default ProductlistContainer;
