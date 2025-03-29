import Image from 'next/image';
import React from 'react';
import FooterLogo from '../../public/Assets/Footer-Logo.svg';
import facebookIcon from '../../public/Assets/icons/Facebook.svg';
import linkedinIcon from '../../public/Assets/icons/Linkedin.svg';
import instagramIcon from '../../public/Assets/icons/IG.svg';
import twitterIcon from '../../public/Assets/icons/X.svg';
import youtubeIcon from '../../public/Assets/icons/YT.svg';
import Link from 'next/link';


const socialIcons = [
    { src: facebookIcon, alt: 'Facebook' },
    { src: linkedinIcon, alt: 'LinkedIn' },
    { src: instagramIcon, alt: 'Instagram' },
    { src: twitterIcon, alt: 'Twitter' },
    { src: youtubeIcon, alt: 'YouTube' },

];

const Footer: React.FC = () => {
    return (
        <div className='w-full bg-blue-100 flex justify-center items-center md:py-[150px] py-20 md:px-10 px-5 footer'>
            <div className="w-lg flex md:flex-row flex-col justify-between gap-10" data-aos-desktop="fade-up">
                <div className='md:w-[30%]' data-aos-mobile="fade-in">
                    <Image style={{width: 'auto', height: 'auto'}} src={FooterLogo} alt='Footer Logo' />
                    <div className="flex my-5 gap-5">
                        {socialIcons.map((icon, index) => (
                            <Image style={{width: 'auto', height: 'auto'}} key={index} src={icon.src} alt={icon.alt} />
                        ))}
                    </div>
                    <p className='text-white'>© 2025 <a href="https://crowngroup.com.pk/">Crown Group</a>. All Rights Reserved.</p>
                </div>
                <div className='text-white md:w-[20%]'>
                    <h3 className='font-bold text-xl mb-2' data-aos-mobile="fade-up">About</h3>
                    <h4 className='md:text-[15px] text-[13px] cursor-pointer' data-aos-mobile="fade-up">
                        <Link href='/coming-soon' className='hover:text-blue-300 block mb-2' >Blog</Link>
                        
                        <Link href='/coming-soon' className='hover:text-blue-300 block mb-2' >About Us</Link>
                    </h4>
                </div>
                <div className='text-white md:w-[20%]'>
                    <h3 className='font-bold text-xl mb-2' data-aos-mobile="fade-up">Useful Links</h3>
                    <h4 className='md:text-[15px] text-[13px] cursor-pointer ' data-aos-mobile="fade-up">
                        <Link href='https://crowneshop.com/' target='_blank' className='hover:text-blue-300 block mb-2' >Crown eShop</Link>
                        <Link href='/coming-soon' className='hover:text-blue-300 block mb-2' >Nearby Mechanics/Charging Stations</Link>
                        <Link href='/coming-soon' className='hover:text-blue-300 block mb-2' >Waranty Management</Link>
                    </h4>
                </div>
                <div className='text-white md:w-[20%]'>
                    <h3 className='font-bold text-xl mb-2' data-aos-mobile="fade-up">Help & Support</h3>
                    <h4 className='md:text-[15px] text-[13px] cursor-pointer' data-aos-mobile="fade-up">
                        <Link href='/coming-soon' className='hover:text-blue-300 block mb-2' >Help & Support</Link>
                        <Link href='/coming-soon' className='hover:text-blue-300 block mb-2' >Contact</Link>
                        <Link href='/coming-soon' className='hover:text-blue-300 block mb-2' >FAQS</Link>
                    </h4>
                </div>
                <div className='text-white md:w-[20%]'>
                    <h3 className='font-bold text-xl mb-2' data-aos-mobile="fade-up">Legal</h3>
                    <h4 className='md:text-[15px] text-[13px] cursor-pointer' data-aos-mobile="fade-up">
                        <Link href='/terms-and-conditions' className='hover:text-blue-300 block mb-2' >Terms & Conditions</Link>
                        <Link href='/privacy-policy' className='hover:text-blue-300 block mb-2' >Privacy Policy</Link>
                        {/* <Link href='/warranty-policy' className='hover:text-blue-300 block mb-2' >Warranty Policy</Link> */}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Footer;