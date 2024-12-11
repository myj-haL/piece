import 'aos/dist/aos.css';

import { Box, ChakraProvider, Image as ChakraUiImage, Grid, Text } from '@chakra-ui/react';
import { sampleNewsList, sampleTwoList } from '../slideList';
import { useEffect, useState } from 'react';

import AOS from 'aos';
import Image from 'next/image';
import SecondLine from './SecondLine';
import { TBoard } from '@/generated/graphql';
import { extendTheme } from '@chakra-ui/react';
import { extractText } from '@/utils/extractText';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

interface NewsProps {
    press: any;
    notices: any;
}
const News = ({ press, notices }: NewsProps) => {
    const router = useRouter();
    const breakpoints = {
        base: '0px',
        sm: '320px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
    };

    const theme = extendTheme({ breakpoints });
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    useEffect(() => {
        AOS.init();
    });
    return (
        <ChakraProvider theme={theme}>
            <Box p={{ base: '40px 0', md: '120px 0' }} data-aos="fade-up" data-aos-duration="2000">
                <Text
                    fontSize={{ base: 22, md: 48 }}
                    color="#131313"
                    fontWeight={{ base: '600', md: '700' }}
                    letterSpacing="-0.84px"
                    lineHeight={{ base: '28px', md: '64px' }}
                    marginBottom={{ base: '20px', md: '48px' }}
                >
                    PIECE에 관한
                    <br />
                    모든 소식
                </Text>

                <Grid templateColumns={{ base: 'initial', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }} gap={'20px'}>
                    <Box
                        as="a"
                        cursor={'pointer'}
                        borderRadius={['32px', '40px']}
                        position={'relative'}
                        overflow={'hidden'}
                        transition={'all .2s ease-in-out'}
                        _hover={{
                            transform: deviceType === 'mobile' ? 'scale(1.02)' : 'scale(1.04)',
                            transition: 'all .2s ease-in-out',
                        }}
                        onClick={() => {
                            router.push('/disclosure?tab=investmentDisclosure&page=1');
                        }}
                    >
                        <ChakraUiImage
                            alt="slide img"
                            src={'/images/main/slideImg/slide_1.png'}
                            style={{
                                aspectRatio: '1/1',
                                objectFit: 'cover',
                                height:'auto'
                            }}
                        />
                        <Box position={'absolute'} top={['32px', '40px']} left={['32px', '40px']}>
                            <Text color={'#CCE7F3'} fontSize={[16, 18]} mb={'16px'} fontWeight={600}>
                                공시
                            </Text>
                            <Text
                                color={'#fff'}
                                fontSize={[22, 28]}
                                fontWeight={600}
                                whiteSpace={'pre-wrap'}
                                lineHeight={['28px', '40px']}
                                overflow="hidden"
                                display={'-webkit-box'}
                                sx={{
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: '2',
                                }}
                            >
                                {'투자에 필요한\n정보를 알려드려요'}
                            </Text>
                        </Box>
                    </Box>
                    {press?.length > 0 && (
                        <Box
                            as="a"
                            cursor={'pointer'}
                            borderRadius={['32px', '40px']}
                            position={'relative'}
                            overflow={'hidden'}
                            transition={'all .2s ease-in-out'}
                            _hover={{
                                transform: deviceType === 'mobile' ? 'scale(1.02)' : 'scale(1.04)',
                                transition: 'all .2s ease-in-out',
                            }}
                            onClick={() => {
                                window.open(`https://buysellstandards.com/newsDetail/${press[0]?.board_id}`, '_blank');
                            }}
                        >
                            <ChakraUiImage
                                alt="slide img"
                                src={press[0]?.boadr_thumbnail_path}
                                style={{
                                    aspectRatio: '1/1',
                                    objectFit: 'cover',
                                    height:'auto'
                                }}
                            />
                            <Box position={'absolute'} top={['32px', '40px']} left={['32px', '40px']}>
                                <Text color={'#CCE7F3'} fontSize={[16, 18]} mb={'16px'} fontWeight={600}>
                                    PRESS
                                </Text>
                                <Text
                                    color={'#fff'}
                                    fontSize={[22, 28]}
                                    fontWeight={600}
                                    whiteSpace={'pre-wrap'}
                                    lineHeight={['28px', '40px']}
                                    overflow="hidden"
                                    display={'-webkit-box'}
                                    sx={{
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: '2',
                                    }}
                                >
                                    {press[0]?.title}
                                </Text>
                            </Box>
                        </Box>
                    )}

                    {notices?.map((item: TBoard) => {
                        const text = extractText(item.contents);
                        return (
                            <Box
                                key={item.board_id}
                                as="a"
                                cursor={'pointer'}
                                borderRadius={['32px', '40px']}
                                position={'relative'}
                                overflow={'hidden'}
                                transition={'all .2s ease-in-out'}
                                _hover={{
                                    transform: deviceType === 'mobile' ? 'scale(1.02)' : 'scale(1.04)',
                                    transition: 'all .2s ease-in-out',
                                }}
                                aspectRatio={{ base: 'auto', xl: '1/1' }}
                                bg={'#F9F9F9'}
                            >
                                <Box p={['32px', '40px']} overflow={'hidden'}>
                                    <Text color={'#6F6F6F'} fontSize={[16, 18]} mb={'16px'} fontWeight={600}>
                                        공지사항
                                    </Text>
                                    <Text
                                        color={'#292A2E'}
                                        fontSize={[22, 28]}
                                        mb={['16px', '56px']}
                                        fontWeight={600}
                                        overflow="hidden"
                                        display={'-webkit-box'}
                                        sx={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: '2',
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        color={'#4A4D55'}
                                        fontSize={[14, 18]}
                                        fontWeight={600}
                                        whiteSpace={'pre-wrap'}
                                        lineHeight={['20px', '28px']}
                                        overflow="hidden"
                                        display={'-webkit-box'}
                                        sx={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: '2',
                                        }}
                                    >
                                        {text}
                                    </Text>
                                </Box>
                            </Box>
                        );
                    })}
                    {/* {sampleNewsList.map(item => (
                        <Box
                            key={item.id}
                            as="a"
                            cursor={'pointer'}
                            borderRadius={['32px', '40px']}
                            position={'relative'}
                            overflow={'hidden'}
                            transition={'all .2s ease-in-out'}
                            _hover={{
                                transform: deviceType === 'mobile' ? 'scale(1.02)' : 'scale(1.04)',
                                transition: 'all .2s ease-in-out',
                            }}
                            aspectRatio={{ base: 'auto', xl: '1/1' }}
                            bg={'#F9F9F9'}
                        >
                            <Box p={['32px', '40px']} overflow={'hidden'}>
                                <Text color={'#6F6F6F'} fontSize={[16, 18]} mb={'16px'} fontWeight={600}>
                                    {item.category}
                                </Text>
                                <Text
                                    color={'#292A2E'}
                                    fontSize={[22, 28]}
                                    mb={['16px', '56px']}
                                    fontWeight={600}
                                    overflow="hidden"
                                    display={'-webkit-box'}
                                    sx={{
                                        '-webkit-box-orient': 'vertical',
                                        '-webkit-line-clamp': '2',
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    color={'#4A4D55'}
                                    fontSize={[14, 18]}
                                    fontWeight={600}
                                    whiteSpace={'pre-wrap'}
                                    lineHeight={['20px', '28px']}
                                    overflow="hidden"
                                    display={'-webkit-box'}
                                    sx={{
                                        '-webkit-box-orient': 'vertical',
                                        '-webkit-line-clamp': '3',
                                    }}
                                >
                                    {item.content}
                                </Text>
                            </Box>
                        </Box>
                    ))} */}
                </Grid>
                <SecondLine deviceType={deviceType} />
            </Box>
        </ChakraProvider>
    );
};

export default News;
