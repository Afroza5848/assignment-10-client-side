import decor1 from "../../assets/image/1decpor.jpg"
import decor2 from "../../assets/image/decor2.jpg"
import decor3 from "../../assets/image/decor3.jpg"
import decor4 from "../../assets/image/decor4.jpg"
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (

        <>

            <section className="mb-16">
                <div className="bg-orange-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 monts">Decor&Craft Furniture </h1>
                        <p className="mt-6 mb-8 text-2xl sm:mb-12 xl:max-w-3xl dark:text-gray-50 poppins">Welcome To Jute & Wooden Furniture Shop!</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-100">Shop Now</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-800 dark:text-gray-800">Learn more</button>
                        </div>
                    </div>
                </div>
                {/* <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 h-[70vh] mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" /> */}
                <div className="w-5/6 md:h-[70vh] mx-auto mb-12 -mt-20 relative  rounded-lg shadow-md lg:-mt-40">
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        loop={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className="md:h-[80vh] h-[40vh] w-full rounded" src={decor1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="md:h-[80vh] h-[40vh] w-full rounded" src={decor2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="md:h-[80vh] h-[40vh] w-full rounded" src={decor3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="md:h-[80vh] h-[40vh] w-full rounded" src={decor4} alt="" />
                        </SwiperSlide>


                        <div className="autoplay-progress w-12 h-12 absolute bottom-12 z-20 right-4 bg-transparent" slot="container-end">
                            <svg  viewBox="0 0 48 48" ref={progressCircle}>
                                <circle  cx="24" cy="24" ></circle>
                            </svg>
                            <span className="border-2 border-slate-900 px-3 py-2 rounded-full" ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>

            </section>
            
        </>




    );
};

export default Banner;