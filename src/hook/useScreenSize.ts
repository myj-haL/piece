import { useCallback, useState, useEffect } from 'react';

export type deviceType = 'pc' | 'mobile' | 'tab';
interface ScreenSize {
  width: number;
  height: number;
  device: deviceType;
}

const useScreenSize = () => {
  const isClient = typeof window === 'object';

  const getSize = useCallback((): ScreenSize => {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0,
      device: 'pc',
    };
  }, [isClient]);

  const [screenSize, setScreenSize] = useState<ScreenSize>(getSize);
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => setScreenSize(getSize());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (screenSize.width < 768) {
    screenSize.device = 'mobile';
  } else if (screenSize.width >= 768 && screenSize.width < 1200) {
    screenSize.device = 'tab';
  } else {
    screenSize.device = 'pc';
  }


  return screenSize;
};
export const display = {
  mobile: {
    display: ['inherit', 'none'],
  },
  pc: {
    display: ['none', 'inherit'],
  },
};
export default useScreenSize;
