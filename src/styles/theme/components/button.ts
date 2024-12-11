import { theme as baseTheme } from '@chakra-ui/react';
import { StyleObjectOrFn } from '@chakra-ui/styled-system';

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
  border?: string;
};

const accessibleColorMap: { [key: string]: AccessibleColor } = {
  kakao: {
    bg: 'kakao.500',
    color: '#1A1A1A',
    hoverBg: 'kakao.600',
    activeBg: 'kakao.700',
  },
  naver: {
    bg: 'naver.500',
    color: '#FFFFFF',
    hoverBg: 'naver.600',
    activeBg: 'naver.700',
  },
  facebook: {
    bg: 'facebook.500',
    color: '#FFFFFF',
    hoverBg: 'facebook.600',
    activeBg: 'facebook.700',
  },
  apple: {
    bg: 'apple.500',
    color: '#FFFFFF',
    hoverBg: 'apple.600',
    activeBg: 'apple.700',
  },
  google: {
    bg: 'google.500',
    color: '#808080',
    hoverBg: 'google.600',
    activeBg: 'google.700',
    border: '#DDDDDD',
  },
  piece: {
    bg: 'brand',
    color: '#ffffff',
    hoverBg: 'brand',
    activeBg: 'brand',
    border: 'brand',
  },
  pieceSecond: {
    bg: '#fff',
    color: 'brand',
    hoverBg: '#fff',
    activeBg: '#fff',
    border: 'brand',
  },
  store: {
    bg: '#fff',
    color: 'brand',
    hoverBg: '#fff',
    activeBg: '#fff',
    border: '#fff',
  },
  store2: {
    bg: '#10cfc9',
    color: 'brand',
    hoverBg: '#10cfc9',
    activeBg: '#10cfc9',
    border: '#10cfc9',
  },
  store3: {
    bg: '#A4DAD8',
    color: 'brand',
    hoverBg: '#A4DAD8',
    activeBg: '#A4DAD8',
    border: '#A4DAD8',
  },
  default: {
    bg: 'none',
    color: '#434242',
    hoverBg: 'none',
    activeBg: 'none',
    border: 'none',
  },
};

const variantSolid: StyleObjectOrFn = (props) => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    const bg = 'gray.100';
    return {
      bg,
      _hover: {
        bg: 'gray.100',
        _disabled: {
          bg,
        },
      },
      _active: { bg: 'gray.300' },
    };
  }

  const {
    bg = `${c}.500`,
    color = 'white',
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`,
    border = `${c}.500`,
  } = accessibleColorMap[c] ?? {};

  const background = bg;
  const borderColor = border;

  return {
    bg: background,
    color: color,
    borderWidth: 1,
    borderColor: borderColor,
    _hover: {
      bg: hoverBg,
      borderColor: hoverBg,
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: activeBg, borderColor: activeBg },
  };
};

const Button = {
  baseStyle: {
    ...baseTheme.components.Button.baseStyle,
    _focus: { boxShadow: 'none' },
  },
  variants: {
    solid: variantSolid,
  },
  sizes: {
    lg: {
      h: '50px',
      fontSize: ['16px', '14px', '15px'],
      px: '15px',
    },
    md: {
      h: '40px',
      fontSize: ['12px', '10px', '12px'],
      px: '15px',
    },
    sm: {
      h: '30px',
      fontSize: ['12px', '10px', '12px'],
      px: '15px',
    },
    xs: {
      h: '26px',
      fontSize: ['12px', '10px', '12px'],
      px: '8px',
    },
  },
};

export default Button;
