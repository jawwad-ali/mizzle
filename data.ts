import Pointer from "@/assets/pointed.svg"
import Award from "@/assets/award.svg"
import HeroSectionImageOne from "@/assets/hero-section.jpg"
import HeroSectionRatingImage from "@/assets/hero-section-rating.png"
import HeroSectionImageThree from "@/assets/hero-section-three.png"
import CompanyOne from "@/assets/company-one.svg"
import CompanyTwo from "@/assets/company-two.svg"
import CompanyThree from "@/assets/company-three.svg"
import CompanyFour from "@/assets/company-four.svg"
import CompanyFive from "@/assets/company-five.svg"

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
        style: "img-fluid rounded ms-1 mt-0"
    },
    {
        img: HeroSectionRatingImage,
        style: "position-absolute top-0 end-0 shadow rounded d-none d-lg-inline-block"
    },
    {
        img: HeroSectionImageThree,
        style: "rounded position-absolute ms-lg-5 ms-0"
    },
]

export const companies = [
    { company: CompanyOne },
    { company: CompanyTwo },
    { company: CompanyThree },
    { company: CompanyFour },
    { company: CompanyFive },
    { company: CompanyThree },
    { company: CompanyOne },
    { company: CompanyFive },
    { company: CompanyFour },
    { company: CompanyTwo },
]