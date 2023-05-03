import React from 'react';
import Image from 'next/image';
import { HeaderDataProps } from '../utils/header.interface';
import styles from '../utils/header.module.scss';

interface MenuMobileDataProps extends HeaderDataProps {
    handleEvent: () => void
    handleSubMenu: boolean;
}

export const MenuMobile: React.FC<MenuMobileDataProps> = ({ header, handleEvent, handleSubMenu }) => {
    return (
        <nav className={`${styles.menuMobile} ${handleSubMenu ? styles.on : styles.off}`}>
            <button onClick={handleEvent} className=''>X</button>
            <ul className={styles.menuMobileList}>
                {
                    header.options.map((option) => (
                        <li key={option.label} className={styles.menuMobileItem}><a href={option.link}>{option.label}</a></li>
                    ))
                }
            </ul>
            {
                header.menu_mobile.src && (
                    <Image
                        className={styles.menuMobileLogo}
                        src={header.menu_mobile.src}
                        alt={header.menu_mobile.alt}
                        width={header.menu_mobile.width}
                        height={header.menu_mobile.height}
                    />
                )
            }
        </nav>
    )
}
