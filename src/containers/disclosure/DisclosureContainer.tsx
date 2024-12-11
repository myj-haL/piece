import { Box, Text } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

import Disclosure from './Disclosure';
import Head from 'next/head';
import Layout from '@/components/Layouts';
import { useRouter } from 'next/router';

const DisclosureContainer = () => {
    const router = useRouter();
    const [listLink, setListLink] = useState('');
    const {
        category,
        keyword,
        tab,
        page = '1',
        sort,
    } = router.query as {
        category: string;
        keyword: string;
        tab: string;
        page: string;
        sort: string;
    };

    const handleChangeCategory = useCallback(
        (category: string) => {
            router.push(`/disclosure?tab=companyDisclosure&category=${category}&page=1`);
        },
        [router]
    );

    const handleChangeSort = useCallback(
        (sort: string) => {
            router.push(
                `/disclosure?tab=${tab}${category ? `&category=${category}` : ''}${
                    keyword ? `&keyword=${keyword}` : ''
                }&sort=${sort}&page=1`
            );
        },
        [router]
    );

    const handleSearch = useCallback(
        (_keyword: string) => {
            if (!keyword) {
                setListLink(router.asPath);
            }
            router.push(
                `/disclosure?tab=${tab}${category ? `&category=${category}` : ''}&keyword=${_keyword}${
                    sort ? `&sort=${sort}` : ''
                }&page=1`
            );
        },
        [tab, category, router, keyword]
    );

    return (
        <>
            <Head>
                <title>PIECE</title>
            </Head>
            <Box>
                <Layout>
                    <Box p={['40px 20px', '60px 20px 80px']}>
                        <Box textAlign={'center'}>
                            <Text fontSize={[14, 18]} color={'#8C919F'} fontWeight={600} mb={['16px', '24px']}>
                                공시
                            </Text>

                            <Text
                                fontSize={[28, 48]}
                                color={'#131313'}
                                fontWeight={[600, 700]}
                                mb={['40px', '60px']}
                                lineHeight={['40px', '64px']}
                                whiteSpace={'pre-wrap'}
                            >
                                투자에 필요한 정보를
                                <br />
                                알려드려요
                            </Text>
                        </Box>
                        <Disclosure
                            {...{
                                tab,
                                category,
                                keyword,
                                page,
                                handleChangeCategory,
                                handleSearch,
                                listLink,
                                sort,
                                handleChangeSort,
                            }}
                        />
                    </Box>
                </Layout>
            </Box>
        </>
    );
};

export default DisclosureContainer;
