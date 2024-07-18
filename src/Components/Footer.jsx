import logo from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaCar } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="flex flex-col lg:flex-row gap-10 px-8 lg:px-20 pt-20 lg:pt-40 pb-12 lg:justify-between">
            <div className={'flex flex-col'}>
                <img
                    src={logo} alt="logo"
                    className={'w-20 -ml-6'}
                />
                <p className={'text-gray-400 text-xs lg:w-96'}>
                    Cryptocurrency is a type of virtual currency that uses cryptography to secure a
                    transaction that are digitally recorded as a distributed ledger, such as blockchains
                </p>
                <div className={'flex gap-2 mt-5 items-center'}>
                    <FaFacebook size={25} />
                    <AiFillTwitterCircle size={29} />
                    <AiFillDribbbleCircle size={29} />
                    <SiYoutubemusic size={25} />
                </div>
            </div>

            <div>
                <ul className={'flex flex-col gap-3'}>
                    <li className={'font-bold mb-2'}>Useful Link</li>
                    <li className={'text-xs'}>ios apps</li>
                    <li className={'text-xs'}>Contact Us</li>
                    <li className={'text-xs'}>Terms & Condition</li>
                    <li className={'text-xs'}>Privacy</li>
                </ul>
            </div>

            <div>
                <ul className={'flex flex-col gap-3'}>
                    <li className={'font-bold mb-2'}>Contact Us</li>
                    <li className={'flex items-center gap-3 text-xs'}>
                        <FaPhoneAlt />
                        +9182736450
                    </li>
                    <li className={'flex items-center gap-3 text-xs'}>
                        <IoMail />
                        weo@gmail.com
                    </li>
                    <li className={'flex items-center gap-3 text-xs'}>
                        <FaCar />
                        Long Road, St.Street 32094
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;