"use client"
import Logo from '../../public/Assets/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Button from '../Button/Button';
import { useState } from 'react';


library.add(faArrowRight);

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='w-full bg-blue-100 flex justify-center items-center py-5 md:px-10 px-5'>
            <div className="w-lg justify-between flex items-center">
                <div className='md:w-[20%]' data-aos-desktop="fade-right" data-aos-mobile="fade-in">
                    <Link href='/'> <Image style={{width: 'auto', height: 'auto'}} src={Logo} alt="Logo"/> </Link>
                </div>
                <div className="md:w-[60%] justify-center hidden md:flex flex-row space-x-8 text-[15px] text-white" data-aos-desktop="fade-in">
                     <Link href="/" className="relative group hover:text-blue-300" >
                        Home
                        <span className="underline-curve"></span>
                    </Link> 
                     <Link href="https://crowneshop.com/" target='_blank' className="relative group hover:text-blue-300">
                        Crown eShop
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/coming-soon" className="relative group hover:text-blue-300">
                        About Us
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/coming-soon" className="relative group hover:text-blue-300">
                        Contact Us
                        <span className="underline-curve"></span>
                    </Link> 
                </div> 
                
                <div className='md:w-[20%] md:flex hidden' data-aos-desktop="fade-left">
                    <Button                        
                        iconName="arrow-right"
                        iconColor="white"
                        buttonText="Download Our App"
                        bgColor="#6350DB"
                        hoverBgColor="darkblue"
                        textColor="white"
                        order='order-last'
                        link='https://apps.apple.com/us/app/rider-pro/id6476922000'
                    />
                </div>
                <div className="sm:flex md:hidden flex items-center">
                    <button
                        className="text-white focus:outline-none"
                        onClick={handleMenuToggle}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                <div className="sm:flex md:hidden flex flex-col items-center space-y-4 mt-4 text-white" data-aos-desktop="fade-down" data-aos-mobile="fade-down"
                style={{
                    width: '100%',
                    position: 'absolute',
                    top: '10%',
                    left: 0,
                    background: 'rgb(99 80 219 / 100%)',
                    zIndex: 999,
                    padding: '30px',
                    borderRadius: '30px',                    
                                  
                }}>
                    <Link href="/" className="relative group hover:text-red-100 w-full text-center">
                        Home
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="https://crowneshop.com/" className="relative group hover:text-red-100 w-full text-center">
                        Crown eShop
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/coming-soon" className="relative group hover:text-red-100 w-full text-center">
                        About Us
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/contact-us" className="relative group hover:text-red-100 w-full text-center">
                        Contact Us
                        <span className="underline-curve"></span>
                    </Link>
                    
                </div>
            )}
            </div>

        </div>
    );
};

export default Header;