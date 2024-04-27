import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AddCraftItem = () => {
    const { user } = useContext(AuthContext)
    const [subCatOption , setSubCatOption] = useState('');
    const [customOption, setCustomOption] = useState('');
    const [stockOption , setStockOption] = useState('');
    const handleAddItem = event => {
        event.preventDefault();
        const form = event.target;
        const item_name = form.name.value;
        const massage = form.massage.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.time.value;
        const user_name = user?.displayName;
        const user_email = user?.email;
        const items = {item_name,massage,photo,price,rating,processing_time,subCatOption,customOption,stockOption,user_name,user_email};
        console.log(items);

    }
    // get select option
    const handleSubCatSelect = e => {
        setSubCatOption(e.target.value)
    }
    const handleCustomizationSelect = e => {
        setCustomOption(e.target.value)
    }
    const handleStockSelect = e => {
        setStockOption(e.target.value)
    }

    return (
        <div>
            <section className="p-6  text-gray-900  py-10">
                <form onSubmit={handleAddItem} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-8 rounded-md shadow-sm bg-gray-200">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium poppins text-3xl poppins text-orange-500">Add Item Information</p>
                            <p className="text-sm">Click on the Add Product button to initiate the process of adding a new item.!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="itemName" className="text-xl poppins">Item Name</label>
                                <input id="itemName" type="text" name="name" placeholder=" Write Item Name" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl poppins">Subcategory Name</label>
                                <select onChange={handleSubCatSelect} className="pb-8 w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600  dark:text-gray-900  bg-white pt-2 pl-2 ">
                                    <option className="" disabled selected>Select Category</option>
                                    <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
                                    <option value="Wooden Home Decor">Wooden Home Decor</option>
                                    <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
                                    <option value="Jute Home Decor">Jute Home Decor</option>
                                    <option value="Jute Kitchenware & utensils">Jute Kitchenware & utensils</option>
                                    <option value="Jute and wooden jewellery">Jute and wooden jewellery</option>
                                </select>
                            </div>
                            <div className="col-span-full">
                            <label htmlFor="lastname" className="text-xl poppins">Short description</label>
                                <textarea id="bio" cols="6" rows="8" name="massage" placeholder="Write short description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 bg-white focus:dark:ring-orange-600 dark:border-gray-300 pt-2 pl-2 "></textarea>
                            </div>
                            <div className="col-span-full ">
                                <label htmlFor="itemName" className="text-xl poppins">Photo URL</label>
                                <input id="itemName" type="text" name="photo" placeholder=" Write your Photo URL" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-xl poppins">Price</label>
                                <input id="itemName" type="text" name="price" placeholder=" Write your product price" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-xl poppins">Rating</label>
                                <input id="itemName" type="text" name="rating" placeholder=" Write your product rating" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="lastname" className="text-xl poppins">Customization</label>
                                <select onChange={handleCustomizationSelect} className="pb-8 w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600  dark:text-gray-900  bg-white pt-2 pl-2 ">
                                    <option className="" disabled selected>Select Customization</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-xl poppins">Processing Time</label>
                                <input id="itemName" type="text" name="time" placeholder=" Write your product processing time" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl poppins">Stock Status</label>
                                <select onChange={handleStockSelect} className="pb-8 w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600  dark:text-gray-900  bg-white pt-2 pl-2 ">
                                    <option className="" disabled selected>Select Stock status</option>
                                    <option value="In Stock">In Stock</option>
                                    <option value="Made To Order">Made To Order</option>
                                </select>
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <input className="bg-orange-500 font-bold monts text-white py-4 px-2 w-full rounded-md mx-auto text-xl text-center" type="submit" value="Add Item" />
                            </div>

                        </div>
                    </fieldset>
                   
                </form>
            </section>
        </div>
    );
};

export default AddCraftItem;