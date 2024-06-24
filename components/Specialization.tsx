import { specialization } from "@/data"
import { Instrument_Sans, Inter } from "next/font/google"
import Heading from "./Heading"
const inter = Inter({
    subsets: ["latin"]
})
const ins = Instrument_Sans({
    subsets: ["latin"]
})
const Specialization = () => {
    return (
        <div className="specialization">
            {/* Specialization Header */}
            <div className="d-flex justify-content-center flex-column text-white align-items-center specialization-header text-center"
            >
                <Heading
                    subtitle="🚀 Innovative solutions, Measurable results"
                    heading="We specialize in the following services"
                    fontSize="44px" />
            </div>

            {/* Main */}
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-5 gy-md-7 mt-3">
                    {specialization.map((data) => (
                        <>
                            <div className="d-flex justify-content-between">

                                {/* Card Body */}
                                <div className="card mb-4 spicialization-card">
                                    <div className="card-body position-relative">
                                        <div className="icon-div position-absolute rounded-pill bg-white">
                                            <i className="bi bi-stack icon fa-fw fs-4 text-center"></i>
                                        </div>
                                        <h5 className={`text-white ${ins.className} fw-bold fs-4 pt-4`}>{data.heading}</h5>
                                        <p className={`${inter.className} pt-2`} style={{ color: "rgb(196,197,199)" }}>
                                            {data.text}
                                        </p>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="card-footer mb-3 ">
                                        Know more
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </div>
                                </div>
                            </div>

                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Specialization