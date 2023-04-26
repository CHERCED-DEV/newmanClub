import Image from 'next/image'
import React from 'react'
import { JoinUsDataConfig } from './welcome.interface'

export const JoinUs: React.FC<JoinUsDataConfig> = ({ join_us }) => {
    return (
        <section className="join-us">
            <div className="join-us__image">
                <Image
                    src={join_us.message.src}
                    alt={join_us.message.alt}
                    width={join_us.message.width}
                    height={join_us.message.height}
                />
            </div>
            <div className="join-us__content">
                <div className="join-us__logo">
                    <Image
                        src={join_us.action.img.src}
                        alt={join_us.action.img.alt}
                        width={join_us.action.img.width}
                        height={join_us.action.img.height}
                    />
                </div>
                <span className="join-us__text">{join_us.action.span}</span>
            </div>
        </section>
    )
}

