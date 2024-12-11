import React, { useEffect, useRef } from 'react';

import { Box, Text } from '@chakra-ui/react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import BUSINESS_ICON1 from '/public/images/business/img_product_energy.png';
import BUSINESS_ICON2 from '/public/images/business/img_product_flight.png';
import BUSINESS_ICON3 from '/public/images/business/img_product_contents.png';
import BUSINESS_ICON4 from '/public/images/business/img_product_ship.png';
import BUSINESS_ICON5 from '/public/images/business/img_product_car.png';
import BUSINESS_ICON6 from '/public/images/business/img_product_commerce.png';
import BUSINESS_ICON7 from '/public/images/business/img_product_art.png';
import BUSINESS_ICON8 from '/public/images/business/img_product_building.png';
import Image from 'next/image';
import useScreenSize from '@/hook/useScreenSize';

const BUSINESS_ICONS = [
  BUSINESS_ICON1,
  BUSINESS_ICON2,
  BUSINESS_ICON3,
  BUSINESS_ICON4,
  BUSINESS_ICON5,
  BUSINESS_ICON6,
  BUSINESS_ICON7,
  BUSINESS_ICON8,
];

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const containerRef = useRef(null);
  const iconRefs = useRef([]);
  const missionRef = useRef(null);
  const backgroundRef = useRef(null);

  const { device } = useScreenSize();

  useEffect(() => {
    const iconRefCheck = iconRefs.current.every((iconRef) => iconRef);
    if (!containerRef.current || !missionRef.current || !iconRefCheck) {
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

    gsap.set(missionRef.current, { top: '50%'});

    iconRefs.current.forEach((iconRef) => {
      scrollAnimation.fromTo(
        iconRef,
        { top: '100%', autoAlpha: 0, display: 'none' },
        { top: '50%', autoAlpha: 1, display: 'block', duration: 1.5},
      );
    });

    iconRefs.current.forEach((iconRef, index) => {
      const spreads = [
        {
          x: '+=230%',
          y: '+=25%',
        },
        {
          x: '-=270%',
          y: '-=120%',
        },
        {
          x: '-=210%',
          y: '+=60%',
        },
        {
          x: '+=90%',
          y: '-=145%',
        },
        {
          x: '-=100%',
          y: '-=100%',
        },
        {
          x: '-=130%',
          y: '+=105%',
        },
        {
          x: '+=165%',
          y: '-=50%',
        },
        {
          x: '+=115%',
          y: '+=90%',
        },
      ];

      scrollAnimation.to(iconRef, {
        display: 'block',
        duration: 2,
        x: spreads[index].x,
        y: spreads[index].y,
        ease: 'power1.inOut'
      }, 'spread1');
    });

    scrollAnimation
      .to(
        missionRef.current,
        { autoAlpha: 1, display: 'block', duration: 1.5 },
        'spread1',
      );

    iconRefs.current.forEach((iconRef, index) => {
      const spreads = [
        {
          x: '+=50%',
          y: '+=50%',
        },
        {
          x: '-=50%',
          y: '-=50%',
        },
        {
          x: '-=50%',
          y: '+=50%',
        },
        {
          x: '+=50%',
          y: '-=50%',
        },
        {
          x: '-=50%',
          y: '-=50%',
        },
        {
          x: '-=50%',
          y: '+=50%',
        },
        {
          x: '+=50%',
          y: '-=50%',
        },
        {
          x: '+=50%',
          y: '+=50%',
        },
      ];

      scrollAnimation.to(iconRef, {
        display: 'block',
        duration: 1.5,
        x: spreads[index].x,
        y: spreads[index].y,
        ease: 'power1.inOut'
      }, 'spread2');
    });

    scrollAnimation
      .to(
        missionRef.current,
        { scale: device === 'mobile' ? 1.05 : 1.3, duration: 2 },
        'spread2',
      );

    scrollAnimation
      .to(
        missionRef.current,
        { opacity: 1, duration: 3 },
        'spread2+=4',
      );

    iconRefs.current.forEach((iconRef) => {
      scrollAnimation.fromTo(
        iconRef,
        { filter: 'blur(0px)' },
        { filter: 'blur(50px)', duration: 1 },
        'spread2+=2');
    });

    iconRefs.current.forEach((iconRef) => {
      scrollAnimation.to(
        iconRef,
        { top: 0, opacity: 0, display: 'none', duration: 2 },
        '98%');
    });

    scrollAnimation
      .to(missionRef.current,
        { opacity: 0, display: 'none', duration: 2 }, '98%')
      .to(missionRef.current,
        { top: '0', display: 'none', duration: 3 }, '98%')
      .to(backgroundRef.current,
        { opacity:1, display: 'block', duration: 3 }, '98%')
      .to(backgroundRef.current,
        { display: 'none', duration: 0.1 }, '100%');

  }, [containerRef, iconRefs.current.length, missionRef]);

  return (
    <Box
      ref={containerRef}
      height="400vh"
      overflow="hidden"
    >
      {BUSINESS_ICONS.map((icon, index) => (
        <Box
          ref={(element) => {
            iconRefs.current[index] = element;
          }}
          key={icon.src}
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={['170px', '350px']}
          height={['170px', '350px']}
        >
          <Image
            src={icon}
            alt="ICON"
          />
        </Box>
      ))}
      <Box
        ref={missionRef}
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        display="none"
        width="100%"
      >
        <Text
          fontSize={[21]}
          fontWeight="600"
          lineHeight={['30px']}
          textAlign="center"
        >
          Mission
        </Text>
        <Text
          fontSize={[32, 48]}
          fontWeight={['700', '800']}
          marginTop={['30px']}
          lineHeight={['44px', '63px']}
          textAlign="center"
        >
          다양한 자산에 <br/>
          누구나 쉽게 투자할 수 있는 <br/>
          혁신 금융 플랫폼
        </Text>
      </Box>
      <Box
        ref={backgroundRef}
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        display="none"
        width="100%"
        height="100%"
        backgroundColor="#000000"
        opacity="0"
      />
    </Box>
  );
};

export default Section2;
