import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { GuideHeader } from "./Guide.Header";
import React, { useEffect, useState } from "react";
import { TabProps } from "./Guide.types";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FirstSlide, SecondSlide, ThirdSlide } from "./list";
import { TypographyStyle } from "@/components/Typography";
import Image from "next/image";
import MockUpImg from 'img/guide/img_guide_mockup.png';
import useScreenSize from "@/hook/useScreenSize";

const Bullet = ({ index, onClick, select }) => {
  return (
    <Box
      width={"24px"}
      height={"24px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        cursor={"pointer"}
        onClick={onClick}
        width={"8px"}
        height={"8px"}
        background={"#292A2E"}
        opacity={select ? 1 : 0.2}
        borderRadius={"100%"}
      />
    </Box>
  );
};

const GuideContents = ({ sliderItem }: any) => {
  const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

  const [isClient, setIsClient] = React.useState(false);
  const lastIndex = sliderItem.length - 1;
  const [swiper, setSwiper] = useState(null);
  const [index, setIndex] = useState(0);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  const params = (setSwiper) => {
    return {
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        clickable: true,
      },
      onSwiper: setSwiper,
      navigation: true,
      modules: [Autoplay, Pagination, Navigation],
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
      onSlideChange: function (e) {
        if (e.realIndex === lastIndex - 1) {
          console.log(e.realIndex, "e");
        }
        if (swiper !== null) {
          setIndex(e.realIndex);
        }
      },
    };
  };

  const goToSlide = (index) => {
    if (swiper !== null) {
      console.log(index, "index");
      swiper.slideTo(index);
      setIndex(index);
    }
  };
  if (!isClient) return null;
  return (
    <Flex
      maxWidth={"1180px"}
      width={"full"}
      height={"auto"}
      direction={"column"}
      alignItems={"center"}
      padding={["40px 40px 32px", "80px 80px 60px"]}
      gap={["16px", "20px"]}
      rounded={["32px","40px"]}
      bg={"white"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={["240px","400px"]}
        height={["240px", "400px"]}
        position={"relative"}
      >
        <Swiper
          style={{
            display: "flex",
          }}
          {...params(setSwiper)}
        >
          {sliderItem?.map((item) => (
            <SwiperSlide
              key={item.idx}
              style={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Image
                src={item.img}
                alt=""
                style={{
                  maxHeight: "380px",
                  maxWidth: "380px",
                  width : deviceType === 'mobile' ? "240px" : "380px",
                  height : deviceType === 'mobile' ? "240px" : "380px" 
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            pointerEvents: "none",
            width : deviceType === 'mobile' ? "240px" : "400px",
            height : deviceType === 'mobile' ? "240px" : "400px",
          }}
          src={MockUpImg}
          alt="mockup img"
        />
      </Box>
      <Text
        fontSize={["18px", "28px"]}
        fontWeight={"600"}
        lineHeight={["24px", "40px"]}
        letterSpacing={"-0.03em"}
        textAlign={"center"}
      >
        {sliderItem.map((item) =>
          item.idx === index
            ? item.text.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))
            : ""
        )}
      </Text>
      <Flex>
        {sliderItem.map((item) => (
          <Bullet
            key={item.img}
            index={item.idx}
            onClick={() => goToSlide(item.idx)}
            select={index === item.idx}
          ></Bullet>
        ))}
      </Flex>
    </Flex>
  );
};

export const FirstItem = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      padding={["40px 20px", "120px 20px"]}
      gap={["20px", "40px"]}
      bg={"#F2F3F4"}
    >
      <GuideHeader title={`계좌 연동하고\n 가상계좌 발급하기`}></GuideHeader>
      <GuideContents sliderItem={FirstSlide.Slider.Item1}></GuideContents>
    </Box>
  );
};

export const SecondItem = () => {
  const [isClient, setIsClient] = React.useState(false);
  const { device } = useScreenSize();
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
      setDeviceType(device);
  }, [device]);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const [tabValue, setTabValue] = useState("1");
  const [sliderItem, setSliderItem] = useState(SecondSlide.Slider.Item1);

  useEffect(() => {
    if (tabValue === "1") setSliderItem(SecondSlide.Slider.Item1);
    if (tabValue === "2") setSliderItem(SecondSlide.Slider.Item2);
    if (tabValue === "3") setSliderItem(SecondSlide.Slider.Item3);
  }, [tabValue]);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      padding={["40px 20px", "120px 20px"]}
      gap={["20px", "40px"]}
      bg={"#F2F3F4"}
    >
      <GuideHeader
        title={`예치금 입출금하고\n 거래내역 확인하기`}
        tabValue={tabValue}
        setTabValue={setTabValue}
        TabListItems={SecondSlide.TabList}
      />
      <Flex
        flexDirection={"column"}
        gap={"20px"}
        maxWidth={"1190px"}
        width={"full"}
      >
        <GuideContents sliderItem={sliderItem} />
        <UnorderedList color={"#757983"} {...TypographyStyle.Caption1}>
          <ListItem fontSize={["13px", "14px"]} lineHeight={["18px", "20px"]}>
            NH 농협은행 가상계좌로만 입금할 수 있어요.
          </ListItem>
          <ListItem fontSize={["13px", "14px"]} lineHeight={["18px", "20px"]}>
            오픈 뱅킹 송금 서비스는 이용할 수 없어요.
          </ListItem>
          <ListItem fontSize={["13px", "14px"]} lineHeight={["18px", "20px"]}>
            원화(KRW)만 입출금 할 수 있어요.
          </ListItem>
          <ListItem fontSize={["13px", "14px"]} lineHeight={["18px", "20px"]}>
            은행 정기 점검시간에는 입출금 할 수 없어요.{deviceType === 'mobile' && <br />}
            (매일 23:00~00:40 / 매월 세번째 월요일 23:55~04:00)
          </ListItem>
        </UnorderedList>
      </Flex>
    </Box>
  );
};

export const ThirdItem = () => {
  const [tabValue, setTabValue] = useState("1");
  const [sliderItem, setSliderItem] = useState(ThirdSlide.Slider.Item1);
  const handleTabChange = (value) => {
    setTabValue(value);
    if (value === "1") setSliderItem(ThirdSlide.Slider.Item1);
    if (value === "2") setSliderItem(ThirdSlide.Slider.Item2);
    if (value === "3") setSliderItem(ThirdSlide.Slider.Item3);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      padding={["40px 20px", "120px 20px"]}
      gap={["20px", "40px"]}
      bg={"#F2F3F4"}
    >
      <GuideHeader
        title="청약 신청하고 취소하기"
        tabValue={tabValue}
        setTabValue={handleTabChange}
        TabListItems={ThirdSlide.TabList}
      />
      <GuideContents sliderItem={sliderItem} />
    </Box>
  );
};
