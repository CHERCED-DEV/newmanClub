import Image from 'next/image';
import styles from "./utils/header.module.scss";
import React from 'react';
import { HeaderDataProps } from './utils/header.interface';

export const Header: React.FC<HeaderDataProps> = ({header}) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <Image
                    className={styles.headerLogoImage}
                    src={header.newman_logo.src}
                    alt={header.newman_logo.alt}
                    fill={header.newman_logo.fill}
                    width={header.newman_logo.width}
                    height={header.newman_logo.height}
                />
            </div>
            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    {
                        header.options.map((option) => (
                            <li key={option} className={styles.headerNavItem}>{option}</li>
                        ))
                    }
                </ul>
            </nav>
            <div className={styles.headerAbout}>
                <label className={styles.headerLabel}>{header.about.church_name}</label>
                <section className={styles.headerImages}>
                    {
                        header.about ? (<>
                        <Image
                        className={styles.headerImag}
                        src={header.about.social_one.src}
                        alt={header.about.social_one.alt}
                        fill={header.about.social_one.fill}
                        width={header.about.social_one.width}
                        height={header.about.social_one.height}
                    />
                    <Image
                        className={styles.headerImag}
                        src={header.about.social_two.src}
                        alt={header.about.social_two.alt}
                        fill={header.about.social_two.fill}
                        width={header.about.social_two.width}
                        height={header.about.social_two.height}
                    />
                        </>) : (null)
                    }
                </section>
            </div>
        </header>
    )
}
