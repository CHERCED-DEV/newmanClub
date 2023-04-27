import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GroupOptionsConfig, GroupOptionsDataProps } from './utils/groupoptions.interface'
import { CardGroup } from './utils/CardGroup';

export const GroupOptions: React.FC<GroupOptionsDataProps> = ({ gData }) => {
    const [type, setType] = useState<boolean>(true);
    const [groupDataHandler, setGroupDataHandler] = useState<GroupOptionsConfig>()
    console.log(gData)

    useEffect(() => {
        const typeValidator = () => {
            if ((gData.invite !== undefined)) {
                // CardsEventsConfig
                setGroupDataHandler(gData);
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
                            <ul className={type ? ("events__list") : ("whatsNews__list")}>
                                {
                                    type ? (
                                        <>
                                            {
                                                groupDataHandler?.cards?.map((card) => (
                                                    <CardGroup
                                                        key={card.background_img.src}
                                                        card={card}
                                                    />
                                                ))
                                            }
                                        </>
                                    ) : (
                                        <>
                                            {
                                                groupDataHandler?.cards?.map((card) => (
                                                    <CardGroup
                                                        key={card.background_img.src}
                                                        card={card}
                                                    />
                                                ))
                                            }
                                        </>
                                    )
                                }
                            </ul>
                            <footer className={type ? ("events__footer") : ("whatsNews__footer")}>
                                <button className={type ? ("events__footer-button") : ("whatsNews__footer-button")}>{groupDataHandler?.button}</button>
                                {
                                    type ? (<p className='events__footer-description'>{groupDataHandler?.description}</p>) : (null)
                                }
                            </footer>
                        </section>
                    </>
                )
            }
        </>
    )
}