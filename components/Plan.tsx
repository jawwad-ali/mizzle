import Image from "next/image"
import Heading from "./Heading"
import BossCardImage from "@/assets/boss.png"
import { Instrument_Sans, Instrument_Serif, Inter } from "next/font/google"

const inter = Inter({
    subsets: ['latin']
})

const ins = Instrument_Sans({
    subsets: ['latin']
})

const Plan = () => {
    return (
        <section className="plan">
            {/* Plan Header */}
            <div className="d-flex justify-content-center flex-column align-items-center  text-center"
            >
                <Heading subtitle="💵 Transparent pricing packages" heading="Get a plan that grows with you" fontSize="44px" />
            </div>

            {/* Card */}
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 gy-md-7 mt-3 ">
                    <div className="col-sm-6 mt-5">
                        <div className="card border-0 border-end">
                            <div className="d-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-start">
                                <Image src={BossCardImage} className="card-image mb-2" alt="card-image" />
                            </div>
                            <div className="card-body text-center text-lg-start ps-0">
                                <span className={`boss-mode bg-dark text-white mb-3 rounded ${inter.className}`}>Boss mode</span>
                                <h5 className={`${ins.className} fw-bold card-title mt-3 mb-3`}>
                                    <span className="display-1 fw-bold">$59</span>
                                    /month
                                </h5>
                                <p className={`${inter.className} card-text`} style={{ color: "#606261" }}>The all-in-one solution for businesses that want to succeed online.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-6">
                        <h6 className={`${ins.className} fw-bold text-center fs-5`}>Features list of your need</h6>
                        <ul className=" mt-4 text-center list-group list-group-borderless mb-3 mb-sm-4">
                            <li className="border-0 list-group-item heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Up to 05 users monthly</li>
                            <li className="border-0 list-group-item heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Free 5 host &amp; domain</li>
                            <li className="border-0 list-group-item heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Google Docs style editors</li>
                            <li className="border-0 list-group-item heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Support for 30+ languages</li>
                            <li className="border-0 list-group-item heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Landing pages &amp; Web widgets</li>
                            <li className="border-0 list-group-item heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>24/7 Dedicated Support</li>
                        </ul>
                        <div className="text-center">
                            <a href="#" className="btn btn-dark ">Start a free 7-day trial</a>
                            <p className={`${inter.className} pt-2`} style={{ color: "rgb(96,98,97)" }}> No credit card is required!</p>

                        </div>

                    </div>


                    <div className="col-sm-6 rounded px-4 pt-4 pb-4 third-card" style={{ backgroundColor: "#09B850" }}>
                        <span className={`${inter.className} boss-mode bg-dark text-white mb-3 rounded-1 ${inter.className}`}>Enterprise</span>

                        <h4 className={`text-white ${ins.className} col-sm-9 mb-0 mt-3 fw-bold fs-2`}>Custom pricing plan</h4>


                        <div className={`d-flex mt-lg-0 justify-content-end flex-column h-75 ${ins.className}`}>
                            <button className={`btn btn-lg bg-white text-dark w-100 fs-6 ${ins.className}`}>Contact Sales</button>
                            <p className="text-center mt-lg-2 mt-sm-0 px-5 text-white">
                                Get personalized demo and custom plan
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Plan