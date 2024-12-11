import { useEffect, useState } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

import Button from '@/components/Button';

import useScreenSize from '@/hook/useScreenSize';

import ProductProgress from './ProductProgress';
import ProductPlan from './ProductPlan';
import ProductClose from './ProductClose';

const tabList = [
  {
    title: '전체',
    count: 7,
    component: (
      <>
        <ProductProgress />
        <ProductPlan />
        <ProductClose />
      </>
    ),
  },
  {
    title: '모집 중',
    count: 2,
    component: <ProductProgress />,
  },
  {
    title: '예정',
    count: 2,
    component: <ProductPlan />,
  },
  {
    title: '종료',
    count: 9,
    component: <ProductClose />,
  },
];


const Result = () => {
  const { device } = useScreenSize();
  const [deviceType, setDeviceType] = useState<string>('');

  const [selectedTab, setTab] = useState(tabList[0]);

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
          marginBottom={['16px', '40px']}
          letterSpacing={'-3%'}
        >
          총
          {' '}
          <Text as={'strong'} color={'#0CB2AD'}>13</Text>
          건이 검색되었어요
        </Text>
        <Flex gap={['8px', '16px']} overflow={'scroll'} marginRight={'-20px'}>
          {tabList.map((tab) => (
            <Button
              key={tab.title}
              size={deviceType === 'mobile' ? 'M' : 'L'}
              style={selectedTab.title === tab.title ? "solid" : "outlined"}
              onClick={() => setTab(tab)}
            >
              {selectedTab.title === tab.title
                ? `${tab.title} ${tab.count}`
                : (
                  <>
                    {tab.title}
                    <Text
                      as="strong"
                      color={'#0CB2AD'}
                      marginLeft={'2px'}
                    >
                      {tab.count}
                    </Text>
                  </>)}
            </Button>
          ))}
        </Flex>
      </Box >
      {selectedTab.component}
    </>
  );
};

export default Result;
