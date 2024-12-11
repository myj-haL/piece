import { useRouter } from 'next/router';
import Image from 'next/image';

import {
  Box, Button, Flex,
} from '@chakra-ui/react';

import SearchBar from '@/components/SearchBar';

import CloseIcon from '/public/images/styles/images/ic-close.svg';
import HomeIcon from '/public/images/styles/images/ic-home.svg';

interface SearchBoxProps {
  isSearchBoxOpen: boolean;
  onCloseSearchBox: any;
}

const SearchBox = ({ isSearchBoxOpen, onCloseSearchBox }: SearchBoxProps) => {
  const router = useRouter();

  const handleClickHomeButton = () => {
    onCloseSearchBox();
    router.push('/');
  };

  return (
    <Box
      zIndex={100}
      position={'fixed'}
      top={isSearchBoxOpen ? '0' : '-100vh'}
      left={0}
      right={0}
      width={'100%'}
      height={'fit-content'}
      minHeight={'100vh'}
      background={'#FFFFFF'}
      transition={'top .5s ease'}
    >
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={'0 8px'}
        width={'100%'}
        height={'64px'}
        border={'1px solid #F2F3F4'}
      >
        <Button
          onClick={handleClickHomeButton}
          padding={'10px'}
          width={'44px'}
          textIndent={'-10000px'}
          overflow={'hidden'}
          background={'transparent'}
          _hover={{
            background: 'transparent',
          }}
          _active={{
            background: 'transparent',
          }}
        >
          <Image
            src={HomeIcon}
            alt="home"
            width={24}
            height={24}
          />
        </Button>
        <Button
          type="button"
          onClick={onCloseSearchBox}
          backgroundColor={'transparent'}
          _hover={{
            background: 'transparent',
          }}
          _active={{
            background: 'transparent',
          }}
        >
          <Image src={CloseIcon} alt="close" />
        </Button>
      </Flex>
      <Box padding={'20px 20px'} marginBottom={'20px'}>
        <SearchBar size='M' placeholder="증권 상품을 검색해보세요!" />
        <Flex
          flexWrap={'wrap'}
          gap={'8px'}
          margin={'24px auto 0'}
          width={'100%'}
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
      </Box >
    </Box >
  );
};

export default SearchBox;
