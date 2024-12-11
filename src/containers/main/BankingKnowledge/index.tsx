import 'aos/dist/aos.css';

import { Box, Grid, Text } from '@chakra-ui/react';

import AOS from 'aos';
import MagazineItem from '@/components/MagazineItem';
import { T_Magazine } from '@/generated/graphql';
import { magazineItemData } from '@/components/MagazineList/data';
import { useEffect } from 'react';

interface BankingKnowledgeProps {
    magazines: any;
}
const BankingKnowledge = ({ magazines }: BankingKnowledgeProps) => {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Box p={['40px 0', '120px 0']} data-aos="fade-up" data-aos-duration="2000">
            <Text
                fontSize={[22, 48]}
                color="#131313"
                fontWeight={['600', '700']}
                letterSpacing="-0.84px"
                lineHeight={['28px', '64px']}
                marginBottom={['20px', '40px']}
            >
                투자에 도움되는
                <br />
                금융지식 A to Z
            </Text>
            <Grid
                templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
                gap={['48px 12px', '80px 20px']}
            >
                {magazines?.map((item: T_Magazine, index: number) => (
                    <MagazineItem data={item} key={item?.magazine_id} />
                ))}
                {/* {magazineItemData?.map((item: any, index: number) => (
                    <MagazineItem data={item} key={item?.magazine_id} />
                ))} */}
            </Grid>
        </Box>
    );
};

export default BankingKnowledge;
