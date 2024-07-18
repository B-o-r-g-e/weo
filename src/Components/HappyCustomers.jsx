import Customers from "./Customers.jsx";

const HappyCustomers = () => {
    return (
        <div className={'mt-20 w-screen flex flex-col gap-16'}>
            <div className={'w-screen flex items-center justify-center'}>
                <p className={'flex flex-col lg:flex-row items-center font-bold text-2xl lg:text-5xl gap-1'}>
                    Our&nbsp;<span>Happy Customers</span>
                </p>
            </div>


            <div className={'flex gap-10 animate-marquee delay-1s'}>
                <div className={'pl-24'}>
                    <Customers />
                </div>
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
                <Customers />
            </div>
        </div>
    )
}

export default HappyCustomers;