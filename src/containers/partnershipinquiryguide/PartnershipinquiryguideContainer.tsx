import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

import { Box, Flex, Link, Text, keyframes } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { guideList, partnerSlide, processList } from './partnerSlide';
import { useEffect, useState } from 'react';

import AOS from 'aos';
import DownIcon from 'img/partnerShip/ic_download.svg';
import EndImg from 'img/partnerShip/img_partnership_end.png';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layouts';
import MainImg from 'img/partnerShip/img_partnership.png';
import { Pagination } from 'swiper/modules';
import PlaneIcon from 'img/partnerShip/ic_airplane.svg';
import { motion } from 'framer-motion';
import useScreenSize from '@/hook/useScreenSize';

const PartnershipinquiryguideContainer = () => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    const breakpoints = {
        base: '0px',
        md: '768px',
        lg: '1200px',
    };

    useEffect(() => {
        AOS.init();
    });

    const animationKeyframes = keyframes`
        0% {opacity:0; transform: translate3d(0, 7%, 0);}
        100% {opacity:1; transform: translate3d(0, 0, 0);}
    `;

    const animation = `${animationKeyframes} 1s ease-in-out`;

    const sendEmail = () => {
        const email = 'joseph@buysellstandards.com';
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    };
    return (
        <>
            <Head>
                <title>PIECE</title>
            </Head>
            <Box>
                <Layout>
                    <Box padding={['40px 20px 0', '60px 20px 0']}>
                        <Box
                            textAlign="center"
                            as={motion.div}
                            animation={animation}
                            position="sticky"
                            top={[104, 164]}
                        >
                            <Text
                                fontSize={[18, 28]}
                                color="#1C93FF"
                                letterSpacing="-0.54px"
                                marginBottom={['16px', '24px']}
                                fontWeight="600"
                            >
                                희망을 실현하는 도전의 공간
                            </Text>
                            <Text
                                fontSize={[32, 64]}
                                color="#131313"
                                letterSpacing="-0.96px"
                                marginBottom={['24px', '40px']}
                                fontWeight="700"
                                lineHeight={['44px', '84px']}
                            >
                                함께 성장해요
                                <br />
                                Let&apos;s PIECE!
                            </Text>
                            <Box
                                as="button"
                                borderRadius="100px"
                                padding="15px 20px"
                                backgroundColor="#1C93FF"
                                display="flex"
                                gap="4px"
                                fontSize="16px"
                                color="#fff"
                                fontWeight="600"
                                letterSpacing="-0.48px"
                                margin="0 auto 21px"
                                alignItems="center"
                                _hover={{ bg: '#49A9FF' }}
                                onClick={() => {
                                    sendEmail();
                                }}
                            >
                                <Image src={PlaneIcon} alt="airplane" width={16} height={16} />
                                제휴 제안하기
                            </Box>
                            <Link
                                href=""
                                download={true}
                                display="flex"
                                gap="4px"
                                fontSize="16px"
                                color="#292A2E"
                                fontWeight="600"
                                letterSpacing="-0.48px"
                                justifyContent="center"
                                margin={['0 auto 37px', '0 auto 53px']}
                                alignItems="center"
                                _hover={{ bg: '#F6F6F6' }}
                                width="fit-content"
                                borderRadius="100px"
                                padding="13px 20px"
                            >
                                <Image alt="download" width={16} height={16} src={DownIcon} />
                                회사 소개서 다운로드
                            </Link>
                            <Box margin="0 auto" width="fit-content">
                                <Image
                                    alt="flower"
                                    src={MainImg}
                                    objectFit="cover"
                                    height={deviceType === 'mobile' ? 180 : 520}
                                />
                            </Box>
                        </Box>

                        <Box
                            padding={['40px 20px 53px', '120px 20px 120px']}
                            position="sticky"
                            top={0}
                            backgroundColor="#131313"
                            margin="0 -20px"
                            display="flex"
                            flexDirection="column"
                            gap={['92px', '240px']}
                        >
                            <Box textAlign="center" data-aos="fade-up" data-aos-duration="2000">
                                <Text
                                    fontSize={[18, 28]}
                                    color="#1C93FF"
                                    letterSpacing="-0.54px"
                                    marginBottom="16px"
                                    fontWeight="600"
                                >
                                    제휴 유형
                                </Text>
                                <Text
                                    fontSize={[28, 48]}
                                    color="#fff"
                                    letterSpacing="-0.84px"
                                    marginBottom={['20px', '60px']}
                                    fontWeight="600"
                                >
                                    다양한 제안을
                                    <br />
                                    기다리고 있어요
                                </Text>

                                <Box margin={['0 -20px', '0 auto']} maxWidth={1220} className="partner-slide">
                                    <Swiper
                                        slidesPerView={1.15}
                                        spaceBetween={12}
                                        centeredSlides={true}
                                        pagination={true}
                                        modules={[Pagination]}
                                        breakpoints={{
                                            992: {
                                                allowTouchMove: true,
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                                pagination: false,
                                                centeredSlides: false,
                                            },
                                        }}
                                    >
                                        {partnerSlide.map(item => (
                                            <SwiperSlide
                                                key={item.id}
                                                style={{ borderRadius: '24px', overflow: 'hidden' }}
                                            >
                                                <Image
                                                    src={item.img}
                                                    alt="slide img"
                                                    style={{ aspectRatio: '2/1.4', width: '100%', objectFit: 'cover' }}
                                                />
                                                <Box padding="24px" backgroundColor="#fff" textAlign="left">
                                                    <Text
                                                        fontSize={['14px', '16px']}
                                                        opacity="0.5"
                                                        letterSpacing="-0.42px"
                                                        marginBottom="16px"
                                                        fontWeight="600"
                                                        color="#292A2E"
                                                    >
                                                        {item.subTitle}
                                                    </Text>
                                                    <Text
                                                        fontSize={['18px', '28px']}
                                                        letterSpacing="-0.54px"
                                                        marginBottom="24px"
                                                        fontWeight="600"
                                                        color="#292A2E"
                                                        lineHeight={['24px', '40px']}
                                                        whiteSpace={'pre-wrap'}
                                                    >
                                                        {item.title}
                                                    </Text>

                                                    <Flex gap="8px">
                                                        {item.label.map(subItem => (
                                                            <Box
                                                                key={subItem.id}
                                                                padding="4px 10px"
                                                                fontSize={14}
                                                                fontWeight={600}
                                                                color="#4A4D55"
                                                                borderRadius={100}
                                                                backgroundColor="#F2F3F4"
                                                            >
                                                                {subItem.content}
                                                            </Box>
                                                        ))}
                                                    </Flex>
                                                </Box>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Box>
                            </Box>

                            <Box textAlign="center" data-aos="fade-up" data-aos-duration="2000">
                                <Text
                                    fontSize={[18, 28]}
                                    color="#1C93FF"
                                    letterSpacing="-0.54px"
                                    marginBottom="16px"
                                    fontWeight="600"
                                >
                                    절차 안내
                                </Text>
                                <Text
                                    fontSize={[28, 48]}
                                    color="#fff"
                                    letterSpacing="-0.84px"
                                    marginBottom={['20px', '60px']}
                                    fontWeight="600"
                                >
                                    절차를 안내해 드려요
                                </Text>

                                <Flex alignItems="flex-start" justifyContent="center" gap={['52px', '200px']}>
                                    {processList.map(item => (
                                        <Box
                                            key={item.id}
                                            position="relative"
                                            sx={{
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    background: `url('/images/partnership/ic_dots.svg') no-repeat center `,
                                                    width: deviceType === 'mobile' ? '20px' : '40px',
                                                    height: deviceType === 'mobile' ? '20px' : '40px',
                                                    backgroundSize: 'cover',
                                                    position: 'absolute',
                                                    right: deviceType === 'mobile' ? '-33px' : '-113px',
                                                    top: deviceType === 'mobile' ? '28px' : '45px',
                                                },
                                                '&:last-child:before': {
                                                    display: 'none',
                                                },
                                            }}
                                        >
                                            <Image
                                                alt="process img"
                                                src={item.img}
                                                width={deviceType === 'mobile' ? 64 : 128}
                                                style={{ margin: '0 auto' }}
                                            />
                                            <Text
                                                fontSize={[16, 28]}
                                                color="#fff"
                                                letterSpacing="-0.54px"
                                                marginTop={['16px', '24px']}
                                                fontWeight="600"
                                                whiteSpace={'pre-wrap'}
                                            >
                                                {item.name}
                                            </Text>
                                        </Box>
                                    ))}
                                </Flex>
                            </Box>

                            <Box textAlign="center" data-aos="fade-up" data-aos-duration="2000">
                                <Text
                                    fontSize={[18, 28]}
                                    color="#1C93FF"
                                    letterSpacing="-0.54px"
                                    marginBottom="16px"
                                    fontWeight="600"
                                >
                                    제안 작성 가이드
                                </Text>
                                <Text
                                    fontSize={[28, 48]}
                                    color="#fff"
                                    letterSpacing="-0.84px"
                                    marginBottom={['20px', '40px']}
                                    fontWeight="600"
                                    lineHeight={['40px', '64px']}
                                >
                                    아래 내용을
                                    <br />꼭 포함해 주세요
                                </Text>

                                <Flex
                                    flexDirection={deviceType === 'mobile' ? 'column' : 'row'}
                                    gap="20px"
                                    alignContent="stretch"
                                    textAlign="left"
                                    maxWidth="1220px"
                                    margin="0 auto"
                                >
                                    {guideList.map(item => (
                                        <Box
                                            key={item.id}
                                            backgroundColor="#1F1F1F"
                                            borderRadius={24}
                                            padding={['24px', '40px']}
                                        >
                                            {deviceType === 'mobile' ? (
                                                <Image alt="icon" src={item.img} width={40} />
                                            ) : (
                                                <Image alt="icon" src={item.img} width={48} />
                                            )}
                                            <Text
                                                fontSize={[18, 28]}
                                                color="#fff"
                                                fontWeight="600"
                                                marginTop="24px"
                                                marginBottom="16px"
                                            >
                                                {item.title}
                                            </Text>
                                            <Text fontSize={[14, 16]} color="#8C919F" fontWeight="600">
                                                {item.content}
                                            </Text>
                                        </Box>
                                    ))}
                                </Flex>
                            </Box>

                            <Box
                                textAlign="center"
                                display="grid"
                                gap={['32px', '40px']}
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                {deviceType === 'mobile' ? (
                                    <Image alt="end img" src={EndImg} width={120} style={{ margin: '0 auto' }} />
                                ) : (
                                    <Image alt="end img" src={EndImg} width={240} style={{ margin: '0 auto' }} />
                                )}

                                <Text
                                    fontSize={[28, 48]}
                                    color="#fff"
                                    letterSpacing="-0.84px"
                                    fontWeight="600"
                                    lineHeight={['40px', '64px']}
                                >
                                    가능성을 현실로 만드는
                                    <br />
                                    비즈니스 파트너
                                    <br />
                                    Let&apos;s PIECE!
                                </Text>
                                <Box
                                    as="button"
                                    borderRadius="100px"
                                    padding="15px 20px"
                                    backgroundColor="#1C93FF"
                                    display="flex"
                                    gap="4px"
                                    fontSize="16px"
                                    color="#fff"
                                    fontWeight="600"
                                    letterSpacing="-0.48px"
                                    margin="0 auto"
                                    alignItems="center"
                                    _hover={{ bg: '#49A9FF' }}
                                    onClick={() => {
                                        sendEmail();
                                    }}
                                >
                                    <Image src={PlaneIcon} alt="airplane" width={16} height={16} />
                                    제휴 제안하기
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Layout>
            </Box>
        </>
    );
};

export default PartnershipinquiryguideContainer;
