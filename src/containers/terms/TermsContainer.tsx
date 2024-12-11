import { Box, Flex, Select, Text } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTermListPageQuery } from '../../generated/graphql';

const TermsContainer = () => {
    const router = useRouter();

    const tab = router.query.tab as string;

    const { data } = useTermListPageQuery({
        variables: {
            consentCode: tab || '-',
        },
    });
    const [selectTermTitle, setSelectTermTitle] = useState<string>('');
    const [selectTermContents, setSelectTermContents] = useState<string>('');
    useEffect(() => {
        setSelectTermTitle(data?.terms?.terms[0]?.consent_title || '-');
        setSelectTermContents(data?.terms?.terms[0]?.consent_contents || '-');
    }, [data]);

    const setSelectTermContentsHandlar = (index: number) => {
        setSelectTermContents(data?.terms?.terms[index]?.consent_contents);
    };
    return (
        <>
            <Head>
                <title>{selectTermTitle} - PIECE</title>
            </Head>
            <Flex direction="column" alignItems="center" w="100%">
                <Flex
                    w="100%"
                    maxW="768px"
                    px={'16px'}
                    flexDir={['row', 'row', 'row', 'row']}
                    alignItems={'center'}
                    borderBottom="1px solid #DBDBDB"
                    justifyContent={['start', 'start', 'space-between', 'space-between']}
                    h={'64px'}
                    backgroundColor={'#ffffff'}
                    position={'fixed'}
                    top={0}
                >
                    <Text
                        // w={['100%', '100%', '65%', '65%']}
                        w={'65%'}
                        // py={['60px', '60px', '45px']}
                        // pb={['60px', '60px', '45px']}
                        fontSize={'16px'}
                        color="#131313"
                        fontWeight="bold"
                        overflow={'hidden'}
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        pr={'20px'}
                    >
                        {selectTermTitle}
                    </Text>
                    <Select
                        maxW={'158px'}
                        fontSize={'14px'}
                        onChange={event => {
                            const selectedIndex = event.target.selectedIndex;
                            setSelectTermContentsHandlar(selectedIndex);
                        }}
                    >
                        {data?.terms?.terms?.map((item: any) => {
                            return (
                                <option value={item?.revision_date} key={item?.revision_date + item?.revision_date}>
                                    {item?.revision_date || '-'}
                                </option>
                            );
                        })}
                    </Select>
                </Flex>

                <Flex w="100%" align="center" direction="column" maxW="768px" mt={'64px'}>
                    <Flex py="40px" justifyContent={'start'} w={'100%'} px={'16px'}>
                        <Text fontSize={'26px'} color="#131313" fontWeight="700" lineHeight={'38px'}>
                            {selectTermTitle}
                        </Text>
                    </Flex>
                    <Flex
                        w="100%"
                        maxW="1200px"
                        // justify="center"
                        px={'16px'}
                    >
                        <Box dangerouslySetInnerHTML={{ __html: selectTermContents }}></Box>
                        {/* <UserBehivor /> */}
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default TermsContainer;
