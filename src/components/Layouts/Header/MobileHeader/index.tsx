import { useEffect, useState } from "react";

import HamburgerIcon from "/public/images/styles/images/ic-hamburger.svg";
import Image from "next/image";
import Logo from "/public/images/styles/images/logo_piece.svg";
import MobileGnb from "./MobileGnb";
import NextLink from "next/link";
import SearchIcon from "/public/images/styles/images/ic-search.svg";
import style from "./index.module.css";
import { useRouter } from "next/router";
import SearchBox from "./SearchBox";

type MobileHeaderProps = {
  isSearchBoxOpen: boolean;
  onToggleSearchBox: () => void;
};

const MobileHeader = ({
  isSearchBoxOpen,
  onToggleSearchBox,
}: MobileHeaderProps) => {
  const router = useRouter();
  const [isGnbOpen, setIsGnbOpen] = useState(false);

  const handleSlide = () => {
    setIsGnbOpen(!isGnbOpen);
  };
  useEffect(() => {
    if (isGnbOpen) handleSlide();
  }, [router.pathname]);

  return (
    <div className={`${style.container} ${isGnbOpen && style.open}`}>
      <NextLink className={style.logo} href={"/"}>
        <Image src={Logo} alt="logo" className={style.logo_img} />
      </NextLink>

      <div className={style.right_btns}>
        <button
          className={style.search}
          type="button"
          onClick={onToggleSearchBox}
        >
          <Image src={SearchIcon} alt="search" />
        </button>
        <button className={style.hamburger} type="button" onClick={handleSlide}>
          <Image src={HamburgerIcon} alt="hamburger" />
        </button>
      </div>
      <SearchBox
        isSearchBoxOpen={isSearchBoxOpen}
        onCloseSearchBox={onToggleSearchBox}
      />

      {/* TODO : mobile GNB */}
      <MobileGnb
        isGnbOpen={isGnbOpen}
        onOpenSearchBox={onToggleSearchBox}
        handleSlide={handleSlide}
      />
    </div>
  );
};

export default MobileHeader;
