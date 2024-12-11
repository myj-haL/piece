import { useEffect, useState } from 'react';

import MobileHeader from './MobileHeader';
import PcHeader from './PcHeader';
import style from './index.module.css';
import { useMediaQuery } from '@chakra-ui/react';
import { useBoolean } from '@chakra-ui/react';
import useScreenSize from '@/hook/useScreenSize';

const Header = () => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');
    const [isSearchBoxOpen, toggleSearchBox] = useBoolean();

    useEffect(() => {
        setDeviceType(device);
    }, [device]);
    return (
        <div className={style.container}>
            {deviceType === 'pc'
                && <PcHeader
                    isSearchBoxOpen={isSearchBoxOpen}
                    onToggleSearchBox={toggleSearchBox.toggle}
                />}
            {deviceType !== 'pc'
                && <MobileHeader
                    isSearchBoxOpen={isSearchBoxOpen}
                    onToggleSearchBox={toggleSearchBox.toggle}
                />}
        </div>
    ); 
};

export default Header;
