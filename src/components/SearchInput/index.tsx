import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import Image from 'next/image';
import SearchIcon from 'img/styles/images/ic-search.svg';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const SearchInput = ({
    handleSearch,
    pageType,
    keyword,
}: {
    handleSearch: (keyword: string) => void;
    isTop?: boolean;
    keyword?: string;
    maxLength?: number;
    pb?: any;
    pt?: any;
    position?: any;
    pageType?: 'BLOCK';
    noIcon?: boolean;
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
                placeholder="궁금하신 내용을 검색해 보세요"
                _placeholder={{
                    color: '#B8BCC8',
                }}
                h={['44px', '48px']}
                borderRadius="100px"
                padding={'0 40px 0 16px'}
                borderColor={'#DADCE3'}
                {...register('keyword', { maxLength: 20 })}
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
                cursor={'pointer'}
                onClick={handleSubmit(onSubmit)}
            >
                <Image alt="search icon" src={SearchIcon} width={20} height={20} />
            </InputLeftElement>
        </InputGroup>
        // <Flex justifyContent={position || ['center', 'center']} pb={pb || ['40px', '40px']} pt={pt || '40px'} w="100%">
        //     <InputGroup w="100%" maxW={['100%', '600px']}>
        //         {!noIcon && (
        //             <InputLeftElement pointerEvents="none" color="gray.400" textStyle="md" pl="15px">
        //                 <BiSearch />
        //             </InputLeftElement>
        //         )}

        //         <Input
        //             placeholder={inputPlaceholder ? inputPlaceholder : '검색어를 입력하세요.'}
        //             fontSize={['12px', '16px']}
        //             borderRadius="20px"
        //             borderColor=" #DBDBDB"
        //             p={noIcon ? '0 50px 0 17px' : '0 50px'}
        //             {...register('keyword', { maxLength: maxLength ? maxLength : 20 })}
        //             onKeyPress={onKeyPress}
        //             maxLength={maxLength ? maxLength : 20}
        //         />
        //         <InputRightElement
        //             pr="15px"
        //             fontWeight="bold"
        //             color="brand"
        //             width="48px"
        //             onClick={handleSubmit(onSubmit)}
        //             cursor="pointer"
        //         >
        //             검색
        //         </InputRightElement>
        //     </InputGroup>
        // </Flex>
    );
};

export default SearchInput;
