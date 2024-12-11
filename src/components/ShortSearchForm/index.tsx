import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import Image from 'next/image';
import SearchIcon from 'img/styles/images/ic-search.svg';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ShortSearchForm = ({
    handleSearch,
    pageType,
    keyword,
    placeholder,
}: {
    handleSearch: (keyword: string) => void;
    placeholder?: string;
    keyword?: string;
    pageType?: 'BLOCK';
}) => {
    const { register, handleSubmit, getValues, setValue } = useForm();
    useEffect(() => {
        setValue('keyword', keyword);
    }, [keyword]);
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
        <InputGroup width={'100%'} maxW={'320px'} marginBottom={'20px'}>
            <Input
                type="tel"
                fontSize={16}
                fontWeight={600}
                letterSpacing={'-0.48px'}
                placeholder={placeholder}
                _placeholder={{
                    color: '#B8BCC8',
                }}
                {...register('keyword', { maxLength: 20 })}
                h={['44px', '48px']}
                borderRadius="100px"
                padding={'0 40px 0 16px'}
                borderColor={'#DADCE3'}
                _focusVisible={{
                    boxShadow: 'initial',
                    borderColor: '#DADCE3',
                }}
                onKeyPress={onKeyPress}
            />
            <InputLeftElement
                pointerEvents="none"
                left={'auto'}
                w={['44px', '48px']}
                h={['44px', '48px']}
                right={0}
                onClick={handleSubmit(onSubmit)}
            >
                <Image alt="search icon" src={SearchIcon} width={20} height={20} />
            </InputLeftElement>
        </InputGroup>
    );
};

export default ShortSearchForm;
