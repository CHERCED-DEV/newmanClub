import React, { memo } from 'react'
import { MemoriesDataProps } from './utils/groupoptions.interface'
import Image from 'next/image'

const Memories: React.FC<MemoriesDataProps> = ({ memories }) => {
    return (
        <>
            <section className='memories'>
                <header className='memories__header'>
                    {
                        memories.main_logo.src && (
                            <Image
                                src={memories.main_logo.src}
                                alt={memories.main_logo.alt}
                                width={memories.main_logo.width}
                                height={memories.main_logo.height}
                            />
                        )
                    }
                    <h2 className='memories__header-title'>{memories.title}</h2>
                </header>
                <ul className='memories__list'>
                    {
                        memories.cards?.map((card) => (
                            <li key={card.src} className="memories__item">
                                {
                                    card.src && (
                                        <Image
                                            src={card.src}
                                            alt={card.alt}
                                            width={card.width}
                                            height={card.height}
                                        />
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
                <footer className="memories__footer">
                    <button className="memories__button">{memories.button}</button>
                </footer>
            </section>
        </>

    )
}

export default memo(Memories)