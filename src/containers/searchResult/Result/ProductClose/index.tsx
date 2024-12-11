import { useEffect, useState } from 'react';

import Image from 'next/image';

import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';

import useScreenSize from '@/hook/useScreenSize';

import Button from '@/components/Button';
import Pagination from '@/components/Pagination';
import ProductCloseItem from '@/components/ProductCloseItem';

import MoreIcon from 'img/common/ic-arrow-white.svg'

const ProductClose = () => {
  const { device } = useScreenSize();
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
    setDeviceType(device);
  }, [device]);

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
        종료 상품
        {' '}
        <Text
          as="strong"
          color={'#0CB2AD'}
        >
          9
        </Text>
      </Text>
      <List
        display={'grid'}
        gridTemplateColumns={'1fr 1fr'}
        rowGap={'40px'}
        columnGap={['12px', '40px']}
        margin={'0 auto 40px'}
        maxWidth={'1180px'}
      >
        <ListItem>
          <ProductCloseItem />
        </ListItem>
        <ListItem>
          <ProductCloseItem />
        </ListItem>
        <ListItem>
          <ProductCloseItem />
        </ListItem>
        <ListItem>
          <ProductCloseItem />
        </ListItem>
        <ListItem>
          <ProductCloseItem />
        </ListItem>
        <ListItem>
          <ProductCloseItem />
        </ListItem>
        <ListItem>
          <ProductCloseItem />
        </ListItem>
        <ListItem>
          <ProductCloseItem />
        </ListItem>
      </List >
      <Flex
        justifyContent={'center'}
        marginTop={'40px'}
      >
        {
          deviceType === 'mobile'
            ? (
              <Button>
                더 보기
                <Box marginLeft={'4px'}>
                  <Image
                    src={MoreIcon}
                    alt="More Icon"
                    width={16}
                    height={16}
                  />
                </Box>
              </Button>
            )
            : 
            '페이지 네이션'
            // <Pagination />
        }
      </Flex>
    </Box>
  );
};

export default ProductClose;
