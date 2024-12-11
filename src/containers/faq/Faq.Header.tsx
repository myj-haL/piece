import { Box, Flex, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import SearchIcon from "/public/images/styles/images/ic-search.svg";
import { useContext } from "react";
import { SearchContext } from "./FaqContainer";
import { CustomInput } from "@/components/Input";

export const FaqHeader = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
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
        FAQ
      </Text>
      <Text
        fontSize={[28, 48]}
        color="#131313"
        fontWeight="600"
        letterSpacing="-0.84px"
        lineHeight={["40px", "64px"]}
        marginBottom={["40px"]}
      >
        궁금함도 풀어드리고
        <br />더 나은 경험을 만들어 드려요
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
    </Box>
  );
};
