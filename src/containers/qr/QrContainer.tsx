import { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '@/components/Layouts';
import MobileQr from './MobileQr';
import PcQr from './PcQr';
import useScreenSize from '@/hook/useScreenSize';

const QrContainer = () => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    return (
        <>
            <Head>
                <title>PIECE</title>
            </Head>
            <Box>
                <Layout>
                    {deviceType === 'mobile' && (
                        <Box padding="40px 20px">
                            <MobileQr />
                        </Box>
                    )}

                    {deviceType !== 'mobile' && (
                        <Box padding="120px 20px">
                            <PcQr />
                        </Box>
                    )}
                </Layout>
            </Box>
        </>
    );
};

export default QrContainer;
