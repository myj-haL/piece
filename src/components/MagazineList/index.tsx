import { Box, Grid, GridItem, Img, Text } from '@chakra-ui/react';
import { PageInfoType, T_Magazine } from '@/generated/graphql';
import { useEffect, useRef, useState } from 'react';

import ChakraPagiNation from '@/components/Pagination';
import Image from 'next/image';
import MagazineItem from '../MagazineItem';
import MoreBtn from '@/components/MoreBtn';
import Pagination from '@/components/Pagination';
import SampleImg from 'img/sample/img_sample-thumbnail.png';
import { isMobile } from 'react-device-detect';
import { magazineItemData } from './data';
import useScreenSize from '@/hook/useScreenSize';

interface MagazineListProps {
    magazines?: any;
    pageConfig?: any;
    handleFetchMore?: () => Promise<void>;
}
const MagazineList = ({ magazines, pageConfig, handleFetchMore }: MagazineListProps) => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    return (
        <Box>
            {/* <Box padding="16px"></Box> */}
            <Grid gap={['40px', '80px 20px']} templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}>
                {/* {magazineItemData?.map((item: any, index: number) => (
                    <MagazineItem data={item} key={item?.magazine_id} />
                ))} */}
                {magazines?.map((item: T_Magazine, index: number) => (
                    <MagazineItem data={item} key={item?.magazine_id} />
                ))}
            </Grid>

            {pageConfig && isMobile && <MoreBtn handleFetchMore={handleFetchMore} pageConfig={pageConfig} />}
            {pageConfig && !isMobile && <ChakraPagiNation pageConfig={pageConfig} />}
        </Box>
    );
};

export default MagazineList;
