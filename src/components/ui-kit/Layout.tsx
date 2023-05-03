import React, { ReactNode, Suspense, lazy, memo, useCallback, useEffect, useState } from 'react';
import { LayoutCmsConfig } from './utils/layout.interface';

interface LayOutDataProps {
    children: ReactNode | null;
}

const StarterApp = lazy(() => import("./Spiners&Loaders/StarterApp"));
const NewmanLoader = lazy(() => import("./Spiners&Loaders/NewmanLoader"));
const Header = lazy(() => import("./header/Header"));
const Footer = lazy(() => import("./footer/footer"));

const Layout: React.FC<LayOutDataProps> = ({ children }) => {
    const [layoutData, setLayoutData] = useState<LayoutCmsConfig>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [initialStorageValue, setInitialStorageValue] = useState<boolean>(false);

    const getLayoutData = useCallback(async () => {
        const data = await fetch("/api/customCms");
        const res = await data.json();
        if (data !== null) {
            setLayoutData(res.layout)
        }
    }, [])

    useEffect(() => {
        getLayoutData();
    }, [getLayoutData])

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
            {!isLoading && (
                <>
                    <Suspense fallback={<NewmanLoader />}>
                        {
                            layoutData ? <Header header={layoutData.header} /> : null
                        }
                        <main className="PAGE-WRAPER">
                            {children}
                        </main>
                        {
                            layoutData ? <Footer footer={layoutData?.footer} /> : null
                        }
                    </Suspense>
                </>
            )
            }
        </>
    )
}

export default memo(Layout);
