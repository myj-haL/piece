import { Box, List, ListItem } from '@chakra-ui/react';
import { Portfolio, usePortfoliosQuery } from '@/generated/graphql';

import ProductProgressItem from '@/components/ProductProgressItem';

const ProductProgress = () => {
    const { data } = usePortfoliosQuery({
        variables: {
            page: 1,
            pageSize: 10,
            recruitment_state: 'PRS0102',
        },
    });
    return (
        <Box padding={['20px 0 40px', '40px 0 80px']}>
            <List
                display={'flex'}
                flexDirection={'column'}
                gap={'40px'}
                margin={'0 auto'}
                paddingInline={'20px'}
                maxWidth={'1180px'}
            >
                {data?.portfolios?.portfolios?.map((item: Portfolio) => {
                    return (
                        <ListItem key={item?.portfolio_id}>
                            <ProductProgressItem portfolio={item} />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default ProductProgress;
