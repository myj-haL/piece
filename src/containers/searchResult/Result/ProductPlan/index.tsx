import { Box, List, ListItem, Text } from '@chakra-ui/react';

import ProductPlanItem from '@/components/ProductPlanItem';

const ProductPlan = () => {
  return (
    <Box
      margin={'0 auto'}
      padding={['40px 20px', '80px 20px']}
      maxWidth={'1180px'}
    >
      <Text
        fontSize={['18px', '28px']}
        fontWeight={600}
        lineHeight={['24px', '40px']}
        marginBottom={'20px'}
        letterSpacing={'-3%'}
      >
        예정 상품
        {' '}
        <Text
          as="strong"
          color={'#0CB2AD'}
        >
          2
        </Text>
      </Text>
      <List
        display={'flex'}
        flexDirection={'column'}
        gap={'40px'}
      >
        <ListItem>
          <ProductPlanItem />
        </ListItem>
        <ListItem>
          <ProductPlanItem />
        </ListItem>
      </List >
    </Box >
  );
};

export default ProductPlan;
