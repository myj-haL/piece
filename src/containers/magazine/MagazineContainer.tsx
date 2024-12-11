import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import { Box, Button, Text } from '@chakra-ui/react';
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCallback, useEffect, useState } from 'react';

import Head from 'next/head';
import Layout from '@/components/Layouts';
import MagazineList from '../../components/MagazineList';
import NoList from '@/components/NoList';
import ShortSearchForm from '@/components/ShortSearchForm';
import { tabList } from './magazineList';
import { useMegazinesQuery } from '@/generated/graphql';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

const getTabTitle = (tab: string) => {
    switch (tab) {
        case 'Portfolio':
            return '포트폴리오';
        case 'Insight':
            return '인사이트 칼럼';
        case 'Trend':
            return '어바웃 트렌드';
        default:
            return '';
    }
};

const changeTabToCode = (tab?: string) => {
    switch (tab) {
        case 'Portfolio':
            return 'MZT0201';
        case 'Insight':
            return 'MZT0101';
        case 'Trend':
            return 'MZT0102';
        default:
            // return 'MZT01';
            return '';
    }
};

const MagazineContainer = () => {
    const router = useRouter();
    const [listLink, setListLink] = useState('');
    const { tab, keyword, page } = router.query as {
        tab: string;
        keyword: string;
        page: string;
    };
    const { data, fetchMore } = useMegazinesQuery({
        variables: {
            page: parseInt(page),
            pageSize: 12,
            magazineType: changeTabToCode(tab),
            keyword,
        },
        notifyOnNetworkStatusChange: true,
    });
    // 검색
    const handleSearch = useCallback(
        (_keyword: string) => {
            if (!keyword) {
                setListLink(router.asPath);
            }
            if (tab) {
                router.push(`/magazine?keyword=${_keyword}&tab=${tab}&page=1`);
            } else {
                router.push(`/magazine?keyword=${_keyword}&page=1`);
            }
        },
        [keyword, router]
    );

    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);
    const handleFetchMore = async () => {
        await fetchMore({
            variables: {
                page: data?.megazines?.pageInfo?.curPage + 1,
                pageSize: 12,
                magazineType: changeTabToCode(tab),
                keyword,
            },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousQueryResult;

                const combineMegazines = [
                    ...previousQueryResult.megazines.megazines,
                    ...fetchMoreResult.megazines.megazines,
                ];
                return {
                    megazines: {
                        ...previousQueryResult.megazines,
                        megazines: combineMegazines,
                        pageInfo: {
                            ...fetchMoreResult.megazines.pageInfo,
                            curPage: previousQueryResult.megazines.pageInfo.curPage + 1,
                        },
                    },
                };
            },
        });
    };

    return (
        <>
            <Head>
                <title>{keyword?.length > 0 ? '피스라운지 검색결과' : `피스라운지 ${getTabTitle(tab)} - PIECE`}</title>
            </Head>
            <Box>
                <Layout>
                    <Box padding={['40px 20px', '60px 20px 80px']} maxW={'1420px'} margin={'0 auto'}>
                        <Box textAlign={'center'}>
                            <Text fontSize={[14, 18]} color="#8C919F" marginBottom={['16px', '24px']} fontWeight="600">
                                매거진
                            </Text>
                            <Text
                                fontSize={[28, 48]}
                                color="#131313"
                                fontWeight="600"
                                letterSpacing="-0.84px"
                                lineHeight={['40px', '64px']}
                                marginBottom={['40px', '60px']}
                            >
                                투자에 도움되는
                                <br />
                                금융지식 A to Z
                            </Text>
                        </Box>
                        <Box
                            margin={['0 -20px', '0']}
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
                                {tabList.map(tabItem => (
                                    <SwiperSlide key={tabItem.id} style={{ width: 'auto' }}>
                                        <Button
                                            variant="ghost"
                                            position={'relative'}
                                            height={'100%'}
                                            fontSize={18}
                                            fontWeight={600}
                                            whiteSpace={'nowrap'}
                                            padding={'16px 0'}
                                            borderRadius={0}
                                            sx={
                                                tabItem.category === tab && {
                                                    '&:after': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        left: 0,
                                                        bottom: 0,
                                                        width: '100%',
                                                        height: '2px',
                                                        backgroundColor: '#292A2E',
                                                    },
                                                }
                                            }
                                            color={tabItem.category === tab ? '#292A2E' : '#B8BCC8'}
                                            _hover={{ color: '#292A2E' }}
                                            onClick={() => {
                                                router.push(tabItem.link);
                                            }}
                                        >
                                            {tabItem.name}
                                        </Button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>

                        <Box padding={'20px 0 0'}>
                            <Box marginBottom={'20px'}>
                                <ShortSearchForm
                                    placeholder={'궁금하신 내용을 검색해 보세요'}
                                    handleSearch={handleSearch}
                                    keyword={keyword || ''}
                                />
                            </Box>
                            {/* 게시글 리스트 */}
                            {data?.megazines?.megazines?.length > 0 && (
                                <MagazineList
                                    pageConfig={data?.megazines?.pageInfo}
                                    magazines={data?.megazines?.megazines}
                                    handleFetchMore={handleFetchMore}
                                />
                            )}

                            {/* 게시글 없을때 */}
                            {data?.megazines?.megazines?.length === 0 && (
                                <NoList
                                    label={'해당하는 게시물이 없어요'}
                                    btnLabel={'목록으로 돌아가기'}
                                    link={'/magazine?page=1'}
                                />
                            )}
                        </Box>
                    </Box>
                </Layout>
            </Box>
        </>
    );
};

export default MagazineContainer;
