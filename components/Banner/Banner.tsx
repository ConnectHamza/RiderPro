import React from 'react';
import BannerIMG from '../../../../public/Assets/home/HeroBanner.webp';

const Banner = () => {
    return (
        <div className='md:w-full flex justify-center md:flex-col items-center md:h-[40vh] h-[20vh]' style={{
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div className='w-lg'>
                <div style={{
                    background: '#6350DB',
                    height: '100%',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    filter: 'blur(0px)',
                    transform: 'scale(1.1)',
                    position: 'absolute',
                    justifyContent: 'start',
                    display: 'flex',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: -1,
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, rgb(18 15 36 / 15%) 0%, rgb(18 15 36 / 40%) 70%)',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: -1,
                }}></div>
                <div className='md:w-[50%] w-[70%] px-5' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    height: '100%',
                    color: 'white',
                    textAlign: 'left',
                    flexDirection: 'column',
                }}>
                    <h1 className='font-bold md:text-[85px] text-[32px]  stroke-black-100'>Contact Us</h1>
                   
                </div>
            </div>
        </div>
    );
}

export default Banner;