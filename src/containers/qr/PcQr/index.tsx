import { Box, Flex, Link, Text, keyframes } from '@chakra-ui/react';

import Image from 'next/image';
import QRCode from 'react-qr-code';
import QrImg from 'img/qr/img_qr.png';
import Store1 from 'img/qr/ic_googlePlay.svg';
import Store2 from 'img/qr/ic_appStore.svg';
import style from './index.module.css';
import { usePrefersReducedMotion } from '@chakra-ui/react';

const bounce = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-10px); }
`;

const PcQr = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const animation = prefersReducedMotion ? undefined : `${bounce} 1.9s ease-in-out infinite`;

    return (
        <Box display="grid" alignItems="center" justifyContent="center">
            {/* <Image src={QrImg} width="192" height="192" alt="appQr" style={{ margin: '0 auto 16px' }} /> */}
            <QRCode
                value={`${process.env.NEXT_PUBLIC_HOME_URL}/mobileDownload`}
                style={{ margin: '0 auto 16px', height: '150px', marginBottom: '42px' }}
            />
            <Box
                backgroundColor="#40D9D4"
                color="#131313"
                borderRadius="100px"
                letterSpacing="-0.48px"
                padding="9px 16px"
                fontSize="16px"
                fontWeight="600"
                width="fit-content"
                margin="0 auto"
                position="relative"
                marginBottom="40px"
                animation={animation}
                sx={{
                    '&:before': {
                        content: '""',
                        display: 'block',
                        borderBottom: '8px solid #40D9D4',
                        borderTop: '0px solid #40D9D4',
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        position: 'absolute',
                        top: '-8px',
                        width: '0px',
                        height: '0px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    },
                }}
            >
                QR로 다운받기
            </Box>

            <Text fontSize="48px" fontWeight="700" color="#131313" textAlign="center" className={style.title}>
                쉽고 안전한 STO 투자
                <br />
                PIECE 앱 바로가기
            </Text>

            <Flex gap="24px" marginTop="40px" justifyContent="center">
                <Link href="https://apps.apple.com/kr/app/%ED%94%BC%EC%8A%A4-%ED%98%84%EB%AC%BC-%EC%A1%B0%EA%B0%81%ED%88%AC%EC%9E%90-%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%9D%98-%ED%91%9C%EC%A4%80-piece/id1615510313">
                    <Box as="button" backgroundColor="#131313" padding="20px 24px" borderRadius="100px">
                        <Image src={Store2} alt="appstore" />
                    </Box>
                </Link>

                <Link href="https://play.google.com/store/apps/details?id=run.piece.dev">
                    <Box as="button" backgroundColor="#131313" padding="20px 24px" borderRadius="100px">
                        <Image src={Store1} alt="appstore" />
                    </Box>
                </Link>
            </Flex>
        </Box>
    );
};

export default PcQr;
