import Image from "next/image"
import DigitalExpOne from "@/assets/digital-exp.jpg"
import DigitalExpTwo from "@/assets/digital-exp-two.jpg"
import { Instrument_Sans, Inter } from "next/font/google"
import { YearsCustomers, experienceBullets } from "@/data";

const instrument_Sans = Instrument_Sans({
    subsets: ["latin"]
})

const inter = Inter({ subsets: ["latin"] });

const OnlineExperience = () => {
    return (
        <div className="container experience position-relative" style={{ marginTop: " 100px " }}>
            <div className="row">
                <div className="col-lg-7">
                    <div className="d-flex left-side-container">

                        <div className="digital-exp-one-image-container">
                            <Image src={DigitalExpOne} alt="Digital Exp" className="img-fluid rounded digital-exp-one-image" />
                        </div>

                        <div className="numbers-container position-relative mx-4 d-flex gap-4" style={{ height: "140px !important", width: "75px !important" }}>
                            {
                                YearsCustomers.map((data, index) => (
                                    <div className={`${data.style} numbers-box`} key={index}>
                                        <h6 className={`${instrument_Sans.className} fw-bold h1`}>{data.number}</h6>
                                        <p className={`${inter.className} text-center mb-0 text-capitalize`}>{data.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="digital-exp-one-image second-image-div position-relative col-lg-6">
                            <Image src={DigitalExpTwo} alt="Digital Exp" className="rounded two-img" />
                        </div>
                    </div>

                </div>

                {/* RIght Side */}
                <div className="col-lg-5 ms-lg-0 ms-2 experience-right mt-5 mt-lg-0">
                    <span
                        className="heading-color d-inline-block bg-light small rounded-3 px-3 py-2 "
                    // style={{ marginTop: 15 }}
                    >
                        🤝 Your gateway to digital success
                    </span>

                    <h2 className={`${instrument_Sans.className} px-1 display-5 fw-bold pt-4 lh-sm`}>
                        Defining the future of online experiences!
                    </h2>
                    <p className={`${inter.className} pt-3 px-1 fw-normal`} style={{ color: "rgb(96,98,97)" }}>
                        Embrace a new era of digital success with Mizzle. Our team combines cutting-edge design with robust development to deliver websites that captivate and convert.
                    </p>

                    {
                        experienceBullets.map((data,index) => (
                            <div className="d-flex" key={index}>
                                <i className="bi bi-patch-check-fill me-2" style={{ color: "rgb(9, 184, 80)" }}></i>
                                <p className={`ms-2 ${inter.className}`} style={{ color: "rgb(32,33,36)" }} >{data.text}</p>
                            </div>
                        ))
                    }

                    <a href="about-v1.html" className="btn btn-dark mb-0 mt-3">Discover more</a>
                </div>
            </div>
        </div>
    )
}

export default OnlineExperience