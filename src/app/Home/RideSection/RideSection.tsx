import React from 'react'
import Button from '../../../../components/Button/Button'
import RiderProApp from '../../../../public/Assets/home/Simplify-your-Ride-with-Rider-Pro.webp'
import Image from 'next/image'
import AppStoreIMG from '../../../../public/Assets/icons/App Store.svg'
import PlayStoreIMG from '../../../../public/Assets/icons/Play Store.svg'
import CircleIcon from '../../../../public/Assets/icons/Blue-Circle.svg'

const RideSection = () => {
    return (
        <div className="w-full flex justify-center md:h-[100vh] h-[70vh] md:items-center md:px-10 px-5 py-10" data-aos-desktop="fade-left" data-aos-mobile="fade-up"
        style={{
            backgroundImage: `url(${RiderProApp.src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'bottom right',
            backgroundRepeat: 'no-repeat',            
        }}
        >
            <div className='w-lg flex justify-between'>
                <div className="md:w-[40%] md:text-left text-center" data-aos-desktop="fade-right" data-aos-mobile="fade-up">
                    <h2 className='text-black-100 heading2 '>Simplify Your Ride with <span className='text-blue-400'>Rider Pro</span></h2>
                    <p className='md:mt-5 mt-2'>Connect to nearby mechanics, access charging stations, manage warranties, and earn cashback points—all in one app</p>
                    <div className='md:mt-5 mt-2 md:ml-[-15px] ml-[6vh] md:hidden'>
                        <Button
                            iconName="arrow-right"
                            iconColor="#6350DB"
                            buttonText="Available on Playstore & Appstore"
                            bgColor="transparent"
                            hoverBgColor="transparent"
                            textColor="#6350DB"
                            order='order-last'
                            link='https://play.google.com/store/apps/details?id=rider.pro&hl=en'
                        />
                    </div>
                    <div className="md:flex hidden md:gap-10 gap-5 md:mt-5 mt-2">
                        <a href='https://apps.apple.com/us/app/rider-pro/id6476922000'><Image className='w-20 md:w-[25vh]' src={AppStoreIMG} alt='RiderPro AppStore'/></a>
                        <a href='https://play.google.com/store/apps/details?id=rider.pro&hl=en'><Image className='w-20 md:w-[25vh]' src={PlayStoreIMG} alt='RiderPro PlayStore'/></a>
                    </div>
                </div>
                {/* <div className="w-[70%]">
                    <Image src={CircleIcon} alt='Simplify Your Ride with Rider Pro'/>
                </div> */}
            </div>
        </div>
    )
}

export default RideSection