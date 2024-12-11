import { Box, Flex, List, ListItem } from '@chakra-ui/react';
import { Portfolio, usePortfoliosQuery } from '@/generated/graphql';
import { useEffect, useState } from 'react';

import Button from '@/components/Button';
import ChakraPagiNation from '@/components/Pagination';
import Image from 'next/image';
import MoreIcon from 'img/common/ic-arrow-white.svg';
import Pagination from '@/components/Pagination';
import ProductCloseItem from '../../../components/ProductCloseItem';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

const ProductClose = () => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');
    const router = useRouter();

    const { tab, page } = router.query as {
        tab: string;
        page: string;
    };

    const { data } = usePortfoliosQuery({
        variables: {
            page: parseInt(page),
            pageSize: 10,
            doneYn: true,
        },
    });

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    return (
        <Box padding={['20px 0 40px', '40px 0 80px']}>
            <List
                display={'grid'}
                gridTemplateColumns={'1fr 1fr'}
                rowGap={'40px'}
                columnGap={['12px', '40px']}
                margin={'0 auto'}
                paddingInline={'20px'}
                maxWidth={'1180px'}
            >
                {data?.portfolios?.portfolios?.map((item: Portfolio) => {
                    return (
                        <ListItem key={item?.portfolio_id}>
                            <ProductCloseItem portfolio={item} />
                        </ListItem>
                    );
                })}
            </List>
            <Flex justifyContent={'center'} marginTop={'40px'}>
                {data?.portfolios?.pageInfo && isMobile && (
                    <Button>
                        더 보기
                        <Box marginLeft={'4px'}>
                            <Image src={MoreIcon} alt="More Icon" width={16} height={16} />
                        </Box>
                    </Button>
                )}
                {data?.portfolios?.pageInfo && !isMobile && (
                    <ChakraPagiNation pageConfig={data?.portfolios?.pageInfo} />
                )}
            </Flex>
        </Box>
    );
};

export default ProductClose;
