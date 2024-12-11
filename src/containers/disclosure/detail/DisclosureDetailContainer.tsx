import { BoardFiles, useBoardQuery } from '@/generated/graphql';
import { Box, Button, Text } from '@chakra-ui/react';

import BlackBtn from '@/components/BlackBtn';
import FileIcon from 'img/common/ic-file.svg';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layouts';
import moment from 'moment';
import { useRouter } from 'next/router';

function DisclosureDetailContainer() {
    const router = useRouter();
    const { slug } = router.query as { slug: string };

    const { data } = useBoardQuery({
        variables: {
            boardId: slug,
        },
        notifyOnNetworkStatusChange: true,
    });

    return (
        <>
            <Head>
                <title>{data?.board?.board?.title} - PIECE</title>
            </Head>
            <Box>
                <Layout>
                    <Box maxW={'860px'} m={'0 auto'} p={['40px 20px', '60px 20px 80px']}>
                        <Box m={['0 -20px', '0']} p={['0 20px 40px', '0 0 60px']} borderBottom={'1px solid #EAECF0'}>
                            <Text
                                as="span"
                                fontSize={14}
                                color={'#8C919F'}
                                display={'block'}
                                fontWeight={600}
                                mb={['20px', '16px']}
                            >
                                {/* TODO : 경영공시 게시글인 경우 구분자 표시 */}
                                <Text as="p" mr={'8px'} display={'inline-block'}>
                                    {data?.board?.board?.boardCategoryCommCode?.code_name}
                                </Text>
                                {moment(data?.board?.board?.created_at)?.format('YYYY.MM.DD')}
                            </Text>

                            <Text
                                fontSize={[28, 32]}
                                color={'#131313'}
                                lineHeight={['40px', '44px']}
                                letterSpacing={['-0.84px', '-0.96px']}
                                fontWeight={[600, 700]}
                            >
                                {data?.board?.board?.title}
                            </Text>
                        </Box>

                        <Box
                            p={['20px 0 40px', '48px 0']}
                            dangerouslySetInnerHTML={{ __html: data?.board?.board?.contents || '' }}
                        />

                        {data?.board?.board?.files?.map((item: BoardFiles) => {
                            return (
                                <Box mb={['40px', '48px']} key={item?.file_id}>
                                    <Button
                                        bg={'#F9F9F9'}
                                        _hover={{
                                            bg: '#F0F0F0',
                                        }}
                                        borderRadius={['8px', '16px']}
                                        p={'12px 16px'}
                                        h={'48px'}
                                        display={'flex'}
                                        alignItems={'center'}
                                        gap={'8px'}
                                        w={'100%'}
                                        justifyContent={'flex-start'}
                                        lineHeight={'20px'}
                                    >
                                        <Image alt="icon" src={FileIcon} />
                                        <Text
                                            as="span"
                                            fontSize={14}
                                            fontWeight={400}
                                            whiteSpace={'nowrap'}
                                            textOverflow={'ellipsis'}
                                            display={'block'}
                                            overflow="hidden"
                                            sx={{
                                                '-webkit-box-orient': 'vertical',
                                                '-webkit-line-clamp': '1',
                                            }}
                                        >
                                            {item?.origin_file_name}
                                            {/* 파일 이름이 들어갑니다 한줄 제한입니다..pdf */}
                                        </Text>
                                    </Button>
                                </Box>
                            );
                        })}
                        <Box mb={['40px', '48px']}>
                            <Button
                                bg={'#F9F9F9'}
                                _hover={{
                                    bg: '#F0F0F0',
                                }}
                                borderRadius={['8px', '16px']}
                                p={'12px 16px'}
                                h={'48px'}
                                display={'flex'}
                                alignItems={'center'}
                                gap={'8px'}
                                w={'100%'}
                                justifyContent={'flex-start'}
                                lineHeight={'20px'}
                            >
                                <Image alt="icon" src={FileIcon} />
                                <Text
                                    as="span"
                                    fontSize={14}
                                    fontWeight={400}
                                    whiteSpace={'nowrap'}
                                    textOverflow={'ellipsis'}
                                    display={'block'}
                                    overflow="hidden"
                                    sx={{
                                        '-webkit-box-orient': 'vertical',
                                        '-webkit-line-clamp': '1',
                                    }}
                                >
                                    데이터가 없어서 테스트용
                                    {/* 파일 이름이 들어갑니다 한줄 제한입니다..pdf */}
                                </Text>
                            </Button>
                        </Box>

                        <BlackBtn btnCategory={'a'} text={'목록으로'} link="back" />
                    </Box>
                </Layout>
            </Box>
        </>
    );
}

export default DisclosureDetailContainer;
