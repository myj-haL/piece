import { Box } from '@chakra-ui/react';

import Head from 'next/head';

import Layout from '@/components/Layouts';

import Section1 from '@/components/Business/Section1';
import Section2 from '@/components/Business/Section2';
import Section3 from '@/components/Business/Section3';
import Section4 from '@/components/Business/Section4';
import Story from '@/components/Business/Story';
import Brand from '@/components/Business/Brand';

const BusinessContainer = () => {
  return (
    <>
      <Head>
        <title>PIECE</title>
      </Head>
      <Box>
        <Layout>
          <Box
            position="relative"
            height={['2600vh']}
          >
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Box
              height={['100vh']}
              backgroundColor="#000000"
            />
          </Box>
          <Story />
          <Brand />
        </Layout>
      </Box>
    </>
  );
};

export default BusinessContainer;
