import React, { ReactNode, Suspense, lazy, memo, useEffect, useState } from 'react';
import { useLocalStorageData } from '../../../utils/hooks/getLocalStorageData';
import { LayoutCmsConfig } from './utils/layout.interface';

interface LayOutDataProps {
    children: ReactNode | null;
}

const StarterApp = lazy(() => import("./Spiners&Loaders/StarterApp"));
const NewmanLoader = lazy(() => import("./Spiners&Loaders/NewmanLoader"));
const Header = lazy(() => import("./header/Header"));
const Footer = lazy(() => import("./footer/footer"));

const Layout: React.FC<LayOutDataProps> = ({ children }) => {

    const [layout] = useLocalStorageData<LayoutCmsConfig>("cmsData", "layout");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [initialStorageValue, setInitialStorageValue] = useState<boolean>(false);

    useEffect(() => {
        const storedValue = window.sessionStorage.getItem('isLoading');
        if (storedValue !== null) {
            setIsLoading(storedValue === 'true');
        } else {
            setIsLoading(true);
        }
        setInitialStorageValue(true);
    }, []);

    useEffect(() => {
        function handlePageLoad() {
            if (sessionStorage.getItem('isLoading') === 'false') {
                console.log("Welcome to Cherced World")
            } else {
                const timerId = setTimeout(() => {
                    sessionStorage.setItem('isLoading', 'false');
                    setIsLoading(false);
                }, 4500);
                return () => {
                    clearTimeout(timerId);
                };
            }
        }

        handlePageLoad();

    }, []);

    return (
        <>
            {initialStorageValue && isLoading && <StarterApp />}
            {!isLoading && layout && (
                <>
                    <Suspense fallback={<NewmanLoader />}>
                        <Header header={layout.header} />
                        <main className="PAGE-WRAPER">
                            {children}
                        </main>
                        <Footer footer={layout.footer} />
                    </Suspense>
                </>
            )
            }
        </>
    )
}

export default memo(Layout);
