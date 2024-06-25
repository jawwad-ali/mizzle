"use client"
import { Instrument_Sans } from "next/font/google"
import Image from "next/image"
import { companies } from "@/data"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const instrument_Sans = Instrument_Sans({
    subsets: ["latin"]
})

const Companies = () => {
    return (
        <div className="container mt-3 position-relative companies">
            <div className="row">
                <div className="col-lg-3 ms-0">
                    <h5 className={`${instrument_Sans.className} fs-3 ps-lg-1 fw-bold`}>100+ Companies trust us</h5>
                </div>

                <div className="col-lg-9 d-flex justify-content-center align-items-center gap-lg-5 mx-3 mx-lg-0 gap-0 overflow-hidden">
                    <Swiper
                        slidesPerView={5}
                        autoplay={true}
                        loop={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }
                        }}
                    >
                        {companies.map((company, idx) => (
                            <SwiperSlide key={idx} className="p-md-3 p-0 ">
                                <Image src={company.company} alt="Company" className="company-images" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Companies