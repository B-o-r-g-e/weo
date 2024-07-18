import PropTypes from "prop-types";

const TopHero = ({count, underText}) => {
    return (
        <div>
            <div
                className={'inline-block text-left px-9 py-5 animate-pulse cursor-pointer rounded-xl shadow-lg bg-gradient-to-br from-transparent via-transparent to-white/20  border-white border-opacity-20'}>
                <h1 className={'text-3xl font-black'}>{count}</h1>
                <p className={'text-xs'}>{underText}</p>
            </div>
        </div>
    )
}

export default TopHero

TopHero.propTypes = {
    count: PropTypes.string,
    underText: PropTypes.string
}
