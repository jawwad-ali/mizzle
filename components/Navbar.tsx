"use client"
import Image from "next/image"
import { useEffect } from "react";
import Logo from "@/assets/logo.svg"
import DesignPattern from "@/assets/decoration-pattern.svg"

const Navbar = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            <div className="container mt-3 ps-3">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        <Image className="logo ps-0" src={Logo} alt="Mizzle Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        id="navbarSupportedContent"
                        className="collapse navbar-collapse navListContainer"
                    >
                        <ul className="navbar-nav d-flex nav-item-link justify-content-around align-items-center gap-4 ">
                            <li className="nav-item dropdown d-flex justify-content-center align-items-center">
                                <a
                                    className="nav-link "
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                >
                                    Demos
                                </a>
                                <i className="bi bi-chevron-down icon" />
                                {/* Demos DropDown */}
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                    style={{ width: 450, height: "52dvh" }}
                                >
                                    <div className="container-lg mt-3 ms-0">
                                        <div className="row">
                                            <div className="col-lg-12 mt-0 me-5 p-1">
                                                <li>
                                                    <a className="dropdown-item  py-2 drp-item " href="#">
                                                        Classic Default
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item  py-2 drp-item" href="#">
                                                        Creative Agency
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item  py-2 drp-item" href="#">
                                                        Digital Agency
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item  py-2 drp-item" href="#">
                                                        Design Agency
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item  py-2 drp-item" href="#">
                                                        SEO Agency
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item py-2  drp-item" href="#">
                                                        Product Landing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item py-2  drp-item" href="#">
                                                        Mobile App Showcase
                                                    </a>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <a
                                    className="nav-link"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                >
                                    Pages
                                </a>
                                <i className="bi bi-chevron-down icon" />
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                    style={{
                                        width: 450,
                                        height: "52dvh",
                                        marginLeft: 325,
                                    }}
                                >
                                    <div className="container-lg ms-0">
                                        <div className="row">
                                            <div
                                                className="col-lg-12 me-5 p-1"
                                            >
                                                <li>
                                                    <a className="dropdown-item py-2 drp-item " href="#">
                                                        About
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item py-2 drp-item" href="#">
                                                        Contact v.1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item py-2 drp-item" href="#">
                                                        Contact v.2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item py-2 drp-item" href="#">
                                                        Saas Pages
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item py-2 drp-item" href="#">
                                                        Shop
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item py-2 drp-item" href="#">
                                                        Blog
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item py-2 drp-item" href="#">
                                                        Specialty Pages
                                                    </a>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center ">
                                <a className="nav-link" href="#">
                                    Portfolio
                                </a>
                                <i className="bi bi-chevron-down icon" />
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <a className="nav-link" href="#">
                                    Megamenu
                                </a>
                                <i className="bi bi-chevron-down icon" />
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <a className="nav-link" href="#">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-none d-lg-flex justify-content-end align-items-center gap-1">
                        <i className="bi bi-circle-half fs-5 " />

                        <button className="btn btn-sm btn-light me-1 signUpButton" style={{ padding: "6.5px 12.8px" }}>
                            <i className="bi bi-person-circle me-2" />
                            Sign Up
                        </button>
                        <button className="border-0 btn btn-sm btn-success me-1 buyNowButton" style={{ padding: "6.5px 12.8px", backgroundColor: "#09B850" }}>
                            Buy Now!
                        </button>
                    </div>
                </nav>
            </div>

            {/* <!-- Decoration pattern --> */}
            <div className="d-none d-lg-block position-relative">
                <div className="position-absolute decoration-pattern-container">
                    <Image src={DesignPattern} alt="Decoration Pattern" />
                </div>
            </div>
            {/* <!-- Decoration Pattern Ends --> */}
        </>
    )
}

export default Navbar