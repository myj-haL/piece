import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { InvestmentDisclosureList, useInvestmentDisclosureListQuery } from '../../../../generated/graphql';
import { useEffect, useState } from 'react';

import ChakraPagiNation from '@/components/Pagination';
import MoreBtn from '@/components/MoreBtn';
import NoList from '@/components/NoList';
import { changeTabtoCode } from '@/hook/useFetchBoard';
import { isMobile } from 'react-device-detect';
import moment from 'moment-timezone';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

interface NoticeProps {
    category: string;
    keyword: string;
    page: string;
    listLink: string;
    sort: string;
    handleChangeCategory: (category: string) => void;
    handleSearch: (keyword: string) => void;
    handleChangeSort: (sort: string) => void;
}

const [LIST_LENGTH, PANNEL_LENGTH] = [10, 5];

const InvestmentDisclosure = ({
    category,
    keyword,
    page,
    listLink,
    handleChangeSort,
    handleSearch,
    sort,
}: NoticeProps) => {
    const { device } = useScreenSize();
    const router = useRouter();
    const [deviceType, setDeviceType] = useState<string>('');
    useEffect(() => {
        setDeviceType(device);
    }, [device]);
    const [boardCategory, setBoardCategory] = useState<string>('');
    const [selectSort, setSelectSort] = useState<string>('');
    const [defaultIndex, setDefaultIndex] = useState<number | null>(null);

    useEffect(() => {
        setSelectSort(sort);
    }, [sort]);

    useEffect(() => {
        const tabCode = changeTabtoCode(category);
        setBoardCategory(tabCode);
    }, [category]);

    const { data, error, loading, fetchMore } = useInvestmentDisclosureListQuery({
        variables: {
            page: parseInt(page),
            pageSize: 10,
            keyword,
            boardCategory,
            sortType: selectSort,
        },
        notifyOnNetworkStatusChange: true,
    });

    const handleFetchMore = async () => {
        await fetchMore({
            variables: {
                page: data?.investmentDisclosureList?.pageInfo?.curPage + 1,
                pageSize: 10,
                keyword,
                boardCategory,
                sortType: selectSort,
            },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousQueryResult;

                const combinedBoards = [
                    ...previousQueryResult.investmentDisclosureList.boards,
                    ...fetchMoreResult.investmentDisclosureList.boards,
                ];

                return {
                    investmentDisclosureList: {
                        ...previousQueryResult.investmentDisclosureList,
                        boards: combinedBoards,
                        pageInfo: {
                            ...fetchMoreResult.investmentDisclosureList.pageInfo,
                            curPage: previousQueryResult.investmentDisclosureList.pageInfo.curPage + 1,
                        },
                    },
                };
            },
        });
    };

    useEffect(() => {
        setDefaultIndex(null);
    }, [data]);

    //218 + 27 +120
    return (
        <>
            {data?.investmentDisclosureList?.boards?.map((item: InvestmentDisclosureList) => {
                const { board_id, board_category_nm, created_at, title } = item;
                return (
                    <Grid
                        m={['0 -20px', '0']}
                        key={board_id}
                        cursor={'pointer'}
                        onClick={() => {
                            router.push(`/disclosure/${board_id}`);
                        }}
                    >
                        <GridItem
                            p={['16px 20px', '16px 0']}
                            borderBottom={'1px solid #F2F3F4'}
                            sx={{
                                '&:first-child': {
                                    borderTop: '1px solid #F2F3F4',
                                },
                            }}
                        >
                            {/* TODO : 구분 카테고리 */}
                            <Text fontSize={14} color={'#8C919F'} fontWeight={600} mb={'8px'}>
                                {board_category_nm}
                            </Text>

                            {/* TODO : 타이틀 */}
                            <Text
                                fontSize={16}
                                as="span"
                                color={'#292A2E'}
                                fontWeight={600}
                                mb={'8px'}
                                lineHeight={'22px'}
                                letterSpacing={'-0.48px'}
                                overflow="hidden"
                                display={'-webkit-box'}
                                sx={{
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: '2',
                                }}
                            >
                                <HighlightKeyword text={title} keyword={keyword} />
                            </Text>

                            <Text fontSize={13} color={'#8C919F'} fontWeight={400}>
                                {moment(created_at).format('YYYY.MM.DD')}
                            </Text>
                        </GridItem>
                    </Grid>
                );
            })}
            {data?.investmentDisclosureList?.boards?.length > 0 ? (
                <Box mt={'16px'}>
                    {isMobile ? (
                        <MoreBtn
                            pageConfig={data?.investmentDisclosureList?.pageInfo}
                            handleFetchMore={handleFetchMore}
                        />
                    ) : (
                        <ChakraPagiNation pageConfig={data?.investmentDisclosureList?.pageInfo} />
                    )}
                </Box>
            ) : (
                <NoList
                    label={'등록된 게시물이 없어요'}
                    btnLabel={'목록으로'}
                    link={'/disclosure?tab=investmentDisclosure&page=1'}
                />
            )}
        </>
    );
};

const HighlightKeyword = ({ text, keyword }) => {
    if (!keyword || !text.toLowerCase().includes(keyword.toLowerCase())) {
        return text;
    }
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return (
        <>
            {parts.map((part, index) =>
                part.toLowerCase() === keyword.toLowerCase() ? (
                    <Text as="p" key={index} color={'#0CB2AD'} display={'inline-block'}>
                        {part}
                    </Text>
                ) : (
                    part
                )
            )}
        </>
    );
};
export default InvestmentDisclosure;
