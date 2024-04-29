import offerImg from "../../assets/image/offer.png"
import bottom from "../../assets/image/bottomBg.png"
const Offer = () => {
    return (
        <div className="w-full ">
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center md:gap-0 gap-10 mx-auto  lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 h-full mt-8 lg:mt-0">
                        <img src={offerImg} alt="" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm ">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-center">Ac mattis
                            <span className="dark:text-orange-500">senectus</span>erat pharetra
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 ">
                           
                            <button className="md:px-7  py-3 rounded border border-orange-500 text-white text-xl font-semibold poppins bg-orange-500 hover:bg-transparent hover:text-orange-500">Get Offer</button>
                            <button className="px-5 py-3 text-xl rounded border border-orange-500 text-orange-500 font-semibold poppins">Explore Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-full h-60" src={bottom} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Offer;