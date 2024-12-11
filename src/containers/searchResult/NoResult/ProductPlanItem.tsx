import Image from 'next/image';

import { Box, Flex, Text } from '@chakra-ui/react';

import ProductThumbnailImage from 'img/producthome/img_product_thunbnail.jpg';

const ProductPlanItem = () => {
  return (
    <Flex
      flexDirection={['column', 'row']}
      gap={['16px', '24px']}
      width={['240px', '570px']}
    >
      <Box
        position={'relative'}
        width={['240px', '200px']}
        aspectRatio={['240/300', '200/250']}
        borderRadius={'24px'}
        overflow={'hidden'}
      >
        <Image
          src={ProductThumbnailImage}
          alt="Product Plan Image"
          fill
          objectFit='cover'
          objectPosition='top'
        />
      </Box>
      <Box >
        <Box
          paddingBlock={[0, '20px']}
          marginBottom={['16px', '0']}
        >
          <Text
            fontSize={'14px'}
            fontWeight={600}
            lineHeight={'20px'}
            letterSpacing={'-3%'}
            marginBottom={['8px']}
            color={'#757983'}
          >
            모집예정・투자계약증권 1호
          </Text>
          <Text
            fontSize={'22px'}
            fontWeight={600}
            lineHeight={'28px'}
            letterSpacing={'-3%'}
            marginBottom={['8px']}
            color={'#292A2E'}
          >
            Art Collection 11
          </Text>
        </Box>
        <Text
          fontSize={'16px'}
          fontWeight={600}
          lineHeight={'22px'}
          letterSpacing={'-3%'}
          color={'#292A2E'}
        >
          청약까지 6일 23시간 남았어요
        </Text>
      </Box>
    </Flex>
  );
};

export default ProductPlanItem;
