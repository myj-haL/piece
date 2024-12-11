import BlogIcon from '/public/images/styles/images/ic-blog.svg';
import FacebookIcon from '/public/images/styles/images/ic-facebook.svg';
import InstaIcon from '/public/images/styles/images/ic-instagram.svg';

export const companyInfo = [
    {
        id: 0,
        content: '서울시 영등포구 의사당대로 82 하나증권빌딩 11F',
    },
    {
        id: 1,
        title: '대표이사',
        content: '신범준',
    },
    {
        id: 2,
        title: '사업자등록번호',
        content: '803-88-01202',
    },
];

export const customer = [
    {
        id: 0,
        left: '고객문의',
        right: 'help@buysellstandards.com',
    },
    {
        id: 1,
        left: '제휴문의',
        right: 'contact@buysellstandards.com',
    },
    {
        id: 2,
        left: '대표전화',
        right: 'contact@buysellstandards.com',
        faxTitle: 'FAX',
        faxInfo: '02-6741-8282',
    },
    {
        id: 3,
        left: '운영시간',
        right: '평일 9:00~17:30\n점심시간 11:45~13:00(주말, 공휴일 휴무)',
    },
];

export const agreement = [
    {
        id: 0,
        name: '회사소개',
        link: '',
    },
    {
        id: 1,
        name: '서비스 이용약관',
        link: '',
    },
    {
        id: 2,
        name: '개인정보 처리방침',
        link: '',
    },
    {
        id: 3,
        name: '사용자 행태정보 수집 정책',
        link: '',
    },
    {
        id: 4,
        name: '민원 및 분쟁처리절차',
        link: '',
    },
];

export const snsList = [
    {
        id: 0,
        alt: 'instagram',
        img: InstaIcon,
        link: '',
        links: ['https://www.facebook.com/piecekorea2021/', 'https://www.facebook.com/piecekorea2021/'],
    },
    {
        id: 1,
        alt: 'facebook',
        img: FacebookIcon,
        link: 'https://www.facebook.com/piecekorea2021/',
    },
    {
        id: 2,
        alt: 'blog',
        img: BlogIcon,
        link: 'https://blog.naver.com/buysellstandards',
    },
];
