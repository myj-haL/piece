import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '@/components/Layouts';
import Section1 from '@/containers/producthome/Section1';
import Section2 from '@/containers/producthome/Section2';
import Section3 from '@/containers/producthome/Section3';
import Section4 from '@/containers/producthome/Section4';
import Section5 from '@/containers/producthome/Section5';
import Top from './Top';
import { useProductPageQuery } from '@/generated/graphql';

const ProducthomeContainer = () => {
    const { data } = useProductPageQuery();
    return (
        <>
            <Head>
                <title>PIECE</title>
            </Head>
            <Box>
                <Layout>
                    <Top />
                    <Section1 />
                    {data?.portfoliosSelling?.portfolios?.length > 0 && (
                        <Section2 portfolios={data?.portfoliosSelling?.portfolios} />
                    )}
                    {/* <Section2 portfolios={data?.portfoliosSelling?.portfolios} /> */}
                    {data?.upcomingPortfolios?.portfolios?.length > 0 && (
                        <Section3 portfolios={data?.upcomingPortfolios?.portfolios} />
                    )}
                    <Section4 />
                    <Section5 />
                </Layout>
            </Box>
        </>
    );
};

export default ProducthomeContainer;
