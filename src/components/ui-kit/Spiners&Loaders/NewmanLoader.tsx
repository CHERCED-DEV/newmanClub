import Image from 'next/image'
import React from 'react'
import Logo from '../../../../public/assets/logos/newman-White.svg'

const NewmanLoader = () => {
  return (
    <div className='loader'>
        <Image
            className='loader__img'
            src={Logo}
            alt='newman'
            width={293}
            height={131}
            priority={true} 
            />
    </div>
  )
}

export default NewmanLoader;