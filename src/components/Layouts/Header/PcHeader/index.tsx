import { useEffect, useRef, useState } from 'react';

import {
    Box, Button, Flex,
    Stack, Text, Wrap
} from '@chakra-ui/react';

import { MenuType, menuList } from '../../menuList';

import GlobalIcon from '/public/images/styles/images/ic-global.svg';
import Image from 'next/image';
import Logo from '/public/images/styles/images/logo_piece.svg';
import NextLink from 'next/link';
import SearchIcon from '/public/images/styles/images/ic-search.svg';
import CloseIcon from '/public/images/styles/images/ic-close.svg';
import style from './index.module.css';
import { useHeaderNewQuery } from '@/generated/graphql';
import { useRouter } from 'next/router';

import SearchBar from '@/components/SearchBar';

type PcHeaderProps = {
    isSearchBoxOpen: boolean;
    onToggleSearchBox: () => void
}

const PcHeader = ({
    isSearchBoxOpen, onToggleSearchBox
}: PcHeaderProps) => {
    const router = useRouter();
    const [isMouseOver, serIsMouseOver] = useState(true);

    const searchBoxRef = useRef(null);
    const [searchBoxHeight, setSearchBoxHeight] = useState(10000);

    useEffect(() => {
        if (searchBoxRef) {
            setSearchBoxHeight(searchBoxRef.current.clientHeight);
        }

    }, [searchBoxRef])

    const { data } = useHeaderNewQuery();
    const mouseOver = () => {
        serIsMouseOver(true);
    };

    const mouseLeave = () => {
        serIsMouseOver(false);
    };

    useEffect(() => {
        serIsMouseOver(false);
    }, [router.pathname]);

    return (
        <>
            {isMouseOver && (
                <Box
                    position="fixed"
                    backgroundColor="rgba(19, 19, 19, 0.6)"
                    backdropFilter="blur(20px)"
                    top={0}
                    left="50%"
                    right={0}
                    bottom={0}
                    zIndex={-1}
                    width="100vw"
                    transform="translateX(-50vw)"
                    height="100vh"
                ></Box>
            )}
            <Box
                zIndex={100}
                position="fixed"
                top={isSearchBoxOpen ? '0' : `-${searchBoxHeight}px`}
                left={0}
                paddingTop={'80px'}
                width={'100%'}
                transition={'top .5s ease'}
                background={'#FFFFFF'}
                ref={searchBoxRef}
            >
                <Box
                    margin="0 auto"
                    padding={'80px 20px'}
                    width={'100%'}
                    maxWidth="1420px"
                >
                    <Wrap margin={'0 auto'} width={'760px'}>
                        <SearchBar size='L' placeholder="어떻게 도와드릴까요?" />
                    </Wrap>
                    <Flex
                        flexWrap={'wrap'}
                        gap={'8px'}
                        margin={'24px auto 0'}
                        width={'760px'}
                        justifyContent={'center'}
                    >
                        <Button
                            fontSize={'16px'}
                            fontWeight={'600'}
                            lineHeight={'22px'}
                            letterSpacing={'-3%'}
                            padding={'9px 16px'}
                            borderRadius={'20px'}
                            backgroundColor={'#F2F3F4'}
                            color={'#292A2E'}
                            _hover={{
                                'background-color': '#E9EAEB'
                            }}
                            _active={{
                                'background-color': '#E9EAEB'
                            }}
                        >
                            상품 목록
                        </Button>
                        <Button
                            fontSize={'16px'}
                            fontWeight={'600'}
                            lineHeight={'22px'}
                            letterSpacing={'-3%'}
                            padding={'9px 16px'}
                            borderRadius={'20px'}
                            backgroundColor={'#F2F3F4'}
                            color={'#292A2E'}
                            _hover={{
                                'background-color': '#E9EAEB'
                            }}
                            _active={{
                                'background-color': '#E9EAEB'
                            }}
                        >
                            청약 가이드
                        </Button>
                        <Button
                            fontSize={'16px'}
                            fontWeight={'600'}
                            lineHeight={'22px'}
                            letterSpacing={'-3%'}
                            padding={'9px 16px'}
                            borderRadius={'20px'}
                            backgroundColor={'#F2F3F4'}
                            color={'#292A2E'}
                            _hover={{
                                'background-color': '#E9EAEB'
                            }}
                            _active={{
                                'background-color': '#E9EAEB'
                            }}
                        >
                            공지사항
                        </Button>
                        <Button
                            fontSize={'16px'}
                            fontWeight={'600'}
                            lineHeight={'22px'}
                            letterSpacing={'-3%'}
                            padding={'9px 16px'}
                            borderRadius={'20px'}
                            backgroundColor={'#F2F3F4'}
                            color={'#292A2E'}
                            _hover={{
                                'background-color': '#E9EAEB'
                            }}
                            _active={{
                                'background-color': '#E9EAEB'
                            }}
                        >
                            공지사항
                        </Button>
                    </Flex>
                </Box>
            </Box>
            <Box
                position="fixed"
                display={isSearchBoxOpen ? 'block' : 'none'}
                backgroundColor="rgba(19, 19, 19, 0.6)"
                backdropFilter="blur(20px)"
                top={0}
                left="50%"
                right={0}
                bottom={0}
                zIndex={-1}
                width="100vw"
                transform="translateX(-50vw)"
                height="100vh"
            />
            <div className={style.container}>
                <Flex
                    zIndex={101}
                    direction="row"
                    justifyContent="space-between"
                    align="center"
                    maxWidth="1420px"
                    height="100%"
                    margin="0 auto"
                    padding="0 20px"
                >
                    <NextLink className={style.logo} href="/">
                        <Image alt="logo" src={Logo} className={style.logo_img} />
                    </NextLink>
                    {isSearchBoxOpen
                        ? (
                            <Box as="button" onClick={onToggleSearchBox}>
                                <Image alt="close" src={CloseIcon} />
                            </Box>

                        )
                        : (
                            <>
                                <Stack
                                    direction="row"
                                    gap="0"
                                    align="center"
                                    className={`${style.menu_wrap} ${isMouseOver ? style.hovered : ''}`}
                                    onMouseEnter={mouseOver}
                                    onMouseLeave={mouseLeave}
                                >
                                    {menuList.map((item: MenuType) => (
                                        <div className={style.menu_item} key={item.id}>
                                            <NextLink
                                                href={item.link}
                                                className={`${style.menu_link} ${item?.newCountNm && data?.headerNew?.newList[item.newCountNm] && style.new
                                                    }`}
                                            >
                                                <Text color="#292A2E" textAlign="center" fontSize="18px" fontWeight="600">
                                                    {item.oneDepth}
                                                </Text>
                                            </NextLink>

                                            <Box className={`${style.sub_menu_wrap}`}>
                                                <Stack
                                                    direction="row"
                                                    gap="60px"
                                                    height="100%"
                                                    className={`${style.menu_sub}`}
                                                    w={'100%'}
                                                    justifyContent={'center'}
                                                >
                                                    {item.twoDepth.map(subItem => (
                                                        <NextLink
                                                            className={style.sub_menu_link}
                                                            href={subItem.link}
                                                            key={subItem.id}
                                                        >
                                                            <Text
                                                                color="#292A2E"
                                                                className={style.sub_menu_item}
                                                                fontSize="18px"
                                                                fontWeight="600"
                                                            >
                                                                {subItem.content}
                                                            </Text>
                                                        </NextLink>
                                                    ))}
                                                </Stack>
                                            </Box>
                                        </div>
                                    ))}
                                </Stack>

                                <Stack direction="row" spacing={4} align="center">
                                    <Box
                                        as="button"
                                        height="40px"
                                        color="#292A2E"
                                        bg="#white"
                                        _hover={{ bg: '#F6F6F6' }}
                                        borderRadius="100px"
                                        fontSize="16px"
                                        fontWeight="600"
                                        padding="9px 16px"
                                        onClick={() => {
                                            router.push('/partnershipinquiryguide');
                                        }}
                                    >
                                        제휴 문의
                                    </Box>

                                    <Box
                                        as="button"
                                        height="40px"
                                        color="white"
                                        bg="#131313"
                                        _hover={{ bg: '#131313cc' }}
                                        borderRadius="100px"
                                        fontSize="16px"
                                        fontWeight="600"
                                        padding="9px 16px"
                                        onClick={() => {
                                            router.push('/qr');
                                        }}
                                    >
                                        앱 다운로드
                                    </Box>
                                    <Box as="button" width="24px" height="24px" onClick={onToggleSearchBox}>
                                        <Image alt="search" src={SearchIcon} />
                                    </Box>
                                    <Box as="button" width="24px" height="24px" display="none">
                                        <Image alt="search" src={GlobalIcon} />
                                    </Box>
                                </Stack>
                            </>
                        )
                    }
                </Flex>
                <Box
                    display={isSearchBoxOpen ? 'block' : 'none'}
                    width={'100%'}
                    height={'1px'}
                    backgroundColor={'#EAECF0'}
                />
            </div>
        </>
    );
};

export default PcHeader;
