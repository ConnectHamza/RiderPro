import Image from 'next/image'
import React from 'react'
import Android from '../../../../public/Assets/icons/Play Store.svg'
import IOS from '../../../../public/Assets/icons/App Store.svg'

const CallToAction = () => {
  return (
    <div className='w-full bg-blue-200 flex justify-center py-10 md:py-20 md:px-10 px-5'>
        <div className="w-lg text-white text-center flex flex-col items-center gap-5">
            <h2 className='heading2' data-aos-desktop="fade-up" data-aos-mobile="fade-in">Ready to Elevate Your Biking Experience?</h2>
            <p data-aos-desktop="fade-up" data-aos-mobile="fade-in">Discover the convenience, savings, and community that Rider Pro offers. Join thousands of bikers who rely on us for a seamless journey.</p>
            <div className='flex gap-5 flex-col md:flex-row ' >
            <a href='https://apps.apple.com/us/app/rider-pro/id6476922000'><Image src={IOS} alt='IOS' data-aos-desktop="fade-right" data-aos-mobile="fade-up"/>  </a>
            <a href='https://play.google.com/store/apps/details?id=rider.pro&hl=en'><Image src={Android} alt='Android' data-aos-desktop="fade-left" data-aos-mobile="fade-up"/></a>        
            </div>
        </div>
    </div>
  )
}

export default CallToAction