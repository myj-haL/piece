import { useEffect, useState } from 'react';

import { Tab } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type Tab = {
    name: string;
    category: string;
    link: string;
};
interface TabsProps {
    tabs: Tab[];
}
const DisclosureTabs = ({ tabs }: TabsProps) => {
    const router = useRouter();
    const { tab = '' } = router.query as { tab: string };

    const [activeStyle, setActiveStyle] = useState<any>({});

    useEffect(() => {
        setActiveStyle(
            tabs.map(_tab =>
                tab === _tab.category
                    ? {
                          borderBottom: 'initial',
                          outlineOffset: 'initial',
                          mb: '0',
                          outline: 'initial',
                          bg: 'none',
                          '&:after': {
                              content: '""',
                              display: 'block',
                              w: '100%',
                              position: 'absolute',
                              left: 0,
                              bottom: 0,
                              h: '2px',
                              bg: '#292A2E',
                          },
                      }
                    : {}
            )
        );
    }, [tabs, tab]);

    return (
        <>
            {tabs.map((item: any, index: number) => (
                <Tab
                    key={index}
                    position={'relative'}
                    {...activeStyle}
                    fontSize={18}
                    color={'#292A2E'}
                    fontWeight={600}
                    p={'16px 0'}
                    onClick={() => {
                        router.push(item.link);
                    }}
                >
                    {item.name}
                </Tab>
            ))}
        </>
    );
};

export default DisclosureTabs;
