import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GroupOptionsDataProps } from './utils/groupoptions.interface'
import { CardGroup } from './utils/CardGroup';

export const Events: React.FC<GroupOptionsDataProps> = ({ gData }) => {
    const [type, setType] = useState<boolean>(false);

    useEffect(() => {
        const typeValidator = () => {
            if (gData.description) {
                setType(true);
            } else {
                setType(false)
            }
        }

        typeValidator();
    }, [])

    return (
        <section className={type ? ("events") : ("whatsNews")}>
            <header className={type ? ("events__header") : ("whatsNews__header")}>
                <Image
                    src={gData.main_logo.src}
                    alt={gData.main_logo.alt}
                    width={gData.main_logo.width}
                    height={gData.main_logo.height}
                />
                <h1 className={type ? ("events__header-title") : ("whatsNews__header-title")}>{gData.title}</h1>
                {
                    type ? (null) : (<p className='whatsNews__header-description'>{gData.description}</p>)
                }
            </header>
            <ul className={type ? ("events__list") : ("whatsNews__list")}>
                {
                    gData.cards.map((card) => (
                        <CardGroup
                            key={card.background_img.src}
                            card={card}
                        />
                    ))

                }
            </ul>
            <footer className={type ? ("events__footer") : ("whatsNews__footer")}>
                <button className={type ? ("events__footer-button") : ("whatsNews__footer-button")}>{gData.button}</button>
                {
                    type ? (<p className='events__footer-description'>{gData.description}</p>) : (null)
                }
            </footer>
        </section>
    )
}
