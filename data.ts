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
import ClientOne from "@/assets/clientOne.jpg"
import ClientTwo from "@/assets/clientTwi.jpg"
import ClientThree from "@/assets/clientThree.jpg"
import ClientFour from "@/assets/clientFour.jpg"

type FooterProps = {
    heading: string
    items: string[]
    // [x:string]:string
}

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
export const heroSectionImages = [
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
        style: "rounded position-absolute ms-0"
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

export const YearsCustomers = [
    {
        number: "10+",
        text: "Years of experience",
        style: "text-center bg-dark text-white mb-0 rounded p-3 px-4",
    },
    {
        number: "1.2K",
        text: "Happy customer",
        style: "text-center rounded text-white text-center mb-0 bg-success p-3 px-4"
    }
]

export const experienceBullets = [
    { text: "Emphasis on ROI-driven solutions" },
    { text: "Expert team with diverse skill" },
    { text: "Proven track record of delivering resultss" }
]


export const specialization = [
    {
        heading: "Digital Marketing",
        text: "Growing brands online through digital channels.",
    },
    {
        heading: "Product Design",
        text: "Creating products that users love and businesses need .",
    },
    {
        heading: "Web Design",
        text: "Designing websites that are visually appealing & user-friendly.",
    },
    {
        heading: "UI/UX Design",
        text: "Creating user interfaces that are both efficient and enjoyable.",
    },
    {
        heading: "Business Strategy",
        text: "Developing and executing plans to achieve business goals.",
    },
    {
        heading: "Research",
        text: "Gathering and analyzing data to inform decision-making.",
    },
    {
        heading: "Web Development",
        text: "Building and maintaining websites and web applications."
    },
    {
        heading: "Brand Design",
        text: "Creating brands that are unique, memorable, and meaningful."
    },
]

export const testimonials = [
    {
        review: "Mizzle is the perfect theme for businesses that want to create a stylish and functional website.",
        clientImage: ClientOne,
        clientName: "Ali Jawwad"
    },
    {
        review: "I highly recommend Mizzle to anyone looking for a high-quality Bootstrap theme.",
        clientImage: ClientTwo,
        clientName: "Virat Kohli"
    },
    {
        review: "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
        clientImage: ClientThree,
        clientName: "Kane Williamson"
    },
    {
        review: "Webestica helped us create a stunning website that reflects our brand perfectly.",
        clientImage: ClientFour,
        clientName: "Steve Smith"
    }
]

export const FooterItems: FooterProps[] = [
    {
        heading: "Quick Links",
        items: ["About us", "Contact us", "Career","Career detail","Become a partner","Sign Up","Sign In"]
    },
    {
        heading: "Community",
        items: ["Documents", "Supports", "Faqs","Privacy Policy","News and blogs","Terms and condition"]
    },
]