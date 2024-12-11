import { Box, Flex, List, ListItem, Tag, Text, useBoolean } from '@chakra-ui/react';
import { Portfolio, useGetCompetitionRateQuery } from '@/generated/graphql';
import { useEffect, useState } from 'react';

import ChevronDownIcon from 'img/producthome/ic_chevron_down.svg';
import ChevronUpIcon from 'img/producthome/ic_chevron_up.svg';
import Image from 'next/image';
import Link from 'next/link';
import ProductThumbnailImage from 'img/producthome/img_product_thunbnail.jpg';
import QRCode from 'react-qr-code';
import QrImage from 'img/qr/img_qr.png';
import { isMobile } from 'react-device-detect';
import moment from 'moment-timezone';
import useScreenSize from '@/hook/useScreenSize';

const ProductProgressItem = ({
    portfolio,
    isGuideClose = false,
    onCloseGuide = () => null,
}: {
    portfolio: Portfolio;
    isGuideClose?: boolean;
    onCloseGuide?: () => void;
}) => {
    const [isGuideOpen, setOpenGuide] = useBoolean(isGuideClose);

    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    useEffect(() => {
        if (isGuideClose) {
            setOpenGuide.off();
        }
    }, [isGuideClose]);

    const handleToggleGuide = () => {
        onCloseGuide();
        setOpenGuide.toggle();
    };

    const [countdown, setCountdown] = useState<{
        countdownString: string;
        countdownType: 'PREOPEN' | 'OPEN' | 'END' | '';
    }>({
        countdownString: '',
        countdownType: '',
    });

    // useEffect(() => {
    //     if (countdown?.countdownType === 'OPEN') {
    //         refetch();
    //     }
    // }, [countdown]);

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
        if (countdown?.countdownType === 'OPEN') {
            const interval = setInterval(() => {
                if (countdown?.countdownType === 'OPEN') {
                    refetch();
                }
            }, 10000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [portfolio]);

    const { data, refetch } = useGetCompetitionRateQuery({
        variables: {
            portfolio_id: portfolio?.portfolio_id,
        },
    });

    return deviceType === 'mobile' ? (
        <Box>
            <Box
                onClick={() => {
                    if (isMobile) {
                        window.open(portfolio?.share_url, '_blank');
                    }
                }}
                cursor={'pointer'}
            >
                <Box
                    position={'relative'}
                    marginBottom={'16px'}
                    width={'100%'}
                    aspectRatio={1}
                    borderRadius={'24px'}
                    overflow={'hidden'}
                >
                    <Image
                        src={ProductThumbnailImage}
                        alt="Product Thumbnail Image"
                        fill
                        objectFit="cover"
                        objectPosition="top"
                    />
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
                        투자 계약증권 {portfolio?.sub_title}호
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
                    {data?.getCompetitionRate?.memberCount && (
                        <Text fontSize="13px" fontWeight="400" lineHeight="18px" letterSpacing="-3%" color="#8C919F">
                            벌써 {data?.getCompetitionRate?.memberCount}명이 청약을 신청했어요!
                        </Text>
                    )}
                </Box>
            </Box>
            <Box paddingBottom={'28px'}>
                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    height={'38px'}
                    onClick={handleToggleGuide}
                >
                    <Text fontSize="16px" fontWeight="600" lineHeight="22px" letterSpacing="-3%" color="#757983">
                        안내사항
                    </Text>
                    <Image
                        src={isGuideOpen ? ChevronUpIcon : ChevronDownIcon}
                        alt="Dropdown Open Icon"
                        width={16}
                        height={16}
                    />
                </Flex>
                {isGuideOpen ? (
                    <List
                        fontSize="13px"
                        fontWeight="400"
                        lineHeight="18px"
                        letterSpacing="-3%"
                        paddingLeft={'13px'}
                        marginTop={'8px'}
                        color="#757983"
                        wordBreak={'keep-all'}
                    >
                        <ListItem
                            position="relative"
                            _before={{
                                position: 'absolute',
                                content: '"・"',
                                top: 0,
                                left: '-13px',
                            }}
                        >
                            청약 전에 투자공시 내용을 확인해 주세요.
                        </ListItem>
                        <ListItem
                            position="relative"
                            _before={{
                                position: 'absolute',
                                content: '"・"',
                                top: 0,
                                left: '-13px',
                            }}
                        >
                            청약 기간 중 청약은 24시간 가능합니다.
                        </ListItem>
                        <ListItem
                            position="relative"
                            _before={{
                                position: 'absolute',
                                content: '"・"',
                                top: 0,
                                left: '-13px',
                            }}
                        >
                            청약 기간 종료 후 청약 신청한 수량 내에서 비례배정 방식에 의하여 배정이 진행됩니다.
                        </ListItem>
                        <ListItem
                            position="relative"
                            _before={{
                                position: 'absolute',
                                content: '"・"',
                                top: 0,
                                left: '-13px',
                            }}
                        >
                            청약 기간 중에만 청약 취소 가능하며 취소와 동시에 환불됩니다.
                        </ListItem>
                    </List>
                ) : (
                    ''
                )}
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
                    src={ProductThumbnailImage}
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
                                투자 계약증권 {portfolio?.sub_title}호
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
                                {data?.getCompetitionRate?.competitionRate &&
                                    data?.getCompetitionRate?.competitionRate !== '0.000' && (
                                        <Tag
                                            as="span"
                                            fontSize="14px"
                                            fontWeight="600"
                                            lineHeight="20px"
                                            letterSpacing="-3%"
                                            margin="8px"
                                            padding="4px 10px"
                                            height="28px"
                                            borderRadius="14px"
                                            backgroundColor="#F65F5F"
                                            color="#FFFFFF"
                                        >
                                            경쟁률 {data?.getCompetitionRate?.competitionRate}:1
                                        </Tag>
                                    )}
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
                            </Text>
                            {data?.getCompetitionRate?.memberCount && (
                                <Text
                                    fontSize="13px"
                                    fontWeight="400"
                                    lineHeight="18px"
                                    letterSpacing="-3%"
                                    color="#8C919F"
                                >
                                    벌써 {data?.getCompetitionRate?.memberCount}명이 청약을 신청했어요!
                                </Text>
                            )}
                        </Box>
                    </Flex>
                </Box>
                <Flex gap={'16px'}>
                    <Box flex={1} paddingBlock={'28px'}>
                        <Text
                            fontSize="16px"
                            fontWeight="600"
                            lineHeight="22px"
                            letterSpacing="-3%"
                            marginBottom={'8px'}
                            color="#757983"
                        >
                            안내사항
                        </Text>
                        <List
                            fontSize="14px"
                            fontWeight="400"
                            lineHeight="20px"
                            letterSpacing="-3%"
                            paddingLeft={'14px'}
                            color="#757983"
                            wordBreak={'keep-all'}
                        >
                            <ListItem
                                position="relative"
                                _before={{
                                    position: 'absolute',
                                    content: '"・"',
                                    top: 0,
                                    left: '-13px',
                                }}
                            >
                                청약 전에 투자공시 내용을 확인해 주세요.
                            </ListItem>
                            <ListItem
                                position="relative"
                                _before={{
                                    position: 'absolute',
                                    content: '"・"',
                                    top: 0,
                                    left: '-13px',
                                }}
                            >
                                청약 기간 중 청약은 24시간 가능합니다.
                            </ListItem>
                            <ListItem
                                position="relative"
                                _before={{
                                    position: 'absolute',
                                    content: '"・"',
                                    top: 0,
                                    left: '-13px',
                                }}
                            >
                                청약 기간 종료 후 청약 신청한 수량 내에서 비례배정 방식에 의하여 배정이 진행됩니다.
                            </ListItem>
                            <ListItem
                                position="relative"
                                _before={{
                                    position: 'absolute',
                                    content: '"・"',
                                    top: 0,
                                    left: '-13px',
                                }}
                            >
                                청약 기간 중에만 청약 취소 가능하며 취소와 동시에 환불됩니다.
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
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
                                <QRCode
                                    value={portfolio?.share_url}
                                    style={{
                                        margin: '0 auto',
                                        height: '100%',
                                        width: '100%',
                                        // marginBottom: '42px',
                                        objectPosition: 'center',
                                        // padding: '5px',
                                    }}
                                />
                                {/* <Image src={QrImage} alt="qr" fill objectFit="cover" objectPosition="center" /> */}
                            </Box>
                            <Text
                                fontSize={'16px'}
                                fontWeight={'600'}
                                lineHeight={'22px'}
                                letterSpacing={'-3%'}
                                textAlign={'center'}
                                color={'#FFFFFF'}
                            >
                                상세보기
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default ProductProgressItem;
