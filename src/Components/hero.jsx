import LeftHero from "./leftHero.jsx";
import hero from '../assets/hero.png'
import TopHero from "./TopHero.jsx";

const Hero = () => {
    return (
        <div className={'w-5/6 flex flex-col lg:flex-row lg:gap-28 md:items-center lg:items-start justify-center lg:justify-start mt-11 md:mt-20 lg:-mt-14'}>
            <div className={'flex flex-col md:flex-row lg:flex-col md:justify-center lg:justify-start items-center gap-6 lg:gap-10 mt-5 lg:items-start lg:pt-10'}>
                <TopHero count={'240+'} underText={'PARTNERS'} />
                <LeftHero count={'92%'} underText={'FASTER TECHNOLOGY'} />
            </div>

            <div className={' lg:pt-3'}>
                <img className={'lg:w-3/2'} src={hero} alt="hero"/>
            </div>

            <div className={'flex flex-col md:flex-row lg:flex-col gap-10 items-start md:items-center lg:items-start pt-8 lg:pt-20 -mt-10 lg:mt-0'}>
                <p className={'w-52 text-left md:text-right lg:text-left leading-8'}>Better data leads to more performance models. Performant models leads to faster deployment.</p>
                <button className={'bg-white text-black font-black flex items-center justify-center rounded-full'}>GET STARTED</button>
            </div>
        </div>
    )
}

export default Hero