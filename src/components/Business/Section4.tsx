import { useEffect, useRef } from 'react';

import { Box, Text } from '@chakra-ui/react';

import gsap from 'gsap';

import useScreenSize from '@/hook/useScreenSize';

const Section4 = () => {
  const containerRef = useRef(null);

  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);
  const circle5Ref = useRef(null);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const text5Ref = useRef(null);
  const text6Ref = useRef(null);
  const text7Ref = useRef(null);

  const circle1BorderRef = useRef(null);
  const circle2BorderRef = useRef(null);
  const circle3BorderRef = useRef(null);
  const circle4BorderRef = useRef(null);
  const circle5BorderRef = useRef(null);

  const coreValueRef = useRef(null);

  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);
  const dot3Ref = useRef(null);
  const dot4Ref = useRef(null);
  const dot5Ref = useRef(null);

  const animationRef = useRef(null);

  const { device } = useScreenSize();

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const createAnimation = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      const scrollAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      if (device === 'pc' || device === 'tab') {
        gsap.set(circle1Ref.current, { top: '50%', left: '50%' });
        gsap.set(circle2Ref.current, { top: '50%', left: '50%' });
        gsap.set(circle3Ref.current, { top: '50%', left: '50%' });
        gsap.set(circle4Ref.current, { top: '50%', left: '50%' });
        gsap.set(circle5Ref.current, { top: '50%', left: '50%' });

        scrollAnimation
          .fromTo(circle1Ref.current,
            { opacity: 0, left: 'calc(40% - 568px)', top: '50%' },
            {
              opacity: 1, left: 'calc(50% - 568px)', top: '50%',
              display: 'flex', duration: 2
            }, '5%')
          .fromTo(circle2Ref.current,
            { opacity: 0, left: 'calc(45% - 284px)', top: '50%' },
            {
              opacity: 1, left: 'calc(50% - 284px)', top: '50%',
              display: 'flex', duration: 2
            }, '5%')
          .fromTo(circle3Ref.current,
            { opacity: 0, left: '50%', top: '50%' },
            { opacity: 1, display: 'flex', top: '50%', duration: 2 }, '5%')
          .fromTo(circle4Ref.current,
            { opacity: 0, left: 'calc(55% + 284px)', top: '50%' },
            {
              opacity: 1, left: 'calc(50% + 284px)', top: '50%',
              display: 'flex', duration: 2
            }, '5%')
          .fromTo(circle5Ref.current,
            { opacity: 0, left: 'calc(60% + 568px)', top: '50%' },
            {
              opacity: 1, left: 'calc(50% + 568px)', top: '50%',
              display: 'flex', duration: 2
            }, '5%')
          .to(circle1BorderRef.current,
            { rotation: 360, duration: 3 }, '10%')
          .to(circle2BorderRef.current,
            { rotation: 405, duration: 3 }, '10%')
          .to(circle3BorderRef.current,
            { rotation: 450, duration: 3 }, '10%')
          .to(circle4BorderRef.current,
            { rotation: 495, duration: 3 }, '10%')
          .to(circle5BorderRef.current,
            { rotation: 540, duration: 3 }, '10%')
          .fromTo(circle1Ref.current,
            { top: '50%', left: 'calc(50% - 568px)', display: 'flex' },
            {
              top: 'calc(50% - 284px)',
              left: '50%',
              display: 'flex',
              duration: 2,
              ease: 'power2.inOut',
            }, '30%')
          .fromTo(circle2Ref.current,
            { top: '50%', left: 'calc(50% - 284px)', display: 'flex' },
            {
              top: 'calc(50% + 244px)',
              left: 'calc(50% - 168px)',
              display: 'flex',
              duration: 2,
              ease: 'power2.inOut',
            }, '30%')
          .fromTo(circle3Ref.current,
            { top: '50%', left: '50%', display: 'flex' },
            {
              top: 'calc(50% - 71px)',
              left: 'calc(50% - 284px)',
              display: 'flex',
              duration: 2,
              ease: 'power2.inOut',
            }, '30%')
          .fromTo(circle4Ref.current,
            { top: '50%', left: 'calc(50% + 284px)' },
            {
              top: 'calc(50% + 244px)',
              left: 'calc(50% + 168px)',
              display: 'flex',
              duration: 2,
              ease: 'power2.inOut',
            }, '30%')
          .fromTo(circle5Ref.current,
            { top: '50%', left: 'calc(50% + 568px)' },
            {
              top: 'calc(50% - 71px)',
              left: 'calc(50% + 284px)',
              display: 'flex',
              duration: 2,
              ease: 'power2.inOut',
            }, '30%')
          .to(coreValueRef.current, {
            opacity: 1, display: 'block', duration: 1
          }, '15%')
          .to(circle1BorderRef.current,
            { rotation: 720, duration: 3 }, '35%')
          .to(circle2BorderRef.current,
            { rotation: 765, duration: 3 }, '35%')
          .to(circle3BorderRef.current,
            { rotation: 810, duration: 3 }, '35%')
          .to(circle4BorderRef.current,
            { rotation: 855, duration: 3 }, '35%')
          .to(circle5BorderRef.current,
            { rotation: 900, duration: 3 }, '35%')
          .to(coreValueRef.current, {
            opacity: 0, display: 'none', duration: 1
          }, '40%')
          .to(circle1Ref.current,
            { opacity: 0, scale: 0.1, display: 'none', duration: 1.5 }, '40%')
          .to(circle2Ref.current,
            { opacity: 0, scale: 0.1, display: 'none', duration: 1.5 }, '40%')
          .to(circle3Ref.current,
            { opacity: 0, scale: 0.1, display: 'none', duration: 1.5 }, '40%')
          .to(circle4Ref.current,
            { opacity: 0, scale: 0.1, display: 'none', duration: 1.5 }, '40%')
          .to(circle5Ref.current,
            { opacity: 0, scale: 0.1, display: 'none', duration: 1.5 }, '40%')
          .to(text1Ref.current,
            { backgroundColor: '#FFFFFF', duration: 1 }, '40%')
          .to(text2Ref.current,
            { backgroundColor: '#FFFFFF', duration: 1 }, '40%')
          .to(text3Ref.current,
            { backgroundColor: '#FFFFFF', duration: 1 }, '40%')
          .to(text4Ref.current,
            { backgroundColor: '#FFFFFF', duration: 1 }, '40%')
          .to(text5Ref.current,
            { backgroundColor: '#FFFFFF', duration: 1 }, '40%')
          .to(dot1Ref.current,
            { opacity: 1, display: 'block', duration: 0.5 },
            '46%')
          .to(dot2Ref.current,
            { opacity: 1, display: 'block', duration: 0.5 },
            '46%')
          .to(dot3Ref.current,
            { opacity: 1, display: 'block', duration: 0.5 },
            '46%')
          .to(dot4Ref.current,
            { opacity: 1, display: 'block', duration: 0.5 },
            '46%')
          .to(dot5Ref.current,
            { opacity: 1, display: 'block', duration: 0.5 },
            '46%')
          .to(dot1Ref.current,
            {
              transform: 'translate(300%, 100%)', display: 'block', duration: 1
            },
            '47%')
          .to(dot2Ref.current,
            {
              transform: 'translate(-200%, -200%)', display: 'block',
              duration: 1
            },
            '47%')
          .to(dot3Ref.current,
            {
              transform: 'translate(200%, -200%)', display: 'block', duration: 1
            },
            '47%')
          .to(dot4Ref.current,
            {
              transform: 'translate(-200%, 200%)', display: 'block', duration: 1
            },
            '47%')
          .to(dot5Ref.current,
            {
              transform: 'translate(250%, 450%)', display: 'block', duration: 1
            },
            '47%')
          .fromTo(text6Ref.current,
            { opacity: 0, top: '70%' },
            { opacity: 1, display: 'block', top: '50%', duration: 1.5 },
            '47%')
          .to(text6Ref.current,
            { opacity: 1, display: 'block', duration: 3 },
            '60%')
          .to(text6Ref.current,
            { opacity: 0, display: 'none', duration: 1 },
            '75%')
          .fromTo(text7Ref.current,
            { opacity: 0, top: '70%' },
            { opacity: 1, display: 'block', top: '50%', duration: 1.5 },
            '75%')
          .to(text7Ref.current,
            { opacity: 1, display: 'block', duration: 3 }, '95%')
          .to(text7Ref.current,
            { opacity: 0, display: 'none', duration: 2 }, '100%')
          .to(dot1Ref.current,
            { opacity: 0, display: 'none', duration: 1.5 }, '100%')
          .to(dot2Ref.current,
            { opacity: 0, display: 'none', duration: 1.5 }, '100%')
          .to(dot3Ref.current,
            { opacity: 0, display: 'none', duration: 1.5 }, '100%')
          .to(dot4Ref.current,
            { opacity: 0, display: 'none', duration: 1.5 }, '100%')
          .to(dot5Ref.current,
            { opacity: 0, display: 'none', duration: 1.5 }, '100%');

        scrollAnimation.scrollTrigger.refresh();
        animationRef.current = scrollAnimation;
        return;
      }

      gsap.set(circle1Ref.current, { top: 'calc(40% - 200px)', left: '50%' });
      gsap.set(circle2Ref.current, { top: 'calc(45% - 100px)', left: '50%' });
      gsap.set(circle3Ref.current, { top: '50%', left: '50%' });
      gsap.set(circle4Ref.current, { top: 'calc(55% + 100px)', left: '50%' });
      gsap.set(circle5Ref.current, { top: 'calc(60% + 200px)', left: '50%' });

      scrollAnimation
        .fromTo(circle1Ref.current,
          { opacity: 0, left: '50%', top: 'calc(40% - 200px)' },
          {
            opacity: 1, left: '50%', top: 'calc(50% - 200px)', display: 'flex',
            duration: 2
          }, '5%')
        .fromTo(circle2Ref.current,
          { opacity: 0, left: '50%', top: 'calc(45% - 100px)' },
          {
            opacity: 1, left: '50%', top: 'calc(50% - 100px)', display: 'flex',
            duration: 2
          }, '5%')
        .fromTo(circle3Ref.current,
          { opacity: 0, top: '50%', left: '50%' },
          {
            opacity: 1, left: '50%', display: 'flex', top: '50%', duration: 2
          }, '5%')
        .fromTo(circle4Ref.current,
          { opacity: 0, top: 'calc(55% + 100px)', left: '50%' },
          {
            opacity: 1, top: 'calc(50% + 100px)', left: '50%', display: 'flex',
            duration: 2
          }, '5%')
        .fromTo(circle5Ref.current,
          { opacity: 0, top: 'calc(60% + 200px)', left: '50%' },
          {
            opacity: 1, top: 'calc(50% + 200px)', left: '50%', display: 'flex',
            duration: 2
          }, '5%')
        .to(circle1BorderRef.current,
          { rotation: 360, duration: 3 }, '10%')
        .to(circle2BorderRef.current,
          { rotation: 405, duration: 3 }, '10%')
        .to(circle3BorderRef.current,
          { rotation: 450, duration: 3 }, '10%')
        .to(circle4BorderRef.current,
          { rotation: 495, duration: 3 }, '10%')
        .to(circle5BorderRef.current,
          { rotation: 540, duration: 3 }, '10%')
        .fromTo(circle1Ref.current,
          { top: 'calc(50% - 200px)', left: '50%' },
          {
            top: 'calc(50% - 20px)',
            left: 'calc(50% + 80px)',
            display: 'flex',
            duration: 2,
            ease: 'power2.inOut',
          }, '15%')
        .fromTo(circle2Ref.current,
          { top: 'calc(50% - 100px)', left: '50%' },
          {
            top: 'calc(50% - 80px)',
            left: '50%',
            display: 'flex',
            duration: 2,
            ease: 'power2.inOut',
          }, '15%')
        .fromTo(circle3Ref.current,
          { top: '50%', left: '50%' },
          {
            top: 'calc(50% - 20px)',
            left: 'calc(50% - 80px)',
            display: 'flex',
            duration: 2,
            ease: 'power2.inOut',
          }, '15%')
        .fromTo(circle4Ref.current,
          { top: 'calc(50% + 100px)', left: '50%' },
          {
            top: 'calc(50% + 80px)',
            left: 'calc(50% - 50px)',
            display: 'flex',
            duration: 2,
            ease: 'power2.inOut',
          }, '15%')
        .fromTo(circle5Ref.current,
          { top: 'calc(50% + 200px)', left: '50%' },
          {
            top: 'calc(50% + 80px)',
            left: 'calc(50% + 50px)',
            display: 'flex',
            duration: 2,
            ease: 'power2.inOut',
          }, '15%')
        .to(circle1BorderRef.current,
          { rotation: 720, duration: 3 }, '20%')
        .to(circle2BorderRef.current,
          { rotation: 765, duration: 3 }, '20%')
        .to(circle3BorderRef.current,
          { rotation: 810, duration: 3 }, '20%')
        .to(circle4BorderRef.current,
          { rotation: 855, duration: 3 }, '20%')
        .to(circle5BorderRef.current,
          { rotation: 900, duration: 3 }, '20%')
        .to(coreValueRef.current, {
          opacity: 1, display: 'block', duration: 1
        }, '20%')
        .to(coreValueRef.current, {
          opacity: 0, display: 'none', duration: 1
        }, '25%')
        .to(circle1Ref.current,
          { opacity: 0, display: 'none', scale: 0.1, duration: 1 }, '25%')
        .to(circle2Ref.current,
          { opacity: 0, display: 'none', scale: 0.1, duration: 1 }, '25%')
        .to(circle3Ref.current,
          { opacity: 0, display: 'none', scale: 0.1, duration: 1 }, '25%')
        .to(circle4Ref.current,
          { opacity: 0, display: 'none', scale: 0.1, duration: 1 }, '25%')
        .to(circle5Ref.current,
          { opacity: 0, display: 'none', scale: 0.1, duration: 1 }, '25%')
        .to(text1Ref.current,
          { backgroundColor: '#FFFFFF', duration: 1 }, '25%')
        .to(text2Ref.current,
          { backgroundColor: '#FFFFFF', duration: 1 }, '25%')
        .to(text3Ref.current,
          { backgroundColor: '#FFFFFF', duration: 1 }, '25%')
        .to(text4Ref.current,
          { backgroundColor: '#FFFFFF', duration: 1 }, '25%')
        .to(text5Ref.current,
          { backgroundColor: '#FFFFFF', duration: 1 }, '25%')
        .to(dot1Ref.current,
          { opacity: 1, display: 'block', duration: 0.5 },
          '26%')
        .to(dot2Ref.current,
          { opacity: 1, display: 'block', duration: 0.5 },
          '26%')
        .to(dot3Ref.current,
          { opacity: 1, display: 'block', duration: 0.5 },
          '26%')
        .to(dot4Ref.current,
          { opacity: 1, display: 'block', duration: 0.5 },
          '26%')
        .to(dot5Ref.current,
          { opacity: 1, display: 'block', duration: 0.5 },
          '26%')
        .to(dot1Ref.current,
          { transform: 'translate(300%, 100%)', display: 'block', duration: 1 },
          '27%')
        .to(dot2Ref.current,
          {
            transform: 'translate(-200%, -200%)', display: 'block', duration: 1
          },
          '27%')
        .to(dot3Ref.current,
          {
            transform: 'translate(200%, -200%)', display: 'block', duration: 1
          },
          '27%')
        .to(dot4Ref.current,
          {
            transform: 'translate(-200%, 200%)', display: 'block', duration: 1
          },
          '27%')
        .to(dot5Ref.current,
          { transform: 'translate(250%, 450%)', display: 'block', duration: 1 },
          '27%')
        .fromTo(text6Ref.current,
          { opacity: 0, top: '70%' },
          { opacity: 1, display: 'block', top: '50%', duration: 1.5 },
          '27%')
        .to(text6Ref.current,
          { opacity: 1, display: 'block', duration: 3 },
          '50%')
        .to(text6Ref.current,
          { opacity: 0, display: 'none', duration: 1 },
          '80%')
        .fromTo(text7Ref.current,
          { opacity: 0, top: '70%' },
          { opacity: 1, display: 'block', top: '50%', duration: 1.5 },
          '80%')
        .to(text7Ref.current,
          { opacity: 1, display: 'block', duration: 3 }, '95%')
        .to(text7Ref.current,
          { opacity: 0, duration: 2, display: 'none' }, '100%')
        .to(dot1Ref.current,
          { opacity: 0, duration: 2, display: 'none' }, '100%')
        .to(dot2Ref.current,
          { opacity: 0, duration: 2, display: 'none' }, '100%')
        .to(dot3Ref.current,
          { opacity: 0, duration: 2, display: 'none' }, '100%')
        .to(dot4Ref.current,
          { opacity: 0, duration: 2, display: 'none' }, '100%')
        .to(dot5Ref.current,
          { opacity: 0, duration: 2, display: 'none' }, '100%');

      scrollAnimation.scrollTrigger.refresh();
      animationRef.current = scrollAnimation;
    };

    createAnimation();

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [containerRef, device]);

  return (
    <Box
      ref={containerRef}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="800vh"
      backgroundColor="#000000"
    >
      <Text
        ref={coreValueRef}
        fontSize={[18, 28]}
        fontWeight="600"
        position="fixed"
        top={['calc(50% - 180px)', '50%']}
        left="50%"
        transform="translate(-50%, -50%)"
        display="none"
        color="#FFFFFF"
        opacity="0"
      >
        Core Value
      </Text>
      <Box
        ref={circle1Ref}
        position="fixed"
        top={['calc(50% - 200px)', '50%']}
        left={['50%', 'calc(50% - 568px)']}
        transform="translate(-50%, -50%)"
        display="none"
        justifyContent="center"
        alignItems="center"
        width={['100px', '284px']}
        height={['100px', '284px']}
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
        >
          <Box
            ref={circle1BorderRef}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="100%"
            height="100%"
            borderRadius="50%"
            backgroundImage="linear-gradient(white, rgba(255,255,255,0))"
            style={{
              clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 0, 10 0)',
            }}
          />
          <Text
            ref={text1Ref}
            fontSize={[18, 48]}
            fontWeight={['600', '700']}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={['96px', '280px']}
            height={['96px', '280px']}
            borderRadius="50%"
            backgroundColor="#000000"
            color="#FFFFFF"
          >
            Partner
          </Text>
        </Box>
      </Box>
      <Box
        ref={circle2Ref}
        position="fixed"
        top={['calc(50% - 100px)', '50%']}
        left={['50%', 'calc(50% - 284px)']}
        transform="translate(-50%, -50%)"
        display="none"
        justifyContent="center"
        alignItems="center"
        width={['100px', '284px']}
        height={['100px', '284px']}
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
        >
          <Box
            ref={circle2BorderRef}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%) rotate(45deg)"
            width="100%"
            height="100%"
            borderRadius="50%"
            backgroundImage="linear-gradient(white, rgba(255,255,255,0))"
            style={{
              clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 0, 10 0)',
            }}
          />
          <Text
            ref={text2Ref}
            fontSize={[18, 48]}
            fontWeight={['600', '700']}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={['96px', '280px']}
            height={['96px', '280px']}
            borderRadius="50%"
            backgroundColor="#000000"
            color="#FFFFFF"
          >
            Innovation
          </Text>
        </Box>
      </Box>
      <Box
        ref={circle3Ref}
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        display="none"
        justifyContent="center"
        alignItems="center"
        width={['100px', '284px']}
        height={['100px', '284px']}
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
        >
          <Box
            ref={circle3BorderRef}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%) rotate(90deg)"
            width="100%"
            height="100%"
            borderRadius="50%"
            backgroundImage="linear-gradient(white, rgba(255,255,255,0))"
            style={{
              clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 0, 10 0)',
            }}
          />
          <Text
            ref={text3Ref}
            fontSize={[18, 48]}
            fontWeight={['600', '700']}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={['96px', '280px']}
            height={['96px', '280px']}
            borderRadius="50%"
            backgroundColor="#000000"
            color="#FFFFFF"
          >
            Expertise
          </Text>
        </Box>
      </Box>
      <Box
        ref={circle4Ref}
        position="fixed"
        top={['50% + 100px', '50%']}
        left={['50%', 'calc(50% + 284px)']}
        transform="translate(-50%, -50%)"
        display="none"
        justifyContent="center"
        alignItems="center"
        width={['100px', '284px']}
        height={['100px', '284px']}
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
        >
          <Box
            ref={circle4BorderRef}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%) rotate(180deg)"
            width="100%"
            height="100%"
            borderRadius="50%"
            backgroundImage="linear-gradient(white, rgba(255,255,255,0))"
            style={{
              clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 0, 10 0)',
            }}
          />
          <Text
            ref={text4Ref}
            fontSize={[18, 48]}
            fontWeight={['600', '700']}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={['96px', '280px']}
            height={['96px', '280px']}
            borderRadius="50%"
            backgroundColor="#000000"
            color="#FFFFFF"
          >
            Customer
          </Text>
        </Box>
      </Box>
      <Box
        ref={circle5Ref}
        position="fixed"
        top={['50% + 200px', '50%']}
        left={['50%', 'calc(50% + 568px)']}
        transform="translate(-50%, -50%)"
        display="none"
        justifyContent="center"
        alignItems="center"
        width={['100px', '284px']}
        height={['100px', '284px']}
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
        >
          <Box
            ref={circle5BorderRef}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%) rotate(270deg)"
            width="100%"
            height="100%"
            borderRadius="50%"
            backgroundImage="linear-gradient(white, rgba(255,255,255,0))"
            style={{
              clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 0, 10 0)',
            }}
          />
          <Text
            ref={text5Ref}
            fontSize={[18, 48]}
            fontWeight={['600', '700']}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={['96px', '280px']}
            height={['96px', '280px']}
            borderRadius="50%"
            backgroundColor="#000000"
            color="#FFFFFF"
          >
            Expeditive
          </Text>
        </Box>
      </Box>
      <Box
        ref={dot1Ref}
        zIndex="10"
        position="fixed"
        top={['calc(50% - 80px)', 'calc(50% - 284px)']}
        left="50%"
        transform="translate(-50%, -50%)"
        display="none"
        width={['16px', '24px']}
        height={['16px', '24px']}
        borderRadius="50%"
        backgroundColor="#FFFFFF"
        opacity="0"
      />
      <Box
        ref={dot2Ref}
        position="fixed"
        top={['calc(50% + 80px)', 'calc(50% + 244px)']}
        left={['calc(50% - 50px)', 'calc(50% - 168px)']}
        transform="translate(-50%, -50%)"
        display="none"
        width={['16px', '24px']}
        height={['16px', '24px']}
        borderRadius="50%"
        backgroundColor="#FFFFFF"
        opacity="0"
      />
      <Box
        ref={dot3Ref}
        position="fixed"
        top={['calc(50% - 20px)', 'calc(50% - 71px)']}
        left={['calc(50% - 80px)', 'calc(50% - 284px)']}
        transform="translate(-50%, -50%)"
        display="none"
        width={['16px', '24px']}
        height={['16px', '24px']}
        borderRadius="50%"
        backgroundColor="#FFFFFF"
        opacity="0"
      />
      <Box
        ref={dot4Ref}
        position="fixed"
        top={['calc(50% + 80px)', 'calc(50% + 244px)']}
        left={['calc(50% + 50px)', 'calc(50% + 168px)']}
        transform="translate(-50%, -50%)"
        display="none"
        width={['16px', '24px']}
        height={['16px', '24px']}
        borderRadius="50%"
        backgroundColor="#FFFFFF"
        opacity="0"
      />
      <Box
        ref={dot5Ref}
        zIndex=""
        position="fixed"
        top={['calc(50% - 20px)', 'calc(50% - 71px)']}
        left={['calc(50% + 80px)', 'calc(50% + 284px)']}
        transform="translate(-50%, -50%)"
        display="none"
        width={['16px', '24px']}
        height={['16px', '24px']}
        borderRadius="50%"
        backgroundColor="#FFFFFF"
        opacity="0"
      />
      <Text
        ref={text6Ref}
        zIndex="2"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize={[22, 48]}
        fontWeight={['600', '700']}
        display="none"
        width={['65%', '100%']}
        lineHeight={['28px', '64px']}
        color="#FFFFFF"
        textAlign="center"
        opacity="0"
      >
        분야별 톱 티어 전문가들이 모여
        <Box
          as="strong"
          display="block"
        >
          혁신적인 투자상품을 누구보다 빠르게 개발합니다
        </Box>
      </Text>
      <Text
        ref={text7Ref}
        zIndex="3"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize={[22, 48]}
        fontWeight={['600', '700']}
        display="none"
        width="100%"
        lineHeight={['28px', '64px']}
        color="#FFFFFF"
        textAlign="center"
        opacity="0"
      >
        투자자에게 더 효율적인 투자 수익을,
        <Box
          as="strong"
          display="block"
        >
          파트너에게는 더큰 비즈니스
        </Box>
        창출 기회를 제공합니다
      </Text>
    </Box>
  );
};

export default Section4;
