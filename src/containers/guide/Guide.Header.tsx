import { Box, Flex, Text } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { TitleRender } from "./Texts";
import { TypographyStyle } from "@/components/Typography";

export const GuideHeader = ({
  title,
  tabValue,
  setTabValue,
  TabListItems,
}: {
  title: string;
  tabValue?: string;
  setTabValue?: Dispatch<SetStateAction<string>>;
  TabListItems?: Array<{ value: string; text: string }>;
}) => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      rowGap={"20px"}
    >
      <Text
        fontSize={["22px", "32px"]}
        fontWeight={["600", "700"]}
        lineHeight={["28px", "44px"]}
        letterSpacing={"-0.03em"}
        textAlign={"center"}
      >
        <TitleRender title={title} />
      </Text>
      {TabListItems !== undefined && TabListItems.length > 0 && (
        <Flex columnGap={["8px", "16px"]}>
          {TabListItems.map((item) => {
            const isSelected = tabValue === item.value;
            return (
              <Box
                {...TypographyStyle.SubTitle2}
                as="button"
                key={item.text}
                value={item.value}
                cursor={'pointer'}
                width={'max-content'}
                height={['40px','48px']}
                borderRadius={['20px','24px']}
                p={['9px 16px','12px 20px']}
                color={isSelected ? "#fff" : '#131313'}
                bg={isSelected ? '#131313':'#fff'}
                onClick={(e:React.MouseEvent<HTMLButtonElement>) => setTabValue(e.currentTarget.value)}
              >
                {item.text}
              </Box>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};
