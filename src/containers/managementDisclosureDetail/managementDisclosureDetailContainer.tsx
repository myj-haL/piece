import Head from 'next/head';
import Loading from '../../components/Loading';
import MainLayout from '../../components/@Layout/MainLayout';
import ManagementDisclosureDetail from './managementDisclosureDetail';
import React from 'react';
import { useBoardQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';

// import { useFetchBoardDetail } from '../../hooks/useFetchBoard';

// 공지사항 디테일
const ManagementDisclosureDetailContainer = () => {
    const router = useRouter();
    const { slug } = router.query as { slug: string };
    const type = router.pathname.includes('investmentDisclosure') ? 'investmentDisclosure' : 'managementDisclosure';

    const { data, error, loading, fetchMore, variables } = useBoardQuery({
        variables: {
            boardId: slug,
        },
        notifyOnNetworkStatusChange: true,
    });

    if (!data) return null;

    return (
        <>
            <Head>
                <title>{data?.board?.board?.title} - PIECE</title>
            </Head>
            <MainLayout>
                {!loading && data ? (
                    <ManagementDisclosureDetail detail={data?.board?.board} type={type} />
                ) : (
                    <Loading />
                )}
            </MainLayout>
        </>
    );
};

export default ManagementDisclosureDetailContainer;
