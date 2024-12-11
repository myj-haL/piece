import 'aos/dist/aos.css';

import { Box, Button, Flex, Text, keyframes } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import AOS from 'aos';
import BankingKnowledge from './BankingKnowledge';
import FirstSection from './FirstSection';
import GradientSearchForm from '@/components/GradientSearchForm';
import Head from 'next/head';
import Layout from '@/components/Layouts';
import MobileQr from '../qr/MobileQr';
import News from './News';
import PcQr from '../qr/PcQr';
import { useMainPageQuery } from '@/generated/graphql';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';
import LineUpSlide from '../../components/LineUpSlide';

const MainContainer = ({ children }) => {
    const router = useRouter();
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    useEffect(() => {
        AOS.init();
    });

    const animationKeyframes = keyframes`
        0% {opacity:0; transform: translate3d(0, 7%, 0);}
        100% {opacity:1; transform: translate3d(0, 0, 0);}
    `;

    const animation = `${animationKeyframes} 1s ease-in-out`;

    const { data } = useMainPageQuery();

    return (
        <>
            <Head>
                <title>PIECE</title>
            </Head>
            <Box>
                <Layout>
                    <Box padding={['40px 20px', '60px 20px 120px']} maxW={'1460px'} m={'0 auto'}>
                        <Box
                            // animation={animation}
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <Text
                                fontSize={[32, 64]}
                                color={'#131313'}
                                fontWeight={800}
                                lineHeight={['44px', '84px']}
                                mb={['20px', '40px']}
                                textAlign={'center'}
                                whiteSpace={'pre-wrap'}
                                wordBreak={'keep-all'}
                            >
                                {deviceType === 'mobile'
                                    ? `더 쉽고 안전하게,\n부자되는 투자 제안`
                                    : '더 쉽고 안전하게, 부자되는 투자 제안'}
                            </Text>

                            <Box display={['none', 'block']}>
                                {/* TODO : 검색 폼 */}
                                <GradientSearchForm />

                                {/* TODO : 해시태크 */}
                                <Flex
                                    alignItems={'center'}
                                    maxW={'1420px'}
                                    flexWrap={'wrap'}
                                    m={'27px auto 0'}
                                    justifyContent={'center'}
                                    gap={'8px'}
                                >
                                    <Button
                                        p={'12px 16px'}
                                        fontSize={16}
                                        color={'#292A2E'}
                                        fontWeight={600}
                                        letterSpacing={'-0.48px'}
                                        borderRadius={'100px'}
                                        bg={'#F2F3F4'}
                                        _hover={{
                                            bg: '#E9EAEB',
                                        }}
                                        onClick={() => {
                                            router.push(`/producthome?tab=list&keyword=청약 가이드&page=1`);
                                        }}
                                    >
                                        청약 가이드
                                    </Button>
                                </Flex>
                            </Box>
                        </Box>

                        <FirstSection />
                        <Box p={['40px 0', '120px 0']}>
                        <Text fontSize={[22, 48]} fontWeight={700} lineHeight={['28px', '64px']}>
                            PIECE와 함께하는
                            <br />
                            성공 STO 라인업
                        </Text>
                            <LineUpSlide />
                        </Box>
                        <BankingKnowledge magazines={data?.megazines?.megazines} />
                        <News press={data?.press?.boards} notices={data?.notices?.boards} />

                        {deviceType === 'mobile' && (
                            <Box pt={['40px', '120px']} data-aos="fade-up" data-aos-duration="2000">
                                <MobileQr />
                            </Box>
                        )}
                        {deviceType !== 'mobile' && (
                            <Box pt={['40px', '120px']} data-aos="fade-up" data-aos-duration="2000">
                                <PcQr />
                            </Box>
                        )}
                    </Box>
                </Layout>
            </Box>
        </>
    );
};

export default MainContainer;
