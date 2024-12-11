import Router, { useRouter } from 'next/router';
import { isAndroid, isIOS, isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '/public/images/styles/images/logo_piece.svg';

const MobileDownloadContainer = () => {
    const router = useRouter();
    const [url, setUrl] = useState('');
    useEffect(() => {
        if (isMobile) {
            if (isAndroid) setUrl('https://play.google.com/store/apps/details?id=run.piece.dev');
            if (isIOS)
                setUrl(
                    'https://apps.apple.com/kr/app/%ED%94%BC%EC%8A%A4-%ED%98%84%EB%AC%BC-%EC%A1%B0%EA%B0%81%ED%88%AC%EC%9E%90-%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%9D%98-%ED%91%9C%EC%A4%80-piece/id1615510313'
                );
        }
    }, [isMobile]);

    useEffect(() => {
        if (isMobile) {
            globalThis?.window.open(url, '_self');
        } else {
            Router.push('/');
        }
    }, [url]);
    return (
        <>
            <Head>
                <title>{`모바일 다운로드 - PIECE`}</title>
            </Head>
            <Flex direction="column" alignItems="center">
                <Flex
                    h="calc(var(--inner-vh, 1vh) * 100)"
                    w="100%"
                    direction="column"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Image src={Logo} alt="piece-logo" />
                </Flex>
            </Flex>
        </>
    );
};

export default MobileDownloadContainer;
