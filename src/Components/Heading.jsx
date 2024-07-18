const Heading = () => {
    return (
        <h1
            className={' flex flex-col font-black w-56 md:w-2/3 lg:text-8xl mt-11 lg:mt-5 bg-gradient-to-r from-white via-zinc-700 to-zinc-100 text-transparent bg-clip-text'}>
             Web3 Design
            <span className={'bg-gradient-to-r from-rose-500 via-rose-400 to-orange-400 inline-block text-transparent bg-clip-text'}>
                Agency.
            </span>
        </h1>
    )
}

export default Heading;