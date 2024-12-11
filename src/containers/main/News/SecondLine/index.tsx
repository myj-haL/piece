import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import Image from 'next/image';
import { contactList } from '../../slideList';
import { useRouter } from 'next/router';

const SecondLine = ({ deviceType }: any) => {
    const router = useRouter();
    return (
        <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={{ base: '20px 0', lg: '0 20px' }}
            gridColumn={{ base: '1/3', xl: '1/5' }}
            mt={'20px'}
        >
            <Box
                bg={'#EAECF0'}
                borderRadius={['32px', '40px']}
                p={['32px', '40px']}
                gridRow={['initial', '1/3']}
                as="a"
                cursor={'pointer'}
                transition={'all .2s ease-in-out'}
                _hover={{
                    transform: deviceType === 'mobile' ? 'scale(1.02)' : 'scale(1.04)',
                    transition: 'all .2s ease-in-out',
                }}
            >
                <Text color={'#696A6B'} fontSize={[16, 18]} mb={'16px'} fontWeight={600}>
                    자주 묻는 질문
                </Text>

                <Text color={'#292A2E'} fontSize={[22, 28]} mb={['24px', '42px']} fontWeight={600}>
                    궁금함도 풀어드리고
                    <br />더 나은 경험을 만들어 드려요
                </Text>

                <Box
                    borderRadius={'24px 24px 0 24px'}
                    bg={'#fff'}
                    p={'16px 20px'}
                    fontSize={[14, 18]}
                    mb={'16px'}
                    color={'#292A2E'}
                    position={'relative'}
                    w={'fit-content'}
                    ml={'auto'}
                    fontWeight={600}
                    sx={{
                        '&:after': {
                            content: '""',
                            display: 'block',
                            w: '16px',
                            h: '16px',
                            position: 'absolute',
                            background: "url('/images/main/outline-border-right.svg') no-repeat",
                            backgroundSize: 'cover',
                            right: '-16px',
                            bottom: '0',
                        },
                    }}
                >
                    현물 자산의 정품 여부 및 보관 상태를 믿어도 되나요?
                </Box>

                <Box
                    borderRadius={'24px 24px 0 24px'}
                    bg={'#fff'}
                    p={'16px 20px'}
                    fontSize={[14, 18]}
                    color={'#292A2E'}
                    position={'relative'}
                    w={'fit-content'}
                    ml={'auto'}
                    fontWeight={600}
                    sx={{
                        '&:after': {
                            content: '""',
                            display: 'block',
                            w: '16px',
                            h: '16px',
                            position: 'absolute',
                            background: "url('/images/main/outline-border-right.svg') no-repeat",
                            backgroundSize: 'cover',
                            right: '-16px',
                            bottom: '0',
                        },
                    }}
                >
                    피스에서 구매한 조각 소유권은 법적으로 보호받을 수 있나요?
                </Box>
            </Box>

            <Grid gap={'20px'}>
                {contactList.map(item => (
                    <Box
                        key={item.id}
                        as="a"
                        cursor={'pointer'}
                        transition={'all .2s ease-in-out'}
                        _hover={{
                            transform: deviceType === 'mobile' ? 'scale(1.02)' : 'scale(1.04)',
                            transition: 'all .2s ease-in-out',
                        }}
                        bg={item.id === 0 ? '#FFE24A' : '#131313'}
                        p={{ base: '32px', md: '50px 40px' }}
                        borderRadius={['32px', '40px']}
                        aspectRatio={{ base: '1/0.75', md: 'initial' }}
                        position={'relative'}
                        overflow={'hidden'}
                        onClick={() => {
                            if (item?.isNewTab) {
                                window.open(item.link, '_blank');
                            } else {
                                router.push(item?.link);
                            }
                        }}
                    >
                        <Image
                            alt="bg img"
                            src={item.bgImg}
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                                left: deviceType === 'mobile' ? '50%' : 'auto',
                                transform: deviceType === 'mobile' ? 'translateX(-50%)' : 'initial',
                                width:
                                    deviceType === 'mobile'
                                        ? 'calc((100vw * 256) / 360)'
                                        : 'calc((100vw * 320) / 1200)',
                                maxWidth: deviceType === 'pc' ? '320px' : 'auto',
                                zIndex: 0,
                            }}
                        />

                        <Text
                            fontSize={[22, 28]}
                            color={item.id === 0 ? '#292A2E' : '#fff'}
                            mb={['8px', '10px']}
                            fontWeight={600}
                            zIndex={1}
                            position={'relative'}
                        >
                            {item.title}
                        </Text>

                        {item.id === 0 ? (
                            <Flex
                                direction={{ base: 'column', md: 'row' }}
                                alignItems={{ base: 'initial', md: 'center' }}
                                zIndex={1}
                                position={'relative'}
                            >
                                <Text
                                    fontSize={[16, 18]}
                                    color={'#292A2E'}
                                    mb={{ base: '8px', md: '0' }}
                                    mr={{ base: '0', md: '8px' }}
                                    fontWeight={600}
                                >
                                    {item.subTitle}
                                </Text>

                                {/* TODO : 시간에 따라 다른 라벨이 노출됩니다. */}
                                <Text
                                    /* TODO : item.label1 이면 bg 빨간색 아니면 하얀색 */
                                    bg={'#F65F5F'}
                                    p={'4px 10px'}
                                    fontSize={14}
                                    /* TODO : item.label1 이면 color 하얀색 아니면 #4A4D55 */
                                    color={'#fff'}
                                    w={'fit-content'}
                                    borderRadius={'100px'}
                                >
                                    {item.label1}
                                </Text>
                            </Flex>
                        ) : (
                            <Text
                                fontSize={[16, 18]}
                                color={item.id === 0 ? '#292A2E' : '#fff'}
                                mb={{ base: '8px', md: '0' }}
                                fontWeight={600}
                                zIndex={1}
                                position={'relative'}
                            >
                                {item.subTitle}
                            </Text>
                        )}

                        <Image
                            alt="link btn"
                            src={item.linkBtn}
                            width={120}
                            height={120}
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                            }}
                        />
                    </Box>
                ))}
            </Grid>
        </Grid>
    );
};

export default SecondLine;
