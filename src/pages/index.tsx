import Head from 'next/head'
import { lazy, useCallback, useEffect, useState } from 'react';
import { CmsDataConfig } from './api/customCms/database/utils.interface';
import { getCMSData } from '../../utils/handlers/requests';
import { Welcome } from '@/components/mains/welcome/Welcome';
import { WelcomeDataProps, WelcomeConfig } from '@/components/mains/welcome/utils/welcome.interface';
import { GroupOptionsConfig, GroupOptionsDataProps } from '@/components/mains/group-options/utils/groupoptions.interface';


const GroupOptions = lazy(() => import('@/components/mains/group-options/GroupOptions'));
const TheCrew = lazy(() => import('@/components/mains/the-crew/TheCrew'));
const Memories = lazy(() => import('@/components/mains/group-options/Memories'));
const Soundtrack = lazy(() => import('@/components/mains/soundtrack/Soundtrack'));
const JoinUsNewMan = lazy(() => import('@/components/mains/join-us-newman/JoinUsNewMan'));

interface EventsDataProps {
    events: GroupOptionsConfig;
}

interface WhatsNewsDataProps {
    whats_news: GroupOptionsConfig;
}

export default function Home({ cmsData }: { cmsData: CmsDataConfig }) {
    const [welcomeData, setWelcomeData] = useState<WelcomeConfig>();
    const [eventsData, setEventsData] = useState<GroupOptionsConfig>();
    const [whatsNewsData, setWhatsNewsData] = useState<GroupOptionsConfig>();

    const hybridVideoData = useCallback(async (): Promise<void> => {
        try {
            const res = await fetch("/api/customCms");
            if (!res.ok) {
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            }
            const data: CmsDataConfig = await res.json();
            const { welcome }: WelcomeDataProps = data;
            setWelcomeData(welcome);
            const { events }: EventsDataProps = data;
            setEventsData(events)
            const { whats_news }: WhatsNewsDataProps = data;
            setWhatsNewsData(whats_news)
        } catch (error: unknown) {
            console.error((error as Error).message);
        }
    }, [])

    useEffect(() => {
        hybridVideoData()
    }, [hybridVideoData])


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
                    {
                        welcomeData ? (<Welcome welcome={welcomeData} />) : (<Welcome welcome={cmsData.welcome} />)
                    }
                    {
                        cmsData.events ? (<GroupOptions key={cmsData.events.invite} gData={cmsData.events} />) : (<>{eventsData && (<GroupOptions key={eventsData.invite} gData={eventsData} />)}</>)
                    }
                    <TheCrew the_crew={cmsData.the_crew} />
                    {
                        cmsData.whats_news ? (<GroupOptions key={cmsData.whats_news.description} gData={cmsData.whats_news} />) : (<>{whatsNewsData && (<GroupOptions key={whatsNewsData.description} gData={whatsNewsData} />)}</>)
                    }
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
