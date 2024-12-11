import ArrowIcon from 'img/common/ic-arrow-white.svg';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface MoreBtnPagiNation {
    pageConfig: {
        totalLength: number;
        listLength: number;
        curPage: number;
    };
    handleFetchMore?: () => Promise<void>;
}
const MoreBtn = ({ pageConfig: { curPage, totalLength, listLength }, handleFetchMore }: MoreBtnPagiNation) => {
    return (
        <>
            {totalLength > listLength * curPage && (
                <Box
                    as="button"
                    borderRadius={'100px'}
                    backgroundColor={'#131313'}
                    padding={'13px 20px'}
                    color={'#fff'}
                    fontSize={'16px'}
                    fontWeight={600}
                    display={'flex'}
                    alignItems={'center'}
                    gap={'4px'}
                    margin={'20px auto 0'}
                    onClick={() => {
                        if (handleFetchMore) handleFetchMore();
                    }}
                >
                    더보기
                    <Image alt="arrow icon" src={ArrowIcon} />
                </Box>
            )}
        </>
    );
};

export default MoreBtn;
