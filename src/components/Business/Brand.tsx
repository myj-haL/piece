import { Box, Button, Text } from '@chakra-ui/react';

import Image from 'next/image';

import BUSINESS_LOGO from '/public/images/business/img_business_logo.png';
import BUSINESS_LOGO_GUIDE
  from '/public/images/business/img_business_logo_guide.png';
import DOWNLOAD from '/public/images/business/ic-download.svg';

const Brand = () => {
  const handleClickDownloadBI = () => {
    // TODO: BI 다운로드 링크 연결
  };

  const handleClickDownloadGuide = () => {
    // TODO: BI사용 가이드 링크 연결
  };

  return (
    <Box
      margin="0 auto"
      padding={'120px 20px 120px'}
      maxW={'1420px'}
      position={'relative'}
      zIndex={'40'}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection={['column','column', 'row']}
          width={['100%']}
          height="100%"
        >
          <Text
            flex="1"
            fontSize={[32,64]}
            fontWeight="800"
            width={['100%','100%', '50%']}
            lineHeight={['44px','84px']}
          >
            브랜드
            <Box
              as="strong"
              display="block"
            >
              아이덴티티
            </Box>
          </Text>
          <Box
            marginTop={['40px','40px', '0']}
            width={['100%','100%', '50%']}
          >
            <Text
              fontSize={['18px']}
              fontWeight="400"
              lineHeight={['28px']}
              color="#292A2E"
            >
              세모를 상하로 균형감있게 배치한 심볼은 큰 자산을
              작은 조각으로 나눠 누구나 쉽게 투자할 수 있도록 하겠다는
              PIECE의 미션, 그리고 투자 수익과 안전성 모두 갖춘 투자 환경을 의미합니다.
              혁신을 뜻하는 민트 컬러는 이전에 없던 다양하고 새로운 상품으로
              STO 산업의 블루오션을 만들어간다는 의미를 담고 있습니다.
            </Text>
            <Box
              flex="1"
              display="flex"
              marginTop={['40px']}
            >
              <Button
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginRight={['8px']}
                padding={['12px 20px']}
                border="1px solid #EAECF0"
                borderRadius="24px"
                backgroundColor="transparent"
                cursor="pointer"
                onClick={handleClickDownloadBI}
              >
                <Text
                  fontSize={['16px']}
                  fontWeight="600"
                  marginRight={['4px']}
                  lineHeight={['22px']}
                >
                  BI 다운로드
                </Text>
                <Image
                  src={DOWNLOAD}
                  alt="BI 다운로드"
                  width={16}
                  height={16}
                />
              </Button>
              <Button
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding={['12px 20px']}
                border="1px solid #EAECF0"
                borderRadius="24px"
                backgroundColor="transparent"
                cursor="pointer"
                onClick={handleClickDownloadGuide}
              >
                <Text
                  fontSize={['16px']}
                  fontWeight="600"
                  marginRight={['4px']}
                  lineHeight={['22px']}
                >
                  BI 사용 가이드
                </Text>
                <Image
                  src={DOWNLOAD}
                  alt="BI 사용 가이드"
                  width={16}
                  height={16}
                />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={['column','column', 'row']}
          alignItems="end"
          marginTop={['80px']}
          width="100%"
          gap={['20px']}
        >
          <Box
            width={['100%','100%', '700px']}
            height={['auto','auto', '400px']}
          >
            <Image
              src={BUSINESS_LOGO}
              alt="브랜드 로고"
              style={{
                width:'100%',
                height:'100%',
              }}
            />
          </Box>
          <Box
            marginTop={['20px','20px', '80px']}
            width={['100%','100%', '700px']}
            height={['auto','auto', '400px']}
          >
            <Image
              src={BUSINESS_LOGO_GUIDE}
              alt="브랜드 로고 가이드"
              style={{
                width:'100%',
                height:'100%',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Brand;
