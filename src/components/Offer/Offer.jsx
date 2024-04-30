import offerImg from "../../assets/image/offer.png"
import bottom from "../../assets/image/bottomBg.png"
import { useLottie } from "lottie-react";
import lottieOffer from "../../assets/image/animati0n.json"
const Offer = () => {
    const options = {
        animationData: lottieOffer,
        loop: true
      };
    const { View } = useLottie(options);
    return (
        <div className="w-full ">
            <section className="dark:bg-gray-100 dark:text-gray-800 relative">
                <div className="container flex flex-col items-center justify-center  mx-auto  lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 h-full mt-8 lg:mt-0">
                        {View}
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm ">
                        <h1 className="text-6xl font-bold leading-[60px] text-center">
                            <span className="dark:text-orange-500"> Get 30% Off </span> Your Next Purchase!
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Looking to upgrade your wardrobe? Now the perfect time! Enjoy exclusive <br /> savings with our latest offer: Get 30% off on all purchases.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 z-50">
                           
                            <button className="md:px-7  py-3 rounded border border-orange-500 text-white text-xl font-semibold poppins bg-orange-500 hover:bg-transparent hover:text-orange-500">Get Offer</button>
                            <button className="px-5 py-3 text-xl rounded border border-orange-500 text-orange-500 font-semibold poppins">Explore Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="absolute bottom-0 left-0 right-0 w-full h-60" src={bottom} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Offer;