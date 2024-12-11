import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';

import ArrowRightBlueIcon from 'img/producthome/ic_arrow_right_blue.svg';
import BlackBtn from '../BlackBtn';
import Image from 'next/image';
import Link from 'next/link';
import { Portfolio } from '@/generated/graphql';
import ProductReadyArrowImage from 'img/producthome/img_product_ready_arrow.png';
import ProductReadyGuideImage from 'img/producthome/img_product_ready_guide.png';
import QRCode from 'react-qr-code';
import { isMobile } from 'react-device-detect';
import moment from 'moment-timezone';
import useScreenSize from '@/hook/useScreenSize';

interface ProductPlanItemProps {
    portfolio: Portfolio;
}
const ProductPlanItem = ({ portfolio }: ProductPlanItemProps) => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    const [countdown, setCountdown] = useState<{
        countdownString: string;
        countdownType: 'PREOPEN' | 'OPEN' | 'END' | '';
    }>({
        countdownString: '',
        countdownType: '',
    });

    useEffect(() => {
        if (portfolio?.recruitment_begin_date && portfolio?.recruitment_end_date) {
            const recruitmentBeginDateTargetDate = moment.tz(
                portfolio?.recruitment_begin_date,
                'YYYY-MM-DD HH:mm',
                'Asia/Seoul'
            );
            const recruitmentEndDateTargetDate = moment.tz(
                portfolio?.recruitment_end_date,
                'YYYY-MM-DD HH:mm',
                'Asia/Seoul'
            );
            const interval = setInterval(() => {
                const now = moment();
                const recruitmentBeginDateDiff = recruitmentBeginDateTargetDate.valueOf() - now.valueOf();
                if (recruitmentBeginDateDiff <= 0) {
                    const recruitmentEndDateDiff = recruitmentEndDateTargetDate.valueOf() - now.valueOf();
                    if (recruitmentEndDateDiff <= 0) {
                        clearInterval(interval);
                        setCountdown({
                            countdownString: `모집 마감되었어요`,
                            countdownType: 'END',
                        });
                    } else {
                        const duration = moment.duration(recruitmentEndDateDiff);
                        const days = Math.floor(duration.asDays()).toString().padStart(2, '0');
                        const hours = duration.hours().toString().padStart(2, '0');
                        const minutes = duration.minutes().toString().padStart(2, '0');
                        const seconds = duration.seconds().toString().padStart(2, '0');

                        if (days !== '00') {
                            setCountdown({
                                countdownString: `${days}일 ${hours}시간`,
                                countdownType: 'OPEN',
                            });
                        } else {
                            if (hours !== '00') {
                                setCountdown({
                                    countdownString: `${hours}시간 ${minutes}분`,
                                    countdownType: 'OPEN',
                                });
                            } else {
                                if (minutes !== '00') {
                                    setCountdown({
                                        countdownString: `${minutes}분 ${seconds}초`,
                                        countdownType: 'OPEN',
                                    });
                                } else {
                                    setCountdown({
                                        countdownString: `${seconds}초`,
                                        countdownType: 'OPEN',
                                    });
                                }
                            }
                        }
                    }
                } else {
                    const duration = moment.duration(recruitmentBeginDateDiff);

                    const days = Math.floor(duration.asDays()).toString().padStart(2, '0');
                    const hours = duration.hours().toString().padStart(2, '0');
                    const minutes = duration.minutes().toString().padStart(2, '0');
                    const seconds = duration.seconds().toString().padStart(2, '0');

                    if (days !== '00') {
                        setCountdown({
                            countdownString: `${days}일 ${hours}시간`,
                            countdownType: 'PREOPEN',
                        });
                    } else {
                        if (hours !== '00') {
                            setCountdown({
                                countdownString: `${hours}시간 ${minutes}분`,
                                countdownType: 'PREOPEN',
                            });
                        } else {
                            if (minutes !== '00') {
                                setCountdown({
                                    countdownString: `${minutes}분 ${seconds}초`,
                                    countdownType: 'PREOPEN',
                                });
                            } else {
                                setCountdown({
                                    countdownString: `${seconds}초`,
                                    countdownType: 'PREOPEN',
                                });
                            }
                        }
                    }
                }
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [portfolio]);

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    const [isLargerThan961, setScreenSize] = useState<boolean>(true);

    const isClient = typeof window === 'object';

    const getScreenWidth = useCallback(() => {
        return isClient ? window.innerWidth : 0;
    }, [isClient]);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = getScreenWidth();

            if (screenWidth <= 961) {
                setScreenSize(false);
            }

            if (screenWidth > 961) {
                setScreenSize(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [isLargerThan961]);

    const imageRef = useRef<HTMLImageElement>(null);

    const [ImageType, setImageType] = useState(true);
    const handleClick = () => {
        const image = imageRef.current;
        setImageType(!ImageType);
        // if (image) {
        //     // 이미지에 애니메이션 클래스 추가
        //     image.classList.add('animate__animated', 'animate__flipOutY');
        //     setImageType(!ImageType);

        //     // 애니메이션이 끝난 후 클래스 제거
        //     image.addEventListener('animationend', () => {
        //         image.classList.remove('animate__animated', 'animate__flipOutY');
        //     });
        // }
    };

    return deviceType === 'mobile' ? (
        <Box
            onClick={() => {
                if (isMobile) {
                    window.open(portfolio?.share_url, '_blank');
                }
            }}
        >
            {/* <Link href={''}> */}
            <Box
                position={'relative'}
                marginBottom={'16px'}
                width={'100%'}
                aspectRatio={1}
                borderRadius={'24px'}
                overflow={'hidden'}
                ref={imageRef}
                onClick={handleClick}
            >
                {ImageType && (
                    <Image
                        src={portfolio?.represent_thumbnail_image_path}
                        alt="Product Thumbnail Image"
                        fill
                        objectFit="cover"
                        objectPosition="top"
                    />
                )}
                {!ImageType && (
                    <QRCode
                        value={portfolio?.share_url}
                        style={{
                            margin: '0 auto',
                            height: '100%',
                            width: '100%',
                            // marginBottom: '42px',
                            objectPosition: 'center',
                        }}
                    />
                )}
            </Box>
            <Box marginBottom={'16px'}>
                <Text
                    fontSize="14px"
                    fontWeight="600"
                    lineHeight="20px"
                    letterSpacing="-3%"
                    marginBottom={'8px'}
                    color="#757983"
                >
                    투자계약증권 {portfolio?.sub_title}호
                </Text>
                <Text
                    fontSize="22px"
                    fontWeight="600"
                    lineHeight="28px"
                    letterSpacing="-3%"
                    color="#292A2E"
                    wordBreak={'keep-all'}
                >
                    {portfolio?.title}
                </Text>
            </Box>
            <Box marginBottom={'16px'}>
                <Text
                    fontSize="16px"
                    fontWeight="600"
                    lineHeight="22px"
                    letterSpacing="-3%"
                    marginBottom={'4px'}
                    color="#292A2E"
                >
                    {countdown?.countdownType === 'PREOPEN' && (
                        <>
                            청약까지{' '}
                            <Text as={'strong'} color={'#F65F5F'}>
                                {countdown?.countdownString}
                            </Text>{' '}
                            남았어요
                        </>
                    )}
                    {countdown?.countdownType === 'OPEN' && (
                        <>
                            마감까지{' '}
                            <Text as={'strong'} color={'#F65F5F'}>
                                {countdown?.countdownString}
                            </Text>{' '}
                            남았어요
                        </>
                    )}
                    {countdown?.countdownType === 'END' && (
                        <>
                            <Text>{countdown?.countdownString}</Text>
                        </>
                    )}
                </Text>
                <Text fontSize="13px" fontWeight="400" lineHeight="18px" letterSpacing="-3%" color="#8C919F">
                    {portfolio?.notificationCount}명이 오픈 알림을 신청했어요!
                </Text>
            </Box>
            {/* </Link> */}
            <Box>
                <Button
                    as={'a'}
                    href="/guide"
                    fontSize={'16px'}
                    fontWeight={'600'}
                    lineHeight={'22px'}
                    letterSpacing={'-3%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'4px'}
                    padding={'9px 0'}
                    width={'fit-content'}
                    background={'transparent'}
                    color={'#1C93FF'}
                >
                    청약 가이드 보기
                    <Image src={ArrowRightBlueIcon} alt="Guide Link Icon" width={16} height={16} />
                </Button>
            </Box>
        </Box>
    ) : (
        <Box position={'relative'} display={'flex'} gap={'40px'}>
            <Box
                position={'relative'}
                width={'320px'}
                borderRadius={'32px'}
                aspectRatio={'320/400'}
                backgroundColor={'#EFEFEF'}
                overflow={'hidden'}
            >
                <Image
                    src={portfolio?.represent_thumbnail_image_path}
                    alt="Product Thumbnail Image"
                    fill
                    objectFit="cover"
                    objectPosition="top"
                />
            </Box>
            <Flex flex={1} flexDirection={'column'} justifyContent={'space-between'}>
                <Box paddingBlock={'24px'}>
                    <Flex flexDirection={'column'} gap={'24px'}>
                        <Box>
                            <Text
                                fontSize="14px"
                                fontWeight="600"
                                lineHeight="20px"
                                letterSpacing="-3%"
                                marginBottom={'8px'}
                                color="#757983"
                            >
                                투자계약증권 {portfolio?.sub_title}호
                            </Text>
                            <Text
                                fontSize="32px"
                                fontWeight="700"
                                lineHeight="44px"
                                letterSpacing="-3%"
                                color="#131313"
                                wordBreak={'keep-all'}
                            >
                                {portfolio?.title}
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                fontSize="16px"
                                fontWeight="600"
                                lineHeight="22px"
                                letterSpacing="-3%"
                                marginBottom={'4px'}
                                color="#292A2E"
                            >
                                {countdown?.countdownType === 'PREOPEN' && (
                                    <>
                                        청약까지{' '}
                                        <Text as={'strong'} color={'#F65F5F'}>
                                            {countdown?.countdownString}
                                        </Text>{' '}
                                        남았어요
                                    </>
                                )}
                                {countdown?.countdownType === 'OPEN' && (
                                    <>
                                        마감까지{' '}
                                        <Text as={'strong'} color={'#F65F5F'}>
                                            {countdown?.countdownString}
                                        </Text>{' '}
                                        남았어요
                                    </>
                                )}
                                {countdown?.countdownType === 'END' && (
                                    <>
                                        <Text>{countdown?.countdownString}</Text>
                                    </>
                                )}
                                {/* 청약까지{' '}
                                <Text as={'strong'} color={'#F65F5F'}>
                                    6일 23시간
                                </Text>{' '}
                                남았어요 */}
                            </Text>
                            <Text
                                fontSize="13px"
                                fontWeight="400"
                                lineHeight="18px"
                                letterSpacing="-3%"
                                color="#8C919F"
                            >
                                {portfolio?.notificationCount}명이 오픈 알림을 신청했어요!
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                <Flex gap={'16px'}>
                    <Box position={'relative'} flex={1} overflow={'hidden'}>
                        <Link href={'/'}>
                            <Box
                                position={'relative'}
                                padding={'35px 24px'}
                                borderRadius={'16px'}
                                background={'linear-gradient(96.52deg, #E7F3FF 0%, #BDDFFF 100%)'}
                            >
                                <Text
                                    fontSize="18px"
                                    fontWeight="600"
                                    lineHeight="24px"
                                    letterSpacing="-3%"
                                    marginBottom={'16px'}
                                    color="#292A2E"
                                >
                                    청약 신청하기 전에
                                    <br />
                                    미리 확인해 보세요
                                </Text>
                                <BlackBtn btnCategory={'a'} text={'청약 가이드 보기'} link="/guide" />
                                <Box
                                    position={'absolute'}
                                    bottom={0}
                                    right={'80px'}
                                    display={isLargerThan961 ? 'block' : 'none'}
                                    width={'50%'}
                                    aspectRatio={'332/166'}
                                >
                                    <Image
                                        src={ProductReadyGuideImage}
                                        alt="Product Ready Guide Image"
                                        fill
                                        objectFit="cover"
                                        objectPosition="center"
                                    />
                                </Box>
                                <Box position={'absolute'} right={0} bottom={0}>
                                    <Image
                                        src={ProductReadyArrowImage}
                                        alt="Product Ready Arrow Image"
                                        width={96}
                                        height={96}
                                    />
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                    <Box padding={'8px'} height={'166px'} borderRadius={'16px'} backgroundColor={'#131313'}>
                        <Box
                            position={'relative'}
                            marginBottom={'8px'}
                            padding={'20px'}
                            width={'120px'}
                            aspectRatio={1}
                            borderRadius={'8px'}
                            backgroundColor={'#FFFFFF'}
                        >
                            {/* <Image src={QrImage} alt="qr" fill objectFit="cover" objectPosition="center" /> */}
                            <QRCode
                                value={portfolio?.share_url}
                                style={{
                                    margin: '0 auto',
                                    height: '100%',
                                    width: '100%',
                                    // marginBottom: '42px',
                                    objectPosition: 'center',
                                }}
                            />
                        </Box>
                        <Text
                            fontSize={'16px'}
                            fontWeight={'600'}
                            lineHeight={'22px'}
                            letterSpacing={'-3%'}
                            textAlign={'center'}
                            color={'#FFFFFF'}
                        >
                            오픈 알림 받기
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default ProductPlanItem;
