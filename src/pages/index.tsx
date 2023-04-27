import Head from 'next/head'
import { CmsDataConfig } from './api/customCms/database/utils.interface';
import { GetServerSideProps } from 'next';
import { lazy } from 'react';
import { GroupOptions } from '@/components/mains/group-options/GroupOptions';
import { TheCrew } from '@/components/mains/the-crew/TheCrew';
import { Welcome } from '@/components/mains/welcome/Welcome';


const Memories = lazy(() => import('@/components/mains/group-options/Memories'));
const Soundtrack = lazy(() => import('@/components/mains/soundtrack/Soundtrack'));
const JoinUsNewMan = lazy(() => import('@/components/mains/join-us-newman/JoinUsNewMan'));

export default function Home({ cmsData }: { cmsData: CmsDataConfig }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Welcome welcome={cmsData.welcome}/> */}
            {/* <GroupOptions gData={cmsData.events}/> */}
            <TheCrew the_crew={cmsData.the_crew}/>
            <GroupOptions gData={cmsData.whats_news} />
            <Memories memories={cmsData.memories} />
            <Soundtrack soundtrack={cmsData.soundtrack} />
            <JoinUsNewMan join_us={cmsData?.join_us} />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${process.env.VERCEL_URL_CORS}/api/customCms`);
    const data = await res.json();
    return {
        props: {
            cmsData: data,
        },
    };
};
