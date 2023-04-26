import Image from 'next/image';
import React from 'react';
import { NewManDataProps } from './utils/NewManRM.interface';
import styles from '../../footer.module.scss';

const NewManRemaindMe: React.FC<NewManDataProps> = ({newmanRM}) => {
    return (
        <section className={styles.footerNewManRm}>
            <div className={styles.footerNewManImg}>
                <Image
                    src={newmanRM.brand_logo.src}
                    alt={newmanRM.brand_logo.alt}
                    fill={newmanRM.brand_logo.fill}
                    width={newmanRM.brand_logo.width}
                    height={newmanRM.brand_logo.height}
                />
            </div>
            <p className={styles.footerNewManDescription}>{newmanRM.description}</p>
        </section>
    )
}


export default NewManRemaindMe;