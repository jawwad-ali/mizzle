import Image from "next/image"
import DigitalExpOne from "@/assets/digital-exp.jpg"
import DigitalExpTwo from "@/assets/digital-exp-two.jpg"
import { Instrument_Sans, Inter } from "next/font/google"
import { YearsCustomers } from "@/data";

const instrument_Sans = Instrument_Sans({
    subsets: ["latin"]
})

const inter = Inter({ subsets: ["latin"] });

const OnlineExperience = () => {
    return (
        <div className="container" style={{ marginTop: " 100px " }}>
            <div className="row">
                <div className="col-lg-7">
                    <div className="d-flex">
                        <div className="digital-exp-one-image">
                            <Image src={DigitalExpOne} alt="Digital Exp One" className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-3 position-relative ms-4 d-flex gap-4" style={{ height: "140px; !important", width: "50px" }}>
                            {
                                YearsCustomers.map((data) => (
                                    <div className={`${data.style}`} >
                                        <h6 className={`${instrument_Sans.className} fw-bold h1`}>{data.number}</h6>
                                        <p className={`${inter.className} text-center mb-0 text-capitalize`}>{data.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="digital-exp-one-image two-img position-relative col-lg-5">
                            <Image src={DigitalExpTwo} alt="Digital Exp One" className="img-fluid rounded" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OnlineExperience