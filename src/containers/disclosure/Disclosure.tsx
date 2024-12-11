import { Box, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import BlackSelect from '@/components/CustomSelect/BlackSelect';
import DisclosureTabs from './DisclosureTabs';
import InvestmentDisclosure from './_fragment/InvestmentDisclosure';
import ManagementDisclosure from './_fragment/ManagementDisclosure';
import ShortSearchForm from '@/components/ShortSearchForm';
import WhiteSelect from '@/components/CustomSelect/WhiteSelect';
import useScreenSize from '@/hook/useScreenSize';

interface DisclosureProps {
    tab: string;
    category: string;
    keyword: string;
    page: string;
    listLink: string;
    sort: string;
    handleChangeCategory: (category: string) => void;
    handleChangeSort: (sort: string) => void;
    handleSearch: (keyword: string) => void;
}

const tabs = [
    {
        name: '투자공시',
        category: 'investmentDisclosure',
        link: '/disclosure?tab=investmentDisclosure&page=1',
    },
    {
        name: '경영공시',
        category: 'companyDisclosure',
        link: '/disclosure?tab=companyDisclosure&page=1',
    },
];
const Disclosure = ({
    tab,
    category,
    keyword,
    page,
    sort,
    handleChangeSort,
    listLink,
    handleChangeCategory,
    handleSearch,
}: DisclosureProps) => {
    const { device } = useScreenSize();
    const [deviceType, setDeviceType] = useState<string>('');
    useEffect(() => {
        setDeviceType(device);
    }, [device]);

    return (
        <Tabs m={'0 -20px'}>
            <TabList
                justifyContent={['flex-start', 'center']}
                borderBottom={'1px solid  #EAECF0'}
                gap={'24px'}
                p={['0 20px']}
            >
                <DisclosureTabs tabs={tabs} />
            </TabList>

            <Box maxW={'860px'} m={'0 auto'} p={['20px 20px 0']}>
                <ShortSearchForm
                    placeholder={'제목을 검색해 주세요'}
                    handleSearch={handleSearch}
                    keyword={keyword || ''}
                />
                <Box display={'flex'} alignItems={'center'} gap={'8px'}>
                    {tab === 'companyDisclosure' && <BlackSelect handleChangeCategory={handleChangeCategory} />}
                    <WhiteSelect handleChangeSort={handleChangeSort} />
                </Box>
            </Box>

            <TabPanels>
                <TabPanel maxW={'860px'} m={'0 auto'} pb={0}>
                    {tab === 'investmentDisclosure' && (
                        <InvestmentDisclosure
                            {...{
                                keyword,
                                page,
                                handleSearch,
                                listLink,
                                category,
                                handleChangeCategory,
                                sort,
                                handleChangeSort,
                            }}
                        />
                    )}
                    {tab === 'companyDisclosure' && (
                        <ManagementDisclosure
                            {...{
                                keyword,
                                page,
                                handleSearch,
                                listLink,
                                category,
                                handleChangeCategory,
                                sort,
                                handleChangeSort,
                            }}
                        />
                    )}
                </TabPanel>
                {/* <TabPanel>투자 공시 UI 와 동일합니다.</TabPanel> */}
            </TabPanels>

            {/* TODO : 게시글 없을때 */}
            {/* <NoList label={'등록된 게시물이 없어요'} btnLabel={'목록으로'} /> */}
        </Tabs>
    );
};

export default Disclosure;
