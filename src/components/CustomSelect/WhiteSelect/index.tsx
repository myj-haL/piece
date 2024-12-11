import { Box, Button } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import UpDownIcon from 'img/common/ic-updown.svg';
import { useRouter } from 'next/router';

interface WhiteSelectProps {
    handleChangeSort: (sort: string) => void;
}
const WhiteSelect = ({ handleChangeSort }: WhiteSelectProps) => {
    const options = [
        {
            id: 0,
            label: '최신순',
            sort: '',
        },
        {
            id: 1,
            label: '오래된순',
            sort: 'OLD',
        },
    ];

    const [isOptionShow, setIsOptionShow] = useState(false);

    const handleOptions = () => {
        setIsOptionShow(!isOptionShow);
    };

    const [tabNm, setTabNm] = useState<string>('최신순');
    const router = useRouter();

    const { sort } = router.query as {
        sort: string;
    };

    useEffect(() => {
        setIsOptionShow(false);
        const selectTab = options?.filter(item => item?.sort === sort);
        setTabNm(selectTab?.length > 0 ? selectTab[0]?.label : '최신순');
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
        <Box position={'relative'}>
            <Box
                as="button"
                borderRadius={'100px'}
                bg={'#131313'}
                p={'6px 12px'}
                border={'1px solid #DADCE3'}
                display={'flex'}
                alignItems={'center'}
                gap={'4px'}
                bgColor={'#fff'}
                fontSize={'14px'}
                fontWeight={600}
                color={'#292A2E'}
                onClick={handleOptions}
            >
                <Image alt="filter icon" src={UpDownIcon} width={12} height={12} />
                {tabNm}
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
                        onClick={() => {
                            handleChangeSort(item?.sort);
                        }}
                    >
                        {item.label}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default WhiteSelect;
