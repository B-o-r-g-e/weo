import { IoPersonCircleSharp } from "react-icons/io5";
import { IoHeartCircleSharp } from "react-icons/io5";
// import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Customers = () => {
    return (
        <div className={'flex relative flex-col bg-black rounded-2xl bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 px-6 py-5'}>
            <div className={'flex items-center justify-between bg-black w-24 px-2 rounded-full absolute -top-6 left-[6.2rem] lg:left-[7.5rem]'}>
                <IoPersonCircleSharp size={50} />
                <IoHeartCircleSharp size={50} className={'text-red-500'} />
            </div>
            <div className={'flex flex-col mt-6 gap-5'}>
                <div className={'flex gap-1'}>
                    <FaStar size={12} color="#D97830" />
                    <FaStar size={12} color="#D97830" />
                    <FaStar size={12} color="#D97830" />
                    <FaStar size={12} color="#D97830" />
                    <FaStar size={12} color="#D97830" />
                </div>
                <p className={'font-bold text-sm w-60 lg:w-72'}>
                    Suggests that the top planners spend most of their time engaged
                    in analysis and are concerned with industry.
                </p>
                <div>
                    <p className={'text-xs font-bold'}>
                        Sabo Masties
                    </p>
                    <p className={'text-xs mt-1'}>
                        Founder of Rubik
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Customers;