import { Instrument_Sans } from "next/font/google"

type HeadingProps = {
    subtitle: string
    heading: string
    fontSize:string
}

const ins = Instrument_Sans({
    subsets: ["latin"]
})

const Heading = ({ subtitle, heading,fontSize  }: HeadingProps) => {
    return (
        <div>
            <span
                className="heading-color d-inline-block bg-light small rounded-3 px-3 py-2 "
                style={{ marginTop: "50px" }}
            >
                {subtitle}
            </span>
            <h1
                className={`${ins.className} lh-base pt-3 fw-bold main-heading  `}
                style={{ fontSize: fontSize }}
            >
                {/* ps-lg-3 ps-3 */}
                {heading}<br />  
            </h1>
        </div>
    )
}

export default Heading