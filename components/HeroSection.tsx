"use client"
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { Instrument_Sans, Inter } from "next/font/google"
import Image from 'next/image';
import { data, headings, heroSectionImages } from "../data"
import Heading from './Heading';

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
        <div className="container mt-lg-5 pt-lg-5 z-index-2 hero-section">
            <div className="row"> 
                <div className="col-lg-7 mt-4 ps-3 hero-section-left-side"
                >
                    {/* Heading Component */}
                    <Heading subtitle='🤩 Award-winning digital services' heading='Creative studio focused on' fontSize='57.6px' />

                    {/* Element to contain animated typing */}
                    <span ref={el} className='animate-text fw-bold' />

                    <p style={{ color: "rgb(96, 98, 97)", marginTop: 32 }}>
                        From concept to execution, we deliver web designs that make an impact.
                        Let your brand shine with our innovative and visually stunning websites.
                    </p>

                    {/* Input Field */}
                    < form className="col-md-10 bg-body border rounded-2 position-relative p-2 mt-4 mt-md-5" >
                        <div className="input-group">
                            <input className="form-control focus-shadow-none border-0 me-1" type="email" placeholder="Enter your email address" />
                            <button type="button" className={`${inter.className} fw-bold btn btn-dark rounded-2 mb-0`}>Start trial!</button>
                        </div>
                    </form>

                    {/* Two Sections in Hero Section */}
                    <div className="d-block d-md-flex pt-4 pe-lg-0 pe-5 gap-3 mb-5 justify-content-between">
                        {data.map((d, i) => (
                            <div className="col-lg-6 me-0 mt-3" key={i}>
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
                <div className="col-lg-5 hero-section-image-container position-relative">
                    {heroSectionImages.map((data, i) => (
                        <Image key={i} src={data.img} alt="Images" className={data.style} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default HeroSection