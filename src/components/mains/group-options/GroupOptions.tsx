import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GroupOptionsConfig, GroupOptionsDataProps, MemoriesConfig } from './utils/groupoptions.interface'
import { CardGroup } from './utils/CardGroup';

export const GroupOptions: React.FC<GroupOptionsDataProps> = ({ gData }) => {
    const [type, setType] = useState<boolean>(false);
    const [isMemories, setIsMemories] = useState<boolean>(true);
    const [groupDataHandler, setGroupDataHandler] = useState<GroupOptionsConfig>()
    const [memoriesData, setMemoriesData] = useState<MemoriesConfig>()
    console.log(gData)

    useEffect(() => {
        const typeValidator = () => {
          if (!gData.hasOwnProperty('basic_cards')) {
            setIsMemories(false);
            const groupData = gData as MemoriesConfig;
            console.log("dentro del efecto" + groupData)
            setMemoriesData(groupData);
            console.log("dentro del efecto" + groupData.cards_events)
          } else if (!gData.hasOwnProperty('invite')) {
            setIsMemories(true);
            setType(true);
            const groupData = gData as GroupOptionsConfig;
            setGroupDataHandler(groupData);
          }
        }
      
        // Validar si la data de cards_events está presente en gData
        if (gData && gData.hasOwnProperty('cards_events')) {
          typeValidator();
        }
      }, [gData]);

    return (
        <>
            {
                isMemories ? (
                    <>
                        {
                            groupDataHandler && (
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
                                                        groupDataHandler?.cards_events?.map((card) => (
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
                                                        groupDataHandler?.cards_news?.map((card) => (
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
                            )
                        }
                    </>
                ) : (
                    <>
                        {
                            memoriesData && (
                                <section className='memories'>
                                    <header className='memories__header'>
                                        <Image
                                            src={memoriesData.main_logo.src}
                                            alt={memoriesData.main_logo.alt}
                                            width={memoriesData.main_logo.width}
                                            height={memoriesData.main_logo.height}
                                        />
                                    </header>
                                    <ul className='memories__list'>
                                        {
                                            memoriesData?.basic_cards?.map((card) => (
                                                <li key={card.src} className="memories__item">
                                                    <Image
                                                        src={card.src}
                                                        alt={card.alt}
                                                        width={card.width}
                                                        height={card.height}
                                                    />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <footer className="memories__footer">
                                        <button className="memories__button">{memoriesData.button}</button>
                                    </footer>
                                </section>
                            )
                        }
                    </>
                )
            }
        </>
    )
}
