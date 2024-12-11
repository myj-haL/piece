import React from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Visions from '@/components/Business/Visions';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  return (
    <Visions />
  );
};

export default Section3;
