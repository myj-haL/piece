import { Box, Flex, Link, Text } from '@chakra-ui/react';

import AppLogo from 'img/qr/img_applogo.png';
import Image from 'next/image';
import QRCode from 'react-qr-code';
import { isMobile } from 'react-device-detect';
import style from './index.module.css';
import { useRouter } from 'next/router';

const MobileQr = () => {
    const router = useRouter();
    const isAndroidUrl = 'https://play.google.com/store/apps/details?id=run.piece.dev';
    const isIOSUrl =
        'https://apps.apple.com/kr/app/%ED%94%BC%EC%8A%A4-%ED%98%84%EB%AC%BC-%EC%A1%B0%EA%B0%81%ED%88%AC%EC%9E%90-%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%9D%98-%ED%91%9C%EC%A4%80-piece/id1615510313';

    return (
        <Box display="grid" gap="20px" alignItems="center" justifyContent="center">
            {isMobile && (
                <Image src={AppLogo} width="108" height="108" alt="applogo" style={{ margin: '0 auto 20px' }} />
            )}
            {!isMobile && (
                <QRCode
                    value={`${process.env.NEXT_PUBLIC_HOME_URL}/mobileDownload`}
                    style={{ margin: '0 auto 16px', height: '90px' }}
                />
            )}
            <Text fontSize="22px" fontWeight="600" color="#131313" textAlign="center" className={style.title}>
                쉽고 안전한 STO 투자
                <br />
                PIECE 앱 바로가기
            </Text>{' '}
            {isMobile && (
                <Box
                    as="button"
                    width="fit-content"
                    height="48px"
                    color="white"
                    bg="#131313"
                    _hover={{ bg: '#131313cc' }}
                    borderRadius="100px"
                    fontSize="16px"
                    fontWeight="600"
                    margin="0 auto"
                    padding="12px 20px"
                    onClick={() => {
                        router.push('/mobileDownload');
                    }}
                >
                    앱 다운로드
                </Box>
            )}
            {!isMobile && (
                <Flex gap="24px" marginTop="10px" justifyContent="center">
                    <Link href={isIOSUrl}>
                        <Box as="button" backgroundColor="#131313" padding="12px 20px" borderRadius="100px">
                            <Image src={'/images/qr/ic_appStore.svg'} alt="appstore" width={94} height={24} />
                        </Box>
                    </Link>

                    <Link href={isAndroidUrl}>
                        <Box as="button" backgroundColor="#131313" padding="14px 20px" borderRadius="100px">
                            <Image src={'/images/qr/ic_googlePlay.svg'} alt="appstore" width={109.23} height={20} />
                        </Box>
                    </Link>
                </Flex>
            )}
        </Box>
    );
};

export default MobileQr;
