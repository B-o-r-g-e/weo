import { LandingPage } from './Components/Index.js'
import FirstDivide from "./Components/FirstDivide.jsx";
import Services from "./Components/Services.jsx";
import SecondDivide from "./Components/SecondDivide.jsx";
import HappyCustomers from "./Components/HappyCustomers.jsx";
import Footer from "./Components/Footer.jsx";
import {Copyright} from "./Components/Copyright.jsx";

const App = () => {
    return (
        <div className={'w-screen h-screen overflow-x-hidden font-nexa bg-mainBg3 bg-cover bg-repeat-y'}>
            <LandingPage />
            <FirstDivide />
            <Services />
            <SecondDivide />
            <HappyCustomers />
            <Footer />
            <Copyright />
        </div>
    )
}

export default App;