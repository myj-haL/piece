import { useEffect, useRef, useState } from 'react';

import { Box, Text } from '@chakra-ui/react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import BACKGROUND_VIDEO from 'img/video/section1.mp4';

import { useScramble } from 'use-scramble';

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const [showSlogan, setShowSlogan] = useState(false);

  const { ref, replay } = useScramble({
    text: 'Let\'s PIECE!',
    speed: 0.25,
  });

  useEffect(() => {
    if(showSlogan) {
      replay();
      setShowSlogan(false);
    }
  }, [showSlogan]);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const sloganRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !titleRef.current || !videoRef.current || !sloganRef.current) {
      return;
    }

    const scrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.set([titleRef.current, videoRef.current], { autoAlpha: 1 });
    gsap.set(sloganRef.current, { autoAlpha: 0 });

    scrollAnimation
      .to(videoRef.current, { autoAlpha: 0, duration: 1, display: 'none' }, '15%')
      .to(titleRef.current, {
        top: '50%',  ease: 'Power3.easeOut', duration: 2,
      }, '15%')
      .to(titleRef.current, { autoAlpha: 0, duration: 1, display: 'none' }, '30%')
      .to(sloganRef.current, {
        autoAlpha: 1,
        duration: 0.1,
        onStart: () => {
          setShowSlogan(true);
        },
      }, '30%')
      .to(sloganRef.current, {
        autoAlpha: 1,
        duration: 5,
      }, '90%')
      .to(sloganRef.current, {
        autoAlpha: 0,
        display: 'none',
        duration: 2,
      }, '100%');
  }, [containerRef, titleRef, videoRef, sloganRef]);

  return (
    <Box
      ref={containerRef}
      height="400vh"
    >
      <Text
        ref={titleRef}
        fontSize={[32, 80]}
        fontWeight="700"
        zIndex="2"
        position="fixed"
        top={['calc(18.9vh + 44px)', 'calc(18.5vh + 108px)']}
        left="50%"
        transform="translate(-50%, -50%)"
        display="block"
        width="100%"
        color="#131313"
        lineHeight={['44px', '104px']}
        textAlign="center"
        opacity="0"
      >
          더 쉽고 안전하게<br/>
          부자되는 투자 제안
      </Text>
      <Box
        ref={videoRef}
        as="video"
        src={BACKGROUND_VIDEO}
        objectFit={['cover', 'cover']}
        sx={{
          aspectRatio: [960 / 540, 1920 / 1080],
        }}
        autoPlay
        loop
        muted
        fontSize="60"
        zIndex="1"
        position="fixed"
        top="65%"
        left="50%"
        transform="translate(-50%, -50%)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="auto"
        aspectRatio={[960 / 540, 1920 / 1080]}
        backgroundColor="#f5f5f5"
      >
      </Box>
      <Box
        ref={sloganRef}
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="100%"
        opacity="0"
      >
        <Text
          ref={ref}
          fontSize={[32, 80]}
          fontWeight={['700', '800']}
          lineHeight={['44px', '104px']}
          textAlign="center"
        />
      </Box>
    </Box>
  );
};

export default Section1;
