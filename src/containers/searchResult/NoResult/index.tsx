import { useEffect, useState } from 'react';
import {
  Box, Button, Flex, Grid,
  GridItem, Text
} from '@chakra-ui/react';

import ProductPlanItem from './ProductPlanItem';

import useScreenSize from '@/hook/useScreenSize';

const NoResult = () => {
  const { device } = useScreenSize();
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
    setDeviceType(device);
  }, [device]);

  return (
    <>
      <Box
        margin={'0 auto'}
        padding={['0 20px', '40px 20px']}
        maxWidth={'1180px'}
      >
        <Text
          as={'h3'}
          fontSize={['22px', '32px']}
          fontWeight={[600, 700]}
          lineHeight={['28px', '44px']}
          marginBottom={['8px', '16px']}
          letterSpacing={'-3%'}
        >
          일치하는 결과가 없어요
        </Text>
        <Text
          fontSize={['16px', '18px']}
          fontWeight={400}
          lineHeight={['24px', '28px']}
          letterSpacing={'-3%'}
        >
          다른 검색어 또는 제안 검색어로 시도해 보세요
        </Text>
      </Box >
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
          혹시 이런 상품을 찾고 계세요?
        </Text>
        {
          deviceType === 'mobile'
            ? (
              <Box
                marginInline={'-20px'}
                overflowY={'scroll'}
              >
                <Grid
                  paddingInline={'20px'}
                  gridTemplateColumns={'repeat(4,1fr)'}
                  gap={'24px'}
                >
                  <GridItem>
                    <ProductPlanItem />
                  </GridItem>
                  <GridItem>
                    <ProductPlanItem />
                  </GridItem>
                  <GridItem>
                    <ProductPlanItem />
                  </GridItem>
                  <GridItem paddingRight={'20px'}>
                    <ProductPlanItem />
                  </GridItem>
                </Grid>
              </Box>
            )
            : (
              <Grid
                gridTemplateColumns={'1fr 1fr'}
                gap={'40px'}
              >
                <GridItem>
                  <ProductPlanItem />
                </GridItem>
                <GridItem>
                  <ProductPlanItem />
                </GridItem>
                <GridItem>
                  <ProductPlanItem />
                </GridItem>
                <GridItem>
                  <ProductPlanItem />
                </GridItem>
              </Grid>
            )
        }
      </Box >
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
          기타 검색어
        </Text>
        <Flex
          flexWrap={'wrap'}
          gap={'8px'}
          margin={'24px auto 0'}
          width={'100%'}
        >
          <Button
            fontSize={'16px'}
            fontWeight={'600'}
            lineHeight={'22px'}
            letterSpacing={'-3%'}
            padding={'9px 16px'}
            borderRadius={'20px'}
            backgroundColor={'#F2F3F4'}
            color={'#292A2E'}
            _hover={{
              'background-color': '#E9EAEB'
            }}
            _active={{
              'background-color': '#E9EAEB'
            }}
          >
            상생 금융
          </Button>
          <Button
            fontSize={'16px'}
            fontWeight={'600'}
            lineHeight={'22px'}
            letterSpacing={'-3%'}
            padding={'9px 16px'}
            borderRadius={'20px'}
            backgroundColor={'#F2F3F4'}
            color={'#292A2E'}
            _hover={{
              'background-color': '#E9EAEB'
            }}
            _active={{
              'background-color': '#E9EAEB'
            }}
          >
            미술품 증권
          </Button>
          <Button
            fontSize={'16px'}
            fontWeight={'600'}
            lineHeight={'22px'}
            letterSpacing={'-3%'}
            padding={'9px 16px'}
            borderRadius={'20px'}
            backgroundColor={'#F2F3F4'}
            color={'#292A2E'}
            _hover={{
              'background-color': '#E9EAEB'
            }}
            _active={{
              'background-color': '#E9EAEB'
            }}
          >
            롤렉스 시계 상품
          </Button>
          <Button
            fontSize={'16px'}
            fontWeight={'600'}
            lineHeight={'22px'}
            letterSpacing={'-3%'}
            padding={'9px 16px'}
            borderRadius={'20px'}
            backgroundColor={'#F2F3F4'}
            color={'#292A2E'}
            _hover={{
              'background-color': '#E9EAEB'
            }}
            _active={{
              'background-color': '#E9EAEB'
            }}
          >
            롤렉스 시계 상품
          </Button>
        </Flex>
      </Box >
    </>
  );
};

export default NoResult;
