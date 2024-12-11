import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import SampleImg from "img/sample/linked-profile.png"

const TwoButtonPopup = ({title} : any) => {
  return (
    <>
      <Text
        whiteSpace={'pre-wrap'}
        fontSize={22}
        fontWeight={600}
        color={'#131313'}
        mb={'24px'}
      >{title}</Text>

      <Flex alignItems={'center'} gap={'8px'} justifyContent={'center'} mb={'24px'}>
        <Box
          as="a"
          border={'1px solid #EAECF0'}
          borderRadius={'16px'}
          bg={'#fff'}
          flex={1}
          p={'24px 16px'}
          textAlign={'center'}
        >
          <Image width={90} height={90} style={{borderRadius:'100px', margin:'0 auto 8px'}} alt="profile img"  src={SampleImg} />
          <Text 
            fontSize={16}
            fontWeight={600}
            letterSpacing={'-0.48px'}
            color={'#292A2E'}
            mb={'4px'}
            cursor={'pointer'}
          >
            @채널명
          </Text>
          <Text 
            fontSize={13}
            fontWeight={400}
            letterSpacing={'-0.48px'}
            color={'#757983'}
            mb={'4px'}
          >
            채널 설명
          </Text>
        </Box>
        
        <Box
          as="a"
          border={'1px solid #EAECF0'}
          borderRadius={'16px'}
          bg={'#fff'}
          flex={1}
          p={'24px 16px'}
          textAlign={'center'}
          cursor={'pointer'}
        >
          <Image width={90} height={90} style={{borderRadius:'100px', margin:'0 auto 8px'}} alt="profile img"  src={SampleImg} />
          <Text 
            fontSize={16}
            fontWeight={600}
            letterSpacing={'-0.48px'}
            color={'#292A2E'}
            mb={'4px'}
          >
            @채널명
          </Text>
          <Text 
            fontSize={13}
            fontWeight={400}
            letterSpacing={'-0.48px'}
            color={'#757983'}
            mb={'4px'}
          >
            채널 설명
          </Text>
        </Box>
      </Flex>

      <Flex alignItems={'center'} gap={'8px'} justifyContent={'center'}>
        <Box as="button"
          fontSize={16}
          fontWeight={600}
          letterSpacing={'-0.48px'}
          flex={1}
          borderRadius={'100px'}
          color={'#292A2E'}
          padding={'12px 20px'}
          border={'1px solid #EAECF0'}
        >
          닫기
        </Box>
        <Box as="button"
          fontSize={16}
          color={'#fff'}
          fontWeight={600}
          letterSpacing={'-0.48px'}
          flex={1}
          borderRadius={'100px'}
          backgroundColor={'#131313'}
          padding={'12px 20px'}
        >
          확인
        </Box>
      </Flex>
      
    </>
  )
}

export default TwoButtonPopup;