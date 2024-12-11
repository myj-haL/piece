export const Style = {
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

export interface PostItemsProps {
  type: string;
  label: string;
  title: string;
  date: string;
  onClick?: () => void;
}
interface NoticeListProps extends PostItemsProps {
  idx: number;
}
export const NoticeList: NoticeListProps[] = [
  {
    idx: 0,
    type: "important",
    label: "중요",
    title: "증권선물위원회 사업구조 재편 최종승인",
    date: "2021.10.10",
  },
  {
    idx: 1,
    type: "notice",
    label: "공지",
    title: "PIECE 설 연휴 기간 고객센터 운영 안내",
    date: "2021.10.10",
  },
  {
    idx: 2, 
    type: "notice",
    label: "공지",
    title: "PIECE MAKER 여러분께 새해 인사드립니다",
    date: "2021.10.10",
  },
  {
    idx: 3, 
    type: "notice",
    label: "공지",
    title: "더욱 풍성해질 PIECE 와 함께 풍요로운 한가위 보내세요",
    date: "2021.10.10",
  },
  {
    idx: 4,
    type: "others",
    label: "구분",
    title:
      "게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 게시글 제목 영역입니다 ",
    date: "2021.10.10",
  },
  {
    idx: 5,
    type: "others",
    label: "구분",
    title: "게시글 제목 영역입니다",
    date: "2021.10.10",
  },
  {
    idx: 6,
    type: "others",
    label: "구분",
    title: "게시글 제목 영역입니다",
    date: "2021.10.10",
  },
  {
    idx: 7,
    type: "others",
    label: "구분",
    title: "게시글 제목 영역입니다",
    date: "2021.10.10",
  },
  {
    idx: 8,
    type: "others",
    label: "구분",
    title: "게시글 제목 영역입니다",
    date: "2021.10.10",
  },
  {
    idx: 9,
    type: "others",
    label: "구분",
    title: "게시글 제목 영역입니다",
    date: "2021.10.10",
  },
  {
    idx: 10,
    type: "others",
    label: "구분",
    title: "게시글 제목 영역입니다",
    date: "2021.10.10",
  },
  {
    idx: 11,
    type: "others",
    label: "구분",
    title: "게시글 제목 영역입니다",
    date: "2021.10.10",
  },
];
