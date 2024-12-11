import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const BlackBtn = ({ btnCategory, text, link }: { btnCategory?: any; text: string; link: string }) => {
    const router = useRouter();
    return (
        <Box
            as={btnCategory}
            borderRadius={'100px'}
            backgroundColor={'#131313'}
            padding={['13px 20px', '12px 20px']}
            color={'#fff'}
            fontSize={'16px'}
            fontWeight={600}
            cursor={'pointer'}
            display={'block'}
            width={'fit-content'}
            m={'0 auto'}
            onClick={() => {
                if (link === 'back') {
                    router.back();
                } else {
                    router.push(link);
                }
            }}
        >
            {text}
        </Box>
    );
};

export default BlackBtn;
