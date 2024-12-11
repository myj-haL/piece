import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { CustomInput } from "@/components/Input";
 
export const SupportHeader = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box
      textAlign={"center"}
      marginTop={["40px", "60px"]}
      marginBottom={["40px", "60px"]}
    >
      <Text
        fontSize={[14, 18]}
        color="#8C919F"
        marginBottom={["16px", "24px"]}
        fontWeight="600"
      >
        고객센터
      </Text>
      <Text
        fontSize={[28, 48]}
        color="#131313"
        fontWeight="600"
        letterSpacing="-0.84px"
        lineHeight={["40px", "64px"]}
        marginBottom={["40px"]}
      >
        마음 놓고 투자할 수 있도록
        <br />
        PIECE가 도와드릴게요
      </Text>
      <Flex
        maxWidth={"760px"}
        flexDirection={"column"}
        gap={"20px"}
        margin={"0 auto"}
        padding={["0 20px", "0"]}
      >
        <CustomInput
          placeholder={"궁금하신 내용을 검색해 보세요"}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Flex>
      <Flex
        wrap={"wrap"}
        justifyContent={"center"}
        marginTop={["16px", "24px"]}
        gap={"8px"}
      >
        <LinkButton text="예치금 입출금" onClick={console.log}></LinkButton>
        <LinkButton text="청약 신청" onClick={console.log}></LinkButton>
        <LinkButton text="환불" onClick={console.log}></LinkButton>
      </Flex>
    </Box>
  );
};

const LinkButton = ({ text, onClick }: { text: string; onClick: any }) => {
  return (
    <Button
      type="button"
      background={"#F2F3F4"}
      _hover={{ background: "#E9EAEB" }}
      _active={{ background: "#E9EAEB" }}
      fontFamily={"Pretendard"}
      fontSize={"16px"}
      fontWeight={"600"}
      lineHeight={"22px"}
      letterSpacing={"-0.03em"}
      textAlign={"center"}
      width={"max-content"}
      height={"40px"}
      padding={"9px 16px"}
      gap={"4px"}
      borderRadius={"20px"}
      color={"#292A2E"}
      cursor={"pointer"}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
