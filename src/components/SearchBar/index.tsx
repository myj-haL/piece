import {
  Button, FormControl, Input,
} from '@chakra-ui/react';

import Image from 'next/image';
import SearchIcon from '/public/images/styles/images/ic-search.svg';

type SearchBarProps = {
  size?: 'L' | "M";
  placeholder: string;
}

const SearchBar = ({
  size = "L", placeholder
}: SearchBarProps) => {
  const paddings = {
    L: '24px',
    M: '0 12px 0 20px',
  }

  const heights = {
    L: '80px',
    M: '44px',
  }

  const borders = {
    L: '3px solid #292A2E',
    M: '1px solid #DADCE3',
  }

  const borderRadiuses = {
    L: '40px',
    M: '100px',
  }

  const fontSizes = {
    L: '28px',
    M: '16px',
  }

  const lineHeights = {
    L: '40px',
    M: '22px',
  }

  const textAligns = {
    L: 'center',
    M: 'start',
  }

  const submitButtonSizes = {
    L: '32px',
    M: '20px',
  }

  return (
    <FormControl
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      margin={'0 auto'}
      padding={paddings[size]}
      width={'100%'}
      height={heights[size]}
      border={borders[size]}
      borderRadius={borderRadiuses[size]}
    >
      <Input
        type='text'
        placeholder={placeholder}
        fontSize={fontSizes[size]}
        fontWeight={600}
        lineHeight={lineHeights[size]}
        letterSpacing={'-3%'}
        padding={0}
        border={0}
        outline={0}
        textAlign={textAligns[size] as 'center' | 'start'}
        color={'#292A2E'}
        _focusVisible={{
          borderColor: 'transparent',
        }}
        _placeholder={{
          color: '#B8BCC8'
        }}
      />
      <Button
        type='submit'
        position={'relative'}
        width={submitButtonSizes[size]}
        height={submitButtonSizes[size]}
        aspectRatio={1}
        textIndent={'-10000px'}
        background={'transparent'}
        _hover={{
          background: 'transparent',
        }}
        _active={{
          background: 'transparent',
        }}
      >
        검색
        <Image
          src={SearchIcon}
          alt='search'
          fill
          objectPosition='center'
        />
      </Button>
    </FormControl>
  );
};

export default SearchBar;
