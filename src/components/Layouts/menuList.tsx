export interface MenuType {
    id: number;
    oneDepth?: string;
    newCountNm?: string;
    link?: string;
    twoDepth?: TwoDepthType[];
}
export interface TwoDepthType {
    id: number;
    content?: string;
    link?: string;
}

//상품
const ProductGuideMenu = {
    id: 1,
    content: '청약 가이드',
    link: '/producthome?tab=guide&page=1',
};

const ProductListMenu = {
    id: 0,
    content: '상품 목록',
    link: '/productprogress?page=1',
};
const ProducthomeMenu = {
    id: 0,
    oneDepth: '상품',
    newCountNm: 'portfoliosCount',
    link: '/producthome',
    twoDepth: [ProductListMenu, ProductGuideMenu],
};

//매거진

const MagazinePortfolioMenu = {
    id: 0,
    content: '포트폴리오',
    link: '/magazine?tab=Portfolio&page=1',
};
const MagazineInsightMenu = {
    id: 1,
    content: '인사이트 칼럼',
    link: '/magazine?tab=Insight&page=1',
};
const MagazineTrendMenu = {
    id: 2,
    content: '어바웃 트렌드',
    link: '/magazine?tab=Trend&page=1',
};
const MagazineMenu = {
    id: 1,
    oneDepth: '매거진',
    newCountNm: 'magazinesCount',
    link: '/magazine?page=1',
    twoDepth: [MagazinePortfolioMenu, MagazineInsightMenu, MagazineTrendMenu],
};

//공시
const InvestmentdisclosureMenu = {
    id: 0,
    content: '투자공시',
    link: '/disclosure?tab=investmentDisclosure&page=1',
};
const CompanydisclosureMenu = {
    id: 1,
    content: '경영공시',
    link: '/disclosure?tab=companyDisclosure&page=1',
};
const DisclosuresMenu = {
    id: 2,
    oneDepth: '공시',
    newCountNm: 'disclosuresCount',
    link: '/disclosure?tab=investmentDisclosure&page=1',
    twoDepth: [InvestmentdisclosureMenu, CompanydisclosureMenu],
};

//고객센터
const NoticeMenu = {
    id: 0,
    content: '공지사항',
    link: '',
};
const FaqMenu = {
    id: 1,
    content: 'FAQ',
    link: '',
};
const SupporthomeMenu = {
    id: 3,
    oneDepth: '고객센터',
    newCountNm: 'boardsCount',
    link: '/supporthome',
    twoDepth: [NoticeMenu, FaqMenu],
};

//비즈니스
const BusinessMenu = {
    id: 0,
    content: 'Business',
    link: '/business',
};
const PressMenu = {
    id: 1,
    content: 'Press',
    link: '/business',
};
const PieceMenu = {
    id: 4,
    oneDepth: 'PIECE',
    newCountNm: '',
    link: '/business',
    twoDepth: [BusinessMenu, PressMenu],
};

export {
    ProductGuideMenu,
    ProductListMenu,
    ProducthomeMenu,
    MagazinePortfolioMenu,
    MagazineInsightMenu,
    MagazineTrendMenu,
    MagazineMenu,
    InvestmentdisclosureMenu,
    CompanydisclosureMenu,
    DisclosuresMenu,
    NoticeMenu,
    FaqMenu,
    SupporthomeMenu,
    BusinessMenu,
    PressMenu,
    PieceMenu,
};
export const menuList: MenuType[] = [ProducthomeMenu, MagazineMenu, DisclosuresMenu, SupporthomeMenu];
