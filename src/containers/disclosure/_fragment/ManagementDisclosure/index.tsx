import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { TBoard, useBoardsQuery } from '../../../../generated/graphql';
import { useEffect, useMemo, useState } from 'react';

import ChakraPagiNation from '@/components/Pagination';
import MoreBtn from '@/components/MoreBtn';
import NoList from '@/components/NoList';
import { isMobile } from 'react-device-detect';
import moment from 'moment-timezone';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

interface ManagementDisclosureProps {
    category: string;
    keyword: string;
    page: string;
    sort: string;
    listLink: string;
    handleChangeCategory: (category: string) => void;
    handleSearch: (keyword: string) => void;
    handleChangeSort: (sort: string) => void;
}

const [LIST_LENGTH, PANNEL_LENGTH] = [10, 5];

const getCategoryIndex = (category: string) => {
    switch (category) {
        case 'BRT0703':
            return 1;
        case 'BRT0702':
            return 2;
        case 'BRT0701':
            return 3;
        case 'BRT0704':
            return 4;
        default:
            return 0;
    }
};

const ManagementDisclosure = ({
    category,
    keyword,
    page,
    listLink,
    handleChangeCategory,
    handleSearch,
    sort,
    handleChangeSort,
}: ManagementDisclosureProps) => {
    const router = useRouter();
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');
    useEffect(() => {
        setDeviceType(device);
    }, [device]);
    const categoryIndex = useMemo(() => getCategoryIndex(category), [category]);
    const [boardCategory, setBoardCategory] = useState<string>('');
    const [selectSort, setSelectSort] = useState<string>('');
    const [keywordText, setKeywordText] = useState<string>('');
    const [defaultIndex, setDefaultIndex] = useState<number | null>(null);
    useEffect(() => {
        setBoardCategory(category);
    }, [category]);
    useEffect(() => {
        setSelectSort(sort);
    }, [sort]);

    const { data, error, loading, fetchMore, variables } = useBoardsQuery({
        variables: {
            page: parseInt(page),
            pageSize: isMobile ? parseInt(page) * 10 : 10,
            keyword,
            boardType: 'BRT07',
            boardCategory,
            sortType: sort,
        },
        notifyOnNetworkStatusChange: true,
    });

    const handleFetchMore = async () => {
        await fetchMore({
            variables: {
                page: data?.boards?.pageInfo?.curPage + 1,
                pageSize: 10,
                keyword,
                boardType: 'BRT07',
                boardCategory,
                sortType: sort,
            },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousQueryResult;

                const combinedBoards = [...previousQueryResult.boards.boards, ...fetchMoreResult.boards.boards];

                return {
                    boards: {
                        ...previousQueryResult.boards,
                        boards: combinedBoards,
                        pageInfo: {
                            ...fetchMoreResult.boards.pageInfo,
                            curPage: previousQueryResult.boards.pageInfo.curPage + 1,
                        },
                    },
                };
            },
        });
    };

    useEffect(() => {
        setDefaultIndex(null);
    }, [data]);

    return (
        <>
            {data?.boards?.boards?.map((item: TBoard) => {
                const { board_id, board_type_nm, created_at, title } = item;
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
                                {board_type_nm}
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

                            {/* TODO : 날짜 */}
                            <Text fontSize={13} color={'#8C919F'} fontWeight={400}>
                                {moment(item?.created_at).format('YYYY.MM.DD')}
                            </Text>
                        </GridItem>
                    </Grid>
                );
            })}
            {data?.boards?.boards?.length > 0 ? (
                <Box mt={'16px'}>
                    {isMobile ? (
                        <MoreBtn pageConfig={data?.boards?.pageInfo} handleFetchMore={handleFetchMore} />
                    ) : (
                        <ChakraPagiNation pageConfig={data?.boards?.pageInfo} />
                    )}
                </Box>
            ) : (
                <NoList
                    label={'등록된 게시물이 없어요'}
                    btnLabel={'목록으로'}
                    link={'/disclosure?tab=companyDisclosure&page=1'}
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
export default ManagementDisclosure;
