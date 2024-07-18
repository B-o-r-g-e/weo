import NavBar from "./NavBar.jsx";
import Heading from "./Heading.jsx";
import Hero from "./hero.jsx";

const LandingPage = () => {
    return (
        <div className={'flex flex-col text-center items-center'}>
            <NavBar />
            <Heading />
            <Hero />
        </div>
    )
}

export default LandingPage;