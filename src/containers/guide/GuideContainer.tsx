"use client";
import "swiper/css";
import { Box, Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@/components/Layouts";
import React, { useEffect, useRef, useState } from "react";
import { TypographyStyle } from "@/components/Typography";
import { FirstItem, SecondItem, ThirdItem } from "./Guide.Item";
import useScreenSize from "@/hook/useScreenSize";

const TabContainer = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <Tab
      width={"max-content"}
      height={"56px"}
      sx={{
        color: "#B8BCC8",
        padding: " 0 !important",
        "&[aria-selected='true']": {
          color: "#292A2E",
        },
      }}
      minWidth={"max-content"}
      {...TypographyStyle.SubTitle1}
      onClick={onClick}
    >
      {text}
    </Tab>
  );
};

const GuideContainer = () => {
  const { device } = useScreenSize();
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
      setDeviceType(device);
  }, [device]);

  const firstItemRef = useRef(null);
  const secondItemRef = useRef(null);
  const thirdItemRef = useRef(null);

  const scrollToItem = (itemRef) => {
    if (itemRef.current) {
      const headerOffset =  deviceType === "mobile" ? 100 : 50 ;
      const elementPosition = itemRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (isClient) {
    return (
      <>
        <Head>
          <title>PIECE</title>
        </Head>
        <Box>
          <Layout>
            <Box margin={"0 auto"}>
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
                  청약 가이드
                </Text>
                <Text
                  fontSize={[28, 48]}
                  color="#131313"
                  fontWeight="600"
                  letterSpacing="-0.84px"
                  lineHeight={["40px", "64px"]}
                >
                  피스 앱 사용가이드를
                  <br />
                  알려드릴게요
                </Text>
              </Box>
              <Flex
                width={"full"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Tabs
                  height={"56px"}
                  position={"sticky"}
                  top={"80px"}
                  background={["#FFFFFFCC","white"]}
                  backdropFilter={"blur(20px)"}
                  sx={{
                    "@media (max-width: 1200px)": {
                      top: "64px",
                    },
                  }}
                  zIndex={10}
                >
                  <TabList
                    height={"100%"}
                    border={"none"}
                    display={"flex"}
                    justifyContent={"center"}
                    columnGap={"24px"}
                  >
                    <TabContainer
                      text={"가상계좌 발급"}
                      onClick={() => scrollToItem(firstItemRef)}
                    />
                    <TabContainer
                      text={"예치금 입출금"}
                      onClick={() => scrollToItem(secondItemRef)}
                    />
                    <TabContainer
                      text={"청약 신청"}
                      onClick={() => scrollToItem(thirdItemRef)}
                    />
                  </TabList>
                </Tabs>
                <div ref={firstItemRef}>
                  <FirstItem />
                </div>
                <div ref={secondItemRef}>
                  <SecondItem />
                </div>
                <div ref={thirdItemRef}>
                  <ThirdItem />
                </div>
              </Flex>
            </Box>
          </Layout>
        </Box>
      </>
    );
  }
  return null;
};

export default GuideContainer;
