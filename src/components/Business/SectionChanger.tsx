import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type SectionChangerProps = {
  onChangeSection: (show: boolean) => void;
}

const SectionChanger = ({ onChangeSection }: SectionChangerProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef) {
      return;
    }

    const scrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

  }, [containerRef])

  return (
    <Box
      ref={containerRef}
      height={['100vh']}
      backgroundColor="#000000"
    >
      <Box
        zIndex="100"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="100%"
        height={['100vh']}
      />
    </Box>
  );
}

export default SectionChanger;

