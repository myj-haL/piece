import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NoticeList, PostItemsProps, Style } from "./list";
import PagingArrowIcon from "img/common/ic-arrow-paging.svg";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "./NoticeContainer";
import useScreenSize from "@/hook/useScreenSize";

const PostItems = ({ type, label, title, date, onClick }: PostItemsProps) => {
  return (
    <Flex
      gap={"8px"}
      cursor={"pointer"}
      padding={"16px 20px"}
      justifyContent={"center"}
      borderBottom={"1px solid #F2F3F4"}
      flexDirection={"column"}
      onClick={onClick}
    >
      <Text
        fontFamily={"Pretendard"}
        fontSize={"14px"}
        fontWeight={"600"}
        lineHeight={"20px"}
        letterSpacing={"-0.03em"}
        textAlign={"left"}
        color={type === "important" ? "#F65F5F" : "#8C919F"}
      >
        {label}
      </Text>
      <Text
        fontFamily={"Pretendard"}
        fontSize={"16px"}
        fontWeight={"600"}
        lineHeight={"22px"}
        letterSpacing={"-0.03em"}
        textAlign={"left"}
        color={"#292A2E"}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        // whiteSpace={"nowrap"}
        width={"100%"}
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {title}
      </Text>
      <Text
        fontFamily={"Pretendard"}
        fontSize={"13px"}
        fontWeight={"400"}
        lineHeight={"28px"}
        letterSpacing={"-0.03em"}
        textAlign={"left"}
        color={"#8C919F"}
      >
        {date}
      </Text>
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

interface PaginationProps {
  current: number;
  totalPage: number;
  setPage: (page: unknown) => void;
}
const Pagination = ({
  current = 1,
  totalPage = 10,
  setPage,
}: PaginationProps) => {
  const totalPageArray = Array.from({ length: totalPage }, (_, i) => i + 1);
  const handlePrevButton = () => {
    if (current === 1) return;
    setPage((prev: number) => prev - 1);
  };
  const handleNextButton = () => {
    if (current === totalPage) return;
    setPage((prev: number) => prev + 1);
  };
  return (
    <Flex gap={"8px"} justifyContent={"center"} marginTop={"16px"}>
      <Box as="button" padding={"14px"} onClick={handlePrevButton}>
        <Image alt="paging icon" src={PagingArrowIcon} />
      </Box>
      {totalPageArray.map((page) => (
        <Button
          value={page}
          key={page}
          padding={"12px 16px"}
          variant={"ghost"}
          fontSize={16}
          fontWeight={600}
          color={current === page ? "#292A2E" : "#B8BCC8"}
          w={"44px"}
          h={"44px"}
          _hover={{
            backgroundColor: "transparent",
            color: "#292A2E",
          }}
          _active={{
            backgroundColor: "transparent",
            color: "#292A2E",
          }}
          onClick={() => setPage(page)}
        >
          {page}
        </Button>
      ))}
      <Box
        as="button"
        padding={"14px"}
        transform="rotate(180deg)"
        onClick={handleNextButton}
      >
        <Image alt="paging icon" src={PagingArrowIcon} />
      </Box>
    </Flex>
  );
};

export const NoticeContents = () => {
  const { searchValue } = useContext(SearchContext);
  // TODO 검색 Api 연동
  console.log(searchValue, "searchValue");
  const [page, setPage] = useState(1);
  const totalPage = 10;
  const router = useRouter();
  const handlePostItem = ({ idx }: { idx: number }) => {
    console.log("handlePostItem");
    router.push(`/notice/${idx}`);
  };
  const showPagination = NoticeList.length > 0;
  const { device } = useScreenSize();
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
      setDeviceType(device);
  }, [device]);

  return (
    <Flex
      maxWidth={"820px"}
      width={"100%"}
      flexDirection={"column"}
      pb={['40px','80px']}
      justifyContent={"center"}
      margin={"0 auto"}
    >
      {showPagination ? (
        <>
          {NoticeList.map((item) => (
            <PostItems
              key={item.idx}
              type={item.type}
              label={item.label}
              title={item.title}
              date={item.date}
              onClick={() => handlePostItem({ idx: item.idx })}
            />
          ))}
        </>
      ) : (
        <EmptyCase />
      )}

      {deviceType === 'mobile' ? 
        '더보기 버튼'
        // <MoreBtn handleFetchMore={handleFetchMore} />
      :
      <Box display={["none", "block"]} mt={['16px']} textAlign={'center'}>
        페이지네이션
      </Box>
      }
    </Flex>
  );
};
