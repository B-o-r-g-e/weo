import PropTypes from "prop-types";

const SecondDivide = () => {
    return (
        <div className={'flex gap-8 md:justify-between md:gap-0 lg:px-56 flex-wrap justify-center bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 border-x-0 py-5 px-16'}>
            <Achievements count={'5M+'} main={'Customer'} />
            <Achievements count={'450M+'} main={'Coverage'} />
            <Achievements count={'22%'} main={'Earning'} />
            <Achievements count={'8.03%'} main={'Interest'} />
        </div>
    )
}

export default SecondDivide


const Achievements = ({count, main}) => (
    <div>
        <h1 className={'font-black text-2xl'}>{count}</h1>
        <p className={'text-[0.6rem] font-bold'}>{main}</p>
    </div>
)

Achievements.propTypes = {
    count: PropTypes.string,
    main: PropTypes.string,
}