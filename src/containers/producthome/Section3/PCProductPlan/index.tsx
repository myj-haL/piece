import { Box, List, ListItem } from '@chakra-ui/react';

import { Portfolio } from '@/generated/graphql';
import ProductPlanItem from '@/components/ProductPlanItem';

interface PCProductPlanPorps {
    portfolios: Portfolio[];
}
const PCProductPlan = ({ portfolios }: PCProductPlanPorps) => {
    return (
        <Box paddingInline={'20px'}>
            <List display={'flex'} flexDirection={'column'} gap={'40px'}>
                {portfolios?.map((portfolio: Portfolio) => {
                    return (
                        <ListItem key={portfolio?.portfolio_id}>
                            <ProductPlanItem portfolio={portfolio} />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default PCProductPlan;
