import { Box, Input, InputGroup, InputLeftElement, keyframes } from '@chakra-ui/react';

import Image from 'next/image';
import SearchIcon from 'img/styles/images/ic-search.svg';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientSearchForm = () => {
    const router = useRouter();
    const { register, handleSubmit, getValues, setValue } = useForm();
    const onSubmit = () => {
        router.push(`/producthome?tab=list&keyword=${getValues('keyword')}&page=1`);
    };
    const onKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            router.push(`/producthome?tab=list&keyword=${getValues('keyword')}&page=1`);
        }
    };
    return (
        <Box>
            <InputGroup
                width={'100%'}
                maxW={'760px'}
                m={'auto'}
                position={'relative'}
                sx={{
                    '&:after': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: '-2.5px',
                        left: '-2.5px',
                        bottom: '-2.5px',
                        right: '-2.5px',
                        background: 'linear-gradient(60deg, #10CFC9, #4DC4EA, #1C93FF, #8E75FF);',
                        borderRadius: '100px',
                        zIndex: '-1',
                        backgroundSize: '300% 300%',
                        animation: `${gradient} 3s ease alternate infinite`,
                    },
                }}
            >
                <Input
                    type="tel"
                    fontSize={28}
                    fontWeight={600}
                    letterSpacing={'-0.84px'}
                    placeholder="증권 상품을 검색해보세요!"
                    _placeholder={{
                        color: '#B8BCC8',
                    }}
                    bg={'#fff'}
                    textAlign={'center'}
                    h={'80px'}
                    borderRadius="100px"
                    border={'0'}
                    padding={'0 64px 0 24px'}
                    _focusVisible={{
                        boxShadow: 'initial',
                    }}
                    position={'relative'}
                    {...register('keyword', { maxLength: 20 })}
                    onKeyPress={onKeyPress}
                />
                <InputLeftElement
                    pointerEvents="none"
                    left={'auto'}
                    w={'32px'}
                    h={'32px'}
                    right={'24px'}
                    top={'50%'}
                    transform={'translateY(-50%)'}
                    onClick={onSubmit}
                >
                    <Image alt="search icon" src={SearchIcon} style={{ width: '100%', height: '100%' }} />
                </InputLeftElement>
            </InputGroup>
        </Box>
    );
};

export default GradientSearchForm;
