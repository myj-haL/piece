import { Box, List, ListItem } from '@chakra-ui/react';
import { Portfolio, usePortfoliosQuery } from '@/generated/graphql';

import ProductPlanItem from '@/components/ProductPlanItem';

const ProductPlan = () => {
    const { data } = usePortfoliosQuery({
        variables: {
            page: 1,
            pageSize: 10,
            recruitment_state: 'PRS0101',
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
                            <ProductPlanItem portfolio={item} />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default ProductPlan;
