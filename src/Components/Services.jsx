import { IoCheckmarkCircle } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
// import serviceRight from "../assets/hero3.png"
import hero2 from "../assets/hero2.png"


const ServicesLeft = () => {
    return (
        <div className={'flex flex-col gap-10'}>
            <h1 className={'font-semibold text-xl'}>
                UI/UX Design
            </h1>
            <p className={'lg:w-[32rem] leading-8 md:w-[20rem]'}>
                Hands-on learning via real-life innovation projects. Save Rs8,210
                On this Course. Create immersive UI via wireframes. Conduct heuristic
                evaluation of your UX design.
            </p>
            <div>
                <ul className={'flex flex-col gap-6'}>
                    <li className={'flex gap-3 items-center'}>
                        <IoCheckmarkCircle className={'text-2xl'} />
                        User Interface design
                    </li>
                    <li className={'flex gap-3 items-center'}>
                        <IoCheckmarkCircle className={'text-2xl'} />
                        User Interface Design
                    </li>
                    <li className={'flex gap-3 items-center'}>
                        <IoCheckmarkCircle className={'text-2xl'} />
                        Mobile Application design
                    </li>
                </ul>
            </div>
            <button className={'flex gap-3 items-center justify-center lg:justify-start w-44 whitespace-nowrap cursor-pointer'}>
                LEARN MORE
                <MdArrowOutward />
            </button>
        </div>
    )
}

const Services = () => {
    return (
        <div className="mt-20 lg:mt-32 flex flex-col items-center justify-between gap-20 px-8 lg:px-20">
            <h1 className={'font-bold text-3xl lg:text-5xl'}>
                Our Services
            </h1>

            <div className={'flex flex-col items-center md:flex-row gap-10'}>
                <ServicesLeft />
                <img className={'w-[22rem]'} src={hero2} alt=""/>
            </div>
        </div>
    )
}

export default Services;