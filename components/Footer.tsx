import Image from "next/image"
import FooterLogo from "@/assets/logo-light.svg"
import { Instrument_Sans, Inter } from "next/font/google"
import { FooterItems } from "@/data"
import GooglePlay from "@/assets/google-play.svg"
import AppStore from "@/assets/app-store.svg"

const inter = Inter({
    subsets: ['latin']
})
const ins = Instrument_Sans({
    subsets: ['latin']
})

const Footer = () => {
    return (
        <div className="bg-dark position-relative overflow-hidden pb-0 pt-6 pt-lg-8">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-3 row-cols-xl-4 py-5">
                    <div className="col-lg-3 col-md-12 d-flex justify-content-between align-items-between">
                        <div className="text-white">
                            <Image src={FooterLogo} alt="Logo" className="logo" />
                            <p className={`${inter.className} pt-4`} style={{ color: "#C5C6CC" }}>
                                A Bootstrap theme that's both stylish and functional, perfect for any type of technology or corporate website.
                            </p>
                        </div>
                    </div>

                    {FooterItems.map((data) => (
                        <div className="col-lg-3 col-md-12 text-start ps-lg-4 ps-0 mt-5 mt-lg-0">
                            <div className="d-flex flex-column">
                                <h4 className={` text-white ps-3 fw-bold fs-5 ${ins.className}`}>{data.heading}</h4>
                                <ul className="list-group">
                                    {data.items.map((item) => (
                                        <li className={`${inter.className} list-group-item border-0 bg-transparent`} style={{ color: "#C5C6CC" }}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <div className="h-75 d-flex justify-content-between align-items-between flex-column">
                            <div className="mt-5 mt-lg-0">
                                <h4 className={`text-white ps-lg-3 fw-bold fs-5 ${ins.className}`}>App available on</h4>
                                <div className="mt-4">
                                    <Image src={GooglePlay} alt="Google Play" className="store mx-lg-3" />
                                    <Image src={AppStore} alt="App Store" className="store" />
                                </div>
                            </div>

                            <div className="mt-5 mt-lg-0">
                                <h4 className={` text-white ps-lg-3 fw-bold fs-5 ${ins.className}`}>Follow on
                                </h4>
                                <div className="mt-4 fs-5 ps-lg-2" style={{ color: "#C5C6CC" }}>
                                    <div>
                                        <i className="mx-2 fs-5 bi bi-facebook" ></i>
                                        <i className="mx-2 bi bi-twitter"></i>
                                        <i className="mx-2 bi bi-linkedin"></i>
                                        <i className="mx-2 bi bi-instagram"></i>
                                        <i className="mx-2 bi bi-youtube"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer