import React, { ReactNode, Suspense } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/footer';
import { useLocalStorageData } from '../../../utils/hooks/getLocalStorageData';
import { LayoutCmsConfig } from './utils/layout.interface';
import { ReactComponentConfig } from '@/pages/api/customCms/database/utils.interface';

interface LayOutDataProps {
    children: ReactNode | null;
}

export const Layout: React.FC<LayOutDataProps> = ({ children }) => {

    const [layout] = useLocalStorageData<LayoutCmsConfig>("cmsData", "layout");

    return (
        <>
            {
                layout ? (
                    <>
                    <Suspense fallback={<div>loading</div>}>
                        <Header header={layout.header} />
                        <main className="PAGE-WRAPER">
                            {children}
                        </main>
                        <Footer footer={layout.footer} />
                    </Suspense>
                    </>
                ) : null
            }
        </>
    )
}
