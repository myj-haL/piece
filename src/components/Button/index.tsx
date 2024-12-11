import { HTMLAttributes } from 'react';

import { Box } from "@chakra-ui/react"

type ButtonType = HTMLAttributes<Element> & {
  disabled?: boolean;
  size?: 'L' | 'M' | 'S';
  style?: 'solid' | 'outlined';
}

const Button = ({
  children, className, disabled = false,
  size = "L", style = 'solid', ...attributes
}: ButtonType) => {
  const fontSizes = {
    'L': '16px',
    'M': '16px',
    'S': '14px',
  };

  const LineHeights = {
    'L': '22px',
    'M': '22px',
    'S': '20px',
  };

  const paddings = {
    'L': '12px 20px',
    'M': '12px 16px',
    'S': '8px 12px',
  };

  const heights = {
    'L': '48px',
    'M': '40px',
    'S': '32px',
  };

  const borderRadiuses = {
    'L': '24px',
    'M': '20px',
    'S': '16px',
  };

  const borders = {
    'solid': 'none',
    'outlined': '1px solid #EAECF0',
  };

  const backgroundColors = {
    'solid': '#131313',
    'outlined': '#FFFFFF',
  };

  const colors = {
    'solid': '#FFFFFF',
    'outlined': '#292A2E',
  }

  const activeBackgroundColors = {
    'solid': '#424242',
    'outlined': '#F6F6F6',
  };

  const disabledBackgroundColors = {
    'solid': '#131313',
    'outlined': '#FFFFFF',
  };

  const disabledBorderColors = {
    'solid': 'none',
    'outlined': '#EAECF0',
  };

  const disabledColors = {
    'solid': '#FFFFFF',
    'outlined': '#292A2E',
  };

  return (
    <Box
      as="button"
      className={className}
      fontSize={fontSizes[size]}
      fontWeight={600}
      lineHeight={LineHeights[size]}
      display={'flex'}
      alignItems={'center'}
      padding={paddings[size]}
      width={'fit-content'}
      height={heights[size]}
      border={borders[style]}
      borderRadius={borderRadiuses[size]}
      backgroundColor={backgroundColors[style]}
      color={colors[style]}
      wordBreak={'keep-all'}
      _hover={{
        backgroundColor: activeBackgroundColors[style],
      }}
      _active={{
        backgroundColor: activeBackgroundColors[style],
      }}
      _disabled={{
        backgroundColor: disabledBackgroundColors[style],
        borderColor: disabledBorderColors[style],
        color: disabledColors[style],
        opacity: '10%',
      }}
      disabled={disabled}
      {...attributes}
    >
      {children}
    </Box >
  )
}

export default Button;
