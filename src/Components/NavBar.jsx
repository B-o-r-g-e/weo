import logo from '../assets/logo.png'
import { MdArrowOutward } from "react-icons/md";
import {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import WalletConnect from "./WalletConnect.jsx";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={'w-screen flex justify-between px-4 relative lg:items-center lg:pr-10 pt-4 lg:pt-0 lg:-mt-5'}>
            <div className={'flex items-center'}>
                <GiHamburgerMenu
                    className={"text-white text-[20px] cursor-pointer lg:hidden"}
                    onClick={() => setIsOpen(true)}
                />
                <img
                    className={'w-36 hidden lg:block'}
                    src={logo} alt="logo"
                />
            </div>

            <div className={'lg:hidden z-40'}>
                {
                    isOpen && (
                        <div className={''}>
                            <div className={'flex flex-col justify-between w-3/4 md:w-2/4 lg:hidden bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 fixed left-0 top-0 bottom-0'}>
                                <div className={'flex flex-col mt-11'}>
                                    <IoCloseSharp size={28}
                                                  className={
                                                      "text-white hover:text-primary cursor-pointer ml-5"
                                                  } onClick={() => setIsOpen(false)}
                                    />

                                </div>

                                <div className={'ml-6 flex flex-col -mt-28'}>
                                    <img
                                        className={'w-1/2 -ml-10'}
                                        src={logo} alt="logo"
                                    />

                                    <ul className={'flex items-start flex-col gap-4 text-gray-200'}>
                                        <li className={'cursor-pointer hover:text-slate-500'}>PRODUCTS</li>
                                        <li className={'cursor-pointer hover:text-slate-500'}>SOLUTIONS</li>
                                        <li className={'cursor-pointer hover:text-slate-500'}>CUSTOMER</li>
                                        <li className={'cursor-pointer hover:text-slate-500'}>PRICING</li>
                                        <li className={'cursor-pointer hover:text-slate-500'}>RESOURCES</li>
                                    </ul>
                                </div>

                                <button className={'text-nowrap flex justify-center items-center font-bold gap-3'}>
                                    CONNECT WALLET
                                    <MdArrowOutward/>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>


            <div className={'hidden lg:flex items-center justify-center ml-20'}>
                <ul className={'flex gap-4 font-normal text-gray-200'}>
                    <li className={'cursor-pointer hover:text-slate-500'}>PRODUCTS</li>
                    <li className={'cursor-pointer hover:text-slate-500'}>SOLUTIONS</li>
                    <li className={'cursor-pointer hover:text-slate-500'}>CUSTOMER</li>
                    <li className={'cursor-pointer hover:text-slate-500'}>PRICING</li>
                    <li className={'cursor-pointer hover:text-slate-500'}>RESOURCES</li>
                </ul>
            </div>

            {/*<button className={'flex items-center justify-center whitespace-nowrap font-bold gap-3 text-sm lg:text-base hover:bg-zinc-800 hover:border-yellow-700'}>*/}
            {/*    CONNECT WALLET*/}
            {/*    /!*<MdArrowOutward/>*!/*/}
            {/*</button>*/}
            <WalletConnect />
        </div>

    )
}

export default NavBar;