"use client"
import React from 'react';
import HeroSection from './Hero/HeroSection';
import ProgressSection from './ProgressBar/ProgressSection';
import RideSection from './RideSection/RideSection';
import Benefits from './BenefitsSection/Benefits';
import FeatureSection from '../../../components/FeatureSection/FeatureSection';
import Testimonials from './Testimonials/Testimonials';
import { featuresData } from './data';
import CallToAction from './CTA/CallToAction';

const Homepage: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <HeroSection  />
      <ProgressSection />
      <RideSection />
      <Benefits />
      {featuresData.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          description={feature.description}
          primaryImage={feature.primaryImage}
          secondaryImage={feature.secondaryImage}
          primaryImageAlt={feature.primaryImageAlt}
          secondaryImageAlt={feature.secondaryImageAlt}
          topdesc={feature.topdesc}
          topmob={feature.topmob}
          bottomdesc={feature.bottomdesc}
          bottommob={feature.bottommob}
          leftdesc={feature.leftdesc}
          leftmob={feature.leftmob}
          rightdesc={feature.rightdesc}
          rightmob={feature.rightmob}
          orderBy={feature.orderBy}
          aostext={feature.aostext}
          aostextmob={feature.aostextmob}
          aosimg={feature.aosimg}
        />
      ))}
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Homepage;