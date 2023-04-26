import Image from 'next/image';
import React from 'react';
import { CardDataProps, CardsEventsConfig, CardsNewsConfig } from './groupoptions.interface';


export const CardGroup: React.FC<CardDataProps> = ({ card }) => {
    if ('title' in card) {
        const eventCard = card as CardsEventsConfig;
        return (
            <article className='card'>
                <Image
                    src={eventCard.background_img.src}
                    alt={eventCard.background_img.alt}
                    width={eventCard.background_img.width}
                    height={eventCard.background_img.height}
                />
                <section className='card__info-container'>
                    <label className='card__info-title'>{eventCard.title}</label>
                    <div className='card__info-vertical-line'></div>
                    <span className='card__info-date'>
                        <p className='card__info-day'>{eventCard.day}</p>
                        <p className='card__info-month'>{eventCard.month}</p>
                    </span>
                </section>
            </article>
        );
    } else {
        const newsCard = card as CardsNewsConfig;
        return (
            <article className='card'>
                <Image
                    src={newsCard.background_img.src}
                    alt={newsCard.background_img.alt}
                    width={newsCard.background_img.width}
                    height={newsCard.background_img.height}
                />
                <div className='card__info-container'>
                    <section className='card__news-date'>
                        <span className='card__news-day'>{ }</span>
                        <div className='card__news-gtm'>
                            <span className='card__news-month'>{ }</span>
                            <span className='card__news-year'>{ }</span>
                        </div>
                    </section>
                    <section className='card__news-blog'>
                        <p className='card__news-author'>{ }</p>
                        <span className='card__news-title'>{ }</span>
                        <p className='card__news-description'>{ }</p>
                        <button className='card__news-button'>{ }</button>
                    </section>
                </div>
            </article>
        );
    }
};
