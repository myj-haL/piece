import { useEffect, useRef } from 'react';

import { Box, Text } from '@chakra-ui/react';

import History from '@/components/Business/History';
import gsap from 'gsap';

const Story = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const scrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: false,
      },
    });

    scrollAnimation
      .fromTo(containerRef.current, {
        opacity: 0,
        y: 100,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
      });


  }, [containerRef]);

  return (
    <Box
      ref={containerRef}
      display="flex"
      flexDirection={['column','column','row']}
      gap={20}
      margin="0 auto"
      padding={'120px 20px 120px'}
      maxW={'1420px'}
      position={'relative'}
      zIndex={'40'}
    >
      <Box
        display="flex"
        flexDirection={['column']}
        alignItems="start"
        marginTop={['40px', '0']}
        width={['100%','100%', '50%']}
      >
        <Text
          fontSize={[32, 64]}
          fontWeight={['700', '800']}
          lineHeight={['44px', '84px']}
        >
          PIECE가
          <Box
            as="strong"
            display="block"
          >
            걸어온 이야기
          </Box>
        </Text>
        <Text
          fontSize={[18, 32]}
          fontWeight={['400', '700']}
          marginTop={['40px']}
          lineHeight={['28px', '44px']}
          wordBreak={'keep-all'}
        >
          우리는 디지털 자산 투자시장을 선도하며
          <Box
            as="strong"
            fontWeight={['400', '700']}
            display="block"
            wordBreak={'keep-all'}
          >
            STO 산업의 표준으로 빠르게{'\n'} 성장하고 있습니다
          </Box>
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        marginTop={['80px', '0']}
        width={['100%','100%', '50%']}
      >
        <History />
      </Box>
    </Box>
  );
}

export default Story;
