import Image from 'next/image';
import React, { memo } from 'react';
import { CardDataProps, CardsEventsConfig, CardsNewsConfig } from './groupoptions.interface';


const CardGroup: React.FC<CardDataProps> = ({ card }) => {
    if ('title' in card) {
        const eventCard = card as CardsEventsConfig;
        return (
            <article className='card-event'>
                <Image
                    className='card-pic-event'
                    src={eventCard.background_img.src}
                    alt={eventCard.background_img.alt}
                    width={eventCard.background_img.width}
                    height={eventCard.background_img.height}
                />
                <section className='card__info-container-event'>
                    <label className='card__info-title-event'>{eventCard.title}</label>
                    <div className='card__info-vertical-line-event'></div>
                    <span className='card__info-date-event'>
                        <p className='card__info-day-event'>{eventCard.day}</p>
                        <p className='card__info-month-event'>{eventCard.month}</p>
                    </span>
                </section>
            </article>
        );
    } else {
        const newsCard = card as CardsNewsConfig;
        return (
            <article className='card'>
                <section className='card__news-date'>
                    <span className='card__news-day'>{newsCard.date.day}</span>
                    <div className='card__news-gtm'>
                        <span className='card__news-month'>{newsCard.date.month}</span>
                        <span className='card__news-year'>{newsCard.date.year}</span>
                    </div>
                </section>
                <Image
                    className='card-pic'
                    src={newsCard.background_img.src}
                    alt={newsCard.background_img.alt}
                    width={newsCard.background_img.width}
                    height={newsCard.background_img.height}
                />
                <section className='card__news-blog'>
                    <p className='card__news-author'>{newsCard.blog.author}</p>
                    <span className='card__news-title'>{newsCard.blog.title}</span>
                    <p className='card__news-description'>{newsCard.blog.description}</p>
                    <button className='card__news-button'>{newsCard.blog.botton}</button>
                </section>
            </article>
        );
    }
};

export default memo(CardGroup);