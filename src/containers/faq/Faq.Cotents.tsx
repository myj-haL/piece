import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Style } from "../notice/list"; 
import { TabListItemsArray } from "./list";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "./FaqContainer";
import Image from "next/image";
import ArrowIcon from "img/common/ic-arrow-white.svg";
import { TabComponents } from "@/components/Tabs";
import useScreenSize from "@/hook/useScreenSize";
import MoreBtn from "@/components/MoreBtn";

const EmptyResult = () => {
  return (
    <Flex
      flexDirection={"column"}
      padding={"120px 16px"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"24px"}
    >
      <Text>해당하는 게시물이 없어요</Text>
      <Button
        color={"#fff"}
        padding={"12px auto"}
        background={"#131313"}
        borderRadius={"24px"}
        {...Style.SubTitle2}
      >
        목록으로
      </Button>
    </Flex>
  );
};
const EmptyCase = () => {
  return (
    <Flex
      height={"268px"}
      padding={"120px 16px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text>등록된 게시물이 없어요</Text>
    </Flex>
  );
};

interface TabListItemsProps {
  idx: number;
  label: string;
  title: string;
  contents: string;
}
export const TabListItems = ({
  idx,
  label,
  title,
  contents,
}: TabListItemsProps) => {
  const { searchValue } = useContext(SearchContext);
  return (
    <AccordionItem border={idx === 0 ? "none" : "1px soild #F2F3F4"}>
      <AccordionButton
        display={"flex"}
        justifyContent={"space-between"}
        padding={["24px 20px","24px 16px"]}
      >
        <Flex
          rowGap={"8px"}
          columnGap={"20px"}
          flexDirection={["column", "row"]}
        >
          <Text
            textAlign={["start", "start"]}
            color={"#8C919F"}
            {...Style.SubTitle3}
            width={"104px"}
          >
            {label}
          </Text>
          <Text textAlign={"start"} color={"#292A2E"} {...Style.SubTitle2}>
            {title.split(searchValue).map((item, index) => {
              if (index === title.split(searchValue).length - 1) {
                return (
                  <Text as={"span"} key={index}>
                    {item}
                  </Text>
                );
              }
              return (
                <>
                  {item}
                  <span
                    style={{
                      color: "#10CFC9",
                    }}
                  >
                    {searchValue}
                  </span>
                </>
              );
            })}
          </Text>
        </Flex>
        <AccordionIcon marginLeft={["20px", 0]} />
      </AccordionButton>
      <AccordionPanel py={"24px"} px={0} bg={"#F9F9F9"}>
        <Text
          paddingLeft={["20px", "140px"]}
          paddingRight={["20px", '"52px"']}
          color={"#292A2E"}
          {...Style.SubTitle2}
        >
          {contents}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export const TabListWrapper = () => {
  const { searchValue } = useContext(SearchContext);

  return (
    <Accordion>
      {searchValue === "검색어" ? (
        <EmptyResult />
      ) : (
        <>
          {TabListItemsArray.map((item) => (
            <TabListItems
              key={item.idx}
              idx={item.idx}
              label={item.label}
              title={item.title}
              contents={item.contents}
            />
          ))}
        </>
      )}
    </Accordion>
  );
};

export const FaqContents = () => {
  const { searchValue } = useContext(SearchContext);
  const TabsItemList = [
    "전체",
    "회원/계정",
    "입출금",
    "청약/배당",
    "증권상품",
    "투자자보호",
    "기타",
  ];

  const tabList = [
    {
      idx: 1,
      title: " 전체 ",
      value: "all",
    },
    {
      idx: 2,
      title: "회원/계정",
      value: "member",
    },
    {
      idx: 3,
      title: "입출금",
      value: "deposit",
    },
    {
      idx: 4,
      title: "청약/배당",
      value: "subscription",
    },
    {
      idx: 5,
      title: "증권상품",
      value: "securities",
    },
    {
      idx: 6,
      title: "투자자보호",
      value: "investor",
    },
    {
      idx: 7,
      title: "기타",
      value: "etc",
    },
  ];

  const { device } = useScreenSize();
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
      setDeviceType(device);
  }, [device]);

  return (
    <>
      <TabComponents tabList={tabList}>
        {TabsItemList.map((item, index) => {
          if (index === TabsItemList.length - 1) {
            return (
              <TabPanel key={item} padding={0}>
                <EmptyCase />
              </TabPanel>
            );
          }
          return (
            <TabPanel key={item} padding={0}>
              <TabListWrapper />
            </TabPanel>
          );
        })}
      </TabComponents>
      {searchValue === "검색어" ? null : (
        <>
          {deviceType === 'mobile' ? 
            '더보기 버튼'
            // <MoreBtn handleFetchMore={handleFetchMore} />
          :
          <Box display={["none", "block"]} mt={['16px']} textAlign={'center'}>
            페이지네이션
          </Box>
          }
        </>
      )}
    </>
  );
};
