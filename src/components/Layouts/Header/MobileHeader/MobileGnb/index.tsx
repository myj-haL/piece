import {
    CompanydisclosureMenu,
    InvestmentdisclosureMenu,
    MagazineInsightMenu,
    MagazinePortfolioMenu,
    MagazineTrendMenu,
    ProductGuideMenu,
    ProductListMenu,
} from '@/components/Layouts/menuList';

import CloseIcon from '/public/images/styles/images/ic-close.svg';
import GlobalIcon from '/public/images/styles/images/ic-global.svg';
import HomeIcon from '/public/images/styles/images/ic-home.svg';
import Image from 'next/image';
import NextLink from 'next/link';
import SearchIcon from '/public/images/styles/images/ic-search.svg';
import style from './index.module.css';

interface Props {
    isGnbOpen: boolean;
    handleSlide: any;
    onOpenSearchBox: () => void;
}

const MobileGnb = ({ isGnbOpen, handleSlide, onOpenSearchBox }: Props) => {
    return (
        <div className={`${style.container} ${isGnbOpen ? style.open : style.none}`}>
            <div className={style.gnb_head}>
                <NextLink className={style.home} href="/">
                    <Image src={HomeIcon} alt="home" className={style.home_img} />
                </NextLink>

                <div className={style.right_btn}>
                    <button className={style.search} type="button" onClick={onOpenSearchBox}>
                        <Image src={SearchIcon} alt="search" />
                    </button>
                    <button className={style.close} type="button" onClick={handleSlide}>
                        <Image src={CloseIcon} alt="close" />
                    </button>
                </div>
            </div>

            <div className={style.gnb_body}>
                <ul className={style.menu_list}>
                    <li className={style.menu}>
                        {/* TODO : depth 1 menu */}
                        <h2 className={style.depth_1}>상품</h2>

                        {/* TODO : depth 2 menu */}
                        <ul className={style.inner_menu_list}>
                            <li className={style.inner_menu}>
                                <NextLink className={style.menu_link} href={ProductListMenu?.link}>
                                    상품 목록
                                </NextLink>
                            </li>

                            <li className={style.inner_menu}>
                                <NextLink className={style.menu_link} href={ProductGuideMenu?.link}>
                                    상품 가이드
                                </NextLink>
                            </li>
                        </ul>
                    </li>
                    <li className={style.menu}>
                        {/* TODO : depth 1 menu */}
                        <h2 className={style.depth_1}>매거진</h2>

                        {/* TODO : depth 2 menu */}
                        <ul className={style.inner_menu_list}>
                            <li className={style.inner_menu}>
                                <NextLink className={style.menu_link} href={MagazinePortfolioMenu?.link}>
                                    포트폴리오
                                </NextLink>
                            </li>

                            <li className={style.inner_menu}>
                                <NextLink className={style.menu_link} href={MagazineInsightMenu?.link}>
                                    인사이트 칼럼
                                </NextLink>
                            </li>

                            <li className={style.inner_menu}>
                                <NextLink className={style.menu_link} href={MagazineTrendMenu?.link}>
                                    어바웃 트랜드
                                </NextLink>
                            </li>
                        </ul>
                    </li>
                    <li className={style.menu}>
                        {/* TODO : depth 1 menu */}
                        <h2 className={style.depth_1}>공시</h2>

                        {/* TODO : depth 2 menu */}
                        <ul className={style.inner_menu_list}>
                            <li className={style.inner_menu}>
                                <NextLink className={style.menu_link} href={InvestmentdisclosureMenu?.link}>
                                    투자공시
                                </NextLink>
                            </li>

                            <li className={style.inner_menu}>
                                <NextLink className={style.menu_link} href={CompanydisclosureMenu?.link}>
                                    경영공시
                                </NextLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className={style.gnb_foot}>
                <div className={style.user_touch}>
                    <NextLink href={'/partnershipinquiryguide'}>
                        <button className={style.consulting} type="button">
                            제휴 문의
                        </button>
                    </NextLink>

                    <NextLink href={'/qr'}>
                        <button className={style.download} type="button">
                            앱 다운로드
                        </button>
                    </NextLink>
                </div>

                <div className={style.language} style={{ display: 'none' }}>
                    <Image src={GlobalIcon} alt="language" className={style.global} />
                    {/* TODO : 활성화 시 클래스 active 추가 */}
                    <button className={`${style.korean} ${style.active}`} type="button">
                        KOREAN
                    </button>
                    <button className={style.english} type="button">
                        ENGLISH
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileGnb;
