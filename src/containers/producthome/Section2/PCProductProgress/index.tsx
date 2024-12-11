import { Box, List, ListItem } from '@chakra-ui/react';

import { Portfolio } from '@/generated/graphql';
import ProductProgressItem from '@/components/ProductProgressItem';

interface PCProductProgressProps {
    portfolios: Portfolio[];
}
const PCProductProgress = ({ portfolios }: PCProductProgressProps) => {
    return (
        <Box paddingInline={'20px'}>
            <List display={'flex'} flexDirection={'column'} gap={'40px'}>
                {portfolios?.map((portfolio: Portfolio) => {
                    return (
                        <ListItem key={portfolio?.portfolio_id}>
                            <ProductProgressItem portfolio={portfolio} />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default PCProductProgress;
