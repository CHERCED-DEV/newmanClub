import Image from 'next/image'
import React from 'react'
import { SoundtrackDataProps } from './utils/soundtrack.interface'

export const Soundtrack: React.FC<SoundtrackDataProps> = ({ soundtrack }) => {
    return (
        <article className='soundtrack'>
            <section className='soundtrack__banner'>
                <Image
                    src={soundtrack.man.src}
                    alt={soundtrack.man.alt}
                    width={soundtrack.man.width}
                    height={soundtrack.man.height}
                />
                <h3 className='soundtrack__title'>{soundtrack.title}</h3>
            </section>
            <Image
                src={soundtrack.music_list.src}
                alt={soundtrack.music_list.alt}
                width={soundtrack.music_list.width}
                height={soundtrack.music_list.height}
            />
        </article>
    )
}
