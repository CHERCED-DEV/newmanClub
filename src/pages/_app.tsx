import type { AppProps } from 'next/app'
import "../sass/styles.scss"
import { lazy, useCallback, useEffect } from 'react';
import { getCMSData } from '../../utils/handlers/requests';

const Layout = lazy(() => import("../components/ui-kit/Layout"));

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps as any} />
        </Layout>
    )
}
