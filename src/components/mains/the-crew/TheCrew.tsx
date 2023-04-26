import React from 'react'
import Image from 'next/image'
import { TheCrewDataProps } from './utils/thecrew.interface'
import { GroupOptionsCrew } from './utils/GroupOptionsCrew'

export const TheCrew: React.FC<TheCrewDataProps> = ({ the_crew }) => {
    return (
        <>
            <main className='the-crew'>
                <section className='the-crew__intro'>
                    <h2 className='the-crew__title'>{the_crew.title}</h2>
                    {
                        the_crew.description.map((dest) => (
                            <p key={dest} className='the-crew__description'>{dest}</p>
                        ))
                    }
                    <button className='the-crew__cta'>{the_crew.button}</button>
                </section>
                <section className='the-crew__photo'>
                    <div className='the-crew__photo-container'>
                        <Image
                            src={the_crew.crew_img.src}
                            alt={the_crew.crew_img.alt}
                            width={the_crew.crew_img.width}
                            height={the_crew.crew_img.height}
                        />
                    </div>
                </section>
            </main>
            {
                the_crew.group_options.map((group) => (
                    <GroupOptionsCrew key={group.img.src} group_options={group} />
                ))
            }
            
        </>
    )
}

