/**
 * NOTE
 * 사용처 : Faq, Guide
 */

import { Flex, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface TabComponentsProps {
  tabList: Array<{
    idx: number;
    title: string;
    value: string;
  }>;
}

export const TabComponents = ({
  tabList,
  children,
}: PropsWithChildren<TabComponentsProps>) => {
  return (
    <Tabs padding={0} bg={"white"}>
      <TabList
        overflowX={"scroll"}
        display={"flex"}
        gap={"24px"}
        justifyContent={["start", "center"]}
        paddingLeft={["16px", "0"]}
        paddingRight={["16px", "0"]}
        borderBottom={"1px solid #EAECF0"}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {tabList.map((item) => (
          <Tab
            key={item.idx}
            color={"#292A2E"}
            padding={"16px 0"}
            minWidth={"max-content"}
            // maxWidth={"max-content"}
            value={item.value}
            onClick={console.log}
            marginBottom={"0"}
            fontSize={'18px'}
            fontWeight={'600'}
            lineHeight={'24px'}
            letterSpacing={'-0.03em'}
            sx={{
              color: "#B8BCC8",
              "&[aria-selected='true']": {
                color: "#292A2E",
              },
            }}
          >
            {item.title}
          </Tab>
        ))}
      </TabList>
      <Flex margin={"0 auto"} maxWidth={"820px"} width={"100%"}>
        <TabPanels>{children}</TabPanels>
      </Flex>
    </Tabs>
  );
};
