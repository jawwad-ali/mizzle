"use client"
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { Instrument_Sans, Inter } from "next/font/google"
import Image from 'next/image';
import { data, images } from "../data"


const instrument_Sans = Instrument_Sans({
    subsets: ["latin"]
})

const inter = Inter({ subsets: ["latin"] });

const HeroSection = () => {
    const el = useRef(null);
    console.log("el", el);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Dev', 'UI/UX Design', 'Web Design'],
            typeSpeed: 50,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [])

    return (
        <div className="container mt-lg-5 pt-lg-5">
            <div className="row">
                <div className="col-lg-7 mt-4 ps-0">
                    <span
                        className="heading-color d-inline-block bg-light small rounded-3 px-3 py-2 ms-3"
                        style={{ marginTop: 15 }}
                    >
                        🤩 Award-winning digital services
                    </span>
                    <h1
                        className={`${instrument_Sans.className} lh-base pt-3 fw-bold main-heading ps-3`}
                        style={{ fontSize: "57.6px" }}
                    >
                        Creative studio focused on <br />
                        {/* Element to contain animated typing */}
                        <span ref={el} className='animate-text' />

                    </h1>
                    <p className={`ps-3`} style={{ color: "rgb(96, 98, 97)", marginTop: 38 }}>
                        From concept to execution, we deliver web designs that make an impact.
                        Let your brand shine with our innovative and visually stunning websites.
                    </p>

                    {/* Input Field */}
                    <form className="col-md-10 bg-body border rounded-2 position-relative p-2 mt-4 mt-md-5 mx-3">
                        <div className="input-group">
                            <input className="form-control focus-shadow-none border-0 me-1" type="email" placeholder="Enter your email address" />
                            <button type="button" className={`${inter.className} fw-bold btn btn-dark rounded-2 mb-0`}>Start trial!</button>
                        </div>
                    </form>

                    {/* Two Sections in Hero Section */}
                    <div className="d-block d-md-flex p-3 pe-lg-0 pe-5 gap-3 mb-5 justify-content-between">
                        {data.map((d) => (
                            <div className="col-lg-6 me-0 mt-3">
                                <div className='d-flex'>
                                    <div>
                                        <Image src={d.Img} alt="Pointer" />
                                    </div>
                                    <div className='ms-3'>
                                        <h6 className={`fs-5 fw-bold ${instrument_Sans.className}`}>{d.heading}</h6>
                                        <p className={`${inter.className}`} style={{ color: "rgb(96, 98, 97)" }}>{d.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Right Side */}
                <div className="col-lg-5 position-relative">
                    {images.map((data) => (
                        <Image src={data.img} alt="Images" className={data.style} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroSection