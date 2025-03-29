import Testimonial1 from '../../../../public/Assets/home/TestimonialsIMG/Testimonial1.webp'
import Testimonial2 from '../../../../public/Assets/home/TestimonialsIMG/Testimonial2.webp'
import Testimonial3 from '../../../../public/Assets/home/TestimonialsIMG/Testimonial3.webp'
import Testimonial4 from '../../../../public/Assets/home/TestimonialsIMG/Testimonial4.webp'
import Testimonial5 from '../../../../public/Assets/home/TestimonialsIMG/Testimonial5.webp'


export interface Testimonial {
    name: string;
    testimonial: string;
    image: string;
    designation: string;
}

export const testimonialsData: Testimonial[] = [
    {
        designation: "Rider Pro User",
        name: "Abid Ali.",
        testimonial: "From the social community to the exclusive vouchers, Rider Pro has everything a biker could need. It’s more than just an app—it’s a complete toolkit for bikers. Highly recommended!",
        image: Testimonial1.src,
    },
    {
        designation: "Rider Pro User",
        name: "Abdul Wahab.",
        testimonial: "Rider Pro has completely transformed my biking experience. With the cashback feature, I’ve saved so much on maintenance, and the nearby mechanic locator has been a lifesaver during emergencies. It’s a must-have for all bikers!",
        image: Testimonial2.src,
    },
    {
        designation: "Rider Pro User",
        name: "Raees Ali.",
        testimonial: "I’ve earned cashback points effortlessly and withdrawn them directly to my account. Rider Pro delivers on every promise and has become an essential part of my riding routine.",
        image: Testimonial3.src,
    },
    {
        designation: "Rider Pro User",
        name: "Ahsan Khan.",
        testimonial: "Rider Pro has made my long-distance rides worry-free. Finding charging stations and mechanics on the go has never been easier. The app’s features save time and ensure peace of mind—highly reliable for all bikers!",
        image: Testimonial4.src,
    },
    {
        designation: "Rider Pro User",
        name: "Azan Sheikh.",
        testimonial: "Claiming warranties for Crown products has never been easier. The app is incredibly user-friendly, and its reliable interface makes everything seamless. Rider Pro is a game-changer!",
        image: Testimonial5.src,
    },
];