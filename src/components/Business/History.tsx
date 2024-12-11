import { useState } from 'react';

import { Box, Text, Button } from '@chakra-ui/react';

import Image from 'next/image';

import PLUS from '/public/images/business/ic-open.svg';
import MINUS from '/public/images/business/ic-close.svg';

const HISTORY = [
  {
    year: '2024',
    title: '사업 다각화 & 해외 진출',
    sub: 'NOW',
    monthly: [
      {
        month: '1월',
        description: '한국자산평가 「STO 가치 평가 모델링 개발」 MOU 체결 ',
      },
      {
        month: '2월',
        description: '위메프 「소상공인 지원 토큰증권 공동 사업추진」 MOU 체결',
      },
      {
        month: '3월',
        description: '더 아시안 뱅커 글로벌 리테일 금융 어워드 2024 「최우수 DeFi 혁신상」 수상',
      },
      {
        month: '4월',
        description: 'UN SDGs 「소비자 추천 지속가능 브랜드 50」 선정',
      },
    ],
  },
  {
    year: '2023',
    title: '사업 스케일 업',
    sub: '',
    monthly: [
      {
        month: '1월',
        description: '세계 최대 전자박람회 美 「CES 2023」 참가',
      },
      {
        month: '2월',
        description: '신한투자증권 「STO 사업 추진」 MOU 체결',
      },
      {
        month: '4월',
        description: 'KB증권 「STO 사업화」 MOU 체결',
      },
      {
        month: '7월',
        description: '한국투자증권 「STO 서비스 공동 개발」 MOU 체결',
      },
      {
        month: '9월',
        description: '금융위원회 산하 증권선물위원회 통한 사업재편 승인',
      },
      {
        month: '10월',
        description: '(사)한국핀테크산업협회 토큰증권협의회 초대협의회장 선출',
      },
      {
        month: '11월',
        description: '「SFF(싱가포르 핀테크 페스티벌) 2023」 참가',
      },
      {
        month: '12월',
        description: '싱가포르 자산운용사 AGST 「STO 발행」 MOU 체결',
      },
    ],
  },
  {
    year: '2022',
    title: '서비스 확장 & 국내 시장 점유',
    sub: '',
    monthly: [
      {
        month: '1월',
        description: '하나벤처스 Pre-A 투자 유치',
      },
      {
        month: '4월',
        description: '바이셀스탠다드 기업부설연구소 설립\n독일 「iF Design Award 2022」 선정\n신용보증기금 「퍼스트펭귄」 선정',
      },
      {
        month: '5월',
        description: '2021 「초기창업패키지」 최우수 기업 수료\n2022 「창업도약패키지」 선정',
      },
      {
        month: '6월',
        description: 'BNK투자증권 Bridge 투자 유치',
      },
      {
        month: '7월',
        description: '하나원큐 「애자일랩」 선정\n스탤리온파트너스 Bridge 투자 유치',
      },
      {
        month: '8월',
        description: 'ISO/IEC 27001(정보경영시스템인증) 취득',
      },
      {
        month: '9월',
        description: 'KDB인프라자산운용 ∙ NH투자증권 ∙ 한국해양대학교 「혁신금융」 MOU 체결',
      },
      {
        month: '11월',
        description: 'UN SDG’s 「지속가능개발목표경영지수(SDGBI)」 우수기업 선정',
      },
      {
        month: '12월',
        description: '국토교통부 장관상 수상',
      },
    ],
  },
  {
    year: '2021',
    title: '서비스 론칭 & 고도화',
    sub: '',
    monthly: [
      {
        month: '4월',
        description: '국내 최초 현물 조각투자 플랫폼 PIECE 론칭',
      },
      {
        month: '5월',
        description: '넥스트드림엔젤클럽 SEED(A) 투자 유치',
      },
      {
        month: '6월',
        description: '정보통신산업진흥원 주관 「AT KEARNEY」 블록체인 컨설팅 선정',
      },
      {
        month: '6월',
        description: 'BNK투자증권 Bridge 투자 유치',
      },
      {
        month: '7월',
        description: 'KB인베스트먼트 SEED(B) 투자 유치\n벤처기업 인증',
      },
      {
        month: '8월',
        description: '씨엔티테크 ∙ 뉴패러다임인베스트먼트 SEED(B) 투자 유치\n「K-GLOBAL」 선정\n「신한퓨처스랩」 선정',
      },
      {
        month: '9월',
        description: '「KB 스타터스」 선정',
      },
      {
        month: '10월',
        description: '2021 「TIPS 프로그램」 선정',
      },
      {
        month: '11월',
        description: '중소벤처기업진흥공단 이사장상 수상',
      },
      {
        month: '12월',
        description: 'BC카드(VP) Pre-A 투자 유치\nKB인베스트먼트 Pre-A 투자 유치\n신용보증기금 「OPEN NEST 200」 선정\n서울창조경제혁신센터 센터장상 수상',
      },
    ],
  },
];

const History = () => {
  const [open, setOpen] = useState([...Array(HISTORY.length)].map(() => false));

  const handleClick = (index: number) => {
    setOpen((prev) => prev.map((_, i) => i === index ? !prev[i] : false));
  };

  return (
    <>
      {HISTORY.map((history, index) => (
        <Box
          key={history.year}
          width="100%"
          borderBottom="1px solid #EAECF0"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={['20px 0', '40px 0']}
            width="100%"
            borderTop="1px solid #000000"
          >
            <Box
              display="flex"
              flexDirection={['column', 'row']}
              alignItems={["start", 'center']}
            >
              <Text
                fontSize={[28, 48]}
                fontWeight={['600', '700']}
                lineHeight={['40px', '64px']}
              >
                {history.year}
              </Text>
              <Text
                flex="1"
                fontSize={[18]}
                fontWeight="600"
                display="flex"
                alignItems="center"
                marginLeft={['0', '20px']}
                lineHeight={['24px']}
              >
                {history.title}
                <Box
                  as="strong"
                  marginLeft=".5em"
                  color="#0CB2AD"
                >
                  {history.sub}
                </Box>
              </Text>
            </Box>
            <Button
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding={['0']}
              width={['24px', '32px']}
              height={['24px', '32px']}
              backgroundColor="transparent"
              cursor="pointer"
              onClick={() => handleClick(index)}
              _hover={{
                backgroundColor: 'transparent',
              }}
            >
              <Image
                style={{display:'block'}}
                src={open[index] ? MINUS : PLUS}
                alt="open"
                fill
              />
            </Button>
          </Box>
          {open[index] ? (
            <Box
              padding={['20px 0 40px']}
              borderTop="1px solid #EAECF0"
            >
              {history.monthly.map((monthly) => (
                <Box
                  key={monthly.description}
                  display="flex"
                  marginTop={['20px']}
                  width="100%"
                >
                  <Text
                    fontSize={[18, 22]}
                    fontWeight={['600']}
                    display="flex"
                    alignItems="start"
                    width={['40px', '100px']}
                  >
                    {monthly.month}
                  </Text>
                  <Text
                    fontSize={[16, 18]}
                    fontWeight="400"
                    flex="1"
                    display="flex"
                    alignItems="center"
                    marginLeft={['20px']}
                    lineHeight={['24px', '28px']}
                    whiteSpace="pre-wrap"
                  >
                    {monthly.description}
                  </Text>
                </Box>
              ))}
            </Box>
          ) : null}
        </Box>
      ))}
    </>
  );
};
export default History;
