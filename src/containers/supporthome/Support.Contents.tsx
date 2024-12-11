import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from 'next/image';
import CopyIcon from "img/supporthome/copy_thin_icon.svg";

const Style = {
  Title1: {
    fontFamily: "Pretendard",
    fontSize: "32px",
    fontWeight: "700",
    lineHeight: "44px",
    letterSpacing: "-0.03em",
  },
  Title2: {
    fontFamily: "Pretendard",
    fontSize: "28px",
    fontWeight: "600",
    lineHeight: "40px",
    letterSpacing: "-0.03em",
  },
  SubTitle1: {
    fontFamily: "Pretendard",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "24px",
    letterSpacing: "-0.03em",
  },
  SubTitle2: {
    fontFamily: "Pretendard",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "22px",
    letterSpacing: "-0.03em",
  },
  SubTitle3: {
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    letterSpacing: "-0.03em",
  },

  Caption1: {
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    letterSpacing: "-0.03em",
  },
};

interface NoticeItemProps {
  color: string;
  noticeProps: {
    type: "critical" | "event";
    label: string;
    title: string;
    date: string;
  };
}

export const NoticeItem = ({ color, noticeProps }: NoticeItemProps) => {
  const labelColor = noticeProps.type === "critical" ? "#F65F5F" : "#8C919F";
  return (
    <Flex
      width={"100%"}
      gap={"8px"}
      background={color}
      alignItems={"center"}
      textAlign={["center", "left"]}
      padding={["20px", "12px 20px"]}
      borderRadius={["16px", "24px"]}
      flexDirection={["column", "row"]}
      _hover={{ background: "#F6F6F6" }}
      _active={{ background: "#F6F6F6" }}
      cursor={"pointer"}
    >
      <Text
        {...Style.SubTitle2}
        width={"48px"}
        fontSize={["14px", "16px"]}
        minWidth={"48px"}
        color={labelColor}
      >
        {noticeProps.label}
      </Text>
      <Text {...Style.SubTitle2} color={"#292A2E"} width={"100%"}>
        {noticeProps.title}
      </Text>
      <Text {...Style.Caption1} fontSize={["13px", "14px"]} color={"#8C919F"}>
        {noticeProps.date}
      </Text>
    </Flex>
  );
};

export const CardWrapper = ({
  children,
  type,
  title,
}: {
  children: React.ReactNode;
  type: "left" | "right";
  title: { title: string; subTitle1: string; subTitle2: string };
}) => {
  const bgGradient =
    type === "left"
      ? "linear(to-r, #EAECF0, #D4D7DD)"
      : "linear(to-r, #E7F3FF, #BDDFFF)";
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      width={"100%"}
      maxWidth={"700px"}
      padding={["32px 20px", "40px"]}
      borderRadius={"40px"}
      bgGradient={bgGradient}
    >
      <Box marginBottom={["32px", "68px"]}>
        <Text
          marginBottom={"16px"}
          fontSize={["16px", "18px"]}
          fontWeight={"600"}
          lineHeight={["22px", "24px"]}
          letterSpacing={"-0.03em"}
          textAlign={["center", "left"]}
        >
          {title.title}
        </Text>
        <Text
          fontSize={["22px", "28px"]}
          fontWeight={"600"}
          lineHeight={["28px", "40px"]}
          letterSpacing={"-0.03em"}
          textAlign={["center", "left"]}
        >
          {title.subTitle1}
          <br /> {title.subTitle2}
        </Text>
      </Box>
      {children}
    </Box>
  );
};

export const SupportContents = () => {
  const TagsList = [
    "가상계좌 발급",
    "예치금 출금",
    "청약 신청 및 취소",
    "투자계약서 교부",
    "이용가이드",
    "도용신고",
  ];
  return (
    <Flex
      padding={"40px 20px"}
      gap={"20px"}
      justifyContent={"center"}
      flexDirection={["column", "row"]}
    >
      <CardWrapper
        type="left"
        title={{
          title: "공지사항",
          subTitle1: "중요 내용",
          subTitle2: "꼭 확인해 주세요",
        }}
      >
        <Flex flexDirection={"column"} gap={"8px"}>
          <NoticeItem
            noticeProps={{
              type: "critical",
              label: "중요",
              title: "피스 홈페이지 리뉴얼 오픈 안내",
              date: "24.01.01",
            }}
            color="#fff"
          />
          <NoticeItem
            noticeProps={{
              type: "event",
              label: "이벤트",
              title: "투자계약증권 1호 발행 오픈 이벤트",
              date: "24.01.01",
            }}
            color="#fff"
          />

          <Box
            {...Style.SubTitle2}
            width={["100%", "max-content"]}
            height={["48px", "40px"]}
            padding={["13px 16px", "9px 16px"]}
            gap={"4px"}
            borderRadius={["24px", "20px"]}
            background={"#131313"}
            color={"#fff"}
            marginTop={["24px", "0"]}
            textAlign={["center", "left"]}
          >
            공지사항 모두 보기
          </Box>
        </Flex>
      </CardWrapper>
      <CardWrapper
        type="right"
        title={{
          title: "FAQ",
          subTitle1: "궁금함도 풀어드리고",
          subTitle2: "더 나은 경험을 만들어 드려요",
        }}
      >
        <Flex flexWrap={"wrap"} gap={"8px"}>
          {TagsList.map((tag) => (
            <Tags key={tag} text={tag} onClick={console.log} />
          ))}
          <Box
            {...Style.SubTitle2}
            width={["100%", "max-content"]}
            height={["48px", "40px"]}
            padding={["13px 16px", "9px 16px"]}
            gap={"4px"}
            borderRadius={["24px", "20px"]}
            background={"#131313"}
            color={"#fff"}
            marginTop={["24px", "0"]}
            textAlign={["center", "left"]}
          >
            FAQ 모두 보기
          </Box>
        </Flex>
      </CardWrapper>
    </Flex>
  );
};

export const Tags = ({ text, onClick }: { text: string; onClick: any }) => {
  return (
    <Box
      width={"max-content"}
      minWidth={"max-content"}
      height={"40px"}
      padding={"9px 16px"}
      borderRadius={"20px"}
      background={"#FFF"}
      {...Style.SubTitle2}
      onClick={onClick}
    >
      {text}
    </Box>
  );
};

export const HelpMoreContents = () => {
  const handleLink = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("link");
  };
  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("이메일 주소가 복사되었습니다.");
    navigator.clipboard.writeText("help@buysellstandards.com");
  };

  return (
    <Flex
      justify={"center"}
      alignItems={"center"}
      padding={["40px 20px", "80px 10px"]}
      gap={["20px", "40px"]}
      flexDirection={"column"}
    >
      <Text
        {...Style.Title1}
        fontSize={["22px", "32px"]}
        fontWeight={[600, 700]}
        lineHeight={["28px", "44px"]}
        color={"#131313"}
      >
        도움이 더 필요하신가요?
      </Text>
      <Flex
        width={"100%"}
        gap={"20px"}
        flexDirection={["column", "row"]}
        justifyContent={"center"}
      >
        <Flex
          position={"relative"}
          flexDirection={"column"}
          justifyContent={"start"}
          maxWidth={"700px"}
          width={"100%"}
          height={["240px", "auto"]}
          borderRadius={"40px"}
          padding={"50px 40px"}
          backgroundColor={"#FFE24A"}
          backgroundImage={
            "url('/images/supporthome/img_supporthome_kakaotalk.png')"
          }
          backgroundSize={["auto 128px", "contain"]}
          backgroundPosition={["bottom", "right"]}
          backgroundRepeat={"no-repeat"}
          gap={"8px"}
        >
          <Text
            {...Style.Title2}
            fontSize={["22px", "28px"]}
            lineHeight={["28px", "40px"]}
          >
            카톡 상담하기
          </Text>
          <Flex gap={"8px"} flexWrap={"wrap"} alignItems={"center"}>
            <Text
              {...Style.SubTitle1}
              fontSize={["16px", "18px"]}
              lineHeight={["22px", "24px"]}
            >
              평일 오전 9:00 ~ 오후 5:30
            </Text>
            <WorkingLabel />
          </Flex>
          <Box
            as="button"
            cursor={'pointer'}
            position={'absolute'}
            right={0}
            bottom={0}
            w={'120px'}
            h={'120px'}
            backgroundSize={'cover'}
            backgroundRepeat={'no-repeat'}
            backgroundPosition={'center'}
            style={{
              backgroundImage:
                "url('/images/supporthome/img_main_kakaotalk_arrow.png')",
            }}
          />
        </Flex>
        <Flex
          position={"relative"}
          flexDirection={"column"}
          width={"100%"}
          maxWidth={"700px"}
          height={["240px", "auto"]}
          borderRadius={"40px"}
          padding={"50px 40px"}
          backgroundColor={"#67D7FB"}
          backgroundImage={
            "url('/images/supporthome/img_supporthome_email.png')"
          }
          backgroundSize={["auto 128px", "contain"]}
          backgroundPosition={["bottom", "right"]}
          backgroundRepeat={"no-repeat"}
          gap={"8px"}
          onClick={handleLink}
        >
          <Text
            {...Style.Title2}
            fontSize={["22px", "28px"]}
            lineHeight={["28px", "40px"]}
          >
            이메일 문의
          </Text>
          <Flex gap={"8px"} cursor={"pointer"} onClick={handleCopy}>
            <Text
              {...Style.SubTitle1}
              fontSize={["16px", "18px"]}
              lineHeight={["22px", "24px"]}
            >
              help@buysellstandards.com
            </Text>
            <Image
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "100%",
                background: "#131313",
                padding: "6px",
              }}
              width={28}
              height={28}
              src={CopyIcon}
              alt="copy"
            />
          </Flex>
          <Box
            as="button"
            cursor={'pointer'}
            position={'absolute'}
            right={0}
            bottom={0}
            w={'120px'}
            h={'120px'}
            backgroundSize={'cover'}
            backgroundRepeat={'no-repeat'}
            backgroundPosition={'center'}
            style={{
              backgroundImage:
                "url('/images/supporthome/img_main_email_arrow.png')",
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export const WorkingLabel = () => {
  // const workingTimeDemo = new Date(2024, 4, 30, 13, 31, 10, 22);
  // const launchTimeDemo = new Date(2024, 4, 30, 12, 20, 10, 22);
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  // 운영 시간은 9시부터 오후 5시 30분(17시 30분)까지
  const isWorkingTime =
    hours >= 9 && (hours < 17 || (hours === 17 && minutes < 30));
  const isLunchTime = hours === 12; // 12시부터 13시 전까지 점심시간

  const workingBgColor = "#F65F5F";
  const workingTextColor = "#FFF";
  const offBgColor = "#FFF";
  const offTextColor = "#4A4D55";
  const lunchBgColor = "#FFF";
  const lunchTextColor = "#4A4D55";

  let bgColor, textColor, label;

  if (isLunchTime) {
    bgColor = lunchBgColor;
    textColor = lunchTextColor;
    label = "지금은 점심시간입니다";
  } else if (isWorkingTime) {
    bgColor = workingBgColor;
    textColor = workingTextColor;
    label = "운영중";
  } else {
    bgColor = offBgColor;
    textColor = offTextColor;
    label = "운영종료, 이메일 문의해주세요";
  }
  return (
    <Box
      width={"max-content"}
      borderRadius={"20px"}
      padding={"4px 10px"}
      background={bgColor}
      color={textColor}
      {...Style.SubTitle3}
    >
      {label}
    </Box>
  );
};
