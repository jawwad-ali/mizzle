"use client"
import { Instrument_Sans, Inter } from "next/font/google"
import Heading from "./Heading"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Stars from "@/assets/stars.png"
import { testimonials } from "@/data";
import Picture from "@/assets/testimonials-image.png"

const inter = Inter({
    subsets: ["latin"]
})
const ins = Instrument_Sans({
    subsets: ["latin"]
})
const Testimonials = () => {
    return (
        <section className="testimonials my-5">
            <div className="container">
                <div className="row row-cols-1 rows-cols-sm-2">
                    <div className="col-lg-6">
                        <Heading subtitle="💖 Real results from real clients" heading="See how we've helped our clients succeed"
                            fontSize="44px"
                        />
                        <h6 className={`fw-bold fs-5 mt-4 ${ins.className}`}>More than 1500+ agencies using Mizzle</h6>

                        <div className="col-12 mt-4">
                            <Swiper
                                slidesPerView={2}
                                autoplay={true}
                                loop={true}
                                modules={[Autoplay, Navigation, Pagination]}
                                breakpoints={{
                                    // when window width is >= 320px
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    }
                                }}
                            >
                                {testimonials.map((data,index) => (
                                    <SwiperSlide key={index}>
                                        <Image src={Stars} alt="Stars" className="rounded" />
                                        <p className={`${inter.className} pt-3 review-text`}>{data.review}</p>

                                        <div className="d-flex justify-content-start align-items-start pt-2">
                                            <Image src={data.clientImage} className="client-image rounded" alt="Client Image" />
                                            <p className="ps-2 pt-2">By {data.clientName}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-6 mt-5 ps-lg-0 pt-4">
                        <div className="rounded">
                            <Image src={Picture} alt="Picture" className="img-fluid rounded" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials