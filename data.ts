import Pointer from "@/assets/pointed.svg"
import Award from "@/assets/award.svg"
import HeroSectionImageOne from "@/assets/hero-section.jpg"
import HeroSectionRatingImage from "@/assets/hero-section-rating.png"
import HeroSectionImageThree from "@/assets/hero-section-three.png"

export const data = [
    {
        Img: Pointer,
        heading: "24/7 Support",
        text: "We're always here to help",
    },
    {
        Img: Award,
        heading: "Award Winning agency",
        text: "You are in safe hand",
    },
]

// Hero Section (Left) Image
export const images = [
    {
        img: HeroSectionImageOne,
        style:"img-fluid rounded ms-1 mt-0"
    },
    {
        img: HeroSectionRatingImage,
        style:"position-absolute top-0 end-0 shadow rounded d-none d-lg-inline-block"
    },
    {
        img: HeroSectionImageThree,
        style:"rounded position-absolute ms-lg-5 ms-0"
    },
]