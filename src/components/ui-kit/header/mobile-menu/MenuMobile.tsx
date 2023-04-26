import React from 'react'
import { HeaderDataProps } from '../utils/header.interface'
import Image from 'next/image'

export const MenuMobile: React.FC<HeaderDataProps> = ({header}) => {
  return (
    <nav className='menu-mobile'>
        <ul className='menu-mobile_list'>
            {
                header.options.map((option)=>(
                    <li key={option.label} className=""><a href={option.link}>{option.label}</a></li>
                ))
            }
        </ul>
        <Image
            src={header.menu_mobile.src}
            alt={header.menu_mobile.alt}
            width={header.menu_mobile.width}
            height={header.menu_mobile.height}
        />
    </nav>
  )
}
