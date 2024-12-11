import { Box, Button, Flex } from '@chakra-ui/react';
import {
    Pagination,
    PaginationContainer,
    PaginationNext,
    PaginationPage,
    PaginationPageGroup,
    PaginationPrevious,
    PaginationSeparator,
    usePagination,
} from '@ajna/pagination';

import Image from 'next/image';
import PagingArrowIcon from 'img/common/ic-arrow-paging.svg';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

interface ChakraPagiNation {
    pageConfig: {
        totalLength: number;
        listLength: number;
        curPage: number;
    };
}
const ChakraPagiNation = ({ pageConfig: { totalLength, listLength, curPage } }: ChakraPagiNation) => {
    const router = useRouter();
    const { device } = useScreenSize();
    const {
        pages,
        pagesCount,
        // offset,
        currentPage,
        setCurrentPage,
        // setIsDisabled,
        isDisabled,
        // pageSize,
        // setPageSize,
    } = usePagination({
        total: totalLength,
        limits: {
            outer: 1,
            inner: device === 'mobile' ? 1 : Math.floor(5 / 2),
        },
        initialState: {
            pageSize: listLength,
            // isDisabled: false,
            currentPage: curPage,
        },
    });
    const handlePageChange = (nextPage: number): void => {
        setCurrentPage(nextPage);
        const path = router.asPath.split('page')[0] + 'page=';
        router.push(path + nextPage);
    };

    useEffect(() => {
        setCurrentPage(curPage);
    }, [curPage, setCurrentPage]);
    return (
        <>
            <Flex gap={'8px'} justifyContent={'center'}>
                {/* <Box as="button" padding={'14px'}>
                    <Image alt="paging icon" src={PagingArrowIcon} />
                </Box>

                <Button
                    padding={'12px 16px'}
                    variant={'ghost'}
                    fontSize={16}
                    fontWeight={600}
                    color={'#B8BCC8'}
                    w={'44px'}
                    h={'44px'}
                    _hover={{
                        backgroundColor: 'transparent',
                        color: '#292A2E',
                    }}
                    _active={{
                        backgroundColor: 'transparent',
                        color: '#292A2E',
                    }}
                >
                    1
                </Button>

                <Box as="button" padding={'14px'} transform="rotate(180deg)">
                    <Image alt="paging icon" src={PagingArrowIcon} />
                </Box> */}
                <Pagination
                    pagesCount={pagesCount}
                    currentPage={currentPage}
                    isDisabled={isDisabled}
                    onPageChange={handlePageChange}
                >
                    <PaginationContainer
                        align="center"
                        justify="space-between"
                        // p={4}
                        w="100%"
                        maxW="500px"
                        py={['50px', '50px', '100px']}
                    >
                        <PaginationPrevious
                            as="button"
                            padding={'14px'}
                            backgroundColor={'transparent'}
                            onClick={() =>
                                console.log('Im executing my own function along with Previous component functionality')
                            }
                        >
                            <Image alt="paging icon" src={PagingArrowIcon} />
                        </PaginationPrevious>
                        <PaginationPageGroup
                            isInline
                            align="center"
                            separator={
                                <PaginationSeparator
                                    onClick={() =>
                                        console.log(
                                            'Im executing my own function along with Separator component functionality'
                                        )
                                    }
                                    // bg="blue.300"
                                    fontSize="sm"
                                    w={[6, 8]}
                                    jumpSize={device === 'mobile' ? 3 : Math.floor(5)}
                                />
                            }
                        >
                            {pages.map((page: number) => (
                                <PaginationPage
                                    w={[6, 8]}
                                    bg="none"
                                    key={`pagination_page_${page}`}
                                    page={page}
                                    color={'#B8BCC8'}
                                    onClick={() =>
                                        console.log(
                                            'Im executing my own function along with Page component functionality'
                                        )
                                    }
                                    fontSize={['15px', '14px', '16px']}
                                    _hover={{
                                        backgroundColor: 'transparent',
                                        color: '#292A2E',
                                    }}
                                    _current={{
                                        color: '#292A2E',
                                        fontSize: ['15px', '14px', '16px'],
                                        w: [6, 8],
                                    }}
                                />
                            ))}
                        </PaginationPageGroup>
                        <PaginationNext
                            as="button"
                            padding={'14px'}
                            transform="rotate(180deg)"
                            backgroundColor={'transparent'}
                            onClick={() =>
                                console.log('Im executing my own function along with Next component functionality')
                            }
                        >
                            <Image alt="paging icon" src={PagingArrowIcon} />
                        </PaginationNext>
                    </PaginationContainer>
                </Pagination>
            </Flex>
        </>
    );
};

export default ChakraPagiNation;
