import React, { memo } from 'react';
import Image from 'next/image';
import { SoundtrackDataProps } from './utils/soundtrack.interface';

const Soundtrack: React.FC<SoundtrackDataProps> = ({ soundtrack }) => {
    return (
        <article className='soundtrack'>
            <section className='soundtrack__banner'>
                {
                    soundtrack.music_list.src && (
                        <Image
                            className='soundtrack__pl-pic'
                            src={soundtrack.music_list.src}
                            alt={soundtrack.music_list.alt}
                            width={soundtrack.music_list.width}
                            height={soundtrack.music_list.height}
                        />
                    )
                }
                <div className='soundtrack__banner-img'>
                    {
                        soundtrack.man.src && (
                            <Image
                                className='soundtrack__banner-pic'
                                src={soundtrack.man.src}
                                alt={soundtrack.man.alt}
                                width={soundtrack.man.width}
                                height={soundtrack.man.height}
                            />
                        )
                    }
                    <div className='soundtrack__title-container'>
                    {
                        soundtrack.title.map((title) => (
                            <p key={title} className='soundtrack__title'>{title}</p>
                        ))
                    }
                </div>
                </div>
            </section>
        </article>
    );
}

export default memo(Soundtrack);

