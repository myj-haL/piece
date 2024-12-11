import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Portfolio } from '@/generated/graphql';
import ProductThumbnailImage from 'img/producthome/img_product_thunbnail.jpg';
import QRCode from 'react-qr-code';
import QrImage from 'img/qr/img_qr.png';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

interface ProductCloseItemProps {
    portfolio: Portfolio;
}

const ProductCloseItem = ({ portfolio }: ProductCloseItemProps) => {
    const router = useRouter();
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    return (
        <Flex
            flexDirection={['column', 'row']}
            gap={['16px', '24px']}
            width={'100%'}
            onClick={() => {
                if (isMobile) {
                    window.open(portfolio?.share_url, '_blank');
                }
            }}
        >
            <Box
                position={'relative'}
                width={['100%', '200px']}
                aspectRatio={[1, '200/250']}
                borderRadius={'24px'}
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
                <Box>
                    <Box paddingBlock={[0, '20px']} marginBottom={['16px', '0']}>
                        <Text
                            fontSize={'14px'}
                            fontWeight={[400, 600]}
                            lineHeight={'20px'}
                            letterSpacing={'-3%'}
                            marginBottom={['4px', '8px']}
                            color={'#757983'}
                        >
                            투자계약증권 {portfolio?.sub_title}호
                        </Text>
                        <Text
                            fontSize={['16px', '22px']}
                            fontWeight={600}
                            lineHeight={['22px', '28px']}
                            letterSpacing={'-3%'}
                            color={'#292A2E'}
                            wordBreak={'keep-all'}
                        >
                            {portfolio?.title}
                        </Text>
                    </Box>
                    <Text
                        fontSize={['14px', '16px']}
                        fontWeight={600}
                        lineHeight={['20px', '22px']}
                        letterSpacing={'-3%'}
                        color={'#292A2E'}
                    >
                        <Text as={'strong'} color={'#F65F5F'}>
                            30%
                        </Text>{' '}
                        수익을 달성했어요
                    </Text>
                </Box>
                {deviceType === 'mobile' ? (
                    ''
                ) : (
                    <Link href="/">
                        <Box
                            marginLeft={'auto'}
                            width={'72px'}
                            height={'96px'}
                            padding={'4px'}
                            borderRadius={'8px'}
                            backgroundColor={'#131313'}
                        >
                            <Box
                                position={'relative'}
                                marginBottom={'4px'}
                                width={'64px'}
                                aspectRatio={1}
                                borderRadius={'6px'}
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
                                        padding: '7px',
                                    }}
                                />
                                {/* <Image src={QrImage} alt="qr" fill objectFit="cover" objectPosition="center" /> */}
                            </Box>
                            <Text
                                fontSize={'14px'}
                                fontWeight={600}
                                lineHeight={'20px'}
                                letterSpacing={'-3%'}
                                textAlign={'center'}
                                color={'#FFFFFF'}
                            >
                                상세 보기
                            </Text>
                        </Box>
                    </Link>
                )}
            </Flex>
        </Flex>
    );
};

export default ProductCloseItem;
