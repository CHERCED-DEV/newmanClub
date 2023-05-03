import Image from 'next/image'
import React, { memo, useState } from 'react'
import { JoinUsDataConfig } from './welcome.interface'

const JoinUs: React.FC<JoinUsDataConfig> = ({ join_us }) => {
    const [buttonToggle, setButtonToggle] = useState<boolean>(false)
    return (
        <section className="join-us-v">
            <div className="join-us__image-v">
                {
                    join_us.message.src && (
                        <Image
                            src={join_us.message.src}
                            alt={join_us.message.alt}
                            width={join_us.message.width}
                            height={join_us.message.height}
                        />
                    )
                }
            </div>
            <button onClick={() => { setButtonToggle(!buttonToggle) }} className="join-us__content-v">
                <div className={+ buttonToggle ? ("join-us__logo-v on") : ("join-us__logo-v")} >
                    {
                        join_us.action.img.src && (
                            <Image
                                className={+ buttonToggle ? ("join-us__img-v on") : ("join-us__img-v")}
                                src={join_us.action.img.src}
                                alt={join_us.action.img.alt}
                                width={join_us.action.img.width}
                                height={join_us.action.img.height}
                            />
                        )
                    }
                </div>
                <span className="join-us__text-v">{buttonToggle ? ("Yay!") : (join_us.action.span)} </span>
            </button>
        </section>
    )
}

export default memo(JoinUs);