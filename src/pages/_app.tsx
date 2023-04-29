import type { AppProps } from 'next/app'
import "../sass/styles.scss"
import { lazy, useEffect } from 'react';
import { getCMSData } from '../../utils/handlers/requests';

const Layout = lazy(() => import("../components/ui-kit/Layout"));

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        (async () => {
            const CmsData = await getCMSData();
            window.localStorage.setItem("cmsData", JSON.stringify(CmsData));
        })
    }, [])

    return (
        <Layout>
            <Component {...pageProps as any} />
        </Layout>
    )
}
