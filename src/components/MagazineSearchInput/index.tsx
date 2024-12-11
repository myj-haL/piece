import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import Image from 'next/image';
import SearchIcon from 'img/styles/images/ic-search.svg';
import { useForm } from 'react-hook-form';

const MagazineSearchInput = ({
    handleSearch,
    inputPlaceholder,
    maxLength,
    pageType,
}: {
    handleSearch: (keyword: string) => void;
    isTop?: boolean;
    inputPlaceholder?: string;
    maxLength?: number;
    pb?: any;
    pt?: any;
    position?: any;
    pageType?: 'BLOCK';
    noIcon?: boolean;
}) => {
    const { register, handleSubmit, getValues, setValue } = useForm();
    const onSubmit = ({ keyword }: { keyword: string }) => {
        handleSearch(keyword);
        if (pageType) setValue('keyword', '');
    };
    const onKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            handleSearch(getValues('keyword'));
            if (pageType) setValue('keyword', '');
        }
    };
    return (
        <>
            <InputGroup width={'100%'} maxW={'320px'} marginBottom={'20px'}>
                <Input
                    type="tel"
                    fontSize={16}
                    fontWeight={600}
                    letterSpacing={'-0.48px'}
                    placeholder={inputPlaceholder ? inputPlaceholder : '궁금하신 내용을 검색해 보세요'}
                    _placeholder={{
                        color: '#B8BCC8',
                    }}
                    h={['44px', '48px']}
                    borderRadius="100px"
                    padding={'0 40px 0 16px'}
                    borderColor={'#DADCE3'}
                    _focusVisible={{
                        boxShadow: 'initial',
                        borderColor: '#DADCE3',
                    }}
                    {...register('keyword', { maxLength: maxLength ? maxLength : 20 })}
                    onKeyPress={onKeyPress}
                    maxLength={maxLength ? maxLength : 20}
                />
                <InputLeftElement
                    pointerEvents="none"
                    left={'auto'}
                    w={['44px', '48px']}
                    h={['44px', '48px']}
                    right={0}
                >
                    <Image alt="search icon" src={SearchIcon} width={20} height={20} onClick={handleSubmit(onSubmit)} />
                </InputLeftElement>
            </InputGroup>
        </>
    );
};

export default MagazineSearchInput;
