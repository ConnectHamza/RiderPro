import React from 'react'
import ProgressBar from '../../../../components/ProgressBar/ProgressBar'

const ProgressSection = () => {
  return (
    <div className='w-full bg-gray-100 justify-center flex md:px-10 px-5 py-10'>
        <div className="w-lg justify-center" data-aos-desktop="fade-up" data-aos-mobile="fade-up">
        <h3 className='text-center text-[20px]'>
        Join the Rider Pro Revolution
        </h3>
        <div className="flex flex-col md:flex-row mt-10 justify-between gap-8">
            <ProgressBar count='50,000+' description='Riders Connected'/>
            <ProgressBar count='20%' description='Cashback Opportunities'/>
            <ProgressBar count='7,000+' description='Vouchers Redeemed'/>
            <ProgressBar count='10,000+' description='Warranties Claimed'/>
           
        </div>
        </div>
    </div>
  )
}

export default ProgressSection