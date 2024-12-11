import { Box, Flex, Text } from "@chakra-ui/react";
import QrImg from "img/qr/img_qr.png";
import Image from "next/image";

const OneButtonPopup = ({title} : any) => {
  return (
    <>
      <Text
        whiteSpace={'pre-wrap'}
        fontSize={22}
        fontWeight={600}
        color={'#131313'}
        mb={'24px'}
      >{title}</Text>

      <Flex alignItems={'center'} justifyContent={'center'} mb={'24px'}>
        <Image src={QrImg} alt="qrimg" width={90} height={90} />
      </Flex>

      <Box as="button"
        fontSize={16}
        color={'#fff'}
        fontWeight={600}
        letterSpacing={'-0.48px'}
        w={'100%'}
        borderRadius={'100px'}
        backgroundColor={'#131313'}
        padding={'12px 20px'}
      >
        확인
      </Box>
    </>
  )
}

export default OneButtonPopup;