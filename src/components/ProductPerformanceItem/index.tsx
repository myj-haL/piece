import { Box, Flex, Tag, Text } from '@chakra-ui/react';

import Image, { StaticImageData } from 'next/image';

type ProductPerformanceItemType = {
  image: StaticImageData;
  label: string;
  text: string[];
  fontColor: string;
}

const ProductPerformanceItem = ({
  image, label, text,
  fontColor,
}: ProductPerformanceItemType) => {
  return (
    <>
      <Box
        position="relative"
        width={['100%', '320px']}
        borderRadius='32px'
        aspectRatio="320/400"
        overflow='hidden'
      >
        <Image
          src={image}
          alt={label}
          fill
        />
        <Flex
          position='absolute'
          flexDirection='column'
          justifyContent='space-between'
          padding='24px 24px 32px 24px'
          width='100%'
          height='100%'
        >
          <Tag
            fontSize='14px'
            fontWeight='600'
            lineHeight='20px'
            letterSpacing="-3%"
            padding='4px 10px'
            width='fit-content'
            borderRadius='14px'
            backgroundColor="#FFFFFF"
            color="#4A4D55"
          >
            {label}
          </Tag>
          <Box
            textAlign='center'
            color={fontColor}
          >
            <Text
              fontSize='14px'
              fontWeight='600'
              lineHeight='20px'
              letterSpacing='-3%'
              marginBottom='16px'
            >
              {text[0]}
            </Text>
            <Text
              fontSize='22px'
              fontWeight='600'
              lineHeight='28px'
              letterSpacing='-3%'
            >
              {text[1]}
            </Text>
            <Text
              fontSize='32px'
              fontWeight='700'
              lineHeight='44px'
              letterSpacing='-3%'
            >
              {text[2]}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ProductPerformanceItem;
