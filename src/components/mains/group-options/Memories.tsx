import React from 'react'
import { MemoriesDataProps } from './utils/groupoptions.interface'
import Image from 'next/image'

const Memories: React.FC<MemoriesDataProps> = ({ memories }) => {
    return (
        <>
        <section className='memories'>
            <header className='memories__header'>
                <Image
                    src={memories.main_logo.src}
                    alt={memories.main_logo.alt}
                    width={memories.main_logo.width}
                    height={memories.main_logo.height}
                />
                <h2 className='memories__header-title'>{memories.title}</h2>
            </header>
            <ul className='memories__list'>
                <li className="memories__item">
                    {
                        memories.cards?.map((card) => (
                            <Image
                                key={card.src}
                                src={card.src}
                                alt={card.alt}
                                width={card.width}
                                height={card.height}
                            />

                        ))
                    }
                </li>
            </ul>
            <footer className="memories__footer">
                <button className="memories__button">{memories.button}</button>
            </footer>
        </section>
        </>
        
    )
}

export default React.memo(Memories)