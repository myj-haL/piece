import { BoardFiles, TBoard } from '../../generated/graphql';
import { Box, Button, Flex, Image, Text, chakra } from '@chakra-ui/react';

import AttachFile from '../../../public/images/default_thumbnail2.png';
import { BoardDetail } from '../../apis/board.type';
import React from 'react';
import instance from '../../apis/config';
import moment from 'moment';
import { saveAs } from 'file-saver';
import { useRouter } from 'next/router';

interface ManagementDisclosureDetailProps {
    detail: any;
    type: string;
}

const ManagementDisclosureDetail = ({ detail, type }: ManagementDisclosureDetailProps) => {
    const router = useRouter();
    // const download = (path: string, name: string) => {
    //   saveAs(path, name);
    // };
    return (
        <Flex w="100%" pt="80px" direction="column" alignItems="center" px={['15px', '120px', '95px']}>
            <Box w="100%" maxW={['100%', '750px', '1250px']}>
                <Box borderBottom="1px solid #DBDBDB" pt="40px" pb="10px">
                    <Text textAlign="center" textStyle="xl" fontWeight="bold">
                        {detail.title}
                    </Text>
                    <Text textAlign="center" color="#808080" textStyle="md" my="1em">
                        {detail?.boardCategoryCommCode?.code_name || '-'} |{' '}
                        {moment(detail?.created_at).format('YYYY.MM.DD')}
                    </Text>
                    <Flex direction="column" alignItems="flex-end"></Flex>
                </Box>
                <Box w="100%" py="40px">
                    {type === 'news' && <Image src="/images/news-banner.png" alt="piece-banner" w="100%" h="auto" />}
                    <Box dangerouslySetInnerHTML={{ __html: detail.contents }}></Box>
                </Box>
            </Box>
            {detail?.files?.length > 0 && (
                <Box w="100%" maxW={['100%', '750px', '1250px']} mt={'60px'}>
                    {detail?.files?.map((file: BoardFiles, index: number) => {
                        return (
                            <Flex
                                key={file?.file_id}
                                backgroundColor={'#F9F9F9'}
                                py="12px"
                                px={'16px'}
                                alignItems="center"
                                borderRadius={'8px'}
                                cursor={'pointer'}
                                mt={index !== 0 && '12px'}
                                onClick={() => window.open(file?.cdn_file_path)}
                            >
                                <Image src={'/images/AttachFile.svg'} w="20px" h={'20px'} />
                                <Text
                                    mx={'8px'}
                                    fontSize={'15px'}
                                    fontWeight={'600'}
                                    color="#292A2E"
                                    whiteSpace="nowrap"
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                >
                                    {file?.origin_file_name || '-'}
                                </Text>
                            </Flex>
                        );
                    })}
                </Box>
            )}

            <Button
                p={['6.5px 26px']}
                fontSize={['16px', '14px', '15px']}
                maxW="130px"
                bg="#fff"
                border="1px solid #DBDBDB"
                color="#808080"
                fontWeight="400"
                my={['50px', '50px', '100px']}
                onClick={() => router.back()}
            >
                목록으로
            </Button>
        </Flex>
    );
};

export default ManagementDisclosureDetail;
