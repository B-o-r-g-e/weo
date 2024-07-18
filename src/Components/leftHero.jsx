import PropTypes from "prop-types";

const LeftHero = ({count, underText}) => {
    return (
        <div className={'inline-block text-left px-9 py-5 animate-pulse cursor-pointer rounded-xl shadow-lg bg-gradient-to-br from-white/20 via-transparent to-transparent border-white border-opacity-20'}>
            <h1 className={'text-3xl font-black'}>{count}</h1>
            <p className={'text-xs'}>{underText}</p>
        </div>
    )
}

export default LeftHero

LeftHero.propTypes = {
    count: PropTypes.string,
    underText: PropTypes.string
}
