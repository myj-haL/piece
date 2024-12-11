import { useEffect, useState } from 'react';

import Head from 'next/head';

import { Box, Wrap } from '@chakra-ui/react';

import NoResult from './NoResult';
import Result from './Result';

import Layout from '@/components/Layouts'; 
import SearchBar from '@/components/SearchBar';

import useScreenSize from '@/hook/useScreenSize';
import Pagination from '@/components/Pagination';

const SearchResultContainer = () => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    return (
        <>
            <Head>
                <title>PIECE</title>
            </Head>
            <Box>
                <Layout>
                    <Box>
                        <Wrap
                            margin={'0 auto'}
                            padding={['40px 20px', '60px 0']}
                            width={['100%', '760px']}
                        >
                            <SearchBar
                                size={deviceType === "mobile" ? 'M' : 'L'}
                                placeholder='증권 상품을 검색해보세요!'
                            />
                        </Wrap>

                        {/* 검색 결과가 없을 때 */}
                        {/* <NoResult /> */}

                        {/* 검색 결과가 있을 때 */}
                        <Result />
                    </Box>
                </Layout >
            </Box >
        </>
    );
};

export default SearchResultContainer;
