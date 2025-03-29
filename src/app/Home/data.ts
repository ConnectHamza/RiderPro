import Feature1P from '../../../public/Assets/home/FeaturesIMG/Feature1P.webp';
import Feature1C from '../../../public/Assets/home/FeaturesIMG/Feature1C.webp';
import Feature2P from '../../../public/Assets/home/FeaturesIMG/Feature2P.webp';
import Feature2C from '../../../public/Assets/home/FeaturesIMG/Feature2C.webp';
import Feature3P from '../../../public/Assets/home/FeaturesIMG/Feature3P.webp';
import Feature3C from '../../../public/Assets/home/FeaturesIMG/Feature3C.webp';
import Feature4P from '../../../public/Assets/home/FeaturesIMG/Feature4P.webp';
import Feature4C from '../../../public/Assets/home/FeaturesIMG/Feature4C.webp';
import Feature5P from '../../../public/Assets/home/FeaturesIMG/Feature5P.webp';
import Feature5C from '../../../public/Assets/home/FeaturesIMG/Feature5C.webp';


export interface Feature {
  title: string;
  description: string;
  primaryImage: any;
  secondaryImage: any;
  primaryImageAlt: string;
  secondaryImageAlt: string;
  orderBy: string;
  bottomdesc: string;
  bottommob: string ;
  rightdesc?: string | undefined;
  rightmob?: string | undefined;
  topdesc?: string | undefined;
  topmob?: string | undefined;
  leftdesc?: string | undefined;
  leftmob?: string | undefined;
  aostext?: string | undefined;
  aosimg?: string | undefined;
  aostextmob?: string | undefined;
}

export const featuresData: Feature[] = [
  {
    title: "Nearby Mechanics & Charging Stations",
    description: "Easily locate trusted mechanics and charging stations near you. Use filters to refine your search, navigate routes, and connect with professionals quickly.",
    primaryImage: Feature1P,
    secondaryImage: Feature1C,
    primaryImageAlt: 'Feature 1 Primary',
    secondaryImageAlt: 'Feature 1 Secondary',
    orderBy: 'md:order-last',
    bottomdesc: 'md:bottom-[12vh]',
    bottommob: 'bottom-12',
    aostext: 'fade-right',
    aosimg: 'fade-left',
  },
  {
    title: "Cashback Points & Easy Withdrawals",
    description: "Earn points on every activity and redeem them for rewards or withdraw directly to your Easypaisa account for added flexibility.",
    primaryImage: Feature2P,
    secondaryImage: Feature2C,
    primaryImageAlt: 'Feature 2 Primary',
    secondaryImageAlt: 'Feature 2 Secondary',
    orderBy: 'md:order-first',
    bottomdesc: 'md:bottom-10',
    bottommob: 'bottom-5',
    rightdesc: 'md:right-8',
    rightmob: 'right-5',
    aostext: 'fade-left',
    aosimg: 'fade-right',
  },
  {
    title: "Warranty Claims for Crown Products",
    description: "Effortlessly register and claim warranties for Crown products. Manage your product warranties in one place for complete peace of mind.",
    primaryImage: Feature3P,
    secondaryImage: Feature3C,
    primaryImageAlt: 'Feature 1 Primary',
    secondaryImageAlt: 'Feature 1 Secondary',
    orderBy: 'md:order-last',
    bottomdesc: 'md:bottom-40',
    bottommob: 'bottom-10',
    leftdesc: 'md:left-6',
    leftmob: 'left-4',
    aostext: 'fade-right',
    aosimg: 'fade-left',
  },
  {
    title: "Crown eShop Deals",
    description: "Shop genuine bike parts and accessories directly through the app. Access exclusive discounts and offers tailored to your needs.",
    primaryImage: Feature4P,
    secondaryImage: Feature4C,
    primaryImageAlt: 'Feature 2 Primary',
    secondaryImageAlt: 'Feature 2 Secondary',
    orderBy: 'md:order-first',
    bottomdesc: 'md:bottom-40',
    bottommob: 'bottom-20',
    rightdesc: 'md:right-5',
    rightmob: 'right-5',
    aostext: 'fade-left',
    aosimg: 'fade-right',
  },
  {
    title: "Social Community",
    description: "Join a thriving biker community. Share experiences, connect with local riders, and stay informed about events in your area.",
    primaryImage: Feature5P,
    secondaryImage: Feature5C,
    primaryImageAlt: 'Feature 1 Primary',
    secondaryImageAlt: 'Feature 1 Secondary',
    orderBy: 'md:order-last',
    bottomdesc: 'md:top-40',
    bottommob: 'top-10',
    rightdesc: 'md:left-10',
    rightmob: 'left-5',
    aostext: 'fade-right',
    aosimg: 'fade-left',
  },

];