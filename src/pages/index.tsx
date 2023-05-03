import Head from 'next/head'
import { CmsDataConfig } from './api/customCms/database/utils.interface';
import { GetServerSideProps } from 'next';
import { lazy } from 'react';
import { getCMSData } from '../../utils/handlers/requests';
import { Welcome } from '@/components/mains/welcome/Welcome';

const GroupOptions = lazy(() => import('@/components/mains/group-options/GroupOptions'));
const TheCrew = lazy(() => import('@/components/mains/the-crew/TheCrew'));
const Memories = lazy(() => import('@/components/mains/group-options/Memories'));
const Soundtrack = lazy(() => import('@/components/mains/soundtrack/Soundtrack'));
const JoinUsNewMan = lazy(() => import('@/components/mains/join-us-newman/JoinUsNewMan'));

export default function Home({ cmsData }: { cmsData: CmsDataConfig }) {
    if (cmsData) {
        return (
            <>
                <Head>
                    <title>New man | Catholic Org</title>
                    <meta name="description" content=
                        "Catholic organization Newman fosters faith and knowledge among students and professionals through cultural, social, and spiritual activities." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/assets/logos/church-logo.svg" />
                </Head>
                <>
                    <Welcome welcome={cmsData.welcome} />
                    <GroupOptions key={cmsData.events.invite} gData={cmsData.events} />
                    <TheCrew the_crew={cmsData.the_crew} />
                    <GroupOptions key={cmsData.whats_news.description} gData={cmsData.whats_news} />
                    <Memories memories={cmsData.memories} />
                    <Soundtrack soundtrack={cmsData.soundtrack} />
                    <JoinUsNewMan join_us={cmsData?.join_us} />
                </>
            </>
        )
    }
}


export async function getServerSideProps() {
    const res = await getCMSData();
    return {
        props: {
            cmsData: res,
        },
    };
};
