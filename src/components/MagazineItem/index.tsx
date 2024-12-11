import { Box, Image as ChakraUiImage, Grid, GridItem, Img, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import MoreBtn from '@/components/MoreBtn';
import Pagination from '@/components/Pagination';
import SampleImg from 'img/sample/img_sample-thumbnail.png';
import { T_Magazine } from '@/generated/graphql';
import { useRouter } from 'next/router';
import useScreenSize from '@/hook/useScreenSize';

interface MagazineItemProps {
    data?: T_Magazine;
}
const MagazineItem = ({ data }: MagazineItemProps) => {
    const router = useRouter();
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        setDeviceType(device);
    }, [device]);
    const [windowWidth, setWindowWidth] = useState(0);
    const [truncatedText, setTruncatedText] = useState('');
    const boxRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setTruncatedTextHandlar();
    }, [windowWidth, boxRef.current, data]);

    const setTruncatedTextHandlar = async () => {
        if (boxRef.current && data?.title) {
            const boxWidth = boxRef.current.offsetWidth;
            const textWidth = await getTextWidth(
                data?.title,
                device === 'mobile' ? '8.2px Pretendard' : '14px Pretendard'
            );
            if (textWidth > boxWidth) {
                const ellipsisWidth = await getTextWidth(
                    '...',
                    device === 'mobile' ? '8.2px Pretendard' : '14px Pretendard'
                );
                const availableWidth = boxWidth - ellipsisWidth;
                let truncatedIndex = 0;
                let currentWidth = 0;

                while (currentWidth <= availableWidth && truncatedIndex < data?.title?.length) {
                    currentWidth = await getTextWidth(
                        data?.title.slice(0, truncatedIndex + 1),
                        device === 'mobile' ? '8.2px Pretendard' : '14px Pretendard'
                    );
                    truncatedIndex++;
                }
                setTruncatedText(data?.title.slice(0, truncatedIndex - 1) + '...');
            } else {
                setTruncatedText(data?.title);
            }
        }
    };
    const getTextWidth = (text, font) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font;
        const width = context.measureText(text).width;

        return width;
    };

    return (
        <GridItem
            w={'100%'}
            cursor={'pointer'}
            key={data?.magazine_id}
            onClick={() => {
                router.push(`/magazine/${data?.magazine_id}`);
            }}
        >
            <Box position={'relative'} borderRadius={['24px', '32px']} overflow={'hidden'}>
                {/* TODO 카테고리 label */}
                <Text
                    position={'absolute'}
                    top={'16px'}
                    left={'16px'}
                    fontSize={[14, 16]}
                    fontWeight={600}
                    color={'##292A2E'}
                    padding={['4px 10px', '11px 16px']}
                    borderRadius={'100px'}
                    backgroundColor={'#fff'}
                    zIndex={5}
                >
                    {data?.small_title}
                </Text>
                <Box
                    _hover={{
                        transform: 'scale(1.1)',
                        transition: 'all .2s ease-in-out',
                    }}
                    transition={'all .2s ease-in-out'}
                >
                    <ChakraUiImage
                        src={data?.represent_thumbnail_path}
                        alt="thumbnail"
                        style={{
                            width: '100%',
                            // height:
                            //     deviceType === 'mobile' ? 'calc((100vw * 240) / 360)' : 'calc((100vw * 255) / 1920)',
                            maxHeight: deviceType === 'mobile' ? 'initial' : '255px',
                            objectFit: 'cover',
                            aspectRatio: 2 / 1.6,
                        }}
                    />
                </Box>
            </Box>

            <Grid gap={'8px'} marginTop={['16px', '24px']}>
                <GridItem>
                    <Box
                        as="a"
                        textDecoration="none"
                        background="linear-gradient(transparent calc(100% - 3px), #000 3px)"
                        backgroundRepeat="no-repeat"
                        backgroundSize="0% 100%"
                        transition="background-size 0.8s"
                        cursor="pointer"
                        _hover={{ backgroundSize: '100% 100%' }}
                        overflow="hidden"
                        color={'#292A2E'}
                        fontSize={[16, 28]}
                        fontWeight={600}
                        lineHeight={['22px', '40px']}
                        ref={boxRef}
                    >
                        {truncatedText}
                    </Box>
                </GridItem>
                <GridItem>
                    <Text
                        color={'#757983'}
                        fontSize={[14, 16]}
                        fontWeight={400}
                        lineHeight={['20px', '26px']}
                        overflow="hidden"
                        display={'-webkit-box'}
                        sx={{
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: '1',
                        }}
                    >
                        {data?.mid_title}
                    </Text>
                </GridItem>
            </Grid>
        </GridItem>
    );
};

export default MagazineItem;
