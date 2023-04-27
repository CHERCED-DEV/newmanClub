import Image from 'next/image';
import styles from "./utils/header.module.scss";
import React from 'react';
import { HeaderDataProps } from './utils/header.interface';
import { MenuMobile } from './mobile-menu/MenuMobile';

export const Header: React.FC<HeaderDataProps> = ({ header }) => {
    return (
        <>
            <MenuMobile header={header} />
            <header className={styles.header}>
                <div className={styles.headerContainer}>
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
                                    <li key={option.label} className={styles.headerNavItem}><a href={option.link}>{option.label}</a></li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className={styles.headerAbout}>
                        <label className={styles.headerLabel}>{header.about.church_name}</label>
                        <section className={styles.headerImages}>
                            {
                                header.about.social_Logo.map((media) => (
                                    <Image
                                        key={media.src}
                                        className={styles.headerImag}
                                        src={media.src}
                                        alt={media.alt}
                                        fill={media.fill}
                                        width={media.width}
                                        height={media.height}
                                    />
                                ))
                            }
                        </section>
                    </div>
                    <div className={styles.headerButtonMob}>
                            <Image
                                className={styles.headerMenuIcon}
                                src={header.mobile_icon.src}
                                alt={header.mobile_icon.alt}
                                width={header.mobile_icon.width}
                                height={header.mobile_icon.height}
                            />
                        </div>
                </div>
            </header>
        </>
    )
}
