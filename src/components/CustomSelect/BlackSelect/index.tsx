import { Box, Button } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import DownIcon from 'img/common/ic-down.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface BlackSeletProps {
    handleChangeCategory: (category: string) => void;
}
const BlackSelect = ({ handleChangeCategory }: BlackSeletProps) => {
    const options = [
        {
            id: 0,
            label: '전체',
            category: '',
        },
        {
            id: 1,
            label: '정기공시',
            category: 'BRT0703',
        },
        {
            id: 2,
            label: '수시공시',
            category: 'BRT0702',
        },
        {
            id: 3,
            label: '조회공시',
            category: 'BRT0701',
        },
        {
            id: 4,
            label: '사업공시',
            category: 'BRT0704',
        },
    ];

    const [isOptionShow, setIsOptionShow] = useState(false);

    const handleOptions = () => {
        setIsOptionShow(!isOptionShow);
    };

    const [tabNm, setTabNm] = useState<string>('전체');
    const router = useRouter();

    const { category } = router.query as {
        category: string;
    };

    useEffect(() => {
        setIsOptionShow(false);
        const selectTab = options?.filter(item => item?.category === category);
        console.log({ selectTab });

        setTabNm(selectTab?.length > 0 ? selectTab[0]?.label : '전체');
    }, [router.asPath]);
    const componentRef = useRef(null);

    // 해당 컴포넌트를 제외한 다른 부분 선택 시 모달 종료
    useEffect(() => {
        const handleClickOutside = event => {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                setIsOptionShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [componentRef]);

    return (
        <Box position={'relative'} ref={componentRef}>
            <Box
                as="button"
                borderRadius={'100px'}
                p={'6px 12px'}
                border={'1px solid #DADCE3'}
                display={'flex'}
                alignItems={'center'}
                gap={'4px'}
                bgColor={'#131313'}
                fontSize={'14px'}
                fontWeight={600}
                color={'#fff'}
                onClick={() => {
                    handleOptions();
                }}
            >
                {tabNm}
                <Image alt="filter icon" src={DownIcon} width={12} height={12} />
            </Box>

            {/* TODO : options */}
            <Box
                borderRadius={'22px'}
                p={'8px 0'}
                border={'1px solid #DADCE3'}
                boxShadow={'0px 0px 8px 0px rgba(19, 19, 19, 0.16)'}
                position={'absolute'}
                top={'40px'}
                minW={'180px'}
                left={0}
                bg={'#fff'}
                overflow={'hidden'}
                display={isOptionShow ? 'block' : 'none'}
            >
                {options.map(item => (
                    <Button
                        key={item.id}
                        display={'block'}
                        w={'100%'}
                        textAlign={'left'}
                        fontSize={16}
                        fontWeight={600}
                        color={'#292A2E'}
                        p={'11px 16px'}
                        h={'auto'}
                        bg={'#fff'}
                        _hover={{
                            bg: '#F6F6F6',
                        }}
                        onClick={() => handleChangeCategory(item?.category)}
                    >
                        {item.label}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default BlackSelect;
