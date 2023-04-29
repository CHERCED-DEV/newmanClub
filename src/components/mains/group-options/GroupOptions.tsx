import Image from 'next/image';
import React, { lazy, memo, useEffect, useState } from 'react';
import { GroupOptionsConfig, GroupOptionsDataProps } from './utils/groupoptions.interface';

const CardGroup = lazy(() => import('./utils/CardGroup'));

const GroupOptions: React.FC<GroupOptionsDataProps> = ({ gData }) => {
    const [type, setType] = useState<boolean>();
    const [groupDataHandler, setGroupDataHandler] = useState<GroupOptionsConfig>()

    useEffect(() => {
        const typeValidator = () => {
            if ((gData.title === 'Events')) {
                // CardsEventsConfig
                setGroupDataHandler(gData);
                setType(true);
            } else {
                // CardsNewsConfig
                setGroupDataHandler(gData);
                setType(false);
            }
        };
        typeValidator();
    }, [gData]);

    return (
        <>
            {
                groupDataHandler && (
                    <>
                        <section className={type ? ("events") : ("whatsNews")}>
                            <header className={type ? ("events__header") : ("whatsNews__header")}>
                                <Image
                                    src={groupDataHandler.main_logo.src}
                                    alt={groupDataHandler.main_logo.alt}
                                    width={groupDataHandler.main_logo.width}
                                    height={groupDataHandler.main_logo.height}
                                />
                                <h1 className={type ? ("events__header-title") : ("whatsNews__header-title")}>{groupDataHandler?.title}</h1>
                                {
                                    type ? (null) : (<p className='whatsNews__header-description'>{groupDataHandler?.description}</p>)
                                }
                            </header>
                            <>
                                {
                                    type ? (
                                        <ul className="events__list">
                                            {
                                                groupDataHandler?.cards?.map((card, index: number) => (
                                                    <li key={index.toString() + "jkl"} className='events__item'>
                                                        <CardGroup
                                                            card={card}
                                                        />
                                                    </li>
                                                ))

                                            }
                                        </ul>
                                    ) : (
                                        <ul className="whatsNews__list">
                                            {
                                                groupDataHandler?.cards?.map((card) => (
                                                    <li key={card.background_img.src} className='whatsNews__item'>
                                                        <CardGroup
                                                            card={card}
                                                        />
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </>
                            <footer className={type ? ("events__footer") : ("whatsNews__footer")}>
                                {
                                    type ? (<p className='events__footer-description'>{groupDataHandler?.description}</p>) : (null)
                                }
                                <button className={type ? ("events__footer-button") : ("whatsNews__footer-button")}>{groupDataHandler?.button}</button>
                            </footer>
                        </section>
                    </>
                )
            }
        </>
    )
}

export default memo(GroupOptions);
