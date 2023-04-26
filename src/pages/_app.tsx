import type { AppProps } from 'next/app'
import "../sass/styles.scss"
import { Layout } from '@/components/ui-kit/Layout'
import { useCallback, useEffect } from 'react';
import { getCMSData } from '../../utils/handlers/requests';

export default function App({ Component, pageProps }: AppProps) {

    const storageConstructor = useCallback(async () => {
        const CmsData = await getCMSData();
        window.localStorage.setItem("cmsData", JSON.stringify(CmsData));
    }, []);

    useEffect(() => {
        storageConstructor()

    }, [])

    return (
        <Layout>
            <Component {...pageProps as any} />
        </Layout>
    )
}
