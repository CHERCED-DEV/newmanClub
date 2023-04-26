import React, { lazy } from 'react';
import styles from './utils/footer.module.scss';
import { footerDataProps } from './utils/footer.interface';

const NewManRemaindMe = lazy(() => import('./utils/sections/newman-remaindme/NewManRemaindMe'));
const ContactMe = lazy(() => import('./utils/sections/contact-me/ContactMe'));
const NewsLetter = lazy(() => import('./utils/sections/news-letter/NewsLetter'));
const CopyRigth = lazy(() => import('./utils/sections/copyrigth/CopyRigth'));

export const Footer: React.FC<footerDataProps> = ({ footer }) => {
    return (
        <footer className={styles.footer}>
            <React.Suspense fallback={<div>Loading...</div>}>
                <NewManRemaindMe newmanRM={footer.newmanRm} />
                <ContactMe contactMe={footer.contactMe} />
                <NewsLetter newsletter={footer.newsletter} />
                <CopyRigth copyRight={footer.copyRight} />
            </React.Suspense>
        </footer>
    );
};

