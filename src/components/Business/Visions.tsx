import React, { useEffect, useRef } from 'react';

import { Box, Text } from '@chakra-ui/react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import BACKGROUND1 from 'img/video/section3-background1.mp4';
import BACKGROUND2 from 'img/video/section3-background2.mp4';
import BACKGROUND3 from 'img/video/section3-background3.mp4';
import useScreenSize from '@/hook/useScreenSize';

const BACKGROUNDS = [BACKGROUND1, BACKGROUND2, BACKGROUND3];

const VISIONS = [
  'FIRST PIECE',
  'STANDARD PIECE',
  'UNICORN PIECE',
];

const DESCRIPTIONS = [
  {
    line1: '국내 최초 \n현물 조각투자 플랫폼 PIECE는',
    line2: '투자시장에서 새로운 혁신을\n 끊임없이 이어갑니다',
  },
  {
    line1: '조각투자 생태계의\n 성장을 이끌며\n',
    line2: 'STO 산업의 새로운 기준을\n 만들어 갑니다',
  },
  {
    line1: '세상의 모든 디지털 자산에\n 투자할 수 있도록\n',
    line2: '투자에 특화된\n 인터넷 전문 은행으로\n 발돋움하겠습니다',
  },
];

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
    const containerRef = useRef(null);
    const wrapper1Ref = useRef(null);
    const wrapper2Ref = useRef(null);
    const wrapper3Ref = useRef(null);
    const background1Ref = useRef(null);
    const background2Ref = useRef(null);
    const background3Ref = useRef(null);
    const layer1Ref = useRef(null);
    const layer2Ref = useRef(null);
    const layer3Ref = useRef(null);
    const vision1Ref = useRef(null);
    const vision2Ref = useRef(null);
    const vision3Ref = useRef(null);
    const description1Ref = useRef(null);
    const description2Ref = useRef(null);
    const description3Ref = useRef(null);

    useEffect(() => {
      if (!containerRef.current) {
        return;
      }

      const transAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
      });

      transAnimation.to(containerRef.current, {
        visibility: 'hidden', duration: 0.01,
      }, '+=0');


      const readyAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: true,
        },
      });

      readyAnimation.to(containerRef.current, {
        visibility: 'visible', duration: 0.01,
      }, '+=0');

      const scrollAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      scrollAnimation
        .to(wrapper1Ref.current, {
          top: '50%', display: 'block', duration: 0.1,
        }, '5%')
        .fromTo(background1Ref.current,
          { opacity: 0, top: '70%' },
          {
            opacity: 1, display: 'block', top: '50%', duration: 2,
          }, '10%')
        .fromTo(layer1Ref.current,
          { opacity: 0, top: '70%' },
          {
            opacity: 1, display: 'block', top: '50%', duration: 2,
          }, '10%')
        .fromTo(vision1Ref.current,
          { opacity: 0, top: '60%' },
          { opacity: 1, top: '50%', display: 'block', duration: 2 }, '15%')
        .to(vision1Ref.current,
          { opacity: 1, duration: 3, display: 'block' }, '20%')
        .to(vision1Ref.current,
          { opacity: 0, display: 'none', duration: 0.5 }, '23%')
        .fromTo(description1Ref.current,
          { opacity: 0, top: '60%' },
          { opacity: 1, top: '50%', display: 'block', duration: 2 }, '23%')
        .to(description1Ref.current,
          { opacity: 1, display: 'block', duration: 3 }, '25%')

        .to(wrapper2Ref.current,
          { display: 'block', duration: 0.1 }, '25%')
        .to(background2Ref.current,
          { display: 'block', duration: 0.1 }, '25%')
        .to(layer2Ref.current,
          { display: 'block', duration: 0.1 }, '25%')
        .fromTo(wrapper2Ref.current,
          { top: '150%' },
          { top: '50%', display: 'block', duration: 5 }, '30%')
        .fromTo(vision2Ref.current,
          { opacity: 0, top: '60%' },
          { opacity: 1, top: '50%', display: 'block', duration: 2 }, '35%')
        .to(vision2Ref.current,
          { opacity: 1, display: 'block', duration: 3 }, '40%')
        .to(vision2Ref.current,
          { opacity: 0, display: 'none', duration: 0.5 }, '45%')
        .fromTo(description2Ref.current,
          { opacity: 0, top: '60%' },
          { opacity: 1, top: '50%', display: 'block', duration: 2 }, '50%')
        .to(description2Ref.current,
          { opacity: 1, display: 'block', duration: 3 }, '55%')
        .to(wrapper1Ref.current,
          { display: 'none' }, '66%')
        .to(background1Ref.current,
          { display: 'none' }, '66%')
        .to(layer1Ref.current,
          { display: 'none' }, '66%')

        .fromTo(wrapper3Ref.current,
          { top: '150%' },
          { top: '50%', display: 'block', duration: 5 }, '65%')
        .to(background3Ref.current,
          { top: '50%', display: 'block', duration: 2 }, '65%')
        .to(layer3Ref.current,
          { top: '50%', display: 'block', duration: 2 }, '65%')
        .fromTo(vision3Ref.current,
          { opacity: 0, top: '60%' },
          { opacity: 1, top: '50%', display: 'block', duration: 2 }, '70%')
        .to(vision3Ref.current,
          { opacity: 1, display: 'block', duration: 3, }, '75%')
        .to(vision3Ref.current,
          { opacity: 0, display: 'none', duration: 0.5 }, '80%')
        .fromTo(description3Ref.current,
          { opacity: 0, top: '60%' },
          { opacity: 1, top: '50%', display: 'block', duration: 2 }, '80%')
        .to(wrapper2Ref.current,
          { display: 'none' }, '85%')
        .to(background2Ref.current,
          { display: 'none' }, '85%')
        .to(layer2Ref.current,
          { display: 'none' }, '85%')
        .to(description3Ref.current,
          { opacity: 1, display: 'block', duration: 3 }, '85%')
        .to(wrapper3Ref.current,
          { top: '-100%', opacity: 0, display: 'none', duration: 3 }, '100%')
        .to(background3Ref.current,
          { top: '-100%', opacity: 0, display: 'none', duration: 3 }, '100%')
        .to(layer3Ref.current,
          { top: '-100%', opacity: 0, display: 'none', duration: 3 }, '100%');
    }, [containerRef]);

    return (
      <Box
        ref={containerRef}
        height="900vh"
        backgroundColor="#000000"
      >
        <Box
          ref={wrapper1Ref}
          zIndex="10"
          position="fixed"
          top="100vh"
          left="50%"
          transform="translate(-50%, -50%)"
          display="none"
          width="100%"
          height={['calc(100vh - 120px)', 'calc(100vh - 160px)']}
          backgroundColor="#000000"
        >
          <Box
            ref={background1Ref}
            margin={['auto auto', '0']}
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['64px', '80px']}
            width={['calc(100% - 40px)', '1420px']}
            height={['calc(100vh - 120px)', '800px']}
            maxWidth={['auto', '1420px']}
            maxHeight={['640px', '800px']}
            backgroundColor="#000000"
          >
            <Box
              as="video"
              src={BACKGROUNDS[0]}
              objectFit={['cover', 'cover']}
              sx={{
                aspectRatio: 1420 / 800,
              }}
              autoPlay
              loop
              muted
              width={['100%', '1420px']}
              height={['100%', '100%']}
              borderRadius={['32px', '40px']}
            />
          </Box>
          <Box
            ref={layer1Ref}
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['64px', '75px']}
            width="100%"
            height={['calc(100vh - 120px)', '800px']}
            maxHeight={['640px', '800px']}
          >
            <Box
              width="100%"
              height="100%"
              backgroundColor="rgba(0, 0, 0, 0.5)"
            />
          </Box>
          <Text
            ref={vision1Ref}
            fontSize={[18, 28]}
            fontWeight="600"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['32px', '0']}
            width="100%"
            lineHeight={['24px', '40px']}
            textAlign="center"
            color="#FFFFFF"
            opacity="0"
          >
            VISION
            <Box
              as="strong"
              fontSize={[48, 80]}
              fontWeight={['700', '800']}
              display="block"
              marginTop={['24px', '40px']}
              lineHeight={['64px', '130%']}
              wordBreak={'keep-all'}
            >
              {VISIONS[0]}
            </Box>
          </Text>
          <Text
            ref={description1Ref}
            fontSize={[22, 48]}
            fontWeight="700"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['32px', '0']}
            width={['85%', '100vw']}
            color="#FFFFFF"
            lineHeight={['28px', '64px']}
            opacity="0"
            textAlign="center"
            whiteSpace={['pre-wrap', 'nowrap']}
            wordBreak={'keep-all'}
          >
            {DESCRIPTIONS[0].line1}
            <Box
              as="strong"
              display="block"
              whiteSpace={['pre-wrap', 'nowrap']}
              wordBreak={'keep-all'}
            >
              {DESCRIPTIONS[0].line2}
            </Box>
          </Text>
        </Box>
        <Box
          ref={wrapper2Ref}
          zIndex="10"
          position="fixed"
          top="150%"
          left="50%"
          transform="translate(-50%, -50%)"
          display="none"
          width="100%"
          height={['calc(100vh - 120px)', '100%']}
        >
          <Box
            ref={background2Ref}
            margin={['auto auto', '0']}
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['64px', '80px']}
            width={['calc(100% - 40px)', '1420px']}
            height={['calc(100vh - 120px)', '800px']}
            maxWidth={['auto', '1420px']}
            maxHeight={['640px', '800px']}
            backgroundColor="transparent"
          >
            <Box
              as="video"
              src={BACKGROUNDS[1]}
              objectFit={['cover', 'cover']}
              sx={{
                aspectRatio: 1420 / 800,
              }}
              autoPlay
              loop
              muted
              width={['100%', '1420px']}
              height={['100%', '100%']}
              borderRadius={['32px', '40px']}
            />
          </Box>
          <Box
            ref={layer2Ref}
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['64px', '75px']}
            width="100%"
            height={['calc(100vh - 120px)', '800px']}
            maxHeight={['640px', '800px']}
          >
            <Box
              width="100%"
              height="100%"
              border="1px solid rgba(0, 0, 0, 0.5)"
              backgroundColor="rgba(0, 0, 0, 0.5)"
            />
          </Box>
          <Text
            ref={vision2Ref}
            fontSize={[18, 28]}
            fontWeight="600"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['32px', '0']}
            width="100%"
            lineHeight={['24px', '40px']}
            textAlign="center"
            color="#FFFFFF"
            opacity="0"
          >
            VISION
            <Box
              as="strong"
              fontSize={[48, 80]}
              fontWeight={['700', '800']}
              display="block"
              marginTop={['24px', '40px']}
              lineHeight={['64px', '130%']}
              wordBreak={'keep-all'}
            >
              {VISIONS[1]}
            </Box>
          </Text>
          <Text
            ref={description2Ref}
            fontSize={[22, 48]}
            fontWeight="700"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['32px', '0']}
            width={['85%', '100vw']}
            color="#FFFFFF"
            lineHeight={['28px', '64px']}
            opacity="0"
            textAlign="center"
            whiteSpace={['pre-wrap', 'nowrap']}
            wordBreak={'keep-all'}
          >
            {DESCRIPTIONS[1].line1}
            <Box
              as="strong"
              display="block"
              whiteSpace={['pre-wrap', 'nowrap']}
              wordBreak={'keep-all'}
            >
              {DESCRIPTIONS[1].line2}
            </Box>
          </Text>
        </Box>
        <Box
          ref={wrapper3Ref}
          zIndex="10"
          position="fixed"
          top="150%"
          left="50%"
          transform="translate(-50%, -50%)"
          display="none"
          width="100%"
          height={['calc(100vh - 120px)', 'calc(100vh - 160px)']}
        >
          <Box
            ref={background3Ref}
            margin={['auto auto', '0']}
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['64px', '80px']}
            width={['calc(100% - 40px)', '1420px']}
            height={['calc(100vh - 120px)', '800px']}
            maxWidth={['auto', '1420px']}
            maxHeight={['640px', '800px']}
            backgroundColor="transparent"
          >
            <Box
              as="video"
              src={BACKGROUNDS[2]}
              objectFit={['cover', 'cover']}
              sx={{
                aspectRatio: 1420 / 800,
              }}
              autoPlay
              loop
              muted
              width={['100%', '1420px']}
              height={['100%', '100%']}
              borderRadius={['32px', '40px']}
            />
          </Box>
          <Box
            ref={layer3Ref}
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['64px', '75px']}
            width="100%"
            height={['calc(100vh - 120px)', '800px']}
            maxHeight={['640px', '800px']}
          >
            <Box
              width="100%"
              height="100%"
              backgroundColor="rgba(0, 0, 0, 0.5)"
            />
          </Box>
          <Text
            ref={vision3Ref}
            fontSize={[18, 28]}
            fontWeight="600"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['32px', '0']}
            width="100%"
            lineHeight={['24px', '40px']}
            textAlign="center"
            color="#FFFFFF"
            opacity="0"
          >
            VISION
            <Box
              as="strong"
              fontSize={[48, 80]}
              fontWeight={['700', '800']}
              display="block"
              marginTop={['24px', '40px']}
              lineHeight={['64px', '130%']}
              wordBreak={'keep-all'}
            >
              {VISIONS[2]}
            </Box>
          </Text>
          <Text
            ref={description3Ref}
            fontSize={[22, 48]}
            fontWeight="700"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="none"
            paddingTop={['32px', '0']}
            width={['85%', '100vw']}
            color="#FFFFFF"
            lineHeight={['28px', '64px']}
            opacity="0"
            textAlign="center"
            whiteSpace={['pre-wrap', 'nowrap']}
            wordBreak={'keep-all'}
          >
            {DESCRIPTIONS[2].line1}
            <Box
              as="strong"
              display="block"
              whiteSpace={['pre-wrap', 'nowrap']}
              wordBreak={'keep-all'}
            >
              {DESCRIPTIONS[2].line2}
            </Box>
          </Text>
        </Box>
      </Box>
    );
  }
;

export default Vision;
