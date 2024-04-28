import { useLoaderData } from "react-router-dom";
import { GiPriceTag } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";

const ItemsDetails = () => {
    const item = useLoaderData();
    const { item_name, massage, photo, price, rating, processing_time, subCatOption, customOption, stockOption, user_name } = item;

    return (
        <div className="w-11/12 p-8 shadow-md dark:bg-gray-50 dark:text-gray-800 container mx-auto">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-2xl eb-serif dark:text-orange-600">Art And Craft Product Details</a>
                </div>
                <a className="flex items-center gap-2 text-xl" rel="noopener noreferrer" href="#"><FaUserAlt className="text-orange-600"></FaUserAlt>{user_name}</a>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-[70vh] dark:bg-gray-500" />
                    <div className="flex items-center text-xs">
                        <span>6 min ago</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-4xl poppins font-bold dark:text-gray-800 flex items-center gap-2"><GiPriceTag className="text-orange-600" />{item_name}</h3>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-3xl eb-serif font-bold dark:text-gray-800">{subCatOption}</h3>
                    </a>

                    <p className="leading-snug dark:text-gray-600">{massage}</p>
                    <div>
                        <h2 className="text-xl font-semibold poppins text-gray-600 flex items-center gap-1">Price : <span className="font-normal monts ml-2"> ${price}</span></h2>
                    </div>
                    <div className="flex items-center gap-3">
                        
                        <h2 className="text-xl font-semibold poppins flex text-gray-600 items-center gap-1">Rating : <span className="font-normal monts ml-2"> {rating}</span></h2>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold poppins text-gray-600 flex items-center gap-1">Processing Time : <span className="font-normal monts ml-2 flex items-center gap-2"> <TbTruckDelivery className="text-orange-500" />{processing_time}</span></h2>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold poppins text-gray-600 flex items-center gap-1">Customization : <span className="font-normal monts ml-2"> {customOption}</span></h2>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold poppins text-gray-600 flex items-center gap-1">Stock Stutas : <span className="font-normal monts ml-2"> {stockOption}</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemsDetails;