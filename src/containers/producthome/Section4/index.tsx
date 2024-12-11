import { Box, Text } from '@chakra-ui/react';
import LineUpSlide from '@/components/LineUpSlide';

const Section4 = () => {
  return (
    <Box
      paddingBlock={['40px', '80px']}
    >
      <Text
        fontSize={['22px', '32px']}
        fontWeight={['600', '700']}
        lineHeight={['28px', '44px']}
        textAlign={'center'}
        color="#131313"
      >
        PIECE와 함께하는
        <br />
        성공 STO 라인업을 소개할게요
      </Text>
      
      <LineUpSlide />
    </Box >
  );
};

export default Section4;
