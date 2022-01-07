import Image from 'next/image'
import React from 'react'

const Ads = () => {
    return (
        <div className='h-[250px] w-[300px]'>
            <div className="h-full w-full relative">
                <Image src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec300c.jpg" layout='fill' objectFit='fill'/>
            </div>
        </div>
    )
}

export default Ads
