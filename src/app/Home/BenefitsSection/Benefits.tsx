import React from 'react'
import GradientContainer from '../../../../components/GradientContainer/GradientContainer'
import MapIcon from '../../../../public/Assets/icons/Find-with-ease.svg'
import CashIcon from '../../../../public/Assets/icons/Save-big.svg'
import NutIcon from '../../../../public/Assets/icons/Ride-Confidently.svg'
import CommunityIcon from '../../../../public/Assets/icons/Join-the-community.svg'

const Benefits = () => {
    return (
        <div className="w-full flex justify-center md:px-10 px-5 py-10">
            <div className="w-lg">
                <h2 className='heading2 text-black-100 text-center' data-aos-desktop="fade-up" data-aos-mobile="fade-up">Unlock Endless Benefits</h2>
                <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
                    <GradientContainer
                        imageSrc={MapIcon}
                        title="Find with Ease"
                        description="Locate nearby mechanics and charging stations instantly."
                        gradient="linear-gradient(180deg, #FFF1F1 0%, #f7f7f7 100%)"
                        width='50%'
                        aos="fade-right"
                    />
                    <GradientContainer
                        imageSrc={CashIcon}
                        title="Save Big"
                        description="Earn and redeem cashback points for exclusive rewards."
                        gradient="linear-gradient(180deg, #FBFEE7 0%, #f7f7f7 100%)"
                        width='50%'
                        aos="fade-left"
                    />                   
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
                    <GradientContainer
                        imageSrc={NutIcon}
                        title="Ride Confidently"
                        description="Verify genuine bike parts effortlessly."
                        gradient="linear-gradient(180deg, #FCF7EA 0%, #f7f7f7 100%)"
                        width='40%'
                        aos="fade-right"
                    />
                    <GradientContainer
                        imageSrc={CommunityIcon}
                        title="Join the Community"
                        description="Connect with local bikers and share experiences."
                        gradient="linear-gradient(180deg, #F1F2FC 0%, #f7f7f7 100%)"
                        width='60%'
                        aos="fade-left"
                    />                   
                </div>
            </div>
        </div>
    )
}

export default Benefits