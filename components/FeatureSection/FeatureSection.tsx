import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';
import { Feature } from '@/app/Home/data';
import Button from '../Button/Button';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';


const FeatureSection: React.FC<Feature> = ({
  title,
  description,
  primaryImage,
  secondaryImage,
  primaryImageAlt,
  secondaryImageAlt,
  orderBy,
  topdesc,
  topmob,
  bottomdesc,
  bottommob,
  leftdesc,
  leftmob,
  rightdesc,
  rightmob,
  aostext,
  aosimg,



}) => {
  return (
    <div className='w-full flex justify-center md:h-[80vh] md:px-10 px-5 py-10'>
      <div className="w-lg flex flex-col md:flex-row items-center gap-10 justify-between">
        <div className='md:w-[40%]' data-aos-desktop={aostext} data-aos-mobile="fade-in">
          <h3 className='heading3'>
            {title}
          </h3>
          <p className='md:mt-5 mt-3 mb-5'>
            {description}
          </p>
          {/* <Button
            iconName="arrow-right"
            iconColor="#fff"
            buttonText="Coming Soon"
            bgColor="#6350DB"
            hoverBgColor="#00008B"
            textColor="#fff"
            order='order-last'
            link='/coming-soon'
          /> */}
        </div>
        <div className={`relative ${orderBy}`} data-aos-desktop={aosimg} data-aos-mobile="fade-up">
          <Image style={{width: 'auto', height: 'auto'}} src={primaryImage} alt={primaryImageAlt} />
          <Image style={{width: 'auto', height: 'auto'}} className={`absolute  ${topdesc} ${topmob} ${bottomdesc} ${bottommob} ${leftdesc} ${leftmob} ${rightdesc} ${rightmob} w-[40%]`} src={secondaryImage} alt={secondaryImageAlt} data-aos-desktop="fade-up" data-aos-mobile="fade-up" />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;